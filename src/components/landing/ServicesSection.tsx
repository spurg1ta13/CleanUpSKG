import { Home, Building2, HardHat, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Home, titleKey: "residential", descKey: "residentialDesc" },
    { icon: HardHat, titleKey: "postConstruction", descKey: "postConstructionDesc" },
    { icon: Building2, titleKey: "commercial", descKey: "commercialDesc" },
    { icon: Sparkles, titleKey: "specialized", descKey: "specializedDesc" },
  ];

  return (
    <section id="services" className="py-8 md:py-12 bg-muted/50 section-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("services", "heading")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("services", "subtitle")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((s) => (
            <Card key={s.titleKey} className="group hover:shadow-lg transition-shadow border-0 shadow-sm bg-background">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t("services", s.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("services", s.descKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
