"use client";

import { motion } from 'framer-motion';

export default function VoiceNotePlaceholder() {
    return (
        <div className="flex items-center gap-3 bg-[#1A1A22] rounded-full p-2 border border-white/5 my-2 max-w-xs shadow-lg relative group overflow-hidden">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#00E5FF] flex items-center justify-center shrink-0"
            >
                <span className="sr-only">Play</span>
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                </svg>
            </motion.button>

            <div className="flex-1 flex gap-1 h-8 items-center justify-center">
                {/* Animated Waveform */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ height: ['20%', '80%', '40%'] }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            delay: i * 0.1,
                            ease: "easeInOut"
                        }}
                        className="w-1 bg-[#B3B3C6] rounded-full opacity-60 group-hover:bg-[#00E5FF] group-hover:opacity-100 transition-colors duration-300"
                        style={{ height: '40%' }} // Fallback
                    />
                ))}
            </div>

            <span className="text-xs text-[#B3B3C6] font-mono mr-2">0:14</span>
        </div>
    );
}
