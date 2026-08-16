import React, { useState } from "react";
import { LuChevronDown, LuPhoneCall } from "react-icons/lu";
import { FaQuestionCircle } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";
import { faqList } from "../../data/testimonialsData";
import { clinicData } from "../../data/clinicData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white dark:bg-[#090e14] relative overflow-hidden transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Frequently Asked Questions"
          title="Everything You Need to Know Before Your Visit"
          subtitle="Clear, candid answers regarding procedures, pain management, recovery, and payment options."
          centered
        />

        <div className="space-y-4 mt-8">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-slate-50/80 dark:bg-slate-900 border-emerald-300 dark:border-emerald-600/40 shadow-md"
                    : "bg-white dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isOpen
                          ? "bg-emerald-800 dark:bg-emerald-700 text-amber-300"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {item.question}
                    </span>
                  </div>
                  <LuChevronDown
                    className={`w-5 h-5 text-emerald-800 dark:text-emerald-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-emerald-900 dark:text-emerald-300" : "text-slate-400"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 flex items-center justify-center shrink-0">
              <FaQuestionCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-slate-900 dark:text-white">
                Have a question not listed here?
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Speak directly with Dr. LABABOU.N's reception staff.
              </p>
            </div>
          </div>

          <a
            href={`tel:${clinicData.contact.phone.replace(/\./g, "")}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold shadow-md transition-all shrink-0"
          >
            <LuPhoneCall className="w-4 h-4 text-amber-300" />
            <span>Call {clinicData.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
