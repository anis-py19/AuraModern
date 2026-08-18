import React, { useState, useEffect, useCallback } from "react";
import {
  LuCalendar,
  LuChevronLeft,
  LuChevronRight,
  LuShieldCheck,
} from "react-icons/lu";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import Button from "../common/Button";
import Badge from "../common/Badge";
import { getClinicData } from "../../data/clinicData";
import { useLanguage } from "../../context/LanguageContext";
import clinicPhoto2 from "../../assets/CliniquePicture/photo_2_2026-08-16_03-52-40.jpg";
import clinicPhoto3 from "../../assets/CliniquePicture/photo_3_2026-08-16_03-52-40.jpg";
import case9AfterFront from "../../assets/ClientWork/9/photo_1_2026-08-16_03-56-46.jpg";

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { language, t } = useLanguage();
  const clinic = getClinicData(language);

  const heroSlides = [
    {
      image: clinicPhoto2,
      badge: `${clinic.leadDoctor.name} — ${clinic.contact.city}`,
      title: t("hero.slides.0.title"),
      description: t("hero.slides.0.subtitle"),
      primaryCta: t("common.scheduleConsultation"),
      primaryLink: "/booking",
      secondaryCta: t("common.viewCases"),
      secondaryLink: "/gallery",
    },
    {
      image: case9AfterFront,
      badge: t("gallery.badge"),
      title: t("hero.slides.1.title"),
      description: t("hero.slides.1.subtitle"),
      primaryCta: t("common.viewCases"),
      primaryLink: "/gallery",
      secondaryCta: t("nav.pricing"),
      secondaryLink: "/pricing",
    },
    {
      image: clinicPhoto3,
      badge: t("common.certifiedProtocols"),
      title: t("hero.slides.2.title"),
      description: t("hero.slides.2.subtitle"),
      primaryCta: t("nav.services"),
      primaryLink: "/services",
      secondaryCta: t("common.chatWhatsApp"),
      secondaryLink: `https://wa.me/${clinic.contact.whatsapp.replace("+", "")}`,
      isWhatsApp: true,
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative w-full min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] bg-slate-950 overflow-hidden flex items-center text-left rtl:text-right"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Carousel with Overlay */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlay for high text legibility */}
          <div className="absolute inset-0 bg-slate-950/80 sm:bg-gradient-to-r sm:from-slate-950/95 sm:via-slate-950/80 sm:to-slate-950/40 rtl:sm:bg-gradient-to-l rtl:sm:from-slate-950/95 rtl:sm:via-slate-950/80 rtl:sm:to-slate-950/40" />
        </div>
      ))}

      {/* Hero Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20 w-full">
        <div className="max-w-2xl space-y-5">
          {/* Subtle Pill */}
          <Badge light size="md">
            {heroSlides[current].badge}
          </Badge>

          {/* Clean Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {heroSlides[current].title}
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            {heroSlides[current].description}
          </p>

          {/* Key Clinical Trust Indicators */}
          <div className="flex flex-wrap gap-2.5 pt-1 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">
              <FaCheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{clinic.leadDoctor.name} ({clinic.leadDoctor.title.split(",")[0]})</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">
              <LuShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{t("common.certifiedProtocols")}</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              to={heroSlides[current].primaryLink}
              variant="primary"
              size="md"
              icon={<LuCalendar className="w-4 h-4" />}
            >
              {heroSlides[current].primaryCta}
            </Button>

            {heroSlides[current].isWhatsApp ? (
              <Button
                href={heroSlides[current].secondaryLink}
                variant="glass"
                size="md"
                icon={<FaWhatsapp className="w-4 h-4 text-emerald-300" />}
              >
                {heroSlides[current].secondaryCta}
              </Button>
            ) : (
              <Button
                to={heroSlides[current].secondaryLink}
                variant="glass"
                size="md"
              >
                {heroSlides[current].secondaryCta}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute right-6 rtl:right-auto rtl:left-6 bottom-6 z-20 hidden sm:flex items-center gap-2">
        <button
          onClick={prevSlide}
          className="w-9 h-9 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Previous Slide"
        >
          <LuChevronLeft className="w-4 h-4 rtl:rotate-180" />
        </button>
        <button
          onClick={nextSlide}
          className="w-9 h-9 rounded-lg bg-emerald-900 hover:bg-emerald-800 border border-emerald-700 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Next Slide"
        >
          <LuChevronRight className="w-4 h-4 rtl:rotate-180" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute left-6 rtl:left-auto rtl:right-6 bottom-6 z-20 flex items-center gap-1.5">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === current ? "w-5 bg-emerald-400" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
