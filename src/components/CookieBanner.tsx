import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const COOKIE_KEY = "cleanup_cookies_accepted";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "true");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[100] p-4 md:p-6">
      <div className="max-w-3xl mx-auto bg-background border border-border rounded-2xl shadow-xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {t("cookies", "message")}
        </p>
        <div className="flex gap-3 shrink-0 w-full sm:w-auto">
          <Button variant="outline" size="sm" className="flex-1 sm:flex-none rounded-full" onClick={decline}>
            {t("cookies", "decline")}
          </Button>
          <Button size="sm" className="flex-1 sm:flex-none rounded-full" onClick={accept}>
            {t("cookies", "accept")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
