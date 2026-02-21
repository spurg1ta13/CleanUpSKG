import { Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const TopBar = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-primary text-primary-foreground py-2.5">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-8">
          <a href="tel:+3069747760587" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity font-bold tracking-wide">
            <span className="relative flex h-7 w-7 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground/30" />
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary-foreground/10" />
              <Phone className="relative h-4.5 w-4.5" />
            </span>
            <span className="text-base md:text-lg font-extrabold">+30 697 477 60587</span>
          </a>
          <a href="mailto:info@cleanupskg.gr" className="hidden sm:flex items-center gap-2 hover:opacity-90 transition-opacity font-semibold">
            <Mail className="h-4 w-4" />
            <span className="text-sm md:text-base">info@cleanupskg.gr</span>
          </a>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span className="text-sm md:text-base font-medium">{t("topbar", "hours")}</span>
        </div>
        <a href="mailto:info@cleanupskg.gr" className="flex sm:hidden items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Mail className="h-3.5 w-3.5" />
          <span className="text-sm">info@cleanupskg.gr</span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
