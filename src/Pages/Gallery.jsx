import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuCalendar } from "react-icons/lu";
import BeforeAfterSlider from "../Components/common/BeforeAfterSlider";
import Button from "../Components/common/Button";
import Badge from "../Components/common/Badge";
import { getClinicalCases } from "../data/galleryData";
import { useLanguage } from "../context/LanguageContext";

export default function Gallery() {
  const { language, t } = useLanguage();
  const cases = getClinicalCases(language);
  const [selectedCatId, setSelectedCatId] = useState("all");

  const categories = [
    { id: "all", label: t("gallery.allCases") },
    { id: "veneers", label: language === "fr" ? "Facettes & Esthétique" : language === "ar" ? "الفينيرز والتجميل" : "Veneers & Aesthetics" },
    { id: "bridges", label: language === "fr" ? "Couronnes & Bridges" : language === "ar" ? "التيجان والجسور" : "Crowns & Bridges" },
    { id: "implants", label: language === "fr" ? "Implants Dentaires" : language === "ar" ? "زراعة الأسنان" : "Dental Implants" },
    { id: "whitening", label: language === "fr" ? "Hygiène & Blanchiment" : language === "ar" ? "التنظيف والتبييض" : "Hygiene & Whitening" },
  ];

  const filteredCases =
    selectedCatId === "all"
      ? cases
      : cases.filter((c) => c.categoryId === selectedCatId || c.category.toLowerCase().includes(selectedCatId));

  return (
    <div className="animate-fade-in text-left rtl:text-right">
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-12 sm:py-16 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <Badge light size="md">
            {t("gallery.badge")}
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {t("gallery.heroTitle")}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            {t("gallery.heroSubtitle")}
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
            <Link to="/" className="hover:text-white transition-colors">
              {t("nav.home")}
            </Link>
            <span>/</span>
            <span className="text-emerald-400">{t("nav.gallery")}</span>
          </div>
        </div>
      </div>

      {/* Gallery Section with Category Filters */}
      <div className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-[#070b10] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCatId(cat.id)}
                className={`py-1.5 px-3.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCatId === cat.id
                    ? "bg-emerald-900 text-emerald-200 border border-emerald-700/60 shadow-sm"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cases Grid with Interactive Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((c) => (
              <div key={c.id} className="space-y-2.5">
                <BeforeAfterSlider
                  beforeImage={c.beforeImage}
                  afterImage={c.afterImage}
                  title={c.title}
                  subtitle={c.description}
                  category={c.category}
                />
                <div className="flex items-center justify-between px-1 text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-emerald-800 dark:text-emerald-400">{c.treatment}</span>
                  <span>{c.timeframe}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consultation Banner */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200/80 dark:border-slate-800 text-center max-w-2xl mx-auto space-y-3 mt-12">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {t("gallery.ctaTitle")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              {t("gallery.ctaSubtitle")}
            </p>
            <div className="pt-2 flex justify-center">
              <Button to="/booking" variant="primary" size="sm" icon={<LuCalendar className="w-3.5 h-3.5" />}>
                {t("gallery.ctaBtn")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
