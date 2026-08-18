import React from "react";
import { Link } from "react-router-dom";
import { LuSparkles, LuShieldCheck, LuCalendar } from "react-icons/lu";
import PricingSection from "../Components/sections/PricingSection";
import FAQSection from "../Components/sections/FAQSection";

export default function Pricing() {
  return (
    <div className="animate-fade-in">
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-slate-950 to-slate-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <LuSparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Honest & Transparent Pricing</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Treatment Fees & Investment
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Comprehensive dental care plans with zero hidden costs, clear itemization, and premium certified European materials.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-amber-300">Pricing</span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <PricingSection />

      {/* Materials & Guarantee Standards */}
      <div className="py-16 bg-slate-100 dark:bg-[#070b10] border-y border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-md border border-slate-100 dark:border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 mx-auto flex items-center justify-center">
              <LuShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white">Certified Material Passports</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Every implant and ceramic restoration receives a traceable batch authentication passport.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-md border border-slate-100 dark:border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 mx-auto flex items-center justify-center">
              <LuSparkles className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white">10-Year Clinical Warranty</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Long-term warranty coverage against structural fracture on all E-max veneers & zirconia bridges.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-md border border-slate-100 dark:border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 mx-auto flex items-center justify-center">
              <LuCalendar className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white">Staged Payment Plans</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Flexible session-by-session payments aligned with your customized multi-step treatment milestones.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <FAQSection />
    </div>
  );
}
