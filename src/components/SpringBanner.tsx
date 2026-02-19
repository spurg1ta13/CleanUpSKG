import { useState, useEffect } from "react";
import { X, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import bioImg from "@/assets/bio-cleaning.jpg";

const texts = {
  el: {
    badge: "🌸 Ειδική Ανοιξιάτικη Προσφορά Καθαρισμού",
    title: "Ειδική προσφορά",
    highlight: "-20%",
    subtitle: "στον βιολογικό καθαρισμό",
    description: "Φρεσκάρετε καναπέδες, στρώματα & χαλιά με επαγγελματικό βιο-καθαρισμό. Περιορισμένη προσφορά!",
    cta: "Κλείστε Τώρα",
    call: "Καλέστε μας",
  },
  en: {
    badge: "🌸 Special Spring Cleaning Offer",
    title: "Special Offer",
    highlight: "-20%",
    subtitle: "on Bio-Cleaning",
    description: "Freshen up sofas, mattresses & carpets with professional bio-cleaning. Limited time offer!",
    cta: "Book Now",
    call: "Call Us",
  },
  ru: {
    badge: "🌸 Специальное Весеннее Предложение",
    title: "Специальное Предложение",
    highlight: "-20%",
    subtitle: "на Био-Уборку",
    description: "Освежите диваны, матрасы и ковры профессиональной био-уборкой. Предложение ограничено!",
    cta: "Забронировать",
    call: "Позвоните нам",
  },
};

const SpringBanner = () => {
  const [visible, setVisible] = useState(false);
  const { lang } = useLanguage();
  const t = texts[lang];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
  };

  const handleBook = () => {
    dismiss();
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 md:p-6 animate-in fade-in duration-400">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={dismiss} />

      {/* Banner */}
      <div className="relative w-full max-w-2xl bg-background rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500">
        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-foreground/60 hover:bg-foreground/80 transition-colors text-background"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Image section */}
        <div className="relative h-48 md:h-64 w-full overflow-hidden">
          <img
            src={bioImg}
            alt="Professional bio-cleaning service"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />

          {/* Badge on image */}
          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-background/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            {t.badge}
          </span>

          {/* Discount badge */}
          <div className="absolute top-3 right-14 md:top-4 md:right-16 bg-destructive text-destructive-foreground font-black text-4xl md:text-5xl px-5 py-3 md:px-6 md:py-4 rounded-2xl shadow-2xl -rotate-6 animate-pulse border-2 border-destructive-foreground/20">
            {t.highlight}
          </div>

          {/* Title overlay on image */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-background leading-tight">
              {t.title}{" "}
              <span className="block text-primary-foreground/90 md:inline">{t.subtitle}</span>
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="px-5 md:px-8 py-5 md:py-6">
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="flex-1 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-shadow"
              onClick={handleBook}
            >
              {t.cta}
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="flex-1 rounded-full font-bold text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <a href="tel:+3069747760587" onClick={dismiss}>
                <Phone className="mr-2 h-5 w-5" />
                {t.call}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpringBanner;
