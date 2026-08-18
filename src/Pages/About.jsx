import React from "react";
import { Link } from "react-router-dom";
import AboutSection from "../Components/sections/AboutSection";
import FacilityGallery from "../Components/sections/FacilityGallery";
import TeamSection from "../Components/sections/TeamSection";
import { getClinicData } from "../data/clinicData";
import { useLanguage } from "../context/LanguageContext";
import Badge from "../Components/common/Badge";

export default function About() {
  const { language, t } = useLanguage();
  const clinic = getClinicData(language);

  return (
    <div className="animate-fade-in">
      {/* Page Hero Header */}
      <div className="bg-slate-950 text-white py-12 sm:py-16 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <Badge light size="md">
            {t("about.badge")}
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {t("about.heroTitle")}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            {t("about.heroSubtitle")}
          </p>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
            <Link to="/" className="hover:text-white transition-colors">
              {t("nav.home")}
            </Link>
            <span>/</span>
            <span className="text-emerald-400">{t("nav.about")}</span>
          </div>
        </div>
      </div>

      {/* Clinical Stats Ribbon */}
      <div className="bg-emerald-950 text-white py-6 border-y border-emerald-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {clinic.stats.map((stat, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-amber-300">
                {stat.value}
              </div>
              <div className="text-xs text-slate-300 font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Narrative & Pillars */}
      <AboutSection />

      {/* Lead Doctor Highlight */}
      <TeamSection />

      {/* Clinic Facility Virtual Tour */}
      <FacilityGallery />
    </div>
  );
}
