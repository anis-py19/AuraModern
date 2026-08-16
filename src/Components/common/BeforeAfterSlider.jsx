import React, { useState, useRef, useCallback } from "react";
import { LuMoveHorizontal } from "react-icons/lu";

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
    <div className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-800 transition-colors">
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
          alt={title ? `${title} After` : "After treatment"}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-3 right-3 z-10 bg-emerald-950/85 backdrop-blur-sm text-emerald-300 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-emerald-500/30 uppercase tracking-wider">
          After Treatment
        </div>

        {/* BEFORE IMAGE (Foreground / Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={title ? `${title} Before` : "Before treatment"}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-3 left-3 z-10 bg-slate-900/85 backdrop-blur-sm text-slate-200 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/20 uppercase tracking-wider">
            Initial State
          </div>
        </div>

        {/* DRAG HANDLE DIVIDER */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-md z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-800 text-emerald-900 dark:text-emerald-300 shadow-md flex items-center justify-center border border-slate-200 dark:border-slate-700">
            <LuMoveHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* CARD METADATA */}
      {(title || subtitle || category) && (
        <div className="p-5 bg-white dark:bg-slate-900">
          {category && (
            <span className="text-[11px] font-medium text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded mb-2 inline-block">
              {category}
            </span>
          )}
          {title && (
            <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
