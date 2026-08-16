import React from "react";
import { LuClock, LuPhone, LuMail } from "react-icons/lu";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import ThemeToggle from "../common/ThemeToggle";
import { clinicData } from "../../data/clinicData";

export default function Topbar() {
  return (
    <div className="bg-slate-900 dark:bg-slate-950 text-slate-300 dark:text-slate-400 text-xs py-2 px-4 sm:px-8 border-b border-slate-800 hidden md:block transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Hours & Location */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-slate-300 dark:text-slate-400">
            <LuClock className="w-3.5 h-3.5 text-emerald-400" />
            <span>{clinicData.contact.hours.summary}</span>
          </div>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">{clinicData.contact.address}</span>
        </div>

        {/* Right: Contact info, ThemeToggle & Socials */}
        <div className="flex items-center gap-5">
          <a
            href={`tel:${clinicData.contact.phone.replace(/\./g, "")}`}
            className="flex items-center gap-1.5 text-slate-200 dark:text-slate-300 hover:text-emerald-400 transition-colors font-medium"
          >
            <LuPhone className="w-3.5 h-3.5 text-emerald-400" />
            <span>{clinicData.contact.phoneDisplay}</span>
          </a>

          <a
            href={`mailto:${clinicData.contact.email}`}
            className="hidden lg:flex items-center gap-1.5 text-slate-300 dark:text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <LuMail className="w-3.5 h-3.5 text-emerald-400" />
            <span>{clinicData.contact.email}</span>
          </a>

          <ThemeToggle compact />

          {/* Social Icons */}
          <div className="flex items-center gap-3 border-l border-slate-700 dark:border-slate-800 pl-4">
            <a
              href={clinicData.leadDoctor.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-3.5 h-3.5" />
            </a>
            <a
              href={clinicData.leadDoctor.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-3.5 h-3.5" />
            </a>
            <a
              href={`https://wa.me/${clinicData.contact.whatsapp.replace("+", "")}`}
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
