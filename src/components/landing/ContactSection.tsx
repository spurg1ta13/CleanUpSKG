import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email address";
    if (!form.message.trim()) e.message = "Message is required";
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
      toast.error("Something went wrong. Please try again.");
    } else {
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Request a free quote or ask us anything.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-background rounded-2xl shadow-md p-8">
            {success ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                <CheckCircle2 className="h-16 w-16 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground max-w-sm">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <Button variant="outline" className="rounded-full mt-4" onClick={() => setSuccess(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="John Doe" value={form.name} onChange={(e) => update("name", e.target.value)} className={errors.name ? "border-destructive" : ""} />
                    {errors.name && <p className="text-destructive text-xs">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" value={form.email} onChange={(e) => update("email", e.target.value)} className={errors.email ? "border-destructive" : ""} />
                    {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+1 (234) 567-890" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" placeholder="Tell us about your cleaning needs..." rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} className={errors.message ? "border-destructive" : ""} />
                  {errors.message && <p className="text-destructive text-xs">{errors.message}</p>}
                </div>
                <Button type="submit" className="w-full rounded-full" size="lg" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* Info + Map */}
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
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Clock className="h-5 w-5" />
                </div>
                <span className="text-foreground text-sm pt-2">Mon - Sat: 8:00 - 18:00</span>
              </div>
            </div>
            <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Map Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
