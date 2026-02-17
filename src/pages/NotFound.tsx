import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";

const titles = {
  el: "Σελίδα Δεν Βρέθηκε | CleanUp SKG",
  en: "Page Not Found | CleanUp SKG",
  ru: "Страница Не Найдена | CleanUp SKG",
};
const descriptions = {
  el: "Η σελίδα που ψάχνετε δεν υπάρχει. Επιστρέψτε στην αρχική σελίδα της CleanUp SKG.",
  en: "The page you are looking for does not exist. Return to the CleanUp SKG homepage.",
  ru: "Страница, которую вы ищете, не существует. Вернитесь на главную страницу CleanUp SKG.",
};
const homeBtnText = { el: "Επιστροφή στην Αρχική", en: "Return to Home", ru: "Вернуться на Главную" };

const NotFound = () => {
  const location = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SEOHead title={titles[lang]} description={descriptions[lang]} />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          {lang === "el" ? "Η σελίδα δεν βρέθηκε" : lang === "ru" ? "Страница не найдена" : "Page not found"}
        </p>
        <Link to="/" className="text-primary underline hover:text-primary/90">
          {homeBtnText[lang]}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
