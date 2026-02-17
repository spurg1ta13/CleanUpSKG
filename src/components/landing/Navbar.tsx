import { useState, useRef, useEffect } from "react";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import TikTokIcon from "@/components/icons/TikTokIcon";
import { useLanguage } from "@/i18n/LanguageContext";
import { Lang } from "@/i18n/translations";
import logo from "@/assets/logo-optimized.jpeg";

const FACEBOOK_URL = "https://www.facebook.com/share/1GBFUHR5yS/?mibextid=wwXIfr";
const TIKTOK_URL = "https://www.tiktok.com/@cleanup.skg?_r=1&_t=ZN-93sbKkZERwU";
const INSTAGRAM_URL = "https://www.instagram.com/cleanup.skg?igsh=MWw4d2U0ZDB4bXJvOQ==";

const navKeys = [
  { key: "home", href: "/#home" },
  { key: "about", href: "/#about" },
  { key: "services", href: "/#services" },
  { key: "pricing", href: "/#pricing" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/#contact" },
];

const langOptions: { value: Lang; label: string }[] = [
  { value: "el", label: "GR" },
  { value: "en", label: "EN" },
  { value: "ru", label: "RU" },
];

const LangDropdown = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = langOptions.find((o) => o.value === lang)!;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="px-2.5 py-1 rounded-md text-xs font-bold border border-border bg-muted hover:bg-accent transition-colors flex items-center gap-1"
      >
        {current.label}
        <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-1 z-50 bg-background border border-border rounded-md shadow-lg py-1 min-w-[52px]">
          {langOptions.map((o) => (
            <button
              key={o.value}
              onClick={() => { setLang(o.value); setOpen(false); }}
              className={`block w-full text-left px-3 py-1.5 text-xs font-medium hover:bg-muted transition-colors ${o.value === lang ? "text-primary font-bold" : "text-foreground"}`}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="CleanUp Cleaning Services - Professional cleaning company in Thessaloniki" className="h-12 w-auto" width={48} height={48} />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navKeys.map((l) => (
            <Link key={l.href} to={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {t("nav", l.key)}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-4 w-4" /></a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-4 w-4" /></a>
          <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><TikTokIcon className="h-4 w-4" /></a>
          <LangDropdown />
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <LangDropdown />
          <button className="p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-background pb-4">
          {navKeys.map((l) => (
            <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted transition-colors">
              {t("nav", l.key)}
            </Link>
          ))}
          <div className="flex gap-4 px-6 pt-3">
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary"><TikTokIcon className="h-5 w-5" /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
