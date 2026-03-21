"use client";

import { motion } from 'framer-motion';
import { Heart, MessageCircle, Repeat2, Share2, MoreHorizontal } from 'lucide-react';

interface VibePostProps {
    post: any;
}

export default function VibePost({ post }: VibePostProps) {
    return (
        <motion.div
            whileHover={{ y: -2 }}
            className="group relative bg-[#1A1A22]/50 backdrop-blur-md border border-white/5 rounded-2xl p-4 hover:border-[#8A2BE2]/30 transition-all duration-300"
        >
            <div className="flex gap-3">
                <img
                    src={post.user.avatar}
                    alt={post.user.name}
                    className="w-10 h-10 rounded-full border border-white/10"
                />
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-white hover:text-[#00E5FF] cursor-pointer transition-colors">{post.user.name}</span>
                        <span className="text-xs text-[#B3B3C6]">{post.user.username}</span>
                        <span className="text-[10px] text-[#B3B3C6] ml-auto">{post.timestamp}</span>
                    </div>

                    <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 font-light">
                        {post.content}
                    </p>

                    <div className="flex items-center justify-between text-[#B3B3C6] opacity-75 group-hover:opacity-100 transition-opacity">
                        <button className="flex items-center gap-1.5 hover:text-[#FF2E93] transition-colors group/btn">
                            <div className="p-1.5 rounded-full group-hover/btn:bg-[#FF2E93]/10">
                                <Heart size={16} />
                            </div>
                            <span className="text-xs">{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-1.5 hover:text-[#00E5FF] transition-colors group/btn">
                            <div className="p-1.5 rounded-full group-hover/btn:bg-[#00E5FF]/10">
                                <MessageCircle size={16} />
                            </div>
                            <span className="text-xs">{post.comments}</span>
                        </button>
                        <button className="flex items-center gap-1.5 hover:text-[#00FFB3] transition-colors group/btn">
                            <div className="p-1.5 rounded-full group-hover/btn:bg-[#00FFB3]/10">
                                <Repeat2 size={16} />
                            </div>
                            <span className="text-xs">Re-Vibe</span>
                        </button>
                        <button className="flex items-center gap-1.5 hover:text-[#8A2BE2] transition-colors group/btn">
                            <div className="p-1.5 rounded-full group-hover/btn:bg-[#8A2BE2]/10">
                                <Share2 size={16} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
