import React from "react";
import { Link } from "react-router-dom";
import { LuAward } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import SectionTitle from "../Components/common/SectionTitle";
import TeamSection from "../Components/sections/TeamSection";
import AppointmentSection from "../Components/sections/AppointmentSection";
import Badge from "../Components/common/Badge";
import { getClinicData } from "../data/clinicData";
import { useLanguage } from "../context/LanguageContext";
import clinicPhoto2 from "../assets/CliniquePicture/photo_2_2026-08-16_03-52-40.jpg";

export default function Dentists() {
  const { language, t } = useLanguage();
  const clinic = getClinicData(language);

  return (
    <div className="animate-fade-in text-left rtl:text-right">
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-12 sm:py-16 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <Badge light size="md" icon={<LuAward className="w-3.5 h-3.5 text-emerald-400" />}>
            {t("team.badge")}
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {clinic.leadDoctor.name}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            {clinic.leadDoctor.title} — {clinic.contact.city}, {clinic.contact.country}
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
            <Link to="/" className="hover:text-white transition-colors">
              {t("nav.home")}
            </Link>
            <span>/</span>
            <span className="text-emerald-400">{t("nav.dentists")}</span>
          </div>
        </div>
      </div>

      {/* Main Team Profile */}
      <TeamSection />

      {/* Doctor's Philosophy & Clinical Standards */}
      <div className="py-16 sm:py-20 bg-slate-50 dark:bg-[#070b10] border-t border-slate-200/80 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <SectionTitle
                badge={t("about.standardsTitle")}
                title={t("about.guaranteesTitle")}
                subtitle={t("about.guaranteesSubtitle")}
              />

              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <h4 className="font-serif text-base font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                    <FaCheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{t("about.guarantees.0.title")}</span>
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {t("about.guarantees.0.desc")}
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <h4 className="font-serif text-base font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                    <FaCheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{t("about.guarantees.1.title")}</span>
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {t("about.guarantees.1.desc")}
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <h4 className="font-serif text-base font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                    <FaCheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{t("about.guarantees.2.title")}</span>
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {t("about.guarantees.2.desc")}
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Suite Imagery */}
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/80 dark:border-slate-800 aspect-4/3">
              <img
                src={clinicPhoto2}
                alt="Aura Operatory Suite"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                  {t("about.operatoryBadge")}
                </span>
                <h4 className="font-serif text-base font-bold text-white mt-0.5">
                  {t("about.operatoryTitle")}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Section */}
      <AppointmentSection isFullPage />
    </div>
  );
}
