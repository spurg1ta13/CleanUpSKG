import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  if (!RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: "RESEND_API_KEY not configured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const { name, email, phone, message, recaptchaToken } = await req.json();

    // Verify reCAPTCHA v3 token
    const RECAPTCHA_SECRET_KEY = Deno.env.get("RECAPTCHA_SECRET_KEY");
    if (!RECAPTCHA_SECRET_KEY) {
      return new Response(JSON.stringify({ error: "RECAPTCHA_SECRET_KEY not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!recaptchaToken || typeof recaptchaToken !== "string") {
      return new Response(JSON.stringify({ error: "Missing reCAPTCHA token" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    try {
      const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${encodeURIComponent(RECAPTCHA_SECRET_KEY)}&response=${encodeURIComponent(recaptchaToken)}`,
      });
      const verifyData = await verifyRes.json();
      if (!verifyData.success || (typeof verifyData.score === "number" && verifyData.score < 0.5)) {
        console.warn("reCAPTCHA verification failed", verifyData);
        return new Response(JSON.stringify({ error: "reCAPTCHA verification failed" }), {
          status: 403,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    } catch (verifyErr) {
      console.error("reCAPTCHA verify error", verifyErr);
      return new Response(JSON.stringify({ error: "reCAPTCHA verification error" }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }


    // Validate inputs
    const sanitize = (str: string | null | undefined, maxLen: number): string => {
      if (!str || typeof str !== "string") return "";
      return str.trim().slice(0, maxLen);
    };

    const escapeHtml = (str: string): string =>
      str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const safeName = escapeHtml(sanitize(name, 100));
    const safeEmail = escapeHtml(sanitize(email, 255));
    const safePhone = escapeHtml(sanitize(phone, 30));
    const safeMessage = escapeHtml(sanitize(message, 2000));

    if (!safeName || !safeMessage) {
      return new Response(JSON.stringify({ error: "Name and message are required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const htmlBody = `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px;">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${safeName}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${safeEmail || "N/A"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${safePhone || "N/A"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${safeMessage}</td></tr>
      </table>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "CleanUp SKG <noreply@cleanupskg.gr>",
        to: ["info@cleanupskg.gr"],
        cc: ["grespurga@gmail.com"],
        subject: `New Contact: ${name}`,
        html: htmlBody,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(`Resend API error [${res.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
