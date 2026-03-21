"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function OnboardingPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-[#0F0F14] text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-md w-full space-y-8"
            >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#8A2BE2] to-[#00E5FF] mx-auto animate-pulse shadow-[0_0_30px_rgba(138,43,226,0.5)]" />

                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#B3B3C6]">
                    Pick Your Vibe
                </h1>

                <p className="text-[#B3B3C6] px-4 leading-relaxed">
                    We don't use algorithms. We use vibes.
                </p>

                <div className="grid grid-cols-2 gap-4">
                    {['Tech', 'Music', 'Art', 'Gaming'].map((vibe, i) => (
                        <motion.button
                            key={vibe}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-4 rounded-2xl bg-[#1A1A22] border border-white/5 hover:border-[#00FFB3]/50 hover:bg-[#1A1A22]/80 transition-all shadow-lg"
                        >
                            <span className="text-lg font-medium text-white">{vibe}</span>
                        </motion.button>
                    ))}
                </div>

                <Link
                    href="/home"
                    className="block w-full py-4 mt-8 bg-gradient-to-r from-[#8A2BE2] to-[#00E5FF] rounded-full font-bold text-white shadow-lg hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all transform hover:-translate-y-1"
                >
                    Enter FREAKZoo
                </Link>
            </motion.div>
        </div>
    );
}
