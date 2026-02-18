import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingPhone = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="tel:+3069747760587"
      className="fixed bottom-6 left-6 z-50 md:hidden w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 transition-transform animate-in slide-in-from-bottom-4 fade-in duration-300"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
};

export default FloatingPhone;
