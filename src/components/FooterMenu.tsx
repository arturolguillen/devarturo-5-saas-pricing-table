import Link from "next/link";

export default function FooterMenu() {
    return (
        <div className="flex gap-8">
            {['Privacy', 'Terms of Service', 'Contact'].map(item => (
                <Link
                    key={item}
                    href={'#'}
                    className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                >
                    {item}
                </Link>
            ))}
        </div>
    );
}