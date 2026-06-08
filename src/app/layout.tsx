import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJarkataSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jarkata-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Devarturo - Tsuki UI",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${plusJarkataSans.variable} antialiased`}
        >
            <body className="flex flex-col min-h-dvh font-sans bg-slate-950 text-slate-200 selection:bg-indigo-500 selection:text-white">
                {children}
            </body>
        </html>
    );
}
