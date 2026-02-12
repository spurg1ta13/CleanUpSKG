import { Home, Building2, HardHat, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Home, title: "Residential Cleaning", desc: "Regular and deep cleaning for homes, apartments, and condos. Customized to your schedule." },
  { icon: HardHat, title: "Post-Construction", desc: "Thorough debris removal and polishing after renovations or new builds." },
  { icon: Building2, title: "Commercial Cleaning", desc: "Offices, retail spaces, and corporate facilities kept impeccably clean." },
  { icon: Sparkles, title: "Specialized Services", desc: "Steam disinfection, pressure washing, window cleaning, and more." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Comprehensive cleaning solutions tailored to every need.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((s) => (
          <Card key={s.title} className="group hover:shadow-lg transition-shadow border-0 shadow-sm bg-background">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
