import React from "react";

export default function Badge({
  children,
  variant = "emerald",
  size = "md",
  dot = false,
  icon,
  className = "",
  light = false,
}) {
  const sizeClasses = {
    sm: "px-2.5 py-1 text-[11px] gap-1.5",
    md: "px-3 py-1 text-xs gap-1.5",
    lg: "px-3.5 py-1.5 text-xs gap-2",
  };

  const getVariantClasses = () => {
    if (variant === "photo" || variant === "overlay") {
      return "bg-slate-950/90 text-emerald-300 border border-slate-700/80 shadow-md backdrop-blur-md";
    }

    if (light) {
      return "bg-slate-900/90 text-emerald-300 border border-slate-700/80 shadow-sm backdrop-blur-md";
    }

    switch (variant) {
      case "glass":
        return "bg-slate-900/90 text-white border border-slate-700/80 shadow-sm backdrop-blur-md";
      case "gold":
        return "bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-200/80 dark:border-amber-700/40";
      case "slate":
        return "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700";
      case "emerald":
      default:
        return "bg-emerald-50/90 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-700/50 shadow-xs";
    }
  };

  const getDotColor = () => {
    if (light || variant === "photo" || variant === "overlay" || variant === "glass") {
      return "bg-emerald-400";
    }
    switch (variant) {
      case "gold":
        return "bg-amber-500";
      case "slate":
        return "bg-slate-400";
      case "emerald":
      default:
        return "bg-emerald-500 dark:bg-emerald-400";
    }
  };

  return (
    <div
      className={`inline-flex items-center rounded-full font-semibold uppercase tracking-wider transition-all duration-200 ${
        sizeClasses[size] || sizeClasses.md
      } ${getVariantClasses()} ${className}`}
    >
      {icon ? (
        <span className="shrink-0 text-current">{icon}</span>
      ) : dot ? (
        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${getDotColor()}`} />
      ) : null}
      <span className="leading-none">{children}</span>
    </div>
  );
}
