import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggle({ className = "", compact = false }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center justify-center transition-all duration-300 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
        compact
          ? "w-9 h-9 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700"
          : "p-2 sm:px-3 sm:py-2 bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-amber-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700/80 shadow-sm"
      } ${className}`}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="flex items-center gap-2">
        <div className="relative w-4 h-4 flex items-center justify-center">
          {isDark ? (
            <FaSun className="w-4 h-4 text-amber-400 transform transition-transform duration-500 rotate-0 scale-100" />
          ) : (
            <FaMoon className="w-3.5 h-3.5 text-slate-700 transform transition-transform duration-500 rotate-0 scale-100" />
          )}
        </div>
        {!compact && (
          <span className="hidden sm:inline-block text-xs font-semibold tracking-wide">
            {isDark ? "Light" : "Dark"}
          </span>
        )}
      </div>
    </button>
  );
}
