import React from "react";
import { Link } from "react-router-dom";
import {
  LuClock,
  LuPhoneCall,
  LuCalendar,
  LuArrowRight,
} from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { getClinicData } from "../../data/clinicData";
import { useLanguage } from "../../context/LanguageContext";

export default function QuickCards() {
  const { language, t } = useLanguage();
  const clinic = getClinicData(language);

  return (
    <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 text-left rtl:text-right">
      <div className="grid grid-cols-1 md:grid-cols-3 rounded-xl overflow-hidden shadow-md border border-slate-200/80 dark:border-slate-800">
        {/* Card 1: Working Hours */}
        <div className="bg-slate-900 dark:bg-slate-950 text-white p-6 sm:p-7 flex flex-col justify-between border-b md:border-b-0 md:border-r rtl:md:border-r-0 rtl:md:border-l border-slate-800">
          <div>
            <div className="w-9 h-9 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/40 flex items-center justify-center mb-4">
              <LuClock className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg font-bold mb-1.5 text-white">
              {t("quickCards.hours.title")}
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              {t("quickCards.hours.subtitle")}
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-slate-300">
                <span>{t("quickCards.hours.satWed")}</span>
                <span className="font-medium text-emerald-400">{t("quickCards.hours.satWedHours")}</span>
              </div>
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-slate-300">
                <span>{t("quickCards.hours.thu")}</span>
                <span className="font-medium text-emerald-400">{t("quickCards.hours.thuHours")}</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>{t("quickCards.hours.fri")}</span>
                <span className="text-slate-400">{t("quickCards.hours.friHours")}</span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-800">
            <Link
              to="/booking"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>{t("quickCards.hours.cta")}</span>
              <LuArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>
        </div>

        {/* Card 2: Appointments & Consultation */}
        <div className="bg-emerald-950 text-white p-6 sm:p-7 flex flex-col justify-between border-b md:border-b-0 md:border-r rtl:md:border-r-0 rtl:md:border-l border-emerald-900">
          <div>
            <div className="w-9 h-9 rounded-lg bg-emerald-900 text-amber-300 border border-emerald-700/50 flex items-center justify-center mb-4">
              <LuCalendar className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg font-bold mb-1.5 text-white">
              {t("quickCards.booking.title")}
            </h3>
            <p className="text-xs text-emerald-200/80 mb-4">
              {t("quickCards.booking.subtitle")}
            </p>

            <div className="bg-emerald-900/60 p-3.5 rounded-lg border border-emerald-800/60 text-xs space-y-1.5 mb-4">
              <div className="text-emerald-300 font-semibold">{t("quickCards.booking.includedHeader")}</div>
              <ul className="text-emerald-100/80 space-y-1 pl-1 rtl:pl-0 rtl:pr-1">
                <li>• {t("quickCards.booking.included.0")}</li>
                <li>• {t("quickCards.booking.included.1")}</li>
                <li>• {t("quickCards.booking.included.2")}</li>
              </ul>
            </div>
          </div>

          <div className="mt-2">
            <Link
              to="/booking"
              className="w-full bg-emerald-800 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg text-xs transition-colors flex items-center justify-center gap-2"
            >
              <LuCalendar className="w-3.5 h-3.5" />
              <span>{t("quickCards.booking.cta")}</span>
            </Link>
          </div>
        </div>

        {/* Card 3: Direct Hotline & WhatsApp */}
        <div className="bg-slate-900 dark:bg-slate-950 text-white p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 rounded-lg bg-slate-800 text-emerald-400 border border-slate-700 flex items-center justify-center mb-4">
              <LuPhoneCall className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg font-bold mb-1.5 text-white">
              {t("quickCards.reception.title")}
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              {t("quickCards.reception.subtitle")}
            </p>

            <a
              href={`tel:${clinic.contact.phone.replace(/\./g, "")}`}
              className="block bg-slate-800/80 hover:bg-slate-800 p-3.5 rounded-lg text-center border border-slate-700 transition-colors"
            >
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                {t("quickCards.reception.phoneLabel")}
              </span>
              <span className="text-base font-mono font-bold text-white tracking-wide">
                {clinic.contact.phoneDisplay}
              </span>
            </a>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800">
            <a
              href={`https://wa.me/${clinic.contact.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg bg-emerald-900/80 hover:bg-emerald-800 text-white text-xs font-semibold transition-colors border border-emerald-700/50"
            >
              <FaWhatsapp className="w-3.5 h-3.5 text-emerald-300" />
              <span>{t("quickCards.reception.ctaWhatsApp")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
