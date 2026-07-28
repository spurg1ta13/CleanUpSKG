import { useState, useRef, useEffect, useCallback } from "react";
import { Menu, X, Facebook, Instagram, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import TikTokIcon from "@/components/icons/TikTokIcon";
import { useLanguage } from "@/i18n/LanguageContext";
import { Lang } from "@/i18n/translations";
import logo from "@/assets/logo-white-bg-optimized.webp";
import logoSmall from "@/assets/logo-white-bg-optimized-160.webp";
import { SHOW_PRICING } from "@/config/featureFlags";

const FACEBOOK_URL = "https://www.facebook.com/cleanup.skg";
const TIKTOK_URL = "https://www.tiktok.com/@cleanup.skg?_r=1&_t=ZN-93sbKkZERwU";
const INSTAGRAM_URL = "https://www.instagram.com/cleanup.skg?igsh=MWw4d2U0ZDB4bXJvOQ==";

const allNavKeys = [
  { key: "home", href: "/#home" },
  { key: "about", href: "/#about" },
  { key: "services", href: "/#specialized" },
  { key: "pricing", href: "/#pricing" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/#contact" },
];

const navKeys = allNavKeys.filter((n) => SHOW_PRICING || n.key !== "pricing");

const langOptions: { value: Lang; label: string; flag: string }[] = [
  { value: "el", label: "GR", flag: "🇬🇷" },
  { value: "en", label: "EN", flag: "🇬🇧" },
  { value: "ru", label: "RU", flag: "🇷🇺" },
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
        aria-label={`Change language, current: ${current.label}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="px-3 py-1.5 rounded-md text-sm font-bold border border-border bg-muted text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors flex items-center gap-1.5"
      >
        <span className="text-lg leading-none">{current.flag}</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-1 z-50 bg-background border border-border rounded-md shadow-lg py-1 min-w-[52px]">
          {langOptions.map((o) => (
            <button
              key={o.value}
              onClick={() => { setLang(o.value); setOpen(false); }}
              className={`flex items-center gap-2 w-full text-left px-3 py-1.5 text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors ${o.value === lang ? "text-primary font-bold" : "text-foreground"}`}
            >
              <span className="text-base leading-none">{o.flag}</span> {o.label}
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
  const navigate = useNavigate();

  const handleNavClick = useCallback((e: React.MouseEvent, href: string) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return; // let Link handle non-hash routes like /blog
    e.preventDefault();
    const hash = href.slice(hashIndex);
    const path = href.slice(0, hashIndex) || "/";
    
    if (window.location.pathname === path) {
      // Already on the right page — just scroll
      const el = document.querySelector(hash);
      if (el) {
        const navbarHeight = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
      // Update URL hash without navigation
      window.history.replaceState(null, "", href);
    } else {
      navigate(href);
    }
    setOpen(false);
  }, [navigate]);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link to="/" onClick={(e) => { if (window.location.pathname === "/") { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); window.history.replaceState(null, "", "/"); } }} className="flex items-center">
          <img src={logoSmall} srcSet={`${logoSmall} 160w, ${logo} 200w`} sizes="64px" alt={t("alt", "logoNav")} className="h-16 w-auto bg-white rounded-sm" width={64} height={64} fetchPriority="high" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navKeys.map((l) => (
            <Link key={l.href} to={l.href} onClick={(e) => handleNavClick(e, l.href)} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {t("nav", l.key)}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+306974776057" className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-colors shadow-sm">
            <Phone className="h-3.5 w-3.5" />
            <span>697 477 6057</span>
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="CleanUp SKG on Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-4 w-4" /></a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="CleanUp SKG on Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-4 w-4" /></a>
          <a href={TIKTOK_URL} target="_blank" rel="noreferrer" aria-label="CleanUp SKG on TikTok" className="text-muted-foreground hover:text-primary transition-colors"><TikTokIcon className="h-4 w-4" /></a>

          <LangDropdown />
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <LangDropdown />
          <button className="p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-background pb-4">
          {navKeys.map((l) => (
            <Link key={l.href} to={l.href} onClick={(e) => handleNavClick(e, l.href)} className="block px-6 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted transition-colors">
              {t("nav", l.key)}
            </Link>
          ))}
          <a href="tel:+306974776057" className="mx-6 mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors">
            <Phone className="h-4 w-4" />
            <span>+30 697 477 6057</span>
          </a>
          <div className="flex gap-4 px-6 pt-3">
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="CleanUp SKG on Facebook" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="CleanUp SKG on Instagram" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href={TIKTOK_URL} target="_blank" rel="noreferrer" aria-label="CleanUp SKG on TikTok" className="text-muted-foreground hover:text-primary"><TikTokIcon className="h-5 w-5" /></a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
