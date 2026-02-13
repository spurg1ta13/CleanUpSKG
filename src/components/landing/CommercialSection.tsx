import { Building, UtensilsCrossed, CookingPot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import commercialImg from "@/assets/commercial-cleaning.jpg";

const subServices = [
  { icon: Building, title: "Office Cleaning", desc: "Daily or weekly office maintenance including desks, floors, restrooms, and common areas." },
  { icon: UtensilsCrossed, title: "Restaurant Areas", desc: "Front-of-house cleaning: dining areas, bars, and customer-facing spaces." },
  { icon: CookingPot, title: "Kitchen Degreasing", desc: "Industrial kitchen deep-clean: hoods, grease traps, equipment, and surfaces." },
];

const CommercialSection = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div>
          <div className="rounded-2xl aspect-[4/3] overflow-hidden">
            <img src={commercialImg} alt="Commercial cleaning professional mopping a modern office lobby" className="w-full h-full object-cover" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Commercial Cleaning</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            We keep businesses spotless so you can focus on what matters. From daily office maintenance to deep kitchen degreasing, our commercial services cover every aspect of your workspace.
          </p>
          <div className="space-y-4">
            {subServices.map((s) => (
              <Card key={s.title} className="border-0 shadow-sm">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                    <p className="text-muted-foreground text-sm">{s.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CommercialSection;
