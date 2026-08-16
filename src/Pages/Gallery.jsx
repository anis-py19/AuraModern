import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LuSparkles,
  LuCalendar,
} from "react-icons/lu";
import BeforeAfterSlider from "../Components/common/BeforeAfterSlider";
import Button from "../Components/common/Button";
import { clinicalCases } from "../data/galleryData";

const categories = [
  "All Cases",
  "Veneers & Aesthetics",
  "Full Rehabilitation",
  "Crowns & Bridges",
  "Implants & Bridges",
  "Hygiene & Whitening",
];

export default function Gallery() {
  const [selectedCat, setSelectedCat] = useState("All Cases");

  const filteredCases =
    selectedCat === "All Cases"
      ? clinicalCases
      : clinicalCases.filter((c) =>
          c.category.toLowerCase().includes(selectedCat.toLowerCase())
        );

  return (
    <div className="animate-fade-in">
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-slate-950 to-slate-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <LuSparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Clinical Evidence & Transformations</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Real Patient Smile Makeovers
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Every case below was treated and photographed at Aura Modern Dentistry by Dr. LABABOU.N. Drag the slider to see initial vs final results.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-amber-300">Cases Gallery</span>
          </div>
        </div>
      </div>

      {/* Gallery Section with Category Filters */}
      <div className="py-20 lg:py-28 bg-slate-50 dark:bg-[#070b10] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`py-2.5 px-5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCat === cat
                    ? "bg-emerald-900 text-amber-300 shadow-lg scale-105"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cases Grid with Interactive Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((c) => (
              <div key={c.id} className="space-y-3">
                <BeforeAfterSlider
                  beforeImage={c.beforeImage}
                  afterImage={c.afterImage}
                  title={c.title}
                  subtitle={c.description}
                  category={c.category}
                />
                <div className="flex items-center justify-between px-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-emerald-800 dark:text-emerald-400">{c.treatment}</span>
                  <span>{c.timeframe}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consultation Banner */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 dark:border-slate-800 text-center max-w-3xl mx-auto space-y-4 mt-16">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Ready to Begin Your Own Smile Transformation?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              Book an appointment with Dr. LABABOU.N for a full aesthetic digital diagnostic exam and personalized quotation.
            </p>
            <div className="pt-2 flex justify-center">
              <Button to="/booking" variant="primary" size="lg" icon={<LuCalendar className="w-5 h-5" />}>
                Book Diagnostic Exam
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
