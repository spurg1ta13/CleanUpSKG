import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const STORAGE_KEY = "floating_contact_sends";
const MAX_SENDS = 2;

const getSendCount = (): number => {
  try {
    return parseInt(sessionStorage.getItem(STORAGE_KEY) || "0", 10);
  } catch {
    return 0;
  }
};

const incrementSendCount = () => {
  sessionStorage.setItem(STORAGE_KEY, String(getSendCount() + 1));
};

const FloatingContact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [disabled, setDisabled] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);

  useEffect(() => {
    setDisabled(getSendCount() >= MAX_SENDS);
  }, [open]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = t("floatingContact", "nameRequired");
    if (!form.phone.trim()) errs.phone = t("floatingContact", "phoneRequired");
    if (!form.message.trim()) errs.message = t("floatingContact", "messageRequired");
    if (!privacyChecked) errs.privacy = t("floatingContact", "privacyRequired");
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (disabled) return;
    if (!validate()) return;
    if (honeypot) return; // bot detected

    setSending(true);

    const { error } = await supabase.from("contact_submissions").insert({
      name: form.name.trim(),
      email: "floating-form@noemail.com",
      phone: form.phone.trim(),
      message: form.message.trim(),
    });

    setSending(false);

    if (error) {
      toast({ title: t("floatingContact", "error"), variant: "destructive" });
      return;
    }

    // Send email notification (fire-and-forget)
    supabase.functions.invoke("send-contact-email", {
      body: { name: form.name.trim(), phone: form.phone.trim(), message: form.message.trim() },
    }).catch(console.error);

    // Open WhatsApp with pre-filled message
    const whatsappNumber = "306974776058";
    const whatsappText = encodeURIComponent(
      `Γεια σας, είμαι ο/η ${form.name.trim()}.\nΤηλέφωνο: ${form.phone.trim()}\n\n${form.message.trim()}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappText}`, "_blank");

    incrementSendCount();

    toast({
      title: t("floatingContact", "successTitle"),
      description: t("floatingContact", "successDesc"),
    });
    setForm({ name: "", phone: "", message: "" });
    setErrors({});
    setOpen(false);
    setPrivacyChecked(false);
    setDisabled(getSendCount() >= MAX_SENDS);
  };

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        {!open && !disabled && (
          <>
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {t("floatingContact", "tooltip")}
            </div>
            <button
              onClick={() => setOpen(true)}
              className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all bg-primary text-primary-foreground hover:shadow-xl hover:scale-105"
              aria-label={t("floatingContact", "tooltip")}
            >
              <MessageCircle className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {/* Form panel */}
      {open && !disabled && (
        <div className="fixed bottom-6 right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)] bg-background border border-border rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-200">
          <div className="bg-primary text-primary-foreground px-5 py-4 flex items-center justify-between">
            <span className="font-semibold text-sm">{t("floatingContact", "tooltip")}</span>
            <button onClick={() => setOpen(false)} className="hover:opacity-80 transition-opacity" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-5 space-y-3">
            <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} autoComplete="off" tabIndex={-1} aria-hidden="true" className="absolute opacity-0 h-0 w-0 pointer-events-none" />
            <div>
              <input
                type="text"
                placeholder={t("floatingContact", "namePlaceholder")}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="w-full px-3 py-2.5 text-sm border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="tel"
                placeholder={t("floatingContact", "phonePlaceholder")}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                maxLength={30}
                className="w-full px-3 py-2.5 text-sm border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              
              />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <textarea
                placeholder={t("floatingContact", "messagePlaceholder")}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                maxLength={2000}
                className="w-full px-3 py-2.5 text-sm border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="floating-privacy"
                checked={privacyChecked}
                onChange={(e) => {
                  setPrivacyChecked(e.target.checked);
                  if (errors.privacy) setErrors((prev) => ({ ...prev, privacy: "" }));
                }}
                className="mt-0.5 h-4 w-4 rounded border-border accent-primary"
              />
              <label htmlFor="floating-privacy" className={`text-xs text-muted-foreground ${errors.privacy ? "text-destructive" : ""}`}>
                {t("floatingContact", "privacyConsentPre")}{" "}
                <a href="/privacy-policy" target="_blank" className="underline text-primary hover:text-primary/80">{t("floatingContact", "privacyLink")}</a>.
              </label>
            </div>
            {errors.privacy && <p className="text-destructive text-xs -mt-1">{errors.privacy}</p>}
            <button
              type="submit"
              disabled={sending}
              className="w-full py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {sending ? t("floatingContact", "sending") : t("floatingContact", "send")}
              {!sending && <Send className="h-4 w-4" />}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default FloatingContact;
