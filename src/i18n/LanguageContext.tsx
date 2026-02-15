import { createContext, useContext, useState, ReactNode } from "react";
import { Lang, translations } from "./translations";

type TranslationValue = string | string[] | { el: string; en: string; ru?: string } | { el: string[]; en: string[]; ru?: string[] };

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (section: string, key: string) => string;
  tArray: (section: string, key: string) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    return (saved === "el" || saved === "en" || saved === "ru") ? saved : "el";
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (section: string, key: string): string => {
    const sec = (translations as any)[section];
    if (!sec) return key;
    const val = sec[key];
    if (!val) return key;
    if (typeof val === "string") return val;
    return val[lang] ?? key;
  };

  const tArray = (section: string, key: string): string[] => {
    const sec = (translations as any)[section];
    if (!sec) return [];
    const val = sec[key];
    if (!val) return [];
    return val[lang] ?? [];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
