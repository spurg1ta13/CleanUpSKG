import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Clock, CheckCircle2, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const { t } = useLanguage();

  const validate = () => {
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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      message: form.message.trim(),
    });
    setLoading(false);
    if (error) {
      toast.error(t("contact", "error"));
    } else {
      // Send email notification (fire-and-forget)
      supabase.functions.invoke("send-contact-email", {
        body: {
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || null,
          message: form.message.trim(),
        },
      }).catch(console.error);

      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setPrivacyChecked(false);
    }
  };

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("contact", "heading")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("contact", "subtitle")}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-background rounded-2xl shadow-md p-8">
            {success ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                <CheckCircle2 className="h-16 w-16 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">{t("contact", "successTitle")}</h3>
                <p className="text-muted-foreground max-w-sm">{t("contact", "successDesc")}</p>
                <Button variant="outline" className="rounded-full mt-4" onClick={() => setSuccess(false)}>
                  {t("contact", "sendAnother")}
                </Button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contact", "name")}</Label>
                    <Input id="name" placeholder={t("contact", "namePlaceholder")} value={form.name} onChange={(e) => update("name", e.target.value)} maxLength={100} className={errors.name ? "border-destructive" : ""} />
                    {errors.name && <p className="text-destructive text-xs">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contact", "email")}</Label>
                    <Input id="email" type="email" placeholder="john@example.com" value={form.email} onChange={(e) => update("email", e.target.value)} maxLength={255} className={errors.email ? "border-destructive" : ""} />
                    {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t("contact", "phone")}</Label>
                  <Input id="phone" type="tel" placeholder="+30 697 000 0000" value={form.phone} onChange={(e) => update("phone", e.target.value)} maxLength={30} className={errors.phone ? "border-destructive" : ""} />
                  {errors.phone && <p className="text-destructive text-xs">{errors.phone}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact", "message")}</Label>
                  <Textarea id="message" placeholder={t("contact", "messagePlaceholder")} rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} maxLength={2000} className={errors.message ? "border-destructive" : ""} />
                  {errors.message && <p className="text-destructive text-xs">{errors.message}</p>}
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={privacyChecked}
                    onChange={(e) => {
                      setPrivacyChecked(e.target.checked);
                      if (errors.privacy) setErrors((prev) => ({ ...prev, privacy: "" }));
                    }}
                    className="mt-1 h-4 w-4 rounded border-border accent-primary"
                  />
                  <label htmlFor="privacy" className={`text-xs text-muted-foreground ${errors.privacy ? "text-destructive" : ""}`}>
                    {t("contact", "privacyConsent")}
                  </label>
                </div>
                {errors.privacy && <p className="text-destructive text-xs -mt-2">{errors.privacy}</p>}
                <Button type="submit" className="w-full rounded-full" size="lg" disabled={loading}>
                  {loading ? t("contact", "sending") : t("contact", "send")}
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="space-y-5">
              <a href="tel:+3069747760587" className="flex items-start gap-4 group">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-foreground text-sm pt-2 group-hover:text-primary transition-colors">+30 697 477 60587</span>
              </a>
              <a href="mailto:info@cleanupskg.com" className="flex items-start gap-4 group">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-foreground text-sm pt-2 group-hover:text-primary transition-colors">info@cleanupskg.com</span>
              </a>
              <a href="https://maps.google.com/?q=Aristidou+19-21,+Kalamaria+551+33" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-foreground text-sm pt-2 group-hover:text-primary transition-colors">{t("contact", "address")}</span>
              </a>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Clock className="h-5 w-5" />
                </div>
                <span className="text-foreground text-sm pt-2">{t("topbar", "hours")}</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.5!2d22.95!3d40.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838f41428e0ed%3A0x9bae715b8d574a9c!2sAristidou%2019-21%2C%20Kalamaria%20551%2033!5e0!3m2!1sen!2sgr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CleanUp SKG Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
