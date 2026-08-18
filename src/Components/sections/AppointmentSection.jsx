import React, { useState } from "react";
import {
  LuCalendar,
  LuClock,
  LuUser,
  LuPhone,
  LuShieldCheck,
} from "react-icons/lu";
import { FaWhatsapp, FaTooth, FaCheckCircle } from "react-icons/fa";
import Badge from "../common/Badge";
import { getClinicData } from "../../data/clinicData";
import { getServicesData } from "../../data/servicesData";
import { useLanguage } from "../../context/LanguageContext";

export default function AppointmentSection({ isFullPage = false }) {
  const { language, t } = useLanguage();
  const clinic = getClinicData(language);
  const services = getServicesData(language);

  const [formData, setFormData] = useState({
    service: "",
    doctor: clinic.leadDoctor.name,
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
    const greeting = language === "fr"
      ? `Bonjour Clinique Aura ! Je souhaite réserver une consultation dentaire avec ${clinic.leadDoctor.name}.\n\n`
      : language === "ar"
      ? `مرحباً عيادة أورا ! أود حجز موعد استشارة طبية مع ${clinic.leadDoctor.name}.\n\n`
      : `Hello Aura Clinic! I would like to book a dental consultation with ${clinic.leadDoctor.name}.\n\n`;

    const text = encodeURIComponent(
      greeting +
      `👤 ${formData.name || "Patient"}\n` +
      `🦷 ${formData.service || "Consultation"}\n` +
      `📅 ${formData.date || "Date"}\n` +
      `⏰ ${formData.time || "Slot"}\n` +
      `📞 ${formData.phone || "Phone"}\n` +
      `💬 ${formData.notes || "None"}`
    );
    return `https://wa.me/${clinic.contact.whatsapp.replace("+", "")}?text=${text}`;
  };

  return (
    <section
      id="appointment"
      className={`relative ${
        isFullPage
          ? "py-14 sm:py-18 bg-slate-50 dark:bg-[#070b10]"
          : "my-10 sm:my-14 py-14 sm:py-18 bg-slate-900 dark:bg-slate-950 text-white"
      } transition-colors text-left rtl:text-right`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Context & Guarantees */}
          <div className={`lg:col-span-5 space-y-4 ${isFullPage ? "text-slate-800 dark:text-white" : "text-white"}`}>
            <Badge light={!isFullPage} size="md">
              {t("appointment.badge")}
            </Badge>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              {isFullPage
                ? t("appointment.pageTitle")
                : t("appointment.title")}
            </h2>

            <p className={`text-xs sm:text-sm leading-relaxed ${isFullPage ? "text-slate-600 dark:text-slate-300 font-light" : "text-slate-300 font-light"}`}>
              {t("appointment.subtitle")}
            </p>

            {/* Guarantees List */}
            <div className="space-y-2 pt-1 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{t("appointment.guarantees.0")}</span>
              </div>
              <div className="flex items-center gap-2">
                <LuShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{t("appointment.guarantees.1")}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaTooth className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{t("appointment.guarantees.2")}</span>
              </div>
            </div>

            {/* Direct Telephone Contact Card */}
            <div className={`p-4 rounded-xl border ${isFullPage ? "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm" : "bg-slate-800/80 border-slate-700"}`}>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                {t("appointment.phoneBookingCardTitle")}
              </div>
              <p className="text-xs text-slate-400 mb-1.5">{t("appointment.phoneBookingCardSubtitle")}</p>
              <a
                href={`tel:${clinic.contact.phone.replace(/\./g, "")}`}
                className="text-base font-bold font-mono text-slate-900 dark:text-white hover:text-emerald-400 transition-colors flex items-center gap-2"
              >
                <LuPhone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{clinic.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/80 dark:border-slate-800">
              {submitted ? (
                <div className="text-center py-6 space-y-3.5 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <FaCheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {t("appointment.successTitle")}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed font-light">
                    {t("appointment.successMessage", "", {
                      name: formData.name,
                      phone: formData.phone,
                      date: formData.date || "your selected date",
                    })}
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs shadow transition-colors"
                    >
                      <FaWhatsapp className="w-3.5 h-3.5" />
                      <span>{t("appointment.confirmWhatsApp")}</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 underline cursor-pointer"
                    >
                      {t("appointment.submitAnother")}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="mb-3">
                    <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                      {t("appointment.formTitle")}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {t("appointment.formSubtitle")}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Service Selection */}
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">
                        {t("appointment.serviceLabel")}
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      >
                        <option value="">{t("appointment.selectServicePlaceholder")}</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Specialist */}
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">
                        {t("appointment.doctorLabel")}
                      </label>
                      <input
                        type="text"
                        name="doctor"
                        readOnly
                        value={clinic.leadDoctor.name}
                        className="w-full bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-not-allowed"
                      />
                    </div>

                    {/* Patient Name */}
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">
                        {t("appointment.nameLabel")}
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t("appointment.namePlaceholder")}
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 pl-8 rtl:pl-3 rtl:pr-8 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        />
                        <LuUser className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 rtl:left-auto rtl:right-2.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Patient Phone */}
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">
                        {t("appointment.phoneLabel")}
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t("appointment.phonePlaceholder")}
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 pl-8 rtl:pl-3 rtl:pr-8 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        />
                        <LuPhone className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 rtl:left-auto rtl:right-2.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">
                        {t("appointment.dateLabel")}
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 pl-8 rtl:pl-3 rtl:pr-8 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        />
                        <LuCalendar className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 rtl:left-auto rtl:right-2.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">
                        {t("appointment.timeLabel")}
                      </label>
                      <div className="relative">
                        <select
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 pl-8 rtl:pl-3 rtl:pr-8 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        >
                          <option value="">{t("appointment.selectTimePlaceholder")}</option>
                          <option value={t("appointment.timeSlots.0")}>{t("appointment.timeSlots.0")}</option>
                          <option value={t("appointment.timeSlots.1")}>{t("appointment.timeSlots.1")}</option>
                          <option value={t("appointment.timeSlots.2")}>{t("appointment.timeSlots.2")}</option>
                        </select>
                        <LuClock className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 rtl:left-auto rtl:right-2.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">
                      {t("appointment.notesLabel")}
                    </label>
                    <textarea
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder={t("appointment.notesPlaceholder")}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1.5">
                    <button
                      type="submit"
                      className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-2.5 px-4 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                    >
                      <LuCalendar className="w-3.5 h-3.5 text-emerald-300" />
                      <span>{t("appointment.submitBtn")}</span>
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
