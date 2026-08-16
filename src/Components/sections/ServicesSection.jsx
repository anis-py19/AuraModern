import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LuSparkles,
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
import { servicesData } from "../../data/servicesData";
import { clinicalCases } from "../../data/galleryData";

const iconMap = {
  sparkles: <LuSparkles className="w-6 h-6" />,
  tooth: <FaTooth className="w-6 h-6" />,
  "shield-check": <LuShieldCheck className="w-6 h-6" />,
  sun: <LuSun className="w-6 h-6" />,
  activity: <LuActivity className="w-6 h-6" />,
  heart: <LuHeart className="w-6 h-6" />,
};

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);

  const activeService = servicesData.find((s) => s.id === activeTab) || servicesData[0];
  const featuredCase = clinicalCases[0];

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 dark:bg-[#070b10] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Specialized Treatments"
          title="World-Class Dental Care Tailored to You"
          subtitle="From routine aesthetic enhancements to advanced full-mouth surgical implantology, Dr. LABABOU.N provides certified excellence."
          centered
        />

        {/* Interactive Treatment Tabs Bar */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar mb-12">
          {servicesData.map((service) => {
            const isActive = service.id === activeTab;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-emerald-900 text-amber-300 shadow-xl shadow-emerald-900/20 scale-105"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-slate-800"
                }`}
              >
                <span className={isActive ? "text-amber-300" : "text-emerald-700 dark:text-emerald-400"}>
                  {iconMap[service.icon] || <FaTooth className="w-4 h-4" />}
                </span>
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Detail Feature Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 dark:border-slate-800 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 font-semibold text-xs border border-emerald-200/60 dark:border-emerald-500/30">
                <LuSparkles className="w-3.5 h-3.5" />
                <span>Featured Dental Specialty</span>
              </div>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                {activeService.startingPrice}
              </span>
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                {activeService.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                {activeService.fullDescription}
              </p>
            </div>

            {/* Quick procedural metadata */}
            <div className="grid grid-cols-3 gap-3 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mb-0.5">
                  Procedure Time
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {activeService.procedureTime}
                </span>
              </div>
              <div className="border-x border-slate-200 dark:border-slate-700">
                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mb-0.5">
                  Anesthesia
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {activeService.anesthesia}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mb-0.5">
                  Recovery
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {activeService.recovery}
                </span>
              </div>
            </div>

            {/* Benefits list */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                Clinical Highlights
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeService.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                to={`/booking?service=${activeService.id}`}
                variant="primary"
                size="md"
                icon={<LuCalendar className="w-4 h-4" />}
              >
                Book {activeService.title}
              </Button>
              <Button to="/services" variant="outline" size="md">
                Full Catalog & Details
              </Button>
            </div>
          </div>

          {/* Right: Live Interactive Before/After Showcase */}
          <div className="lg:col-span-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <FaTooth className="w-4 h-4 text-emerald-800 dark:text-emerald-400" />
                  <span>Real Patient Clinical Result</span>
                </span>
                <Link
                  to="/gallery"
                  className="text-xs text-emerald-800 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-300 font-semibold flex items-center gap-1"
                >
                  <span>9 Cases in Gallery</span>
                  <LuArrowRight className="w-3.5 h-3.5" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-slate-100 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-700/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 flex items-center justify-center mb-6 group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-300 shadow-md shadow-emerald-900/5">
                  {iconMap[service.icon] || <FaTooth className="w-6 h-6" />}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-900 dark:group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-light">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 px-2.5 py-1 rounded-lg">
                  {service.startingPrice}
                </span>
                <Link
                  to={`/services#${service.id}`}
                  className="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-emerald-800 dark:group-hover:text-emerald-400 flex items-center gap-1 transition-colors"
                >
                  <span>Learn more</span>
                  <LuArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
