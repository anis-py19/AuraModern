import React from "react";
import { LuCalendar, LuShieldCheck } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import Button from "../common/Button";
import Badge from "../common/Badge";
import { getClinicData } from "../../data/clinicData";
import { useLanguage } from "../../context/LanguageContext";

export default function SpecialOffer() {
  const { language, t } = useLanguage();
  const clinic = getClinicData(language);

  const whatsappMessage = encodeURIComponent(
    language === "fr"
      ? "Bonjour Clinique Aura, je souhaite obtenir des informations pour un bilan diagnostique complet."
      : language === "ar"
      ? "مرحباً عيادة أورا، أود الاستفسار عن حجز فحص تشخيصي رقمي شامل."
      : "Hello Aura Clinic, I would like to inquire about a Comprehensive Diagnostic Examination."
  );

  return (
    <section className="py-12 sm:py-16 bg-emerald-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 text-center max-w-3xl mx-auto space-y-3.5">
          <Badge light size="md">
            {t("specialOffer.badge")}
          </Badge>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
            {t("specialOffer.title")}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed font-light">
            {t("specialOffer.subtitle")}
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-300 py-1">
            <div className="flex items-center gap-1.5">
              <LuShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{t("specialOffer.points.0")}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <LuShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{t("specialOffer.points.1")}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <LuShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{t("specialOffer.points.2")}</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
            <Button to="/booking" variant="primary" size="sm" icon={<LuCalendar className="w-3.5 h-3.5" />}>
              {t("specialOffer.scheduleBtn")}
            </Button>
            <Button
              href={`https://wa.me/${clinic.contact.whatsapp.replace("+", "")}?text=${whatsappMessage}`}
              variant="glass"
              size="sm"
              icon={<FaWhatsapp className="w-3.5 h-3.5 text-emerald-300" />}
            >
              {t("specialOffer.inquireWhatsApp")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
