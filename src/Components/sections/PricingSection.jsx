import React from "react";
import { LuCheck, LuCalendar } from "react-icons/lu";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import Badge from "../common/Badge";
import { getPricingData } from "../../data/pricingData";
import { useLanguage } from "../../context/LanguageContext";

export default function PricingSection() {
  const { language, t } = useLanguage();
  const plans = getPricingData(language);

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#090e14] relative overflow-hidden transition-colors text-left rtl:text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge={t("pricing.badge")}
          title={t("pricing.title")}
          subtitle={t("pricing.subtitle")}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl p-6 transition-colors duration-150 flex flex-col justify-between relative ${
                plan.popular
                  ? "bg-slate-900 dark:bg-slate-950 text-white shadow-md border border-emerald-700/60"
                  : "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm border border-slate-200/80 dark:border-slate-800"
              }`}
            >
              {/* Top Badge */}
              <div className="flex items-center justify-between mb-3">
                <Badge
                  light={plan.popular}
                  size="sm"
                  variant={plan.popular ? "glass" : "emerald"}
                >
                  {plan.badge}
                </Badge>
              </div>

              <div>
                <h3
                  className={`font-serif text-lg font-bold mb-1 ${
                    plan.popular ? "text-white" : "text-slate-900 dark:text-white"
                  }`}
                >
                  {plan.title}
                </h3>
                <p
                  className={`text-xs mb-4 ${
                    plan.popular ? "text-slate-300" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {plan.subtitle}
                </p>

                {/* Price Display */}
                <div className="mb-4 pb-4 border-b border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight">
                      {plan.price}
                    </span>
                    <span
                      className={`text-xs font-semibold uppercase ${
                        plan.popular ? "text-emerald-400" : "text-emerald-700 dark:text-emerald-400"
                      }`}
                    >
                      {plan.currency}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs">
                      <LuCheck
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          plan.popular ? "text-emerald-400" : "text-emerald-600 dark:text-emerald-400"
                        }`}
                      />
                      <span className={plan.popular ? "text-slate-200" : "text-slate-600 dark:text-slate-300"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action CTA */}
              <div className="pt-2">
                <Button
                  to={`/booking?service=${plan.id}`}
                  variant={plan.popular ? "primary" : "outline"}
                  size="sm"
                  className="w-full"
                  icon={<LuCalendar className="w-3.5 h-3.5" />}
                >
                  {plan.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Note underneath */}
        <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-light">
          {t("pricing.disclaimer")}
        </div>
      </div>
    </section>
  );
}
