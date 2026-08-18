import React from "react";
import { Link } from "react-router-dom";
import { LuCalendar } from "react-icons/lu";
import AppointmentSection from "../Components/sections/AppointmentSection";
import Badge from "../Components/common/Badge";
import { useLanguage } from "../context/LanguageContext";

export default function Booking() {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in text-left rtl:text-right">
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-12 sm:py-16 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <Badge light size="md" icon={<LuCalendar className="w-3.5 h-3.5 text-emerald-400" />}>
            {t("appointment.badge")}
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {t("appointment.pageTitle")}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            {t("appointment.subtitle")}
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
            <Link to="/" className="hover:text-white transition-colors">
              {t("nav.home")}
            </Link>
            <span>/</span>
            <span className="text-emerald-400">{t("nav.booking")}</span>
          </div>
        </div>
      </div>

      {/* Booking Form Integration */}
      <AppointmentSection isFullPage />
    </div>
  );
}
