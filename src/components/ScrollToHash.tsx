import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to ensure DOM is rendered
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          const navbarHeight = 64; // h-16 = 4rem = 64px
          const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
