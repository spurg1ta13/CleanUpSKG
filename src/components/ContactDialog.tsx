import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";
import { executeRecaptcha } from "@/lib/recaptcha";

const STORAGE_KEY = "contact_form_sends";
const MAX_SENDS = 2;
const WINDOW_MS = 24 * 60 * 60 * 1000;

const getSendTimestamps = (): number[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const timestamps: number[] = JSON.parse(raw);
    const now = Date.now();
    return timestamps.filter((ts) => now - ts < WINDOW_MS);
  } catch {
    return [];
  }
};

const addSendTimestamp = () => {
  const timestamps = getSendTimestamps();
  timestamps.push(Date.now());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(timestamps));
};

export const OPEN_CONTACT_DIALOG_EVENT = "open-contact-dialog";

export const openContactDialog = () => {
  (window as Window & { __contactDialogPending?: boolean }).__contactDialogPending = true;
  window.dispatchEvent(new CustomEvent(OPEN_CONTACT_DIALOG_EVENT));
};

const ContactDialog = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", sqm: "" });
  const [propertyTypes, setPropertyTypes] = useState<string[]>([]);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(OPEN_CONTACT_DIALOG_EVENT, handler);
    return () => window.removeEventListener(OPEN_CONTACT_DIALOG_EVENT, handler);
  }, []);

  const validate = useCallback(() => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = t("contact", "nameRequired");
    const hasEmail = form.email.trim().length > 0;
    const hasPhone = form.phone.trim().length > 0;
    if (!hasEmail && !hasPhone) {
      e.email = t("contact", "emailOrPhoneRequired");
      e.phone = t("contact", "emailOrPhoneRequired");
    } else if (hasEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = t("contact", "emailInvalid");
    }
    if (!form.message.trim()) e.message = t("contact", "messageRequired");
    if (!privacyChecked) e.privacy = t("contact", "privacyRequired");
    setErrors(e);
    return Object.keys(e).length === 0;
  }, [form, privacyChecked, t]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (honeypot) return;

    if (getSendTimestamps().length >= MAX_SENDS) {
      toast.error(t("contact", "error"));
      return;
    }

    setLoading(true);
    const propertyInfo = propertyTypes.length > 0 ? `\nProperty: ${propertyTypes.join(", ")}` : "";
    const sqmInfo = form.sqm.trim() ? `\nSq. m.: ${form.sqm.trim()}` : "";
    const fullMessage = form.message.trim() + propertyInfo + sqmInfo;

    let recaptchaToken = "";
    try {
      recaptchaToken = await executeRecaptcha("contact_dialog");
    } catch (err) {
      console.error("recaptcha error", err);
      setLoading(false);
      toast.error(t("contact", "error"));
      return;
    }

    const { error } = await supabase.from("contact_submissions").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      message: fullMessage,
    });
    setLoading(false);
    if (error) {
      toast.error(t("contact", "error"));
      return;
    }

    supabase.functions.invoke("send-contact-email", {
      body: {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        message: fullMessage,
        recaptchaToken,
      },
    }).catch(console.error);

    addSendTimestamp();
    toast.success(t("contact", "successTitle"), { description: t("contact", "successDesc") });
    setForm({ name: "", email: "", phone: "", message: "", sqm: "" });
    setPropertyTypes([]);
    setPrivacyChecked(false);
    setErrors({});
    setOpen(false);
  };

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
    if (field === "phone" && value.trim() && errors.email) {
      setErrors((e) => ({ ...e, email: "" }));
    }
    if (field === "email" && value.trim() && errors.phone) {
      setErrors((e) => ({ ...e, phone: "" }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t("contact", "heading")}</DialogTitle>
          <DialogDescription>{t("contact", "subtitle")}</DialogDescription>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
            className="absolute opacity-0 h-0 w-0 pointer-events-none"
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cd-name">{t("contact", "name")}</Label>
              <Input id="cd-name" placeholder={t("contact", "namePlaceholder")} value={form.name} onChange={(e) => update("name", e.target.value)} maxLength={100} className={errors.name ? "border-destructive" : ""} />
              {errors.name && <p className="text-destructive text-xs">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="cd-email">{t("contact", "email")}</Label>
              <Input id="cd-email" type="email" placeholder="john@example.com" value={form.email} onChange={(e) => update("email", e.target.value)} maxLength={255} className={errors.email ? "border-destructive" : ""} />
              {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="cd-phone">{t("contact", "phone")}</Label>
            <Input id="cd-phone" type="tel" placeholder="+30 697 000 0000" value={form.phone} onChange={(e) => update("phone", e.target.value)} maxLength={30} className={errors.phone ? "border-destructive" : ""} />
            {errors.phone && <p className="text-destructive text-xs">{errors.phone}</p>}
          </div>
          <div className="space-y-2">
            <Label>{t("contact", "propertyType")}</Label>
            <div className="grid grid-cols-2 gap-2">
              {(["house", "apartment", "commercial", "construction"] as const).map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer text-sm text-foreground">
                  <input
                    type="checkbox"
                    checked={propertyTypes.includes(type)}
                    onChange={(e) => {
                      setPropertyTypes((prev) =>
                        e.target.checked ? [...prev, type] : prev.filter((tt) => tt !== type)
                      );
                    }}
                    className="h-4 w-4 rounded border-border accent-primary"
                  />
                  {t("contact", type)}
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="cd-sqm">{t("contact", "sqm")}</Label>
            <Input id="cd-sqm" type="text" placeholder={t("contact", "sqmPlaceholder")} value={form.sqm} onChange={(e) => update("sqm", e.target.value)} maxLength={10} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cd-message">{t("contact", "message")}</Label>
            <Textarea id="cd-message" placeholder={t("contact", "messagePlaceholder")} rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} maxLength={2000} className={errors.message ? "border-destructive" : ""} />
            {errors.message && <p className="text-destructive text-xs">{errors.message}</p>}
          </div>
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="cd-privacy"
              checked={privacyChecked}
              onChange={(e) => {
                setPrivacyChecked(e.target.checked);
                if (errors.privacy) setErrors((prev) => ({ ...prev, privacy: "" }));
              }}
              className="mt-1 h-4 w-4 rounded border-border accent-primary"
            />
            <label htmlFor="cd-privacy" className={`text-xs text-muted-foreground ${errors.privacy ? "text-destructive" : ""}`}>
              {t("contact", "privacyConsentPre")}{" "}
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-primary/80">{t("contact", "privacyLink")}</a>.
            </label>
          </div>
          {errors.privacy && <p className="text-destructive text-xs -mt-2">{errors.privacy}</p>}
          <Button type="submit" className="w-full rounded-full" size="lg" disabled={loading}>
            {loading ? t("contact", "sending") : t("contact", "send")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
