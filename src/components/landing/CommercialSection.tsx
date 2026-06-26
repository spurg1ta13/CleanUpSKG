import { Building, UtensilsCrossed, CookingPot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import commercialImg from "@/assets/commercial-cleaning.webp";
import commercialImg400 from "@/assets/commercial-cleaning-400.webp";
import { useLanguage } from "@/i18n/LanguageContext";

const CommercialSection = () => {
  const { t } = useLanguage();

  const subServices = [
    { icon: Building, titleKey: "office", descKey: "officeDesc" },
    { icon: UtensilsCrossed, titleKey: "restaurant", descKey: "restaurantDesc" },
    { icon: CookingPot, titleKey: "kitchen", descKey: "kitchenDesc" },
  ];

  return (
    <section id="commercial" className="py-8 md:py-12 bg-muted/50 section-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="rounded-2xl h-[300px] overflow-hidden">
              <img src={commercialImg} alt={t("alt", "commercial")} className="w-full h-full object-cover" loading="lazy" decoding="async" width={600} height={300} />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("commercial", "heading")}</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{t("commercial", "description")}</p>
            <div className="space-y-4">
              {subServices.map((s) => (
                <Card key={s.titleKey} className="border-0 shadow-sm">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t("commercial", s.titleKey)}</h3>
                      <p className="text-muted-foreground text-sm">{t("commercial", s.descKey)}</p>
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
};

export default CommercialSection;
