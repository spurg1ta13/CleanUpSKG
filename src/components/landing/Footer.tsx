import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import TikTokIcon from "@/components/icons/TikTokIcon";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.png";

const TIKTOK_URL = "https://www.tiktok.com/@cleanup.skg?_r=1&_t=ZN-93sbKkZERwU";
const INSTAGRAM_URL = "https://www.instagram.com/cleanup.skg?igsh=MWw4d2U0ZDB4bXJvOQ==";

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { key: "home", href: "/#home" },
    { key: "about", href: "/#about" },
    { key: "services", href: "/#services" },
    { key: "pricing", href: "/#pricing" },
    { key: "faq", href: "/#faq" },
    { key: "blog", href: "/blog" },
    { key: "contact", href: "/#contact" },
    { key: "privacy", href: "/privacy-policy" },
  ];

  const serviceLinks = [
    "residentialCleaning", "commercialCleaning", "postConstructionLabel", "bioCleaning", "specializedServices",
  ];

  return (
    <footer className="bg-foreground text-background py-14">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <Link to="/">
              <img src={logo} alt="CleanUp Cleaning Services" className="h-12 w-auto mb-4 rounded-full bg-background p-1" />
            </Link>
            <p className="text-sm opacity-70 leading-relaxed">{t("footer", "description")}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer", "quickLinks")}</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {navLinks.map((l) => (
                <li key={l.key}>
                  <Link to={l.href} className="hover:opacity-100 transition-opacity">{t("nav", l.key)}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer", "servicesTitle")}</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {serviceLinks.map((s) => (
                <li key={s}><a href="#services" className="hover:opacity-100 transition-opacity">{t("footer", s)}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer", "followUs")}</h4>
            <div className="flex gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center text-sm opacity-50">
          © {new Date().getFullYear()} CleanUp. {t("footer", "rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
