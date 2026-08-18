import React from "react";
import {
  LuShieldCheck,
  LuSparkles,
  LuAward,
  LuClock,
  LuArrowRight,
} from "react-icons/lu";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import { clinicData } from "../../data/clinicData";
import clinicPhoto4 from "../../assets/CliniquePicture/photo_4_2026-08-16_03-52-40.jpg";
import clinicPhoto3 from "../../assets/CliniquePicture/photo_3_2026-08-16_03-52-40.jpg";

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#090e14] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative & Trust Pillars */}
          <div className="lg:col-span-7 space-y-5">
            <SectionTitle
              badge="About Aura Clinic"
              title="Modern Dental Surgery & Aesthetic Restoration in Algiers"
              subtitle="Providing comprehensive dental care with certified European standards and personalized patient attention."
            />

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 italic border-l-3 border-emerald-600 pl-4 py-1 bg-slate-50 dark:bg-slate-900 rounded-r-xl">
              "Our primary goal is to preserve natural teeth whenever possible and restore function, comfort, and aesthetics using proven, minimally invasive techniques."
              <span className="block text-xs not-italic text-emerald-800 dark:text-emerald-400 font-semibold mt-1">
                — {clinicData.leadDoctor.name}, Lead Dentist
              </span>
            </p>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              At <strong>Aura Clinic ({clinicData.arabicName})</strong>, Dr. LABABOU.N and our clinical team utilize modern digital diagnostics, pain-free local anesthesia, and high-purity biocompatible materials (monolithic zirconia, E-Max lithium disilicate, and titanium implants).
            </p>

            {/* 4 Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-100 dark:border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <LuAward className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">Certified Specialist</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Experienced in implantology & aesthetic prosthetics.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-100 dark:border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <LuShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">Sterile Hospital Standards</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Multi-phase autoclave sterilization for patient safety.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-100 dark:border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <LuClock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">Reliable Appointments</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Punctual consultation times with zero long waits.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-100 dark:border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <LuSparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">Transparent Estimates</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Detailed price breakdowns before commencing care.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Button to="/about" variant="primary" size="md" icon={<LuArrowRight className="w-4 h-4" />}>
                Read More About Clinic
              </Button>
              <Button to="/gallery" variant="outline" size="md">
                View Patient Cases
              </Button>
            </div>
          </div>

          {/* Right Column: Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
                <img
                  src={clinicPhoto4}
                  alt="Aura Clinic Reception Desk"
                  className="w-full h-72 sm:h-84 object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold text-emerald-300">
                    Aura Reception Suite
                  </span>
                  <p className="text-xs text-slate-200 mt-0.5">
                    Algiers Dental Center
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Thumbnail */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-40 h-40 rounded-xl overflow-hidden shadow-xl border-2 border-white dark:border-slate-800 z-20">
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
