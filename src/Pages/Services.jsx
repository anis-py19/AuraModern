import React from "react";
import { Link } from "react-router-dom";
import {
  LuSparkles,
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
import { servicesData } from "../data/servicesData";

const iconMap = {
  sparkles: <LuSparkles className="w-8 h-8" />,
  tooth: <FaTooth className="w-8 h-8" />,
  "shield-check": <LuShieldCheck className="w-8 h-8" />,
  sun: <LuSun className="w-8 h-8" />,
  activity: <LuActivity className="w-8 h-8" />,
  heart: <LuHeart className="w-8 h-8" />,
};

export default function Services() {
  return (
    <div className="animate-fade-in">
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-slate-950 to-slate-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <LuSparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Specialized Clinical Directory</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Dental Treatments & Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Precision restorative dentistry, cosmetic veneers, digital implantology, and painless oral hygiene under Dr. LABABOU.N.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-amber-300">Services</span>
          </div>
        </div>
      </div>

      {/* Main Services Breakdown List */}
      <div className="py-20 lg:py-28 bg-slate-50 dark:bg-[#070b10] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionTitle
            badge="Full Clinical Catalog"
            title="Tailored Dental Care for Every Need"
            subtitle="Explore our comprehensive range of treatments with complete procedural transparency."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between hover:border-emerald-200 dark:hover:border-emerald-700/50 transition-all group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 flex items-center justify-center group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-300 shadow-md">
                      {iconMap[service.icon] || <FaTooth className="w-8 h-8" />}
                    </div>
                    <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200/60 dark:border-emerald-500/30 px-3 py-1.5 rounded-xl">
                      {service.startingPrice}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-900 dark:group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-light">
                    {service.fullDescription}
                  </p>

                  {/* Clinical Details Badges */}
                  <div className="grid grid-cols-3 gap-2 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl mb-6 text-center border border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mb-0.5">
                        Duration
                      </span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {service.procedureTime}
                      </span>
                    </div>
                    <div className="border-x border-slate-200 dark:border-slate-700">
                      <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mb-0.5">
                        Anesthesia
                      </span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {service.anesthesia.split(" ")[0]}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mb-0.5">
                        Recovery
                      </span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {service.recovery}
                      </span>
                    </div>
                  </div>

                  {/* Benefits Checklist */}
                  <div className="space-y-2 mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                      Key Clinical Advantages
                    </h4>
                    {service.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <LuCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <Button
                    to={`/booking?service=${service.id}`}
                    variant="primary"
                    size="sm"
                    icon={<LuCalendar className="w-4 h-4" />}
                  >
                    Schedule Treatment
                  </Button>
                  <Link
                    to="/gallery"
                    className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-800 dark:hover:text-emerald-300 underline"
                  >
                    View Before/After
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
