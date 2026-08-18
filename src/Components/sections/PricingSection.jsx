import React from "react";
import { LuCheck, LuSparkles, LuCalendar } from "react-icons/lu";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import { pricingPlans } from "../../data/pricingData";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white dark:bg-[#090e14] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Transparent Fee Schedule"
          title="Clear, Competitive Pricing for World-Class Care"
          subtitle="Honest pricing with full treatment breakdowns, premium biocompatible materials, and zero surprise fees."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative group ${
                plan.popular
                  ? "bg-gradient-to-b from-emerald-950 via-emerald-900 to-slate-950 text-white shadow-2xl scale-105 border-2 border-amber-400"
                  : "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xl border border-slate-100 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-700/50 hover:shadow-2xl"
              }`}
            >
              {/* Top Badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    plan.popular
                      ? "bg-amber-400 text-slate-950 shadow-md"
                      : "bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300"
                  }`}
                >
                  {plan.badge}
                </span>
                {plan.popular && <LuSparkles className="w-5 h-5 text-amber-400" />}
              </div>

              <div>
                <h3
                  className={`font-serif text-xl font-bold mb-1 ${
                    plan.popular ? "text-white" : "text-slate-900 dark:text-white"
                  }`}
                >
                  {plan.title}
                </h3>
                <p
                  className={`text-xs mb-6 ${
                    plan.popular ? "text-slate-300" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {plan.subtitle}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-slate-200/40 dark:border-slate-800">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight">
                      {plan.price}
                    </span>
                    <span
                      className={`text-xs font-semibold uppercase ${
                        plan.popular ? "text-amber-300" : "text-emerald-700 dark:text-emerald-400"
                      }`}
                    >
                      {plan.currency}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <LuCheck
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          plan.popular ? "text-amber-400" : "text-emerald-600 dark:text-emerald-400"
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
                  to="/booking"
                  variant={plan.popular ? "gold" : "primary"}
                  size="md"
                  className="w-full"
                  icon={<LuCalendar className="w-4 h-4" />}
                >
                  {plan.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Note underneath */}
        <div className="mt-12 text-center text-xs text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          * Final treatment costs are determined during clinical diagnostic consultation based on individual bone density, anatomical conditions, and aesthetic requirements.
        </div>
      </div>
    </section>
  );
}
