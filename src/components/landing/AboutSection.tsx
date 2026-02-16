import { Shield, Award, Heart } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Shield, titleKey: "trusted", descKey: "trustedDesc" },
    { icon: Award, titleKey: "quality", descKey: "qualityDesc" },
    { icon: Heart, titleKey: "care", descKey: "careDesc" },
  ];

  return (
    <section id="about" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("about", "heading")}</h2>
          {t("about", "description").split("\n\n").map((para, i) => (
            <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-4 last:mb-0">{para}</p>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((f) => (
            <div key={f.titleKey} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t("about", f.titleKey)}</h3>
              <p className="text-muted-foreground text-sm">{t("about", f.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
