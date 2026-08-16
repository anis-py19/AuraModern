import React from "react";
import { Link } from "react-router-dom";
import { LuSparkles } from "react-icons/lu";
import AboutSection from "../Components/sections/AboutSection";
import FacilityGallery from "../Components/sections/FacilityGallery";
import TeamSection from "../Components/sections/TeamSection";
import TestimonialsSection from "../Components/sections/TestimonialsSection";
import { clinicData } from "../data/clinicData";

export default function About() {
  return (
    <div className="animate-fade-in">
      {/* Page Hero Header */}
      <div className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-slate-950/90 to-slate-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <LuSparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Excellence & Clinical Philosophy</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            About Aura Modern Dentistry
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Founded and directed by Dr. LABABOU.N, our center is dedicated to transformative implantology, aesthetic smile architecture, and pain-free dentistry in Algiers.
          </p>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-amber-300">About Us</span>
          </div>
        </div>
      </div>

      {/* Clinical Stats Ribbon */}
      <div className="bg-emerald-900 text-white py-8 border-y border-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {clinicData.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-300">
                {stat.value}
              </div>
              <div className="text-xs text-emerald-100 font-medium tracking-wide">
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

      {/* Testimonials */}
      <TestimonialsSection />
    </div>
  );
}
