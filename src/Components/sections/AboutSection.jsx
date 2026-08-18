import React from "react";
import {
  LuShieldCheck,
  LuCircleCheck,
  LuAward,
  LuClock,
  LuArrowRight,
} from "react-icons/lu";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import { getClinicData } from "../../data/clinicData";
import { useLanguage } from "../../context/LanguageContext";
import clinicPhoto4 from "../../assets/CliniquePicture/photo_4_2026-08-16_03-52-40.jpg";
import clinicPhoto3 from "../../assets/CliniquePicture/photo_3_2026-08-16_03-52-40.jpg";

export default function AboutSection() {
  const { language, t } = useLanguage();
  const clinic = getClinicData(language);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#090e14] transition-colors text-left rtl:text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative & Trust Pillars */}
          <div className="lg:col-span-7 space-y-5">
            <SectionTitle
              badge={t("about.badge")}
              title={t("about.sectionTitle")}
              subtitle={t("about.heroSubtitle")}
            />

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 italic border-l-2 rtl:border-l-0 rtl:border-r-2 border-emerald-700 pl-4 rtl:pl-0 rtl:pr-4 py-1 bg-slate-50 dark:bg-slate-900 rounded-r-lg rtl:rounded-r-none rtl:rounded-l-lg">
              "{t("about.quote")}"
              <span className="block text-xs not-italic text-emerald-800 dark:text-emerald-400 font-semibold mt-1">
                — {clinic.leadDoctor.name}, {clinic.leadDoctor.title.split(",")[0]}
              </span>
            </p>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              {t("about.paragraph1")}
            </p>

            {/* 4 Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800">
                <div className="w-8 h-8 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <LuAward className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white">{t("about.pillars.0.title")}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{t("about.pillars.0.desc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800">
                <div className="w-8 h-8 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <LuShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white">{t("about.pillars.1.title")}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{t("about.pillars.1.desc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800">
                <div className="w-8 h-8 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <LuClock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white">{t("about.pillars.2.title")}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{t("about.pillars.2.desc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800">
                <div className="w-8 h-8 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <LuCircleCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white">{t("about.pillars.3.title")}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{t("about.pillars.3.desc")}</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button to="/about" variant="primary" size="md" icon={<LuArrowRight className="w-4 h-4 rtl:rotate-180" />}>
                {t("about.cta")}
              </Button>
              <Button to="/gallery" variant="outline" size="md">
                {t("common.viewCases")}
              </Button>
            </div>
          </div>

          {/* Right Column: Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800">
                <img
                  src={clinicPhoto4}
                  alt="Aura Clinic Reception Desk"
                  className="w-full h-64 sm:h-76 object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <span className="text-xs font-semibold text-emerald-300">
                    {t("about.operatoryBadge")}
                  </span>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {clinic.contact.city}, {clinic.contact.country}
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Thumbnail */}
              <div className="hidden sm:block absolute -bottom-5 -left-5 rtl:-left-auto rtl:-right-5 w-36 h-36 rounded-lg overflow-hidden shadow-lg border-2 border-white dark:border-slate-800 z-20">
                <img
                  src={clinicPhoto3}
                  alt="Doctor Consultation Suite"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
