import { Boxes, ShieldHalf, Zap } from "lucide-react";
import FeaturedImage from "@/images/featured.png";
import Image from "next/image";

const featuredContentTags = [
    {
        icon: <Zap size={24} className="text-cyan-400" />,
        text: 'Ultra Fast',
    },
    {
        icon: <ShieldHalf size={24} className="text-cyan-400" />,
        text: 'Secure Core',
    },
    {
        icon: <Boxes size={24} className="text-cyan-400" />,
        text: 'Scalable',
    },
];

export default function FeaturedSectionContent() {
    return (
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
                <h2 className="text-3xl font-bold text-white mb-6">{'Built for the future of AI'}</h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">{'Every plan includes our core "Cosmic Design Engine", ensuring your application remains pixel-perfect across all resolutions and devices. We don\'t just sell designs; we provide the architectural foundation for your AI\'s universe.'}</p>
                <div className="flex flex-wrap gap-4">
                    {featuredContentTags.map(tag => (
                        <div key={tag.text} className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-xl border border-slate-700">
                            {tag.icon}
                            <span className="text-sm font-semibold text-white">{tag.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                <Image
                    src={FeaturedImage}
                    alt={'AI Interface'}
                    loading="eager"
                    className="size-full object-cover"
                />
            </div>
        </div>
    );
}