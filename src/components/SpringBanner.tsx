import { useState, useEffect } from "react";
import { X, Phone, Sparkles, BadgeCheck, Clock, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import bioImg from "@/assets/bio-cleaning.webp";

const PHONE_DISPLAY = "+30 697 477 6057";
const PHONE_HREF = "tel:+306974776057";

const texts = {
  el: {
    badge: "❄️ Ειδική Χειμερινή Προσφορά",
    highlight: "-20%",
    title: "Ειδική Προσφορά",
    offerLine: "στον Βιο-Καθαρισμό & τον Γενικό Καθαρισμό",
    services: ["Βιο-καθαρισμός", "Γενικός καθαρισμός"],
    description:
      "Φρεσκάτε καναπέδες, στρώματα & χαλιά ή αναθέστε μας τον πλήρη γενικό καθαρισμό του σπιτιού. Επαγγελματικός εξοπλισμός, υλικά φιλικά προς την υγεία.",
    urgency: "Προσφορά περιορισμένου χρόνου — κλείστε τη θέση σας σήμερα!",
    call: "Καλέστε Τώρα",
    quote: "Δωρεάν Προσφορά",
    trust: "Δωρεάν εκτίμηση · Θεσσαλονίκη & Χαλκιδική",
  },
  en: {
    badge: "❄️ Special Winter Cleaning Offer",
    highlight: "-20%",
    title: "Special Offer",
    offerLine: "on Bio-Cleaning & General Cleaning",
    services: ["Bio-Cleaning", "General Cleaning"],
    description:
      "Freshen up sofas, mattresses & carpets — or hand us the whole flat for a full general clean. Professional equipment, health-safe products.",
    urgency: "Limited-time offer — book your slot today!",
    call: "Call Now",
    quote: "Get a Free Quote",
    trust: "Free quote · Thessaloniki & Halkidiki",
  },
  ru: {
    badge: "❄️ Специальное Зимнее Предложение",
    highlight: "-20%",
    title: "Специальное Предложение",
    offerLine: "на Био-Уборку и Генеральную Уборку",
    services: ["Био-уборка", "Генеральная уборка"],
    description:
      "Освежите диваны, матрасы и ковры или доверьте нам полную генеральную уборку квартиры. Профессиональное оборудование, безопасные средства.",
    urgency: "Предложение ограничено — забронируйте день сегодня!",
    call: "Позвонить Сейчас",
    quote: "Бесплатная Смета",
    trust: "Бесплатная смета · Салоники и Халкидики",
  },
};

const SpringBanner = () => {
  const [bannerVisible, setBannerVisible] = useState(false);
  const [manuallyDismissed, setManuallyDismissed] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { lang } = useLanguage();
  const t = texts[lang];

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ open: boolean }>).detail;
      setDialogOpen(detail?.open ?? false);
    };
    window.addEventListener("contact-dialog-state", handler);
    return () => window.removeEventListener("contact-dialog-state", handler);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setBannerVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setBannerVisible(false);
    setManuallyDismissed(true);
  };

  const handleQuote = () => {
    dismiss();
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const visible = bannerVisible && !manuallyDismissed && !dialogOpen;
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
        <div className="relative h-48 md:h-60 w-full overflow-hidden">
          <img
            src={bioImg}
            alt="Professional bio-cleaning and general cleaning service"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/35 to-transparent" />

          {/* Badge on image */}
          <span className="absolute top-3 left-3 right-3 md:top-4 md:left-4 md:right-4 inline-flex items-center gap-1.5 bg-background/90 backdrop-blur-sm text-foreground text-[11px] md:text-xs font-bold px-3 py-1.5 rounded-full shadow-md truncate">
            <Sparkles className="h-3.5 w-3.5 text-primary shrink-0" />
            {t.badge}
          </span>

          {/* Discount badge */}
          <div className="absolute top-14 right-3 md:top-14 md:right-16 bg-destructive text-destructive-foreground font-black text-4xl md:text-5xl px-5 py-3 md:px-6 md:py-4 rounded-2xl shadow-2xl animate-badge-pop border-2 border-destructive-foreground/20">
            {t.highlight}
          </div>

          {/* Title overlay on image */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-background leading-tight">
              {t.title}{" "}
              <span className="block text-primary-foreground/90 md:inline">{t.offerLine}</span>
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="px-5 md:px-8 py-5 md:py-6">
          {/* Service chips */}
          <div className="flex flex-wrap gap-2 mb-4">
            {t.services.map((service) => (
              <span
                key={service}
                className="inline-flex items-center gap-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold px-3 py-1.5"
              >
                <BadgeCheck className="h-4 w-4 text-primary shrink-0" />
                {service}
              </span>
            ))}
          </div>

          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
            {t.description}
          </p>

          {/* Urgency */}
          <div className="flex items-start gap-2 rounded-xl bg-accent/10 border border-accent/30 px-3 py-2.5 mb-5">
            <Clock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            <p className="text-sm font-semibold text-foreground leading-snug">{t.urgency}</p>
          </div>

          {/* Primary: call */}
          <a
            href={PHONE_HREF}
            onClick={dismiss}
            className="group flex w-full items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground font-extrabold text-lg md:text-xl h-14 md:h-16 px-6 shadow-xl animate-ring-pulse hover:brightness-110 transition-[filter] mb-3"
          >
            <Phone className="h-5 w-5 md:h-6 md:w-6 shrink-0" />
            <span className="flex flex-col items-start leading-none">
              <span className="text-xs md:text-sm font-semibold opacity-90">{t.call}</span>
              <span className="text-base md:text-xl tracking-wide">{PHONE_DISPLAY}</span>
            </span>
          </a>

          {/* Secondary: free quote */}
          <Button
            size="lg"
            variant="outline"
            onClick={handleQuote}
            className="w-full rounded-full font-bold text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {t.quote}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Trust line */}
          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs md:text-sm font-medium text-foreground/80">
            <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
            {t.trust}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpringBanner;
