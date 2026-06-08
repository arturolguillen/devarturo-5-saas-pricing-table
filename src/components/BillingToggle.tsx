export default function BillingToggle() {
    return (
        <div className="flex items-center justify-center gap-4 mb-16">
            <span className="text-sm font-medium text-slate-400" id="label-monthly">{'Monthly'}</span>
            <button className="relative w-14 h-7 bg-slate-800 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="billing-toggle">
                <span className="block absolute left-1 top-1 size-5 bg-indigo-500 rounded-full transition-all duration-300 transform"></span>
            </button>
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-400" id="label-yearly">{'Yearly'}</span>
                <span className="bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">{'Save 15%'}</span>
            </div>
        </div>
    );
}