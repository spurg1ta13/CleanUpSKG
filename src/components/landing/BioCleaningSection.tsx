import { Sofa, BedDouble, Layers, Car } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const BioCleaningSection = () => {
  const { t } = useLanguage();

  const coverageItems = [
    { icon: Sofa, key: "upholstery" },
    { icon: BedDouble, key: "mattresses" },
    { icon: Layers, key: "carpets" },
    { icon: Car, key: "vehicle" },
  ];

  const pricingItems = [
    { key: "armchair", price: "€35" },
    { key: "sofa2", price: "€55" },
    { key: "sofa3", price: "€75" },
    { key: "mattressSingle", price: "€40" },
    { key: "mattressDouble", price: "€55" },
    { key: "carInterior", price: "€80" },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("bio", "heading")}</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{t("bio", "description")}</p>
            <h3 className="font-semibold text-foreground mb-4">{t("bio", "whatWeClean")}</h3>
            <div className="grid grid-cols-2 gap-4">
              {coverageItems.map((c) => (
                <div key={c.key} className="flex items-center gap-3 p-3 rounded-lg bg-background shadow-sm">
                  <c.icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{t("bio", c.key)}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("bio", "pricingTitle")}</h3>
            <div className="bg-background rounded-xl shadow-sm overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left py-3 px-5 text-sm font-semibold">{t("bio", "item")}</th>
                    <th className="text-right py-3 px-5 text-sm font-semibold">{t("bio", "startingFrom")}</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingItems.map((p, i) => (
                    <tr key={p.key} className={i % 2 === 1 ? "bg-muted/30" : ""}>
                      <td className="py-3 px-5 text-sm text-foreground">{t("bio", p.key)}</td>
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
};

export default BioCleaningSection;
