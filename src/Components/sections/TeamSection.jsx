import React from "react";
import {
  LuAward,
  LuCalendar,
  LuShieldCheck,
} from "react-icons/lu";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import Badge from "../common/Badge";
import { getClinicData } from "../../data/clinicData";
import { useLanguage } from "../../context/LanguageContext";
import clinicPhoto3 from "../../assets/CliniquePicture/photo_3_2026-08-16_03-52-40.jpg";

export default function TeamSection() {
  const { language, t } = useLanguage();
  const clinic = getClinicData(language);
  const doctor = clinic.leadDoctor;

  return (
    <section id="specialists" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#090e14] transition-colors text-left rtl:text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={t("team.badge")}
          title={t("team.title")}
          subtitle={t("team.subtitle")}
        />

        {/* Lead Doctor Featured Profile Card */}
        <div className="bg-slate-900 dark:bg-slate-950 text-white rounded-2xl overflow-hidden shadow-md border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Doctor Suite Image */}
          <div className="lg:col-span-5 relative h-64 sm:h-76 lg:h-full min-h-[300px]">
            <img
              src={clinicPhoto3}
              alt={doctor.name}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950 rtl:lg:bg-gradient-to-l rtl:lg:from-transparent rtl:lg:to-slate-950" />
            
            {/* Experience Tag */}
            <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4 z-10">
              <Badge variant="photo" size="sm">
                {doctor.experience}
              </Badge>
            </div>
          </div>

          {/* Doctor Bio & Credentials */}
          <div className="lg:col-span-7 p-5 sm:p-8 space-y-4">
            <div className="space-y-2">
              <Badge light size="sm" icon={<LuAward className="w-3.5 h-3.5" />}>
                {t("team.specialties")}
              </Badge>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {doctor.name}
              </h3>
              <p className="text-xs text-slate-300 font-light">{doctor.qualification}</p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {doctor.bio}
            </p>

            {/* Specialization Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <LuShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{t("team.specialtyPoints.0")}</span>
              </div>
              <div className="flex items-center gap-2">
                <LuShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{t("team.specialtyPoints.1")}</span>
              </div>
              <div className="flex items-center gap-2">
                <LuShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{t("team.specialtyPoints.2")}</span>
              </div>
              <div className="flex items-center gap-2">
                <LuShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{t("team.specialtyPoints.3")}</span>
              </div>
            </div>

            {/* Social & Contact Bar */}
            <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href={doctor.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href={doctor.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`https://wa.me/${doctor.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-white flex items-center justify-center transition-colors border border-emerald-700/50"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-3.5 h-3.5" />
                </a>
              </div>

              <Button to="/booking" variant="primary" size="sm" icon={<LuCalendar className="w-3.5 h-3.5" />}>
                {t("team.bookWithDoctor")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
