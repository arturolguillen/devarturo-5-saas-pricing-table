import { Sparkles } from "lucide-react";

export default function HeroBadge() {
    return (
        <div className="inline-flex items-center gap-2 bg-slate-900 px-4 py-1.5 rounded-full border border-slate-800 mb-6">
            <Sparkles size={14} className="text-cyan-400" />
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">{'Cosmic Pricing for Teams'}</span>
        </div>
    );
}