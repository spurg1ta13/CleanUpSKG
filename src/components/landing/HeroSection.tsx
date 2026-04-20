import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
const heroImg = "/images/hero-cleaning.webp";
import { useLanguage } from "@/i18n/LanguageContext";
import PriceCalculator from "./PriceCalculator";
import { SHOW_PRICING } from "@/config/featureFlags";

const HeroSection = () => {
  const { t } = useLanguage();
  const [calcOpen, setCalcOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt={t("alt", "hero")} className="w-full h-full object-cover" width={1200} height={800} fetchPriority="high" decoding="sync" sizes="100vw" />
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
            <div className="flex flex-wrap gap-4">
              <span className="relative inline-flex">
                <Button asChild size="lg" className="rounded-full px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow">
                  <a href="#contact">
                    {t("hero", "cta")} 
                  </a>
                </Button>
                <span className="absolute inset-0 rounded-full animate-ping bg-primary/40 pointer-events-none" />
              </span>
              {SHOW_PRICING && (
                <Button
                  size="lg"
                  className="rounded-full px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow bg-primary/80 text-primary-foreground hover:bg-primary/70"
                  onClick={() => setCalcOpen(true)}>
                  <Calculator className="mr-2 h-5 w-5" />
                  {t("calc", "cta")}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
      {SHOW_PRICING && <PriceCalculator open={calcOpen} onOpenChange={setCalcOpen} />}
    </>);

};

export default HeroSection;