import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();
  const lastHash = useRef("");

  useEffect(() => {
    const key = pathname + hash;
    if (key === lastHash.current) return;
    lastHash.current = key;

    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          const navbarHeight = 64;
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
