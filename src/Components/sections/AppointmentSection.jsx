import React, { useState } from "react";
import {
  LuCalendar,
  LuClock,
  LuUser,
  LuPhone,
  LuShieldCheck,
} from "react-icons/lu";
import { FaWhatsapp, FaTooth, FaCheckCircle } from "react-icons/fa";
import { clinicData } from "../../data/clinicData";
import { servicesData } from "../../data/servicesData";

export default function AppointmentSection({ isFullPage = false }) {
  const [formData, setFormData] = useState({
    service: "",
    doctor: "Dr. LABABOU.N",
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Aura Clinic! I would like to book a dental consultation with ${formData.doctor}.\n\n` +
      `👤 Name: ${formData.name || "Patient"}\n` +
      `🦷 Treatment: ${formData.service || "Consultation"}\n` +
      `📅 Preferred Date: ${formData.date || "Earliest available"}\n` +
      `⏰ Preferred Time: ${formData.time || "Morning"}\n` +
      `📞 Phone: ${formData.phone || "Provided"}\n` +
      `💬 Notes: ${formData.notes || "None"}`
    );
    return `https://wa.me/${clinicData.contact.whatsapp.replace("+", "")}?text=${text}`;
  };

  return (
    <section
      id="appointment"
      className={`relative ${
        isFullPage
          ? "py-16 sm:py-20 bg-slate-50 dark:bg-[#070b10]"
          : "my-12 sm:my-16 py-16 sm:py-20 bg-slate-900 dark:bg-slate-950 text-white"
      } transition-colors`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Context & Guarantees */}
          <div className={`lg:col-span-5 space-y-5 ${isFullPage ? "text-slate-800 dark:text-white" : "text-white"}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <span>Appointment Scheduling</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              {isFullPage
                ? "Schedule Your Dental Consultation"
                : "Professional Dental Care Under Dr. LABABOU.N"}
            </h2>

            <p className={`text-xs sm:text-sm leading-relaxed ${isFullPage ? "text-slate-600 dark:text-slate-300 font-light" : "text-slate-300 font-light"}`}>
              Book an appointment with Dr. LABABOU.N in Algiers. We provide thorough diagnostic evaluations, intraoral imaging, and customized treatment timelines.
            </p>

            {/* Guarantees List */}
            <div className="space-y-2.5 pt-1 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>3D Intraoral Exam & Diagnostic Planning</span>
              </div>
              <div className="flex items-center gap-2.5">
                <LuShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Gentle, Pain-Free Anesthesia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaTooth className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Clear Itemized Quotations</span>
              </div>
            </div>

            {/* Direct Telephone Contact Card */}
            <div className={`p-5 rounded-2xl border ${isFullPage ? "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm" : "bg-slate-800/80 border-slate-700"}`}>
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                Prefer Booking By Phone?
              </div>
              <p className="text-xs text-slate-400 mb-2">Our clinic reception is available Sat–Thu.</p>
              <a
                href={`tel:${clinicData.contact.phone.replace(/\./g, "")}`}
                className="text-lg font-bold font-mono text-slate-900 dark:text-white hover:text-emerald-400 transition-colors flex items-center gap-2"
              >
                <LuPhone className="w-4 h-4 text-emerald-400" />
                <span>{clinicData.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 dark:border-slate-800">
              {submitted ? (
                <div className="text-center py-8 space-y-4 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <FaCheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Request Dispatched!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed font-light">
                    Thank you <strong>{formData.name}</strong>. Our receptionist will call you at <strong>{formData.phone}</strong> to confirm your slot for <strong>{formData.date || "your selected day"}</strong>.
                  </p>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs shadow transition-colors"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      <span>Confirm via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 underline cursor-pointer"
                    >
                      Submit another request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="mb-4">
                    <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                      Book an Appointment
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Fill out the details below to request a time slot.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Service Selection */}
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">
                        Treatment *
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      >
                        <option value="">Select Dental Service</option>
                        {servicesData.map((service) => (
                          <option key={service.id} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Specialist */}
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">
                        Practitioner
                      </label>
                      <input
                        type="text"
                        name="doctor"
                        readOnly
                        value={clinicData.leadDoctor.name}
                        className="w-full bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-not-allowed"
                      />
                    </div>

                    {/* Patient Name */}
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Full Name"
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 pl-9 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        />
                        <LuUser className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Patient Phone */}
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="05XX XX XX XX"
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 pl-9 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        />
                        <LuPhone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 pl-9 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        />
                        <LuCalendar className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">
                        Time Slot *
                      </label>
                      <div className="relative">
                        <select
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 pl-9 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        >
                          <option value="">Select Time Slot</option>
                          <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                          <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                          <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                        </select>
                        <LuClock className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* Notes / Special Request */}
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Brief note on what you need (e.g., checkup, tooth pain, quote for veneers)..."
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3.5 px-5 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                    >
                      <LuCalendar className="w-4 h-4 text-emerald-300" />
                      <span>Request Appointment</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
