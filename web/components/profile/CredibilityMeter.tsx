"use client";

import { motion } from 'framer-motion';

interface CredibilityMeterProps {
    score: number;
}

export default function CredibilityMeter({ score }: CredibilityMeterProps) {
    const percentage = Math.min((score / 1000) * 100, 100);

    return (
        <div className="bg-[#1A1A22] rounded-xl p-4 border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/5 to-[#00E5FF]/5 group-hover:opacity-100 transition-opacity opacity-0" />
            <div className="relative z-10 flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-[#B3B3C6 uppercase tracking-wider">Vibe Score</span>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8A2BE2] to-[#00E5FF] animate-pulse-slow">{score}</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#8A2BE2] to-[#00E5FF] shadow-[0_0_10px_rgba(138,43,226,0.5)] relative"
                >
                    <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/50 blur-[4px]" />
                </motion.div>
            </div>
            <p className="text-[10px] text-[#B3B3C6] mt-2 text-right opacity-0 group-hover:opacity-100 transition-opacity">Legendary Status 🔥</p>
        </div>
    );
}
