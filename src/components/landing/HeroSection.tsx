import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
const heroImg = "/images/hero-cleaning.webp";
import { useLanguage } from "@/i18n/LanguageContext";
import PriceCalculator from "./PriceCalculator";
import { SHOW_PRICING } from "@/config/featureFlags";
import { openContactDialog } from "@/components/ContactDialog";

const HeroSection = () => {
  const { t } = useLanguage();
  const [calcOpen, setCalcOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative overflow-hidden">
        <div className="relative w-full aspect-[16/9] md:aspect-[16/8]">
          <img
            src={heroImg}
            srcSet="/images/hero-cleaning-800.webp 800w, /images/hero-cleaning.webp 1600w"
            sizes="100vw"
            alt={t("alt", "hero")}
            className="absolute inset-0 w-full h-full object-contain md:object-cover object-center bg-background"
            width={1600}
            height={900}
            fetchPriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/20 md:to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center z-10">

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
                <Button size="lg" className="rounded-full px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow" onClick={openContactDialog}>
                  {t("hero", "cta")}
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