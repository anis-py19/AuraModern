import React, { useState, useEffect } from "react";
import { LuStar, LuQuote, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";
import { getTestimonialsData } from "../../data/testimonialsData";
import { useLanguage } from "../../context/LanguageContext";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const { language, t } = useLanguage();
  const reviews = getTestimonialsData(language);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const prevReview = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const currentReview = reviews[current] || reviews[0];

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-slate-900 dark:bg-slate-950 text-white relative transition-colors text-left rtl:text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge={t("testimonials.badge")}
          title={t("testimonials.title")}
          subtitle={t("testimonials.subtitle")}
          centered
          light
        />

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto mt-6 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 relative">
          <LuQuote className="w-10 h-10 text-white/10 absolute top-5 left-5 rtl:left-auto rtl:right-5 pointer-events-none" />

          <div className="relative z-10 space-y-4" key={currentReview.id}>
            {/* Stars */}
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(currentReview.rating)].map((_, i) => (
                <LuStar key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="font-serif text-base sm:text-lg text-slate-100 leading-relaxed font-light italic">
              "{currentReview.quote}"
            </p>

            {/* Author info */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
              <div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span>{currentReview.author}</span>
                  <FaCheckCircle className="w-3 h-3 text-emerald-400" />
                </h4>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5 font-light">
                  <span className="text-emerald-300">{currentReview.treatment}</span>
                  <span>•</span>
                  <span>{currentReview.date}</span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={prevReview}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <LuChevronLeft className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
                <button
                  onClick={nextReview}
                  className="w-8 h-8 rounded-lg bg-emerald-800 hover:bg-emerald-700 border border-emerald-600/40 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <LuChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-1.5 mt-5">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === current ? "w-5 bg-emerald-400" : "w-1.5 bg-white/30"
              }`}
              aria-label={`Testimonial slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
