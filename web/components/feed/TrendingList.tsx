"use client";

import { motion } from 'framer-motion';
import { TRENDING_TAGS } from '../../lib/mock-data';

export default function TrendingList() {
    return (
        <div className="bg-[#1A1A22] rounded-xl p-6 border border-white/5 space-y-4 shadow-lg sticky top-6">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8A2BE2] to-[#00E5FF] mb-2">Trending</h3>

            <div className="space-y-4">
                {TRENDING_TAGS.map((tag, index) => (
                    <motion.div
                        key={tag.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex justify-between items-center group cursor-pointer"
                    >
                        <div>
                            <p className="text-[#B3B3C6] text-xs font-medium opacity-60 group-hover:text-[#00FFB3] transition-colors">{index + 1} • Trending</p>
                            <h4 className="text-white font-bold group-hover:text-[#00E5FF] transition-colors">#{tag.tag}</h4>
                        </div>
                        <span className="text-[#B3B3C6] text-xs bg-[#2A2A35] px-2 py-1 rounded-full">{tag.count}</span>
                    </motion.div>
                ))}
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full mt-4 py-2 text-sm text-[#00E5FF] font-bold border border-[#00E5FF]/20 rounded-lg hover:bg-[#00E5FF]/10 transition-colors"
            >
                Show more
            </motion.button>
        </div>
    );
}
