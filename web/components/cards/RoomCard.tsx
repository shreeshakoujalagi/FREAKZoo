"use client";

import { motion } from 'framer-motion';
import { Users, Clock, Hash, Zap } from 'lucide-react';

interface RoomCardProps {
    room: any;
    onJoin: (id: string) => void;
}

export default function RoomCard({ room, onJoin }: RoomCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative bg-[#1A1A22] rounded-[24px] overflow-hidden border border-white/5 hover:border-[#8A2BE2]/50 transition-all duration-300 group"
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="p-6 relative z-10 flex flex-col justify-between h-full">
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold bg-clip-text.text-transparent bg-gradient-to-r from-white to-[#B3B3C6] group-hover:from-[#00E5FF] group-hover:to-[#8A2BE2] transition-colors">{room.title}</h3>
                        {room.isLive && (
                            <div className="relative group/live">
                                <div className="absolute inset-0 bg-[#FF4444] rounded-full blur-md opacity-50 animate-ping" />
                                <div className="relative flex items-center gap-1.5 px-2.5 py-1 bg-[#FF4444]/20 rounded-full border border-[#FF4444]/50 backdrop-blur-sm shadow-[0_0_10px_rgba(255,68,68,0.4)]">
                                    <span className="w-1.5 h-1.5 bg-[#FF4444] rounded-full animate-pulse shadow-[0_0_4px_#FF4444]" />
                                    <span className="text-[10px] font-black text-[#FF4444] uppercase tracking-wider drop-shadow-sm">Live</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#8A2BE2] to-[#00E5FF] flex items-center justify-center text-[10px] font-bold text-white uppercase">
                            {room.host.name[0]}
                        </div>
                        <span className="text-sm text-[#B3B3C6]">Hosted by <span className="text-white font-medium">{room.host.name}</span></span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {room.tags.map((tag: string) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-[#00FFB3] font-medium flex items-center gap-1 hover:bg-[#00FFB3]/10 transition-colors">
                                <Hash size={10} /> {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                    <div className="flex items-center gap-4 text-[#B3B3C6]">
                        <div className="flex items-center gap-1.5">
                            <Users size={14} className="group-hover:text-[#00E5FF] transition-colors" />
                            <span className="text-xs font-medium">{room.participants}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock size={14} className="group-hover:text-[#FF2E93] transition-colors" />
                            <span className="text-xs font-mono">{room.expiresIn}</span>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onJoin(room.id)}
                        className="px-5 py-2 rounded-full bg-white text-[#0F0F14] font-bold text-sm shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all flex items-center gap-2"
                    >
                        <Zap size={14} fill="currentColor" /> Join
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
