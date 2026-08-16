import React from "react";
import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  icon,
  disabled = false,
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide rounded-xl transition-all duration-300 active:scale-[0.98] cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-emerald-800 hover:bg-emerald-900 text-white shadow-lg shadow-emerald-900/20 hover:shadow-xl hover:shadow-emerald-900/30 hover:-translate-y-0.5 focus:ring-emerald-700",
    gold:
      "bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 hover:-translate-y-0.5 focus:ring-amber-400",
    outline:
      "border-2 border-emerald-800 text-emerald-900 hover:bg-emerald-800 hover:text-white focus:ring-emerald-700",
    outlineWhite:
      "border-2 border-white/80 text-white hover:bg-white hover:text-slate-950 focus:ring-white",
    ghost:
      "text-emerald-900 hover:bg-emerald-50 focus:ring-emerald-700",
    glass:
      "bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 shadow-lg",
    dark:
      "bg-slate-900 hover:bg-slate-950 text-white shadow-lg hover:-translate-y-0.5 focus:ring-slate-800",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    disabled ? "opacity-50 pointer-events-none cursor-not-allowed" : ""
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {children}
        {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
        {icon && <span>{icon}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
}
