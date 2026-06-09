"use client";

import {
    createContext,
    useContext,
    useMemo,
    useState,
    type Dispatch,
    type ReactNode,
    type SetStateAction,
} from "react";

export type BillingPeriod = 'month' | 'year';

type PricingContextValue = {
    billingPeriod: BillingPeriod;
    setBillingPeriod: Dispatch<SetStateAction<BillingPeriod>>;
    toggleBillingPeriod: () => void;
};

const PricingContext = createContext<PricingContextValue | null>(null);

export default function PricingProvider({ children }: { children: ReactNode }) {
    const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('month');

    const value = useMemo(() => ({
        billingPeriod,
        setBillingPeriod,
        toggleBillingPeriod: () => {
            setBillingPeriod(prev => (prev === 'month' ? 'year' : 'month'));
        },
    }), [billingPeriod]);

    return (
        <PricingContext.Provider value={value}>
            {children}
        </PricingContext.Provider>
    );
}

export function usePricing() {
    const context = useContext(PricingContext);

    if (!context) {
        throw new Error('usePricing must be used within a PricingProvider');
    }

    return context;
}