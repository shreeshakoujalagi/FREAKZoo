"use client";

import { motion } from 'framer-motion';

const MOODS = [
    { type: 'image', src: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=600&h=800&fit=crop', caption: 'Dreaming in colors' },
    { type: 'quote', text: '"Creativity is intelligence having fun." - Einstein', bg: 'bg-[#FF2E93]' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=800&fit=crop', caption: 'Neon Nights' },
    { type: 'quote', text: 'Stay weird, stay true.', bg: 'bg-[#00E5FF]', textColor: 'text-black' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&h=800&fit=crop', caption: 'Cyberpunk Aesthetics' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=800&fit=crop', caption: 'Abstract Flow' },
];

export default function MoodBoardGrid() {
    return (
        <div className="columns-2 gap-4 space-y-4">
            {MOODS.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="break-inside-avoid relative rounded-2xl overflow-hidden group hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-shadow duration-300"
                >
                    {item.type === 'image' ? (
                        <>
                            <img src={item.src} className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                <p className="text-white text-sm font-bold tracking-wide">{item.caption}</p>
                            </div>
                        </>
                    ) : (
                        <div className={`p-8 aspect-square flex items-center justify-center text-center ${item.bg}`}>
                            <p className={`text-xl font-black italic tracking-tighter ${item.textColor || 'text-white'}`}>{item.text}</p>
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
}
