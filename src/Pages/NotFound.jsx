import React from "react";
import { FaTooth, FaHome } from "react-icons/fa";
import Button from "../Components/common/Button";
import Badge from "../Components/common/Badge";
import { useLanguage } from "../context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 dark:bg-[#070b10] px-4 py-16 animate-fade-in transition-colors text-center">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-slate-200/80 dark:border-slate-800 space-y-4">
        <div className="w-14 h-14 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 mx-auto flex items-center justify-center border border-emerald-200/60 dark:border-emerald-700/40">
          <FaTooth className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <div>
            <Badge size="sm">
              {t("notFound.code")}
            </Badge>
          </div>
          <h1 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
            {t("notFound.title")}
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
            {t("notFound.description")}
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
          <Button to="/" variant="primary" size="sm" icon={<FaHome className="w-3.5 h-3.5" />}>
            {t("notFound.homeBtn")}
          </Button>
          <Button to="/services" variant="outline" size="sm">
            {t("notFound.treatmentsBtn")}
          </Button>
        </div>
      </div>
    </div>
  );
}