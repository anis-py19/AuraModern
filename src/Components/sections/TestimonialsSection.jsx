import React, { useState, useEffect } from "react";
import { LuStar, LuQuote, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";
import { testimonials } from "../../data/testimonialsData";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const prevReview = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-slate-900 dark:bg-slate-950 text-white relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Patient Reviews"
          title="Patient Experiences & Testimonials"
          subtitle="Honest reviews from patients treated at Aura Modern Dentistry in Algiers."
          centered
          light
        />

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto mt-8 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 relative">
          <LuQuote className="w-12 h-12 text-white/10 absolute top-6 left-6 pointer-events-none" />

          <div className="relative z-10 space-y-5" key={t.id}>
            {/* Stars */}
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(t.rating)].map((_, i) => (
                <LuStar key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="font-serif text-base sm:text-xl text-slate-100 leading-relaxed font-light italic">
              "{t.quote}"
            </p>

            {/* Author info */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
              <div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span>{t.author}</span>
                  <FaCheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                </h4>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5 font-light">
                  <span className="text-emerald-300">{t.treatment}</span>
                  <span>•</span>
                  <span>{t.date}</span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <LuChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextReview}
                  className="w-9 h-9 rounded-xl bg-emerald-800 hover:bg-emerald-700 border border-emerald-600/40 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <LuChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === current ? "w-6 bg-emerald-400" : "w-1.5 bg-white/30"
              }`}
              aria-label={`Testimonial slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
