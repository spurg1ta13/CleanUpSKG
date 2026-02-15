import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-cleaning.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative overflow-hidden min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Professional cleaning team providing residential and commercial cleaning services in Thessaloniki" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
            {t("hero", "title1")} <span className="text-primary">{t("hero", "title2")}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            {t("hero", "subtitle")}
          </p>
          <Button asChild size="lg" className="rounded-full px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow">
            <a href="#contact">
              {t("hero", "cta")} <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
