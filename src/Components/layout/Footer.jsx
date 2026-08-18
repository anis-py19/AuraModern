import React from "react";
import { Link } from "react-router-dom";
import {
  LuPhone,
  LuClock,
  LuMapPin,
  LuArrowRight,
  LuShieldCheck,
} from "react-icons/lu";
import { FaTooth, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { getClinicData } from "../../data/clinicData";
import { getServicesData } from "../../data/servicesData";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { language, t } = useLanguage();
  const clinic = getClinicData(language);
  const services = getServicesData(language);

  return (
    <footer className="bg-slate-950 text-slate-400 pt-12 pb-8 border-t border-slate-900 text-left rtl:text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-900">
          {/* Col 1: Brand & Clinic Info */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-900 text-amber-300 flex items-center justify-center">
                <FaTooth className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-lg font-bold tracking-tight text-white leading-none">
                    AURA
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                    Clinic
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 mt-0.5">
                  {clinic.arabicName}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-light">
              {t("footer.bio")}
            </p>

            <div className="pt-0.5">
              <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15 backdrop-blur-md">
                <LuShieldCheck className="w-3 h-3 shrink-0" />
                <span>{t("common.certifiedProtocols")}</span>
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={clinic.leadDoctor.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-3 h-3" />
              </a>
              <a
                href={clinic.leadDoctor.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-3 h-3" />
              </a>
              <a
                href={`https://wa.me/${clinic.contact.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t("footer.colNav")}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <LuArrowRight className="w-3 h-3 text-emerald-500 shrink-0 rtl:rotate-180" />
                  <span>{t("nav.home")}</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <LuArrowRight className="w-3 h-3 text-emerald-500 shrink-0 rtl:rotate-180" />
                  <span>{t("nav.about")}</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <LuArrowRight className="w-3 h-3 text-emerald-500 shrink-0 rtl:rotate-180" />
                  <span>{t("nav.services")}</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <LuArrowRight className="w-3 h-3 text-emerald-500 shrink-0 rtl:rotate-180" />
                  <span>{t("nav.gallery")}</span>
                </Link>
              </li>
              <li>
                <Link to="/dentists" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <LuArrowRight className="w-3 h-3 text-emerald-500 shrink-0 rtl:rotate-180" />
                  <span>{t("nav.dentists")}</span>
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <LuArrowRight className="w-3 h-3 text-emerald-500 shrink-0 rtl:rotate-180" />
                  <span>{t("nav.pricing")}</span>
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <LuArrowRight className="w-3 h-3 text-emerald-500 shrink-0 rtl:rotate-180" />
                  <span>{t("nav.booking")}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Treatments */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t("footer.colTreatments")}
            </h4>
            <ul className="space-y-1.5 text-xs">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="hover:text-emerald-400 transition-colors flex items-center justify-between text-slate-400 py-0.5 group"
                  >
                    <span>{service.title}</span>
                    <span className="text-xs text-slate-600 group-hover:text-emerald-400 transition-colors rtl:rotate-180">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t("footer.colContact")}
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <LuMapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">{clinic.contact.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <LuPhone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${clinic.contact.phone.replace(/\./g, "")}`}
                  className="font-mono font-bold text-white hover:text-emerald-400"
                >
                  {clinic.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2 pt-0.5">
                <LuClock className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300">{clinic.contact.hours.weekdays}</p>
                  <p className="text-slate-500 text-[11px] mt-0.5">{clinic.contact.hours.friday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>
            © {new Date().getFullYear()} {clinic.name} ({clinic.arabicName}). {clinic.leadDoctor.name}. {t("common.allRightsReserved")}
          </p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-slate-300">
              {t("footer.clinicalStandards")}
            </Link>
            <Link to="/contact" className="hover:text-slate-300">
              {t("footer.locationAccess")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
