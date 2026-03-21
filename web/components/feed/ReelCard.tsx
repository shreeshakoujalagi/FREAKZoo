"use client";

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface ReelCardProps {
    reel: any;
    onClick: () => void;
}

export default function ReelCard({ reel, onClick }: ReelCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className="relative bg-black rounded-2xl overflow-hidden aspect-[9/16] cursor-pointer group shadow-lg shadow-black/50 hover:shadow-[#FF2E93]/20 transition-all"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <img
                src={reel.image}
                alt="Reel Preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                    <Play fill="white" className="ml-1" size={32} />
                </div>
            </div>

            <div className="absolute bottom-4 left-4 z-20">
                <div className="flex items-center gap-2 mb-1">
                    <img src={reel.user.avatar} className="w-6 h-6 rounded-full border border-white" />
                    <span className="text-white text-xs font-bold drop-shadow-md">{reel.user.name}</span>
                </div>
                <p className="text-white/90 text-sm line-clamp-2 drop-shadow-md font-medium">{reel.content}</p>
            </div>

            <div className="absolute top-4 right-4 bg-black/60 px-2 py-1 rounded-md mb-2 z-20">
                <span className="text-xs font-bold text-white">REEL</span>
            </div>
        </motion.div>
    );
}
