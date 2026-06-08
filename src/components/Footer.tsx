export default function Footer({ children }: {
    children: React.ReactNode;
}) {
    return (
        <footer className="bg-slate-950 w-full py-16 border-t border-slate-900">
            <div className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-12 max-w-7xl mx-auto gap-8">
                {children}
            </div>
        </footer>
    );
}