import React from "react";
import { Link } from "react-router-dom";
import { LuCalendar } from "react-icons/lu";
import AppointmentSection from "../Components/sections/AppointmentSection";

export default function Booking() {
  return (
    <div className="animate-fade-in">
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-slate-950 to-slate-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <LuCalendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Online Clinic Scheduling</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Book Your Dental Consultation
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Reserve your consultation slot with Dr. LABABOU.N at Aura Modern Dentistry in Algiers.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-amber-300">Appointment</span>
          </div>
        </div>
      </div>

      {/* Booking Form Integration */}
      <AppointmentSection isFullPage />
    </div>
  );
}
