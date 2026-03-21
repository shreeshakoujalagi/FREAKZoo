"use client";

import { motion } from 'framer-motion';

interface PortfolioCardProps {
    item: any;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative aspect-video bg-[#1A1A22] rounded-xl overflow-hidden border border-white/5 cursor-pointer"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
                <span className="text-[10px] text-[#00FFB3] uppercase font-bold tracking-wider mb-1 block">{item.category}</span>
                <h3 className="text-white font-bold truncate group-hover:text-[#00E5FF] transition-colors">{item.title}</h3>
                <div className="flex justify-between items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-[#B3B3C6]">View Project</span>
                    <span className="text-xs text-[#FF2E93] font-bold">❤️ {item.likes}</span>
                </div>
            </div>
        </motion.div>
    );
}
