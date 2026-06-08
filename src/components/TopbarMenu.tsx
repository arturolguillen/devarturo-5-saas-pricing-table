import Link from "next/link";

export default function TopbarMenu() {
    return (
        <div className="hidden md:flex items-center gap-2">
            {['Home', 'Templates', 'Blog', 'Refer'].map(item => (
                <Link
                    key={item}
                    href={'#'}
                    className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-indigo-400 transition-colors duration-200"
                >
                    {item}
                </Link>
            ))}
        </div>
    );
}