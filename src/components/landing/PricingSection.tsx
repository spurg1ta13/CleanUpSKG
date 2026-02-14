import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    title: "Residential",
    price: "€2.50",
    unit: "per sq meter",
    features: ["Regular or one-time cleaning", "Kitchen & bathrooms", "Floor mopping & vacuuming", "Dusting all surfaces", "Trash removal"],
    popular: false,
  },
  {
    title: "Commercial",
    price: "€3.00",
    unit: "per sq meter",
    features: ["Daily or weekly schedule", "Office desks & common areas", "Restroom sanitation", "Window & glass cleaning", "Floor maintenance"],
    popular: true,
  },
  {
    title: "Post-Construction",
    price: "€4.50",
    unit: "per sq meter",
    features: ["Full debris removal", "Paint & adhesive cleanup", "Deep floor scrubbing", "Window & fixture polish", "Final inspection included"],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Transparent Pricing</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Clear, competitive rates with no hidden fees.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <Card key={plan.title} className={`relative border-0 shadow-md ${plan.popular ? "ring-2 ring-primary shadow-xl scale-105" : ""}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                Most Popular
              </div>
            )}
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">{plan.title}</h3>
              <div className="mb-1">
                <span className="text-4xl font-extrabold text-primary">{plan.price}</span>
              </div>
              <p className="text-muted-foreground text-sm mb-6">{plan.unit}</p>
              <ul className="space-y-3 text-left mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild variant={plan.popular ? "default" : "outline"} className="w-full rounded-full">
                <a href="#contact">Get Quote</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
