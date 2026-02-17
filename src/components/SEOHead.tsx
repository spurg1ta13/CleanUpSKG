import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const SITE_URL = "https://cleanupskg.gr";
const SUPPORTED_LANGS = ["el", "en", "ru"] as const;

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  type?: string;
  jsonLd?: object;
  /** Optional OG image URL */
  ogImage?: string;
}

const SEOHead = ({ title, description, path, type = "website", jsonLd, ogImage }: SEOHeadProps) => {
  const location = useLocation();
  const { lang } = useLanguage();
  const pagePath = path ?? location.pathname;
  const canonical = `${SITE_URL}${pagePath}`;

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:locale", lang === "el" ? "el_GR" : lang === "ru" ? "ru_RU" : "en_US");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    if (ogImage) {
      setMeta("property", "og:image", ogImage);
      setMeta("name", "twitter:image", ogImage);
      setMeta("name", "twitter:card", "summary_large_image");
    }

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);

    // Hreflang alternate links
    const hreflangIds: string[] = [];
    SUPPORTED_LANGS.forEach((l) => {
      const id = `hreflang-${l}`;
      hreflangIds.push(id);
      let hrefLink = document.getElementById(id) as HTMLLinkElement | null;
      if (!hrefLink) {
        hrefLink = document.createElement("link");
        hrefLink.id = id;
        hrefLink.setAttribute("rel", "alternate");
        document.head.appendChild(hrefLink);
      }
      hrefLink.setAttribute("hreflang", l);
      hrefLink.setAttribute("href", `${SITE_URL}${pagePath}`);
    });
    // x-default
    const xDefaultId = "hreflang-x-default";
    let xDefault = document.getElementById(xDefaultId) as HTMLLinkElement | null;
    if (!xDefault) {
      xDefault = document.createElement("link");
      xDefault.id = xDefaultId;
      xDefault.setAttribute("rel", "alternate");
      document.head.appendChild(xDefault);
    }
    xDefault.setAttribute("hreflang", "x-default");
    xDefault.setAttribute("href", `${SITE_URL}${pagePath}`);

    // JSON-LD
    const existingLd = document.getElementById("seo-jsonld");
    if (existingLd) existingLd.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.id = "seo-jsonld";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      const ld = document.getElementById("seo-jsonld");
      if (ld) ld.remove();
    };
  }, [title, description, canonical, type, jsonLd, lang, ogImage, pagePath]);

  return null;
};

export default SEOHead;
