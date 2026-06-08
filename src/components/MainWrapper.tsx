export default function MainWrapper({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex-1 relative z-10 pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
            {children}
        </main>
    );
}