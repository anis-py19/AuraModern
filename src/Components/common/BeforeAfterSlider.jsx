import React, { useState, useRef, useCallback } from "react";
import { LuMoveHorizontal } from "react-icons/lu";
import Badge from "./Badge";
import { useLanguage } from "../../context/LanguageContext";

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  subtitle,
  category,
  aspectRatio = "aspect-4/3",
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const { t } = useLanguage();

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  }, []);

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200/80 dark:border-slate-800 transition-colors text-left rtl:text-right">
      <div
        ref={containerRef}
        className={`relative w-full ${aspectRatio} select-none overflow-hidden cursor-ew-resize bg-slate-900`}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER IMAGE (Background / Full Width) */}
        <img
          src={afterImage}
          alt={title ? `${title} ${t("common.after")}` : t("common.after")}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
          loading="lazy"
        />
        <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 z-10 bg-slate-950/80 text-emerald-300 text-[11px] font-semibold px-2.5 py-1 rounded border border-emerald-500/30 uppercase tracking-wider">
          {t("common.after")}
        </div>

        {/* BEFORE IMAGE (Foreground / Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={title ? `${title} ${t("common.before")}` : t("common.before")}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
            loading="lazy"
          />
          <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 z-10 bg-slate-950/80 text-slate-300 text-[11px] font-semibold px-2.5 py-1 rounded border border-white/20 uppercase tracking-wider">
            {t("common.before")}
          </div>
        </div>

        {/* DRAG HANDLE DIVIDER */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-md flex items-center justify-center border border-slate-300 dark:border-slate-600">
            <LuMoveHorizontal className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* CARD METADATA */}
      {(title || subtitle || category) && (
        <div className="p-4 bg-white dark:bg-slate-900">
          {category && (
            <div className="mb-2">
              <Badge size="sm">
                {category}
              </Badge>
            </div>
          )}
          {title && (
            <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white mb-1">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
