import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LuShieldCheck,
  LuSun,
  LuActivity,
  LuHeart,
  LuArrowRight,
  LuCalendar,
} from "react-icons/lu";
import { FaTooth } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";
import BeforeAfterSlider from "../common/BeforeAfterSlider";
import Button from "../common/Button";
import { getServicesData } from "../../data/servicesData";
import { getClinicalCases } from "../../data/galleryData";
import { useLanguage } from "../../context/LanguageContext";

const iconMap = {
  sparkles: <FaTooth className="w-5 h-5" />,
  tooth: <FaTooth className="w-5 h-5" />,
  "shield-check": <LuShieldCheck className="w-5 h-5" />,
  sun: <LuSun className="w-5 h-5" />,
  activity: <LuActivity className="w-5 h-5" />,
  heart: <LuHeart className="w-5 h-5" />,
};

export default function ServicesSection() {
  const { language, t } = useLanguage();
  const services = getServicesData(language);
  const cases = getClinicalCases(language);

  const [activeTab, setActiveTab] = useState(services[0].id);

  const activeService = services.find((s) => s.id === activeTab) || services[0];
  const featuredCase = cases[0];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-[#070b10] relative overflow-hidden transition-colors text-left rtl:text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge={t("services.badge")}
          title={t("services.sectionTitle")}
          subtitle={t("services.sectionSubtitle")}
          centered
        />

        {/* Interactive Treatment Tabs Bar */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-3 pt-1 no-scrollbar mb-10">
          {services.map((service) => {
            const isActive = service.id === activeTab;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-emerald-900 text-white shadow-sm"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-slate-800"
                }`}
              >
                <span className={isActive ? "text-amber-300" : "text-emerald-700 dark:text-emerald-400"}>
                  {iconMap[service.icon] || <FaTooth className="w-3.5 h-3.5" />}
                </span>
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Detail Feature Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200/80 dark:border-slate-800 mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left details */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-700/40">
              {t("services.sectionBadge")}
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {activeService.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                {activeService.fullDescription}
              </p>
            </div>

            {/* Quick procedural metadata */}
            <div className="grid grid-cols-3 gap-2.5 bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-800 text-center">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mb-0.5">
                  {t("services.duration")}
                </span>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {activeService.procedureTime}
                </span>
              </div>
              <div className="border-x border-slate-200 dark:border-slate-700">
                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mb-0.5">
                  {t("services.anesthesia")}
                </span>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {activeService.anesthesia}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mb-0.5">
                  {t("services.recovery")}
                </span>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {activeService.recovery}
                </span>
              </div>
            </div>

            {/* Benefits list */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                {t("services.advantagesTitle")}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {activeService.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                to={`/booking?service=${activeService.id}`}
                variant="primary"
                size="sm"
                icon={<LuCalendar className="w-3.5 h-3.5" />}
              >
                {t("services.scheduleTreatment")}
              </Button>
              <Button to="/services" variant="outline" size="sm">
                {t("common.viewTreatments")}
              </Button>
            </div>
          </div>

          {/* Right: Live Interactive Before/After Showcase */}
          <div className="lg:col-span-5">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between px-0.5">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <FaTooth className="w-3.5 h-3.5 text-emerald-800 dark:text-emerald-400" />
                  <span>{t("common.viewBeforeAfter")}</span>
                </span>
                <Link
                  to="/gallery"
                  className="text-xs text-emerald-800 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-300 font-semibold flex items-center gap-1"
                >
                  <span>{t("nav.gallery")}</span>
                  <LuArrowRight className="w-3 h-3 rtl:rotate-180" />
                </Link>
              </div>

              <BeforeAfterSlider
                beforeImage={featuredCase.beforeImage}
                afterImage={featuredCase.afterImage}
                title={featuredCase.title}
                subtitle={featuredCase.description}
                category={featuredCase.category}
              />
            </div>
          </div>
        </div>

        {/* 6 Grid Cards for all treatments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200/80 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center mb-4 border border-emerald-100 dark:border-emerald-900">
                  {iconMap[service.icon] || <FaTooth className="w-4 h-4" />}
                </div>

                <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-5 font-light">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end">
                <Link
                  to={`/services#${service.id}`}
                  className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-300 flex items-center gap-1 transition-colors"
                >
                  <span>{t("common.readMore")}</span>
                  <LuArrowRight className="w-3 h-3 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
