import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  LuSearch,
  LuMenu,
  LuX,
  LuChevronDown,
  LuCalendar,
  LuSparkles,
  LuPhoneCall,
} from "react-icons/lu";
import { FaTooth } from "react-icons/fa";
import Button from "../common/Button";
import Modal from "../common/Modal";
import ThemeToggle from "../common/ThemeToggle";
import { servicesData } from "../../data/servicesData";
import { clinicData } from "../../data/clinicData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [pagesDropdown, setPagesDropdown] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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

  const navLinkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors py-2 px-3 rounded-lg ${
      isActive
        ? "text-emerald-800 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/60"
        : "text-slate-700 dark:text-slate-300 hover:text-emerald-800 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60"
    }`;

  const searchResults = searchQuery.trim()
    ? servicesData.filter(
        (s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-200/70 dark:border-slate-800/80 py-3"
            : "bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-950 flex items-center justify-center text-amber-300 shadow-lg shadow-emerald-900/20 group-hover:scale-105 transition-transform duration-300">
              <FaTooth className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                  AURA
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-200/60 dark:border-amber-500/30">
                  Clinic
                </span>
              </div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wide mt-0.5">
                {clinicData.arabicName}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium py-2 px-3 rounded-lg transition-colors cursor-pointer ${
                  location.pathname.startsWith("/services")
                    ? "text-emerald-800 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/60"
                    : "text-slate-700 dark:text-slate-300 hover:text-emerald-800 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                }`}
                onClick={() => setServicesDropdown(!servicesDropdown)}
              >
                <span>Services</span>
                <LuChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdown ? "rotate-180 text-emerald-800 dark:text-emerald-400" : "text-slate-400"
                  }`}
                />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 p-3 z-50 animate-fade-in">
                  <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 py-1.5 border-b border-slate-100 dark:border-slate-800 mb-1">
                    Specialized Treatments
                  </div>
                  <div className="space-y-1">
                    {servicesData.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services#${service.id}`}
                        className="flex flex-col px-3 py-2 rounded-xl hover:bg-emerald-50/70 dark:hover:bg-slate-800/80 transition-colors group"
                      >
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-800 dark:group-hover:text-emerald-400">
                          {service.title}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
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
                      <span>Explore all dental services</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/gallery" className={navLinkClass}>
              Cases & Results
            </NavLink>

            <NavLink to="/dentists" className={navLinkClass}>
              Specialists
            </NavLink>

            {/* Pages Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPagesDropdown(true)}
              onMouseLeave={() => setPagesDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium py-2 px-3 rounded-lg transition-colors cursor-pointer ${
                  ["/pricing", "/booking"].includes(location.pathname)
                    ? "text-emerald-800 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/60"
                    : "text-slate-700 dark:text-slate-300 hover:text-emerald-800 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                }`}
                onClick={() => setPagesDropdown(!pagesDropdown)}
              >
                <span>Pages</span>
                <LuChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    pagesDropdown ? "rotate-180 text-emerald-800 dark:text-emerald-400" : "text-slate-400"
                  }`}
                />
              </button>

              {pagesDropdown && (
                <div className="absolute top-full left-0 w-56 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 p-2 z-50 animate-fade-in">
                  <Link
                    to="/pricing"
                    className="block px-4 py-2.5 rounded-xl text-sm text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-800 dark:hover:text-emerald-400 font-medium transition-colors"
                  >
                    Pricing & Plans
                  </Link>
                  <Link
                    to="/gallery"
                    className="block px-4 py-2.5 rounded-xl text-sm text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-800 dark:hover:text-emerald-400 font-medium transition-colors"
                  >
                    Facility & Cases
                  </Link>
                  <Link
                    to="/booking"
                    className="block px-4 py-2.5 rounded-xl text-sm text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-800 dark:hover:text-emerald-400 font-medium transition-colors"
                  >
                    Book Consultation
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle compact />

            <button
              onClick={() => setSearchOpen(true)}
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer border border-slate-200/80 dark:border-slate-700"
              aria-label="Search services"
            >
              <LuSearch className="w-4 h-4" />
            </button>

            <Button to="/booking" variant="primary" size="md" icon={<LuCalendar className="w-4 h-4" />}>
              Appointment
            </Button>
          </div>

          {/* Mobile Menu & Search Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle compact />

            <button
              onClick={() => setSearchOpen(true)}
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center cursor-pointer border border-slate-200/80 dark:border-slate-700"
              aria-label="Search"
            >
              <LuSearch className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center shadow-md cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[60px] bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-2xl px-6 py-6 overflow-y-auto animate-fade-in z-50">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="py-2.5 px-4 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-800 dark:hover:text-emerald-400"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="py-2.5 px-4 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-800 dark:hover:text-emerald-400"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="py-2.5 px-4 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-800 dark:hover:text-emerald-400"
              >
                Services & Treatments
              </Link>
              <Link
                to="/gallery"
                className="py-2.5 px-4 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-800 dark:hover:text-emerald-400"
              >
                Before & After Gallery
              </Link>
              <Link
                to="/dentists"
                className="py-2.5 px-4 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-800 dark:hover:text-emerald-400"
              >
                Meet Dr. LABABOU.N
              </Link>
              <Link
                to="/pricing"
                className="py-2.5 px-4 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-800 dark:hover:text-emerald-400"
              >
                Pricing & Plans
              </Link>
              <Link
                to="/contact"
                className="py-2.5 px-4 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-800 dark:hover:text-emerald-400"
              >
                Contact & Location
              </Link>

              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
                <Button to="/booking" variant="primary" size="lg" className="w-full">
                  Book Appointment Now
                </Button>
                <a
                  href={`tel:${clinicData.contact.phone.replace(/\./g, "")}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <LuPhoneCall className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  <span>Call {clinicData.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Interactive Search Modal */}
      <Modal isOpen={searchOpen} onClose={() => setSearchOpen(false)} title="Search Treatments & Services">
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. Veneers, Implants, Whitening, Root Canal..."
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 pl-12 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              autoFocus
            />
            <LuSearch className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>

          {searchQuery.trim() !== "" && (
            <div className="space-y-2 mt-4 max-h-64 overflow-y-auto">
              {searchResults.length > 0 ? (
                searchResults.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services#${service.id}`}
                    onClick={() => setSearchOpen(false)}
                    className="block p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-700 hover:bg-emerald-50/60 dark:hover:bg-slate-800/80 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-slate-900 dark:text-white">{service.title}</h4>
                      <span className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                        {service.startingPrice}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">{service.shortDescription}</p>
                  </Link>
                ))
              ) : (
                <div className="text-center py-6 text-slate-500 dark:text-slate-400 text-sm">
                  No treatments found matching "{searchQuery}". Call us at {clinicData.contact.phoneDisplay} for immediate assistance.
                </div>
              )}
            </div>
          )}

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
            <span className="flex items-center gap-1">
              <LuSparkles className="w-3.5 h-3.5 text-amber-500" />
              Popular: Implants, E-max Veneers, Laser Whitening
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
}
