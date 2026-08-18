import React, { useState, useEffect } from "react";
import { LanguageContext } from "./language-context-base";
import { en } from "../locales/en";
import { fr } from "../locales/fr";
import { ar } from "../locales/ar";

const dictionaries = { en, fr, ar };

export { LanguageContext };
export { useLanguage } from "../hooks/useLanguage";

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem("aura_language");
      if (saved && ["en", "fr", "ar"].includes(saved)) {
        return saved;
      }
    } catch {
      // ignore localStorage errors
    }
    return "en"; // Default language
  });

  const setLanguage = (lang) => {
    if (["en", "fr", "ar"].includes(lang)) {
      setLanguageState(lang);
      try {
        localStorage.setItem("aura_language", lang);
      } catch {
        // ignore storage write errors
      }
    }
  };

  useEffect(() => {
    const isArabic = language === "ar";
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    
    // Add or remove rtl class on body/html for custom styling
    if (isArabic) {
      document.documentElement.classList.add("rtl");
    } else {
      document.documentElement.classList.remove("rtl");
    }
  }, [language]);

  const currentDict = dictionaries[language] || en;

  /**
   * Translates a dot-notated key path e.g. "nav.home"
   * Supports placeholder interpolation e.g. { name: "Dr. LABABOU" }
   */
  const t = (path, fallback = "", params = {}) => {
    const keys = path.split(".");
    let current = currentDict;

    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        // Fallback to English dictionary if key is missing in current
        let fallbackVal = en;
        for (const fKey of keys) {
          if (fallbackVal && typeof fallbackVal === "object" && fKey in fallbackVal) {
            fallbackVal = fallbackVal[fKey];
          } else {
            fallbackVal = null;
            break;
          }
        }
        current = fallbackVal !== null ? fallbackVal : fallback || path;
        break;
      }
    }

    if (typeof current === "string") {
      let result = current;
      if (params && typeof params === "object") {
        Object.entries(params).forEach(([paramKey, paramVal]) => {
          result = result.replaceAll(`{${paramKey}}`, String(paramVal));
        });
      }
      return result;
    }

    return current;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isRTL: language === "ar",
        t,
        locale: currentDict,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
