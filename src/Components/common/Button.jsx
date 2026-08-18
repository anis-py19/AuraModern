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
    "inline-flex items-center justify-center font-medium tracking-wide rounded-lg transition-colors duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-emerald-800 hover:bg-emerald-900 text-white shadow-sm focus:ring-emerald-700",
    secondary:
      "bg-slate-800 hover:bg-slate-900 text-white shadow-sm focus:ring-slate-700",
    gold:
      "bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold shadow-sm focus:ring-amber-400",
    outline:
      "border border-emerald-800 dark:border-emerald-500 text-emerald-900 dark:text-emerald-300 hover:bg-emerald-800 hover:text-white dark:hover:bg-emerald-700 focus:ring-emerald-700",
    outlineWhite:
      "border border-white/70 text-white hover:bg-white hover:text-slate-950 focus:ring-white",
    ghost:
      "text-emerald-900 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-slate-800 focus:ring-emerald-700",
    glass:
      "bg-white/10 hover:bg-white/20 border border-white/20 text-white focus:ring-white",
    dark:
      "bg-slate-900 hover:bg-slate-950 text-white shadow-sm focus:ring-slate-800",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${
    disabled ? "opacity-50 pointer-events-none cursor-not-allowed" : ""
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {children}
        {icon && <span>{icon}</span>}
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
