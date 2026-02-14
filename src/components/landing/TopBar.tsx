import { Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const TopBar = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-primary text-primary-foreground text-sm py-2">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-6">
          <a href="tel:+3069747760587" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Phone className="h-3.5 w-3.5" />
            <span>+30 697 477 60587</span>
          </a>
          <a href="mailto:info@cleanupskg.com" className="hidden sm:flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Mail className="h-3.5 w-3.5" />
            <span>info@cleanupskg.com</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          <span>{t("topbar", "hours")}</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
