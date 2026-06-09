export default function FeaturedSection({ children }: {
    children: React.ReactNode;
}) {
    return (
        <section className="mt-32">
            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden relative">
                {children}
            </div>
        </section>
    );
}   