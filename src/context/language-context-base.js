import { createContext } from "react";
import { en } from "../locales/en";

export const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  isRTL: false,
  t: (path, fallback) => fallback || path,
  locale: en,
});

export default LanguageContext;
