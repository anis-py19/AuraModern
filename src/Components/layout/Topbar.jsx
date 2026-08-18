import React from "react";
import { LuClock, LuPhone, LuMail } from "react-icons/lu";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { getClinicData } from "../../data/clinicData";
import { useLanguage } from "../../context/LanguageContext";
import LanguageSwitcher from "../common/LanguageSwitcher";

export default function Topbar() {
  const { language } = useLanguage();
  const clinic = getClinicData(language);

  return (
    <div className="bg-slate-900 dark:bg-slate-950 text-slate-300 dark:text-slate-400 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800 hidden md:block transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Hours & Location */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5 text-slate-300 dark:text-slate-400">
            <LuClock className="w-3.5 h-3.5 text-emerald-400" />
            <span>{clinic.contact.hours.summary}</span>
          </div>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">{clinic.contact.address}</span>
        </div>

        {/* Right: Contact info, LanguageSwitcher & Socials */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${clinic.contact.phone.replace(/\./g, "")}`}
            className="flex items-center gap-1.5 text-slate-200 dark:text-slate-300 hover:text-emerald-400 transition-colors font-medium"
          >
            <LuPhone className="w-3.5 h-3.5 text-emerald-400" />
            <span>{clinic.contact.phoneDisplay}</span>
          </a>

          <a
            href={`mailto:${clinic.contact.email}`}
            className="hidden lg:flex items-center gap-1.5 text-slate-300 dark:text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <LuMail className="w-3.5 h-3.5 text-emerald-400" />
            <span>{clinic.contact.email}</span>
          </a>

          {/* Language Switcher */}
          <div className="border-l rtl:border-l-0 rtl:border-r border-slate-700 dark:border-slate-800 pl-3 rtl:pl-0 rtl:pr-3">
            <LanguageSwitcher compact />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5 border-l rtl:border-l-0 rtl:border-r border-slate-700 dark:border-slate-800 pl-3 rtl:pl-0 rtl:pr-3">
            <a
              href={clinic.leadDoctor.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-3.5 h-3.5" />
            </a>
            <a
              href={clinic.leadDoctor.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-3.5 h-3.5" />
            </a>
            <a
              href={`https://wa.me/${clinic.contact.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
