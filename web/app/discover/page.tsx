"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Hash } from 'lucide-react';
import { INTERESTS, MOODS } from '../../lib/mock-data';
import Image from 'next/image';

export default function DiscoverPage() {
    const [activeMood, setActiveMood] = useState('Chill');

    return (
        <div className="flex flex-col items-center min-h-screen px-4 pb-24 md:pb-0 overflow-hidden">
            <header className="sticky top-0 bg-[#0F0F14]/90 backdrop-blur-lg z-50 w-full max-w-4xl py-6 border-b border-white/5 flex flex-col gap-6">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8A2BE2] to-[#00E5FF]">Explore</h1>
                    <div className="relative group w-full max-w-xs transition-all duration-300">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B3B3C6] group-focus-within:text-[#00E5FF] transition-colors" />
                        <input
                            type="text"
                            placeholder="Search rooms, people, vibes..."
                            className="w-full bg-[#1A1A22] border border-white/10 rounded-full pl-12 pr-6 py-3 text-white placeholder:text-[#B3B3C6]/50 focus:outline-none focus:border-[#00E5FF]/50 focus:ring-2 focus:ring-[#00E5FF]/10 transition-all shadow-sm"
                        />
                    </div>
                </div>

                {/* Mood Filters */}
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide w-full max-w-4xl no-scrollbar">
                    {MOODS.map((mood) => (
                        <motion.button
                            key={mood}
                            onClick={() => setActiveMood(mood)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-bold border transition-colors ${activeMood === mood
                                ? 'bg-[#00E5FF]/10 border-[#00E5FF] text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]'
                                : 'bg-[#1A1A22] border-white/5 text-[#B3B3C6] hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            {mood}
                        </motion.button>
                    ))}
                </div>
            </header>

            {/* Masonry Grid Simulation */}
            <div className="w-full max-w-4xl mt-8 columns-1 md:columns-2 gap-6 space-y-6">
                {INTERESTS.map((interest, index) => (
                    <motion.div
                        key={interest.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="break-inside-avoid relative overflow-hidden rounded-3xl group cursor-pointer aspect-[4/3] bg-[#1A1A22] border border-white/5"
                    >
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-[#1A1A22] to-[#0F0F14] z-0 transition-opacity duration-500`}>
                            <Image
                                src={`https://picsum.photos/400?random=${index}`}
                                alt={interest.label}
                                fill
                                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={false}
                                quality={75}
                            />
                        </div>

                        {/* Hover Reveal Image/Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                        <div className="absolute bottom-0 left-0 p-6 z-20 w-full transform group-hover:translate-y-0 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Hash className="w-6 h-6 text-[#00FFB3]" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#00FFB3] transition-colors">{interest.label}</h3>
                            <p className="text-sm text-[#B3B3C6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                12k active mock users • Trending in BLR
                            </p>
                        </div>
                    </motion.div>
                ))}

                {/* Mock Content Items mixed in */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="break-inside-avoid relative overflow-hidden rounded-3xl bg-[#FF2E93] p-8 text-center aspect-square flex flex-col items-center justify-center group"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                    <h2 className="text-4xl font-black text-white mb-2 relative z-10 uppercase italic tracking-tighter transform group-hover:scale-110 transition-transform duration-300">
                        Vibe<br />Check
                    </h2>
                    <button className="mt-6 px-6 py-2 bg-white text-[#FF2E93] rounded-full font-bold hover:shadow-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:-translate-y-1 relative z-10">
                        Take Quiz
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
