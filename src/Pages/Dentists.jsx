import React from "react";
import { Link } from "react-router-dom";
import { LuAward } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import SectionTitle from "../Components/common/SectionTitle";
import TeamSection from "../Components/sections/TeamSection";
import AppointmentSection from "../Components/sections/AppointmentSection";
import clinicPhoto2 from "../assets/CliniquePicture/photo_2_2026-08-16_03-52-40.jpg";

export default function Dentists() {
  return (
    <div className="animate-fade-in">
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-slate-950 to-slate-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <LuAward className="w-3.5 h-3.5 text-amber-400" />
            <span>Clinical Specialists</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Meet Dr. LABABOU.N & Team
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Dedicated specialists committed to the highest ethical and aesthetic standards in modern dental surgery.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-amber-300">Specialists</span>
          </div>
        </div>
      </div>

      {/* Main Team Profile */}
      <TeamSection />

      {/* Doctor's Philosophy & Clinical Standards */}
      <div className="py-20 bg-slate-50 dark:bg-[#070b10] border-t border-slate-200/80 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionTitle
                badge="Clinical Standards"
                title="Our 4 Fundamental Guarantees to Every Patient"
                subtitle="High-level surgical protocols ensuring predictable, safe, and breathtaking results."
              />

              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md">
                  <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Biological & Biocompatible Materials Only</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    We use exclusively medical-grade titanium, monolithic multilayer zirconia, and Ivoclar E-max ceramics without metallic nickel-chromium alloys.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md">
                  <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Micro-Invasive Tooth Preservation</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    Minimal tooth preparation techniques ensure your natural enamel and dentin remain healthy for decades to come.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md">
                  <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Hospital-Grade Autoclave Sterilization</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    Every instrument undergoes multi-phase ultrasonic cleaning, vacuum autoclave sterilization, and sealed barrier pouching.
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Suite Imagery */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 aspect-4/3">
              <img
                src={clinicPhoto2}
                alt="Aura Operatory Suite"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                  Sterile Clinical Suite
                </span>
                <h4 className="font-serif text-xl font-bold text-white mt-1">
                  Painless Modern Dentistry under Dr. LABABOU.N
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
