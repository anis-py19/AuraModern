import React from "react";
import { FaTooth, FaHome } from "react-icons/fa";
import Button from "../Components/common/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 dark:bg-[#070b10] px-4 py-20 animate-fade-in transition-colors">
      <div className="max-w-md w-full text-center bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-2xl border border-slate-100 dark:border-slate-800 space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 mx-auto flex items-center justify-center shadow-inner">
          <FaTooth className="w-10 h-10 animate-bounce" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/70 px-3 py-1 rounded-full border border-amber-200/60 dark:border-amber-500/30">
            Error 404
          </span>
          <h1 className="font-serif text-3xl font-bold text-slate-900 dark:text-white">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
            The page or clinical treatment URL you are looking for might have been moved or does not exist.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Button to="/" variant="primary" size="md" icon={<FaHome className="w-4 h-4" />}>
            Back to Home
          </Button>
          <Button to="/services" variant="outline" size="md">
            View Treatments
          </Button>
        </div>
      </div>
    </div>
  );
}