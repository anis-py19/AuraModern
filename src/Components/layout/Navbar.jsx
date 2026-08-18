import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  LuSearch,
  LuMenu,
  LuX,
  LuChevronDown,
  LuCalendar,
  LuPhoneCall,
  LuMapPin,
} from "react-icons/lu";
import { FaTooth, FaWhatsapp } from "react-icons/fa";
import Button from "../common/Button";
import Modal from "../common/Modal";
import ThemeToggle from "../common/ThemeToggle";
import LanguageSwitcher from "../common/LanguageSwitcher";
import { getServicesData } from "../../data/servicesData";
import { getClinicData } from "../../data/clinicData";
import { useLanguage } from "../../context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [pagesDropdown, setPagesDropdown] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const { language, t } = useLanguage();

  const clinic = getClinicData(language);
  const services = getServicesData(language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setPagesDropdown(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors py-1.5 px-2.5 rounded-md ${
      isActive
        ? "text-emerald-800 dark:text-emerald-400 font-semibold bg-emerald-50/80 dark:bg-emerald-950/60"
        : "text-slate-700 dark:text-slate-300 hover:text-emerald-800 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `flex items-center justify-between py-3 px-4 rounded-xl text-sm font-semibold transition-colors ${
      isActive
        ? "bg-emerald-900 text-emerald-300 border border-emerald-700/60"
        : "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
    }`;

  const searchResults = searchQuery.trim()
    ? services.filter(
        (s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800 py-2.5"
            : "bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-900 dark:bg-emerald-950 text-amber-300 flex items-center justify-center border border-emerald-700/40 shrink-0">
              <FaTooth className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                  AURA
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 bg-emerald-50/90 dark:bg-emerald-950/70 px-2 py-0.5 rounded-full border border-emerald-200/80 dark:border-emerald-700/40 shadow-xs">
                  Clinic
                </span>
              </div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wide mt-0.5">
                {clinic.arabicName}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <NavLink to="/" className={navLinkClass}>
              {t("nav.home")}
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              {t("nav.about")}
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium py-1.5 px-2.5 rounded-md transition-colors cursor-pointer ${
                  location.pathname.startsWith("/services")
                    ? "text-emerald-800 dark:text-emerald-400 font-semibold bg-emerald-50/80 dark:bg-emerald-950/60"
                    : "text-slate-700 dark:text-slate-300 hover:text-emerald-800 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                }`}
                onClick={() => setServicesDropdown(!servicesDropdown)}
              >
                <span>{t("nav.services")}</span>
                <LuChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdown ? "rotate-180 text-emerald-800 dark:text-emerald-400" : "text-slate-400"
                  }`}
                />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 rtl:left-auto rtl:right-0 w-80 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 p-2.5 z-50 animate-fade-in text-left rtl:text-right">
                  <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 py-1.5 border-b border-slate-100 dark:border-slate-800 mb-1">
                    {t("nav.specializedTreatments")}
                  </div>
                  <div className="space-y-0.5">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services#${service.id}`}
                        className="flex flex-col px-3 py-2 rounded-lg hover:bg-emerald-50/70 dark:hover:bg-slate-800/80 transition-colors"
                      >
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-800 dark:hover:text-emerald-400">
                          {service.title}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                          {service.shortDescription}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 px-3">
                    <Link
                      to="/services"
                      className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300 flex items-center gap-1"
                    >
                      <span>{t("common.viewAllTreatments")}</span>
                      <span className="rtl:rotate-180">→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/gallery" className={navLinkClass}>
              {t("nav.gallery")}
            </NavLink>

            <NavLink to="/dentists" className={navLinkClass}>
              {t("nav.dentists")}
            </NavLink>

            {/* Pages Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPagesDropdown(true)}
              onMouseLeave={() => setPagesDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium py-1.5 px-2.5 rounded-md transition-colors cursor-pointer ${
                  ["/pricing", "/booking"].includes(location.pathname)
                    ? "text-emerald-800 dark:text-emerald-400 font-semibold bg-emerald-50/80 dark:bg-emerald-950/60"
                    : "text-slate-700 dark:text-slate-300 hover:text-emerald-800 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                }`}
                onClick={() => setPagesDropdown(!pagesDropdown)}
              >
                <span>{t("nav.more")}</span>
                <LuChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    pagesDropdown ? "rotate-180 text-emerald-800 dark:text-emerald-400" : "text-slate-400"
                  }`}
                />
              </button>

              {pagesDropdown && (
                <div className="absolute top-full left-0 rtl:left-auto rtl:right-0 w-52 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 p-2 z-50 animate-fade-in text-left rtl:text-right">
                  <Link
                    to="/pricing"
                    className="block px-3.5 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-800 dark:hover:text-emerald-400 transition-colors"
                  >
                    {t("nav.pricing")}
                  </Link>
                  <Link
                    to="/gallery"
                    className="block px-3.5 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-800 dark:hover:text-emerald-400 transition-colors"
                  >
                    {t("nav.gallery")}
                  </Link>
                  <Link
                    to="/booking"
                    className="block px-3.5 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-800 dark:hover:text-emerald-400 transition-colors"
                  >
                    {t("nav.booking")}
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/contact" className={navLinkClass}>
              {t("nav.contact")}
            </NavLink>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            <LanguageSwitcher compact />
            <ThemeToggle compact />

            <button
              onClick={() => setSearchOpen(true)}
              className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer border border-slate-200/80 dark:border-slate-700"
              aria-label={t("common.searchTreatments")}
            >
              <LuSearch className="w-4 h-4" />
            </button>

            <Button to="/booking" variant="primary" size="sm" icon={<LuCalendar className="w-3.5 h-3.5" />}>
              {t("common.bookVisit")}
            </Button>
          </div>

          {/* Mobile Menu & Search Button */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher compact />
            <ThemeToggle compact />

            <button
              onClick={() => setSearchOpen(true)}
              className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center cursor-pointer border border-slate-200/80 dark:border-slate-700"
              aria-label={t("common.searchTreatments")}
            >
              <LuSearch className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-9 h-9 rounded-lg bg-emerald-900 text-white flex items-center justify-center cursor-pointer border border-emerald-700/50"
              aria-label={t("nav.openMenu")}
            >
              <LuMenu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer (Independent from Header Stacking Context) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white dark:bg-slate-950 flex flex-col animate-fade-in text-left rtl:text-right">
          {/* Mobile Drawer Top Bar */}
          <div className="px-4 py-3 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900 shrink-0">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-900 dark:bg-emerald-950 text-amber-300 flex items-center justify-center border border-emerald-700/40 shrink-0">
                <FaTooth className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                    AURA
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 bg-emerald-50/90 dark:bg-emerald-950/70 px-2 py-0.5 rounded-full border border-emerald-200/80 dark:border-emerald-700/40 shadow-xs">
                    Clinic
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {clinic.arabicName}
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <LanguageSwitcher compact />
              <ThemeToggle compact />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-lg bg-emerald-900 text-white flex items-center justify-center cursor-pointer border border-emerald-700/50"
                aria-label={t("nav.closeMenu")}
              >
                <LuX className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Drawer Scrollable Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-1">
              <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
                <span>{t("nav.home")}</span>
                <span className="text-xs text-slate-400">01</span>
              </NavLink>
              <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
                <span>{t("nav.about")}</span>
                <span className="text-xs text-slate-400">02</span>
              </NavLink>
              <NavLink to="/services" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
                <span>{t("nav.services")}</span>
                <span className="text-xs text-slate-400">03</span>
              </NavLink>
              <NavLink to="/gallery" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
                <span>{t("nav.gallery")}</span>
                <span className="text-xs text-slate-400">04</span>
              </NavLink>
              <NavLink to="/dentists" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
                <span>{t("nav.dentists")}</span>
                <span className="text-xs text-slate-400">05</span>
              </NavLink>
              <NavLink to="/pricing" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
                <span>{t("nav.pricing")}</span>
                <span className="text-xs text-slate-400">06</span>
              </NavLink>
              <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
                <span>{t("nav.contact")}</span>
                <span className="text-xs text-slate-400">07</span>
              </NavLink>
            </nav>

            {/* Quick Action CTA Box */}
            <div className="pt-2 space-y-2 border-t border-slate-200/80 dark:border-slate-800">
              <Button to="/booking" variant="primary" size="md" className="w-full" icon={<LuCalendar className="w-4 h-4" />}>
                {t("common.bookAppointment")}
              </Button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${clinic.contact.phone.replace(/\./g, "")}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900"
                >
                  <LuPhoneCall className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{t("common.callReception")}</span>
                </a>
                <a
                  href={`https://wa.me/${clinic.contact.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-900 text-emerald-200 border border-emerald-700/50 text-xs font-semibold"
                >
                  <FaWhatsapp className="w-3.5 h-3.5 text-emerald-300" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Location & Hours Micro-Footer */}
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
                <LuMapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{clinic.contact.city}, {clinic.contact.country}</span>
              </div>
              <p className="font-light">{clinic.contact.hours.weekdays}</p>
            </div>
          </div>
        </div>
      )}

      {/* Global Interactive Search Modal */}
      <Modal isOpen={searchOpen} onClose={() => setSearchOpen(false)} title={t("common.searchTreatments")}>
        <div className="space-y-3.5 text-left rtl:text-right">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("common.searchPlaceholder")}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 pl-10 rtl:pl-4 rtl:pr-10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              autoFocus
            />
            <LuSearch className="w-4 h-4 text-slate-400 absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2" />
          </div>

          {searchQuery.trim() !== "" && (
            <div className="space-y-1.5 mt-3 max-h-60 overflow-y-auto">
              {searchResults.length > 0 ? (
                searchResults.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services#${service.id}`}
                    onClick={() => setSearchOpen(false)}
                    className="block p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-emerald-50/50 dark:hover:bg-slate-800/80 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <h4 className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">{service.title}</h4>
                      <span className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold rtl:rotate-180">
                        →
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 line-clamp-1">{service.shortDescription}</p>
                  </Link>
                ))
              ) : (
                <div className="text-center py-5 text-slate-500 dark:text-slate-400 text-xs">
                  {t("common.noSearchResults", "", { query: searchQuery, phone: clinic.contact.phoneDisplay })}
                </div>
              )}
            </div>
          )}

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
            {t("common.suggestedSearch")}
          </div>
        </div>
      </Modal>
    </>
  );
}
