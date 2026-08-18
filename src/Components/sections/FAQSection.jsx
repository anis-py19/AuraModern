import React, { useState } from "react";
import { LuChevronDown, LuPhoneCall } from "react-icons/lu";
import { FaQuestionCircle } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";
import { getFaqData } from "../../data/testimonialsData";
import { getClinicData } from "../../data/clinicData";
import { useLanguage } from "../../context/LanguageContext";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const { language, t } = useLanguage();
  const faqs = getFaqData(language);
  const clinic = getClinicData(language);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#090e14] relative overflow-hidden transition-colors text-left rtl:text-right">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge={t("faq.badge")}
          title={t("faq.title")}
          subtitle={t("faq.subtitle")}
          centered
        />

        <div className="space-y-3 mt-6">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-colors duration-150 overflow-hidden ${
                  isOpen
                    ? "bg-slate-50/80 dark:bg-slate-900 border-emerald-300 dark:border-emerald-700/60"
                    : "bg-white dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left rtl:text-right p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-semibold shrink-0 transition-colors ${
                        isOpen
                          ? "bg-emerald-900 text-white"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="font-serif text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {item.question}
                    </span>
                  </div>
                  <LuChevronDown
                    className={`w-4 h-4 text-emerald-800 dark:text-emerald-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-900 dark:text-emerald-300" : "text-slate-400"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 animate-fade-in font-light">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Banner */}
        <div className="mt-10 p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left rtl:sm:text-right">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0">
              <FaQuestionCircle className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {t("faq.unansweredQuestion")}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t("faq.unansweredSubtitle")}
              </p>
            </div>
          </div>

          <a
            href={`tel:${clinic.contact.phone.replace(/\./g, "")}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold shadow-sm transition-colors shrink-0"
          >
            <LuPhoneCall className="w-3.5 h-3.5 text-amber-300" />
            <span>{t("common.callReception")} ({clinic.contact.phoneDisplay})</span>
          </a>
        </div>
      </div>
    </section>
  );
}
