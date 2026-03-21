"use client";

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Share2, MoreHorizontal, Clock, Zap } from 'lucide-react';
import NeonAvatar from '../ui/NeonAvatar';
import { useState, useEffect } from 'react';

interface DropCardProps {
    post: any;
    isFeed?: boolean;
}

export default function DropCard({ post, isFeed = false }: DropCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        return `${hours}h ${minutes}m`;
    };

    return (
        <motion.div
            initial={isFeed ? { opacity: 0, y: 50, scale: 0.95 } : {}}
            whileInView={isFeed ? { opacity: 1, y: 0, scale: 1 } : {}}
            viewport={{ once: true, margin: "-10%" }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative bg-[#1A1A22] rounded-[32px] overflow-hidden border border-white/5 shadow-2xl group transition-all duration-500 hover:shadow-[0_0_40px_rgba(138,43,226,0.3)] mb-8 max-w-lg mx-auto w-full"
        >
            {/* 24h Timer Ring */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <Clock size={14} className="text-[#FF2E93] animate-pulse" />
                <span className="text-xs font-mono text-[#FF2E93]">{formatTime(timeLeft)}</span>
            </div>

            <div className="p-5 flex justify-between items-start relative z-10">
                <div className="flex items-center gap-3">
                    <NeonAvatar src={post.user.avatar} alt={post.user.name} size="md" hasGlow={post.user.streak > 10} />
                    <div>
                        <h3 className="font-bold text-white leading-none text-lg">{post.user.name}</h3>
                        <span className="text-sm text-[#B3B3C6]">{post.user.username}</span>
                    </div>
                </div>
                <button className="text-[#B3B3C6] hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
            </div>

            <div className="px-5 pb-2 relative z-10">
                <p className="text-white/90 text-lg leading-relaxed mb-4 font-medium">{post.content}</p>
            </div>

            {post.image && (
                <div className="relative w-full aspect-[4/5] bg-black/50 overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                    <Image src={post.image} alt="Post content" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />

                    {/* Reaction Overlay */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-20 pointer-events-none"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-[#0F0F14]/80 backdrop-blur-md px-6 py-2 rounded-full border border-[#00E5FF]/50 text-[#00E5FF] font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)] pointer-events-auto flex items-center gap-2"
                                >
                                    <Zap size={18} fill="currentColor" /> Boost
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}

            <div className="flex items-center justify-between px-6 py-4 bg-[#0F0F14]/50 border-t border-white/5 relative z-10 backdrop-blur-sm">
                <div className="flex gap-8">
                    <motion.button whileTap={{ scale: 0.8 }} className="flex items-center gap-2 group/btn">
                        <Heart className="w-6 h-6 text-[#B3B3C6] group-hover/btn:text-[#FF2E93] transition-colors" />
                        <span className="text-sm font-bold text-[#B3B3C6] group-hover/btn:text-[#FF2E93]">{post.likes}</span>
                    </motion.button>

                    <motion.button whileTap={{ scale: 0.8 }} className="flex items-center gap-2 group/btn">
                        <MessageCircle className="w-6 h-6 text-[#B3B3C6] group-hover/btn:text-[#00FFB3] transition-colors" />
                        <span className="text-sm font-bold text-[#B3B3C6] group-hover/btn:text-[#00FFB3]">{post.comments}</span>
                    </motion.button>
                </div>

                <motion.button whileHover={{ rotate: 15 }} className="text-[#B3B3C6] hover:text-white transition-colors">
                    <Share2 className="w-6 h-6" />
                </motion.button>
            </div>

            {/* Post Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/5 to-[#00E5FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    );
}
