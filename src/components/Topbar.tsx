export default function Topbar({ children }: {
    children: React.ReactNode;
}) {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
            <div className="flex justify-between items-center px-6 md:px-12 py-6 mx-auto max-w-7xl">
                {children}
            </div>
        </nav>
    );
}