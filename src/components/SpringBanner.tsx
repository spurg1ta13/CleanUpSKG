import { useState, useEffect } from "react";
import { X, Sparkles, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const SESSION_KEY = "cleanup_spring_banner_seen";

const texts = {
  el: {
    badge: "🌸 Ανοιξιάτικη Προσφορά",
    title: "20% Έκπτωση στον Βιο-Καθαρισμό!",
    subtitle: "Φρεσκάρετε το σπίτι σας αυτή την άνοιξη με επαγγελματικό βιο-καθαρισμό σε καναπέδες, στρώματα & χαλιά.",
    cta: "Κλείστε Τώρα",
  },
  en: {
    badge: "🌸 Spring Special",
    title: "20% Off Bio-Cleaning!",
    subtitle: "Freshen up your home this spring with professional bio-cleaning for sofas, mattresses & carpets.",
    cta: "Book Now",
  },
  ru: {
    badge: "🌸 Весеннее Предложение",
    title: "Скидка 20% на Био-Уборку!",
    subtitle: "Освежите свой дом этой весной — профессиональная био-уборка диванов, матрасов и ковров.",
    cta: "Забронировать",
  },
};

const SpringBanner = () => {
  const [visible, setVisible] = useState(false);
  const { lang } = useLanguage();
  const t = texts[lang];

  useEffect(() => {
    const seen = sessionStorage.getItem(SESSION_KEY);
    if (!seen) {
      // Small delay for smoother entrance
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(SESSION_KEY, "true");
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 animate-in fade-in duration-500">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={dismiss} />

      {/* Banner card */}
      <div className="relative w-full max-w-lg bg-background rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500">
        {/* Decorative gradient header */}
        <div className="relative bg-gradient-to-br from-primary via-accent to-primary px-6 pt-8 pb-10 text-center overflow-hidden">
          {/* Floating leaves decoration */}
          <Leaf className="absolute top-4 left-6 h-8 w-8 text-primary-foreground/20 rotate-[-30deg]" />
          <Leaf className="absolute bottom-3 right-8 h-6 w-6 text-primary-foreground/15 rotate-[45deg]" />
          <Leaf className="absolute top-10 right-14 h-5 w-5 text-primary-foreground/10 rotate-[15deg]" />

          {/* Close button */}
          <button
            onClick={dismiss}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors text-primary-foreground"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
            <Sparkles className="h-3 w-3" />
            {t.badge}
          </span>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground leading-tight">
            {t.title}
          </h2>
        </div>

        {/* Body */}
        <div className="px-6 py-6 text-center">
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 font-semibold shadow-lg"
            >
              <a href="#bio-cleaning" onClick={dismiss}>
                {t.cta}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpringBanner;
