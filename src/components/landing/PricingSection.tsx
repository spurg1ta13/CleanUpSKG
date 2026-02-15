import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const PricingSection = () => {
  const { t, tArray } = useLanguage();

  const plans = [
    { titleKey: "residential", price: "€2.50", featuresKey: "residentialFeatures", popular: false },
    { titleKey: "commercial", price: "€3.00", featuresKey: "commercialFeatures", popular: true },
    { titleKey: "postConstruction", price: "€4.50", featuresKey: "postConstructionFeatures", popular: false },
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("pricing", "heading")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("pricing", "subtitle")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.titleKey} className={`relative border-0 shadow-md ${plan.popular ? "ring-2 ring-primary shadow-xl scale-105" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  {t("pricing", "mostPopular")}
                </div>
              )}
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">{t("pricing", plan.titleKey)}</h3>
                <div className="mb-1">
                  <span className="text-sm font-semibold text-foreground">{t("pricing", "from")}</span>
                  <br />
                  <span className="text-4xl font-extrabold text-primary">{plan.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-6">{t("pricing", "perSqMeter")}</p>
                <ul className="space-y-3 text-left mb-8">
                  {tArray("pricing", plan.featuresKey).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={plan.popular ? "default" : "outline"} className="w-full rounded-full">
                  <a href="#contact">{t("pricing", "getQuote")}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
