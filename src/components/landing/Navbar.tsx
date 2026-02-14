import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import TikTokIcon from "@/components/icons/TikTokIcon";
import { useLanguage } from "@/i18n/LanguageContext";

const TIKTOK_URL = "https://www.tiktok.com/@cleanup.skg?_r=1&_t=ZN-93sbKkZERwU";
const INSTAGRAM_URL = "https://www.instagram.com/cleanup.skg?igsh=MWw4d2U0ZDB4bXJvOQ==";

const navKeys = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "pricing", href: "#pricing" },
  { key: "contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#home" className="font-bold text-2xl tracking-tight text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Clean<span className="text-accent">Pro</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navKeys.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {t("nav", l.key)}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-4 w-4" /></a>
          <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><TikTokIcon className="h-4 w-4" /></a>
          <button
            onClick={() => setLang(lang === "el" ? "en" : "el")}
            className="ml-2 px-2.5 py-1 rounded-md text-xs font-bold border border-border bg-muted hover:bg-accent transition-colors"
          >
            {lang === "el" ? "EN" : "GR"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "el" ? "en" : "el")}
            className="px-2.5 py-1 rounded-md text-xs font-bold border border-border bg-muted hover:bg-accent transition-colors"
          >
            {lang === "el" ? "EN" : "GR"}
          </button>
          <button className="p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-background pb-4">
          {navKeys.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted transition-colors">
              {t("nav", l.key)}
            </a>
          ))}
          <div className="flex gap-4 px-6 pt-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary"><TikTokIcon className="h-5 w-5" /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
