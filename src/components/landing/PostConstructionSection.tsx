import { Search, Hammer, CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const PostConstructionSection = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Search, titleKey: "inspection", descKey: "inspectionDesc" },
    { icon: Hammer, titleKey: "heavy", descKey: "heavyDesc" },
    { icon: CheckCircle, titleKey: "polish", descKey: "polishDesc" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("postConst", "heading")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("postConst", "subtitle")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.titleKey} className="relative text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground mb-6 shadow-lg">
                <step.icon className="h-9 w-9" />
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-10 -right-4 h-6 w-6 text-primary/40 translate-x-1/2" />
              )}
              <h3 className="text-lg font-bold text-foreground mb-2">{t("postConst", "step")} {i + 1}: {t("postConst", step.titleKey)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t("postConst", step.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostConstructionSection;
