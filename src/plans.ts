import { v4 as uuidv4 } from "uuid";

type PlanPrice = {
    month: number;
    year: number;
};

export type Plan = {
    id: string;
    featured: boolean;
    custom_price: boolean;
    name: string;
    description: string;
    button_text: string;
    monthly_price: PlanPrice;
    features: string[];
};

const plans: Plan[] = [
    {
        id: uuidv4(),
        featured: false,
        custom_price: false,
        name: 'Basic',
        description: 'Best for individual founders.',
        button_text: 'Get Started',
        monthly_price: {
            month: 29,
            year: 24,
        },
        features: [
            'Single UI Project',
            'Standard Design Tokens',
            'Email Support',
            'Component Library',
        ],
    },
    {
        id: uuidv4(),
        featured: true,
        custom_price: false,
        name: 'Pro',
        description: 'Ideal for scaling startups.',
        button_text: 'Upgrade to Pro',
        monthly_price: {
            month: 79,
            year: 67,
        },
        features: [
            'Up to 5 Projects',
            'Advanced AI Copilot',
            'Priority Support',
            'Custom Framer',
            'GitHub Sync',
        ],
    },
    {
        id: uuidv4(),
        featured: false,
        custom_price: true,
        name: 'Enterprise',
        description: 'Custom solutions for big teams.',
        button_text: 'Contact Sales',
        monthly_price: {
            month: 0,
            year: 0,
        },
        features: [
            'Unlimited Projects',
            'Dedicated Account Manager',
            '24/7 Phone Support',
            'SSO & Security Controls',
            'White-label Options',
        ],
    },
];

export default plans;