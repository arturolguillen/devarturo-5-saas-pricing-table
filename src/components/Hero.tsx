export default function Hero({ children }: {
    children: React.ReactNode;
}) {
    return (
        <header className="text-center mb-16">
            {children}
        </header>
    );
}