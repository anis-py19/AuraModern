import React from "react";
import { Link } from "react-router-dom";
import {
  LuShieldCheck,
  LuCheck,
  LuCalendar,
  LuActivity,
  LuSun,
  LuHeart,
} from "react-icons/lu";
import { FaTooth } from "react-icons/fa";
import SectionTitle from "../Components/common/SectionTitle";
import Button from "../Components/common/Button";
import AppointmentSection from "../Components/sections/AppointmentSection";
import Badge from "../Components/common/Badge";
import { getServicesData } from "../data/servicesData";
import { useLanguage } from "../context/LanguageContext";

const iconMap = {
  sparkles: <FaTooth className="w-5 h-5" />,
  tooth: <FaTooth className="w-5 h-5" />,
  "shield-check": <LuShieldCheck className="w-5 h-5" />,
  sun: <LuSun className="w-5 h-5" />,
  activity: <LuActivity className="w-5 h-5" />,
  heart: <LuHeart className="w-5 h-5" />,
};

export default function Services() {
  const { language, t } = useLanguage();
  const services = getServicesData(language);

  return (
    <div className="animate-fade-in text-left rtl:text-right">
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-12 sm:py-16 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <Badge light size="md">
            {t("services.badge")}
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {t("services.heroTitle")}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            {t("services.heroSubtitle")}
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
            <Link to="/" className="hover:text-white transition-colors">
              {t("nav.home")}
            </Link>
            <span>/</span>
            <span className="text-emerald-400">{t("nav.services")}</span>
          </div>
        </div>
      </div>

      {/* Main Services Breakdown List */}
      <div className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-[#070b10] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionTitle
            badge={t("services.sectionBadge")}
            title={t("services.sectionTitle")}
            subtitle={t("services.sectionSubtitle")}
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-7 shadow-sm border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div>
                  {/* Top Bar */}
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 flex items-center justify-center border border-emerald-200/60 dark:border-emerald-700/40">
                      {iconMap[service.icon] || <FaTooth className="w-5 h-5" />}
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 font-light">
                    {service.fullDescription}
                  </p>

                  {/* Clinical Details Badges */}
                  <div className="grid grid-cols-3 gap-2 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-lg mb-4 text-center border border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mb-0.5">
                        {t("services.duration")}
                      </span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {service.procedureTime}
                      </span>
                    </div>
                    <div className="border-x border-slate-200 dark:border-slate-700">
                      <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mb-0.5">
                        {t("services.anesthesia")}
                      </span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {service.anesthesia}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mb-0.5">
                        {t("services.recovery")}
                      </span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {service.recovery}
                      </span>
                    </div>
                  </div>

                  {/* Benefits Checklist */}
                  <div className="space-y-1.5 mb-6">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
                      {t("services.advantagesTitle")}
                    </h4>
                    {service.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <LuCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <Button
                    to={`/booking?service=${service.id}`}
                    variant="primary"
                    size="sm"
                    icon={<LuCalendar className="w-3.5 h-3.5" />}
                  >
                    {t("services.scheduleTreatment")}
                  </Button>
                  <Link
                    to="/gallery"
                    className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-800 dark:hover:text-emerald-300 underline"
                  >
                    {t("services.viewCases")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Form Integration */}
      <AppointmentSection isFullPage />
    </div>
  );
}
