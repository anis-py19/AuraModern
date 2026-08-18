import React from "react";
import Badge from "./Badge";

export default function SectionTitle({
  badge,
  title,
  subtitle,
  centered = false,
  light = false,
}) {
  return (
    <div className={`mb-8 sm:mb-10 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
      {badge && (
        <div className="mb-3">
          <Badge light={light} size="md">
            {badge}
          </Badge>
        </div>
      )}
      <h2
        className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-2.5 transition-colors ${
          light ? "text-white" : "text-slate-900 dark:text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed transition-colors ${
            light ? "text-slate-300 font-light" : "text-slate-600 dark:text-slate-400 font-light"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
