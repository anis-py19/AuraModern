import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LuPhone,
  LuMapPin,
  LuClock,
  LuSend,
} from "react-icons/lu";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import SectionTitle from "../Components/common/SectionTitle";
import { clinicData } from "../data/clinicData";
import clinicPhoto1 from "../assets/CliniquePicture/photo_1_2026-08-16_03-52-40.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-slate-950 to-slate-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <LuMapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Clinic Location & Reception</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Get In Touch With Aura
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light">
            We are here to answer all your dental inquiries, treatment plans, and emergency consultation requests.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-amber-300">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="py-20 lg:py-28 bg-slate-50 dark:bg-[#070b10] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Cards & Real Signboard */}
            <div className="lg:col-span-5 space-y-6">
              <SectionTitle
                badge="Reception & Support"
                title="Direct Clinic Communication"
                subtitle="Reach our administrative and dental team directly via phone, WhatsApp, or in-person."
              />

              {/* Direct Info Card */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-800 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0">
                    <LuMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">Clinic Address</h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">{clinicData.contact.address}</p>
                    <span className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold mt-1 inline-block">
                      {clinicData.arabicName}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 flex items-center justify-center shrink-0">
                    <LuPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">Telephone / Mobile</h4>
                    <a
                      href={`tel:${clinicData.contact.phone.replace(/\./g, "")}`}
                      className="text-base font-bold text-emerald-800 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-300 font-mono"
                    >
                      {clinicData.contact.phoneDisplay}
                    </a>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Direct reception hotline</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0">
                    <LuClock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">Working Hours</h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">{clinicData.contact.hours.weekdays}</p>
                    <p className="text-xs text-amber-600 dark:text-amber-400 font-medium">{clinicData.contact.hours.friday}</p>
                  </div>
                </div>

                {/* WhatsApp Direct Action Button */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={`https://wa.me/${clinicData.contact.whatsapp.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-lg shadow-emerald-700/20 transition-all hover:scale-[1.02]"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>Chat on WhatsApp (+213 553 64 78 91)</span>
                  </a>
                </div>
              </div>

              {/* Clinic Entrance Picture */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800 aspect-4/3 relative">
                <img
                  src={clinicPhoto1}
                  alt="Aura Modern Dentistry Entrance Signboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                    Official Signboard
                  </span>
                  <p className="text-sm font-bold">Aura Modern Dentistry Entrance</p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-100 dark:border-slate-800">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-8 font-light">
                  Have a specific question about treatment costs or procedure steps? Fill out the form below.
                </p>

                {submitted ? (
                  <div className="text-center py-12 space-y-4 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 mx-auto flex items-center justify-center">
                      <FaCheckCircle className="w-10 h-10" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                      Message Dispatched!
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                      Thank you <strong>{formData.name}</strong>. Dr. LABABOU.N's reception staff will review your note and contact you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm text-emerald-800 dark:text-emerald-400 font-semibold underline mt-4 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="05XX XX XX XX"
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
                        Your Inquiry or Clinical Concern *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about the dental treatment you are interested in..."
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-emerald-900/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                      >
                        <LuSend className="w-4 h-4 text-amber-300" />
                        <span>Send Message to Clinic</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
