import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import TikTokIcon from "@/components/icons/TikTokIcon";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo-white-bg-optimized.webp";
import logoSmall from "@/assets/logo-white-bg-optimized-160.webp";
import { SHOW_PRICING } from "@/config/featureFlags";

const FACEBOOK_URL = "https://www.facebook.com/cleanup.skg";
const TIKTOK_URL = "https://www.tiktok.com/@cleanup.skg?_r=1&_t=ZN-93sbKkZERwU";
const INSTAGRAM_URL = "https://www.instagram.com/cleanup.skg?igsh=MWw4d2U0ZDB4bXJvOQ==";

const Footer = () => {
  const { t } = useLanguage();

  const allNavLinks = [
    { key: "home", href: "/#home" },
    { key: "about", href: "/#about" },
    { key: "services", href: "/#services" },
    { key: "pricing", href: "/#pricing" },
    { key: "faq", href: "/#faq" },
    { key: "blog", href: "/blog" },
    { key: "contact", href: "/#contact" },
    { key: "privacy", href: "/privacy-policy" },
  ];

  const navLinks = allNavLinks.filter((l) => SHOW_PRICING || l.key !== "pricing");

  const serviceLinks = [
    { key: "residentialCleaning", href: "/#services" },
    { key: "commercialCleaning", href: "/#commercial" },
    { key: "postConstructionLabel", href: "/#post-construction" },
    { key: "bioCleaning", href: "/#bio-cleaning" },
    { key: "specializedServices", href: "/#specialized" },
  ];

  return (
    <footer className="bg-foreground text-background py-14">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <Link to="/">
              <img src={logoSmall} srcSet={`${logoSmall} 160w, ${logo} 200w`} sizes="(max-width: 768px) 64px, 80px" alt={t("alt", "logo")} className="h-[clamp(64px,5vw,80px)] w-auto mb-4 rounded-full" width={80} height={80} loading="lazy" decoding="async" />
            </Link>
            <p className="text-sm opacity-90 leading-relaxed">{t("footer", "description")}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer", "quickLinks")}</h4>
            <ul className="space-y-2 text-sm opacity-90">

              {navLinks.map((l) => (
                <li key={l.key}>
                  <Link to={l.href} className="hover:opacity-100 transition-opacity">{t("nav", l.key)}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer", "servicesTitle")}</h4>
            <ul className="space-y-2 text-sm opacity-90">
              {serviceLinks.map((s) => (
                <li key={s.key}><Link to={s.href} className="hover:opacity-100 transition-opacity">{t("footer", s.key)}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer", "followUs")}</h4>
            <div className="flex gap-3">
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="CleanUp SKG on Facebook" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="CleanUp SKG on Instagram" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={TIKTOK_URL} target="_blank" rel="noreferrer" aria-label="CleanUp SKG on TikTok" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <TikTokIcon className="h-5 w-5" />
              </a>

            </div>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center text-sm opacity-80">
          <p>© {new Date().getFullYear()} CleanUp. {t("footer", "rights")}</p>
          {/* <p className="mt-2">Powered by <a href="https://devcraft.gr" target="_blank" rel="noreferrer" className="underline hover:opacity-80 transition-opacity">devcraft.gr</a></p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
