import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const languages = [
  { code: "en", label: "EN", title: "English" },
  { code: "fr", label: "FR", title: "Français" },
  { code: "ar", label: "العربية", title: "العربية" },
];

export default function LanguageSwitcher({ compact = false }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`inline-flex items-center rounded-lg p-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 transition-colors ${
        compact ? "text-xs" : "text-xs sm:text-sm"
      }`}
    >
      {languages.map((lang) => {
        const isActive = language === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLanguage(lang.code)}
            aria-pressed={isActive}
            title={lang.title}
            className={`px-2 py-1 rounded-md font-semibold transition-all cursor-pointer ${
              isActive
                ? "bg-emerald-900 text-white shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-emerald-900 dark:hover:text-emerald-300 hover:bg-slate-200/60 dark:hover:bg-slate-700/50"
            }`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
