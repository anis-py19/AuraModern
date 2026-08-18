import React, { useState, useEffect } from "react";
import {
  LuCalendar,
  LuChevronLeft,
  LuChevronRight,
  LuShieldCheck,
} from "react-icons/lu";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import Button from "../common/Button";
import { clinicData } from "../../data/clinicData";
import clinicPhoto2 from "../../assets/CliniquePicture/photo_2_2026-08-16_03-52-40.jpg";
import clinicPhoto3 from "../../assets/CliniquePicture/photo_3_2026-08-16_03-52-40.jpg";
import case9AfterFront from "../../assets/ClientWork/9/photo_1_2026-08-16_03-56-46.jpg";

const slides = [
  {
    image: clinicPhoto2,
    badge: "Dr. LABABOU.N — Algiers",
    title: "Advanced Dental Implants & Aesthetic Dentistry",
    description:
      "Restore function, health, and natural radiance with precision implantology and tailored ceramic veneers in a modern clinical setting.",
    primaryCta: "Book Consultation",
    primaryLink: "/booking",
    secondaryCta: "View Smile Cases",
    secondaryLink: "/gallery",
  },
  {
    image: case9AfterFront,
    badge: "Smile Makeovers",
    title: "Bespoke Ceramic Veneers & Oral Rehabilitation",
    description:
      "Individually designed smile transformations using minimally invasive techniques and premium biocompatible ceramics.",
    primaryCta: "Explore 9 Patient Cases",
    primaryLink: "/gallery",
    secondaryCta: "Treatment Fees",
    secondaryLink: "/pricing",
  },
  {
    image: clinicPhoto3,
    badge: "Clinical Excellence",
    title: "Modern Sterile Facilities & Pain-Free Protocols",
    description:
      "Comprehensive dental care for the entire family. Strict sterilization standards and personalized treatment planning.",
    primaryCta: "Our Services",
    primaryLink: "/services",
    secondaryCta: "WhatsApp Direct",
    secondaryLink: `https://wa.me/${clinicData.contact.whatsapp.replace("+", "")}`,
    isWhatsApp: true,
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full min-h-[540px] sm:min-h-[620px] lg:min-h-[700px] bg-slate-950 overflow-hidden flex items-center">
      {/* Background Image Carousel with Overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle clean gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>
      ))}

      {/* Hero Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <div className="max-w-2xl space-y-6">
          {/* Subtle Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>{slides[current].badge}</span>
          </div>

          {/* Clean Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {slides[current].title}
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-light">
            {slides[current].description}
          </p>

          {/* Key Clinical Trust Indicators */}
          <div className="flex flex-wrap gap-3 pt-1 text-xs text-slate-300">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <FaCheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Dr. LABABOU.N Specialist</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <LuShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Pain-Free Anesthesia</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <span className="text-amber-300 font-semibold">★ 4.9/5</span>
              <span>Patient Satisfaction</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <Button
              to={slides[current].primaryLink}
              variant="primary"
              size="md"
              icon={<LuCalendar className="w-4 h-4" />}
            >
              {slides[current].primaryCta}
            </Button>

            {slides[current].isWhatsApp ? (
              <Button
                href={slides[current].secondaryLink}
                variant="glass"
                size="md"
                icon={<FaWhatsapp className="w-4 h-4 text-emerald-400" />}
              >
                {slides[current].secondaryCta}
              </Button>
            ) : (
              <Button
                to={slides[current].secondaryLink}
                variant="glass"
                size="md"
              >
                {slides[current].secondaryCta}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute right-6 bottom-6 z-20 hidden sm:flex items-center gap-2">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all cursor-pointer"
          aria-label="Previous Slide"
        >
          <LuChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-500/30 text-white flex items-center justify-center transition-all cursor-pointer"
          aria-label="Next Slide"
        >
          <LuChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute left-6 bottom-6 z-20 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === current ? "w-6 bg-emerald-400" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
