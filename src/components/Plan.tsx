import type { Plan as PlanType } from "@/plans";

export default function Plan({ plan }: {
    plan: PlanType;
}) {
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

    return (
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1">
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
                <p className="text-sm text-slate-400">{description}</p>
            </div>
            <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$</span>
                <span className="text-5xl font-bold text-white">{month}</span>
                <span className="text-sm text-slate-400 font-medium">{'/mo'}</span>
            </div>
            <ul>
                {features.map(feature => <li key={feature}>{feature}</li>)}
            </ul>
            <button type="button">
                {button_text}
            </button>
        </div>
    );
}