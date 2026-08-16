import React from "react";

export default function SectionTitle({
  badge,
  title,
  subtitle,
  centered = false,
  light = false,
}) {
  return (
    <div className={`mb-10 sm:mb-12 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 transition-colors ${
            light
              ? "bg-white/10 text-amber-300 border border-white/20"
              : "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
          <span>{badge}</span>
        </div>
      )}
      <h2
        className={`font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-3 transition-colors ${
          light ? "text-white" : "text-slate-900 dark:text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed transition-colors ${
            light ? "text-slate-200 font-light" : "text-slate-600 dark:text-slate-300 font-light"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
