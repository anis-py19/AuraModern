import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LuClock,
  LuSearch,
  LuPhoneCall,
  LuCalendar,
  LuArrowRight,
} from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { clinicData } from "../../data/clinicData";
import { servicesData } from "../../data/servicesData";

export default function QuickCards() {
  const [selectedService, setSelectedService] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const navigate = useNavigate();

  const handleQuickSearch = (e) => {
    e.preventDefault();
    if (selectedService) {
      navigate(`/booking?service=${selectedService}&date=${preferredDate}`);
    } else {
      navigate("/booking");
    }
  };

  return (
    <section className="relative z-30 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-slate-800">
        {/* Card 1: Working Hours */}
        <div className="bg-slate-900 dark:bg-slate-950 text-white p-7 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/40 flex items-center justify-center mb-5">
              <LuClock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-2 text-white">
              Working Hours
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Consultations scheduled to fit your daily routine in Algiers.
            </p>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-300">
                <span>Saturday – Wednesday</span>
                <span className="font-medium text-emerald-400">8:30 AM – 7:00 PM</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-300">
                <span>Thursday</span>
                <span className="font-medium text-emerald-400">8:30 AM – 5:00 PM</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Friday</span>
                <span className="font-medium text-slate-400">Emergencies Only</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800">
            <Link
              to="/booking"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Schedule Appointment</span>
              <LuArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Card 2: Find Procedure */}
        <div className="bg-emerald-950 text-white p-7 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-emerald-900">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-900 text-amber-300 border border-emerald-700/50 flex items-center justify-center mb-5">
              <LuSearch className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-2 text-white">
              Select Procedure
            </h3>
            <p className="text-xs text-emerald-200/80 mb-5">
              Choose your treatment to check immediate schedule availability.
            </p>

            <form onSubmit={handleQuickSearch} className="space-y-3">
              <div>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-emerald-900/90 border border-emerald-700/60 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                >
                  <option value="" className="bg-slate-900 text-slate-400">
                    Select Dental Procedure
                  </option>
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.id} className="bg-slate-900 text-white">
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-emerald-900/90 border border-emerald-700/60 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
              >
                <LuCalendar className="w-4 h-4" />
                <span>Check Availability</span>
              </button>
            </form>
          </div>
        </div>

        {/* Card 3: Direct Hotline & WhatsApp */}
        <div className="bg-slate-900 dark:bg-slate-950 text-white p-7 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 border border-slate-700 flex items-center justify-center mb-5">
              <LuPhoneCall className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-2 text-white">
              Direct Contact
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Call or message Dr. Lababou’s reception for advice and bookings.
            </p>

            <a
              href={`tel:${clinicData.contact.phone.replace(/\./g, "")}`}
              className="block bg-slate-800/80 hover:bg-slate-800 p-4 rounded-xl text-center border border-slate-700 transition-colors"
            >
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                Reception Telephone
              </span>
              <span className="text-lg font-mono font-bold text-white tracking-wide">
                {clinicData.contact.phoneDisplay}
              </span>
            </a>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800">
            <a
              href={`https://wa.me/${clinicData.contact.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
            >
              <FaWhatsapp className="w-4 h-4 text-emerald-300" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
