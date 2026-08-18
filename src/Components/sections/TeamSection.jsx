import React from "react";
import {
  LuAward,
  LuCalendar,
  LuShieldCheck,
} from "react-icons/lu";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import { clinicData } from "../../data/clinicData";
import clinicPhoto3 from "../../assets/CliniquePicture/photo_3_2026-08-16_03-52-40.jpg";

export default function TeamSection() {
  const doctor = clinicData.leadDoctor;

  return (
    <section id="specialists" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#090e14] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Lead Specialist"
          title="Meet Dr. LABABOU.N"
          subtitle="Specialist in Implantology, Aesthetic Prosthetics & Oral Rehabilitation in Algiers."
        />

        {/* Lead Doctor Featured Profile Card */}
        <div className="bg-slate-900 dark:bg-slate-950 text-white rounded-3xl overflow-hidden shadow-xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Doctor Suite Image */}
          <div className="lg:col-span-5 relative h-72 sm:h-84 lg:h-full min-h-[340px]">
            <img
              src={clinicPhoto3}
              alt={doctor.name}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950" />
            
            {/* Experience Tag */}
            <div className="absolute bottom-5 left-5 z-10 bg-emerald-900/90 text-emerald-300 px-3.5 py-1.5 rounded-xl border border-emerald-700/50 text-xs font-semibold">
              {doctor.experience}
            </div>
          </div>

          {/* Doctor Bio & Credentials */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-5">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-emerald-400">
                <LuAward className="w-4 h-4" />
                <span>Implantology & Aesthetic Dentistry</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {doctor.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light">{doctor.qualification}</p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {doctor.bio}
            </p>

            {/* Specialization Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <LuShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>European Titanium Implants</span>
              </div>
              <div className="flex items-center gap-2">
                <LuShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>3D Digital Smile Simulation</span>
              </div>
              <div className="flex items-center gap-2">
                <LuShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>E-Max Porcelain Veneers</span>
              </div>
              <div className="flex items-center gap-2">
                <LuShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full-Mouth Rehabilitation</span>
              </div>
            </div>

            {/* Social & Contact Bar */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <a
                  href={doctor.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-pink-600 text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href={doctor.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`https://wa.me/${doctor.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-3.5 h-3.5" />
                </a>
              </div>

              <Button to="/booking" variant="primary" size="sm" icon={<LuCalendar className="w-4 h-4" />}>
                Book with {doctor.name}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
