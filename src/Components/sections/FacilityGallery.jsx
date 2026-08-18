import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import SectionTitle from "../common/SectionTitle";
import Modal from "../common/Modal";
import Badge from "../common/Badge";
import { getFacilityGallery } from "../../data/galleryData";
import { useLanguage } from "../../context/LanguageContext";

export default function FacilityGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const { language, t } = useLanguage();
  const facility = getFacilityGallery(language);

  return (
    <section id="facility" className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-[#070b10] relative overflow-hidden transition-colors text-left rtl:text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge={t("facility.badge")}
          title={t("facility.title")}
          subtitle={t("facility.subtitle")}
          centered
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {facility.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-slate-900 cursor-pointer aspect-4/3 border border-slate-200/60 dark:border-slate-800"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/40" />

              {/* Badge */}
              <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 z-10">
                <Badge variant="photo" size="sm">
                  {item.badge}
                </Badge>
              </div>

              {/* Preview Icon */}
              <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 z-10 w-7 h-7 rounded bg-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <LuEye className="w-3.5 h-3.5" />
              </div>

              {/* Title & Description */}
              <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                <h4 className="font-serif text-base font-bold text-white mb-0.5">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-1 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal View */}
      <Modal isOpen={!!selectedPhoto} onClose={() => setSelectedPhoto(null)}>
        {selectedPhoto && (
          <div className="space-y-3.5 text-left rtl:text-right">
            <div className="rounded-xl overflow-hidden max-h-[60vh] bg-slate-950">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain mx-auto"
                loading="lazy"
              />
            </div>
            <div className="pt-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                  {selectedPhoto.title}
                </h3>
                <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-0.5 rounded">
                  {selectedPhoto.category}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
