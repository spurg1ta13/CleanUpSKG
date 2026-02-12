import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Request a free quote or ask us anything.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Form */}
        <div className="bg-background rounded-2xl shadow-md p-8">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="+1 (234) 567-890" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Tell us about your cleaning needs..." rows={5} />
            </div>
            <Button type="submit" className="w-full rounded-full" size="lg">
              Send Message
            </Button>
          </form>
        </div>

        {/* Info + Map */}
        <div className="space-y-8">
          <div className="space-y-5">
            {[
              { icon: Phone, label: "+1 (234) 567-890" },
              { icon: Mail, label: "info@cleanpro.com" },
              { icon: MapPin, label: "123 Clean Street, Suite 100, New York, NY 10001" },
              { icon: Clock, label: "Mon - Sat: 8:00 AM - 6:00 PM" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-foreground text-sm pt-2">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Map Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
