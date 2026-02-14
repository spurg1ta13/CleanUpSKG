import { Sofa, BedDouble, Layers, Car } from "lucide-react";

const coverageItems = [
  { icon: Sofa, label: "Upholstery & Sofas" },
  { icon: BedDouble, label: "Mattresses" },
  { icon: Layers, label: "Carpets & Rugs" },
  { icon: Car, label: "Vehicle Interiors" },
];

const pricingItems = [
  { item: "Armchair", price: "€35" },
  { item: "2-Seat Sofa", price: "€55" },
  { item: "3-Seat Sofa", price: "€75" },
  { item: "Mattress (Single)", price: "€40" },
  { item: "Mattress (Double)", price: "€55" },
  { item: "Car Interior", price: "€80" },
];

const BioCleaningSection = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Bio-Cleaning</h2>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            Professional wet-dry extraction cleaning that removes deep-seated dirt, stains, and allergens. Our advanced equipment reaches where regular cleaning can't.
          </p>
          <h3 className="font-semibold text-foreground mb-4">What We Clean</h3>
          <div className="grid grid-cols-2 gap-4">
            {coverageItems.map((c) => (
              <div key={c.label} className="flex items-center gap-3 p-3 rounded-lg bg-background shadow-sm">
                <c.icon className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-4">Bio-Cleaning Pricing</h3>
          <div className="bg-background rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left py-3 px-5 text-sm font-semibold">Item</th>
                  <th className="text-right py-3 px-5 text-sm font-semibold">Starting From</th>
                </tr>
              </thead>
              <tbody>
                {pricingItems.map((p, i) => (
                  <tr key={p.item} className={i % 2 === 1 ? "bg-muted/30" : ""}>
                    <td className="py-3 px-5 text-sm text-foreground">{p.item}</td>
                    <td className="py-3 px-5 text-sm text-right font-semibold text-primary">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BioCleaningSection;
