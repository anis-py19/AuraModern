import React from "react";
import { Link } from "react-router-dom";
import { LuShieldCheck, LuCalendar, LuAward } from "react-icons/lu";
import PricingSection from "../Components/sections/PricingSection";
import FAQSection from "../Components/sections/FAQSection";
import Badge from "../Components/common/Badge";
import { useLanguage } from "../context/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in text-left rtl:text-right">
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-12 sm:py-16 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <Badge light size="md">
            {t("pricing.heroBadge")}
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {t("pricing.heroTitle")}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            {t("pricing.heroSubtitle")}
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
            <Link to="/" className="hover:text-white transition-colors">
              {t("nav.home")}
            </Link>
            <span>/</span>
            <span className="text-emerald-400">{t("nav.pricing")}</span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <PricingSection />

      {/* Materials & Guarantee Standards */}
      <div className="py-14 sm:py-18 bg-slate-50 dark:bg-[#070b10] border-y border-slate-200/80 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200/80 dark:border-slate-800 space-y-2.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 mx-auto flex items-center justify-center">
              <LuShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-base font-bold text-slate-900 dark:text-white">
              {t("pricing.standards.0.title")}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              {t("pricing.standards.0.desc")}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200/80 dark:border-slate-800 space-y-2.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 mx-auto flex items-center justify-center">
              <LuAward className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-base font-bold text-slate-900 dark:text-white">
              {t("pricing.standards.1.title")}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              {t("pricing.standards.1.desc")}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200/80 dark:border-slate-800 space-y-2.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 mx-auto flex items-center justify-center">
              <LuCalendar className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-base font-bold text-slate-900 dark:text-white">
              {t("pricing.standards.2.title")}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              {t("pricing.standards.2.desc")}
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <FAQSection />
    </div>
  );
}
