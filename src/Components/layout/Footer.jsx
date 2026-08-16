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
import { clinicData } from "../../data/clinicData";
import { servicesData } from "../../data/servicesData";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-14 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-900">
          {/* Col 1: Brand & Clinic Info */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-800 flex items-center justify-center text-amber-300">
                <FaTooth className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-xl font-bold tracking-tight text-white leading-none">
                    AURA
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                    Clinic
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 mt-0.5">
                  {clinicData.arabicName}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              Directed by <strong>Dr. LABABOU.N</strong>, Aura Modern Dentistry provides specialized implantology, cosmetic porcelain veneers, and pain-free dental treatments in Algiers.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/40">
                <LuShieldCheck className="w-3.5 h-3.5" />
                <span>Certified European Standards</span>
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={clinicData.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={clinicData.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://wa.me/${clinicData.contact.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <LuArrowRight className="w-3 h-3 text-emerald-500" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <LuArrowRight className="w-3 h-3 text-emerald-500" />
                  <span>About Clinic</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <LuArrowRight className="w-3 h-3 text-emerald-500" />
                  <span>Treatments</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <LuArrowRight className="w-3 h-3 text-emerald-500" />
                  <span>Patient Results</span>
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <LuArrowRight className="w-3 h-3 text-emerald-500" />
                  <span>Pricing</span>
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <LuArrowRight className="w-3 h-3 text-emerald-500" />
                  <span>Appointment</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Treatments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="hover:text-emerald-400 transition-colors flex items-center justify-between text-slate-400"
                  >
                    <span>{service.title}</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                      {service.startingPrice}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact & Hours
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <LuMapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">{clinicData.contact.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <LuPhone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${clinicData.contact.phone.replace(/\./g, "")}`}
                  className="font-mono font-bold text-white hover:text-emerald-400"
                >
                  {clinicData.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2 pt-0.5">
                <LuClock className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300">{clinicData.contact.hours.weekdays}</p>
                  <p className="text-slate-500 text-[11px] mt-0.5">{clinicData.contact.hours.friday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} Aura Modern Dentistry ({clinicData.arabicName}). Dr. LABABOU.N.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/about" className="hover:text-slate-300">
              Clinical Standards
            </Link>
            <Link to="/contact" className="hover:text-slate-300">
              Location & Access
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
