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
import Badge from "../Components/common/Badge";
import { getClinicData } from "../data/clinicData";
import { useLanguage } from "../context/LanguageContext";
import clinicPhoto1 from "../assets/CliniquePicture/photo_1_2026-08-16_03-52-40.jpg";

export default function Contact() {
  const { language, t } = useLanguage();
  const clinic = getClinicData(language);

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
    <div className="animate-fade-in text-left rtl:text-right">
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-12 sm:py-16 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <Badge light size="md" icon={<LuMapPin className="w-3.5 h-3.5 text-emerald-400" />}>
            {t("contact.badge")}
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {t("contact.heroTitle")}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            {t("contact.heroSubtitle")}
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
            <Link to="/" className="hover:text-white transition-colors">
              {t("nav.home")}
            </Link>
            <span>/</span>
            <span className="text-emerald-400">{t("nav.contact")}</span>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-[#070b10] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Contact Cards & Real Signboard */}
            <div className="lg:col-span-5 space-y-5">
              <SectionTitle
                badge={t("contact.receptionBadge")}
                title={t("contact.receptionTitle")}
                subtitle={t("contact.receptionSubtitle")}
              />

              {/* Direct Info Card */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-5 sm:p-6 shadow-sm border border-slate-200/80 dark:border-slate-800 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0">
                    <LuMapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {t("contact.addressTitle")}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{clinic.contact.address}</p>
                    <span className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold mt-0.5 inline-block">
                      {clinic.arabicName}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0">
                    <LuPhone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {t("contact.phoneTitle")}
                    </h4>
                    <a
                      href={`tel:${clinic.contact.phone.replace(/\./g, "")}`}
                      className="text-sm sm:text-base font-bold text-emerald-800 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-300 font-mono"
                    >
                      {clinic.contact.phoneDisplay}
                    </a>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{t("contact.phoneSubtitle")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0">
                    <LuClock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {t("contact.hoursTitle")}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{clinic.contact.hours.weekdays}</p>
                    <p className="text-xs text-amber-700 dark:text-amber-400 font-medium">{clinic.contact.hours.friday}</p>
                  </div>
                </div>

                {/* WhatsApp Direct Action Button */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={`https://wa.me/${clinic.contact.whatsapp.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs transition-colors shadow-sm"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>{t("common.chatWhatsApp")} ({clinic.contact.whatsapp})</span>
                  </a>
                </div>
              </div>

              {/* Clinic Entrance Picture */}
              <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200/80 dark:border-slate-800 aspect-4/3 relative">
                <img
                  src={clinicPhoto1}
                  alt="Aura Modern Dentistry Entrance Signboard"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-semibold text-emerald-300 uppercase tracking-wider">
                    {t("contact.signboardBadge")}
                  </span>
                  <p className="text-xs font-bold">{t("contact.signboardTitle")}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-7 shadow-sm border border-slate-200/80 dark:border-slate-800">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  {t("contact.formTitle")}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 font-light">
                  {t("contact.formSubtitle")}
                </p>

                {submitted ? (
                  <div className="text-center py-8 space-y-3 animate-fade-in">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 mx-auto flex items-center justify-center">
                      <FaCheckCircle className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                      {t("contact.successTitle")}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed font-light">
                      {t("contact.successMessage", "", { name: formData.name })}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-emerald-800 dark:text-emerald-400 font-semibold underline mt-2 cursor-pointer"
                    >
                      {t("contact.sendAnother")}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wide">
                        {t("contact.nameLabel")}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t("contact.namePlaceholder")}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wide">
                          {t("contact.phoneLabel")}
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={t("contact.phonePlaceholder")}
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wide">
                          {t("contact.emailLabel")}
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={t("contact.emailPlaceholder")}
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wide">
                        {t("contact.messageLabel")}
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t("contact.messagePlaceholder")}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      />
                    </div>

                    <div className="pt-1.5">
                      <button
                        type="submit"
                        className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-2.5 px-4 rounded-lg transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2 text-xs"
                      >
                        <LuSend className="w-3.5 h-3.5" />
                        <span>{t("contact.sendBtn")}</span>
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
