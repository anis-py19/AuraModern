import React from "react";
import { LuCalendar, LuShieldCheck } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import Button from "../common/Button";
import { clinicData } from "../../data/clinicData";

export default function SpecialOffer() {
  return (
    <section className="py-14 sm:py-18 bg-emerald-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-7 sm:p-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900 text-emerald-300 text-xs font-medium tracking-wide">
            <span>New Patient Consultation</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
            Comprehensive Digital Smile Assessment
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed font-light">
            Preview your potential smile transformation with 3D digital intraoral scanning before starting your veneers or implant treatment.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-300 py-1">
            <div className="flex items-center gap-1.5">
              <LuShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Diagnostic Photography</span>
            </div>
            <div className="flex items-center gap-1.5">
              <LuShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Direct Doctor Evaluation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <LuShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Transparent Itemized Quote</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Button to="/booking" variant="gold" size="md" icon={<LuCalendar className="w-4 h-4" />}>
              Book Consultation
            </Button>
            <Button
              href={`https://wa.me/${clinicData.contact.whatsapp.replace("+", "")}?text=Hello%20Aura%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20Smile%20Consultation.`}
              variant="glass"
              size="md"
              icon={<FaWhatsapp className="w-4 h-4 text-emerald-300" />}
            >
              Inquire via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
