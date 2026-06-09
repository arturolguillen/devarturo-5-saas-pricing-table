"use client";

import clsx from "clsx";
import { usePricing } from "./PricingProvider";

export default function BillingToggle() {
    const {
        billingPeriod,
        toggleBillingPeriod,
    } = usePricing();

    const isYearly = billingPeriod === 'year';

    return (
        <div className="flex items-center justify-center gap-4 mb-16">
            <span
                className={clsx(
                    "text-sm font-medium transition-colors",
                    isYearly ? "text-slate-500" : "text-slate-200",
                )}
                id="label-monthly"
            >
                {'Monthly'}
            </span>
            <button
                aria-labelledby="label-monthly label-yearly"
                aria-pressed={isYearly}
                className={clsx({
                    'relative w-14 h-7 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer': true,
                    'bg-indigo-600': isYearly,
                    'bg-slate-800': !isYearly,
                })}
                id="billing-toggle"
                onClick={toggleBillingPeriod}
                type="button"
            >
                <span
                    className={clsx(
                        "block absolute top-1 size-5 bg-indigo-500 rounded-full transition-all duration-300 transform",
                        isYearly ? "left-8" : "left-1",
                    )}
                />
            </button>
            <div className="flex items-center gap-2">
                <span
                    className={clsx(
                        "text-sm font-medium transition-colors",
                        isYearly ? "text-slate-200" : "text-slate-500",
                    )}
                    id="label-yearly"
                >
                    {'Yearly'}
                </span>
                <span className="bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">{'Save 15%'}</span>
            </div>
        </div>
    );
}