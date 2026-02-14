import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import TikTokIcon from "@/components/icons/TikTokIcon";

const TIKTOK_URL = "https://www.tiktok.com/@cleanup.skg?_r=1&_t=ZN-93sbKkZERwU";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#home" className="font-bold text-2xl tracking-tight text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Clean<span className="text-accent">Pro</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://www.instagram.com/cleanup.skg?igsh=MWw4d2U0ZDB4bXJvOQ==" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-4 w-4" /></a>
          <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><TikTokIcon className="h-4 w-4" /></a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-background pb-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted transition-colors">
              {l.label}
            </a>
          ))}
          <div className="flex gap-4 px-6 pt-3">
            <a href="https://www.instagram.com/cleanup.skg?igsh=MWw4d2U0ZDB4bXJvOQ==" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary"><TikTokIcon className="h-5 w-5" /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
