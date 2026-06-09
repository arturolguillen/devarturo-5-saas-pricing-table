"use client";

import type { Plan as PlanType } from "@/plans";
import clsx from "clsx";
import { CircleCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePricing } from "./PricingProvider";

export default function Plan({ plan }: {
    plan: PlanType;
}) {
    const { billingPeriod } = usePricing();
    const [isPriceAnimating, setIsPriceAnimating] = useState(false);
    const isFirstRender = useRef(true);

    const {
        name,
        description,
        monthly_price: {
            month,
            year,
        },
        features,
        button_text,
        featured,
        custom_price,
    } = plan;

    const displayedPrice = billingPeriod === 'month' ? month : year;

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        setIsPriceAnimating(true);

        const timeoutId = setTimeout(() => {
            setIsPriceAnimating(false);
        }, 380);

        return () => clearTimeout(timeoutId);
    }, [billingPeriod]);

    return (
        <div className={clsx({
            'backdrop-blur-md p-8 rounded-2xl flex flex-col transition-all duration-300': true,
            'bg-slate-900/80 border-indigo-500/50 relative hover:-translate-y-2 shadow-2xl shadow-indigo-500/10 border-2': featured,
            'bg-slate-900/50 border-slate-800 hover:-translate-y-1 border': !featured,
        })}>
            {featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    {'Most Popular'}
                </div>
            )}
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
                <p className="text-sm text-slate-400">{description}</p>
            </div>
            {custom_price ? (
                <div className="text-5xl font-bold text-white mb-8">{'Custom'}</div>
            ) : (
                <div className="mb-8 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">$</span>
                    <span className={clsx(
                        "text-5xl font-bold text-white",
                        { 'price-bounce': isPriceAnimating },
                    )}
                    >
                        {displayedPrice}
                    </span>
                    <span className="text-sm text-slate-400 font-medium">{'/mo'}</span>
                </div>
            )}
            <ul className="space-y-4 mb-10 grow">
                {features.map(feature => (
                    <li key={feature} className="flex items-center gap-3">
                        <CircleCheck
                            strokeWidth={featured ? 2 : 1}
                            className="text-indigo-500"
                        />
                        <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                ))}
            </ul>
            <button type="button" className={clsx({
                'w-full py-4 rounded-full border border-slate-700 font-semibold text-sm text-white cursor-pointer': true,
                'bg-indigo-600 hover:bg-indigo-500 transition-all active:scale-95 shadow-lg shadow-indigo-600/30': featured,
                'hover:bg-slate-800 transition-colors ': !featured,
            })}>
                {button_text}
            </button>
        </div>
    );
}