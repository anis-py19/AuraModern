import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import SectionTitle from "../common/SectionTitle";
import Modal from "../common/Modal";
import { facilityGallery } from "../../data/galleryData";

export default function FacilityGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="facility" className="py-20 lg:py-28 bg-slate-50 dark:bg-[#070b10] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Virtual Clinic Tour"
          title="Designed for Your Absolute Comfort & Safety"
          subtitle="Take a look inside Aura Modern Dentistry in Algiers. Pristine sterilization protocols and a calming luxury environment."
          centered
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilityGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-slate-900 cursor-pointer aspect-4/3 border border-transparent dark:border-slate-800"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent transition-opacity" />

              {/* Badge */}
              <div className="absolute top-4 left-4 z-10 bg-emerald-950/80 backdrop-blur-md text-amber-300 text-[10px] font-bold px-3 py-1 rounded-full border border-emerald-500/30 uppercase tracking-wider">
                {item.badge}
              </div>

              {/* Preview Button */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <LuEye className="w-4 h-4" />
              </div>

              {/* Title & Description */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white transform group-hover:-translate-y-1 transition-transform">
                <h4 className="font-serif text-lg font-bold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2">
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
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden max-h-[60vh] bg-slate-950">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain mx-auto"
                loading="lazy"
              />
            </div>
            <div className="pt-2">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedPhoto.title}
                </h3>
                <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1 rounded-full">
                  {selectedPhoto.category}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
