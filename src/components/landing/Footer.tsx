import { Facebook, Instagram } from "lucide-react";
import TikTokIcon from "@/components/icons/TikTokIcon";

const TIKTOK_URL = "https://www.tiktok.com/@cleanup.skg?_r=1&_t=ZN-93sbKkZERwU";

const Footer = () => (
  <footer className="bg-foreground text-background py-14">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div>
          <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Clean<span className="text-accent">Pro</span>
          </h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Professional cleaning services for homes, businesses, and construction sites. Quality you can trust.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-70">
            {["Home", "About", "Services", "Pricing", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:opacity-100 transition-opacity">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm opacity-70">
            {["Residential Cleaning", "Commercial Cleaning", "Post-Construction", "Bio-Cleaning", "Specialized Services"].map((s) => (
              <li key={s}><a href="#services" className="hover:opacity-100 transition-opacity">{s}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
              <TikTokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 pt-6 text-center text-sm opacity-50">
        © {new Date().getFullYear()} CleanPro. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
