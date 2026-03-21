"use client";

import { motion } from 'framer-motion';
import { Quote, MessageSquareQuote } from 'lucide-react';

interface ReblogCardProps {
    post: any;
}

export default function ReblogCard({ post }: ReblogCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative bg-[#1A1A22] rounded-3xl p-6 border border-white/5 shadow-2xl overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF2E93]/10 to-transparent blur-[40px] rounded-bl-full pointer-events-none" />

            <div className="flex gap-4 mb-4 items-start">
                <img src={post.user.avatar} className="w-12 h-12 rounded-full border-2 border-[#1A1A22]" />
                <div>
                    <h3 className="text-white font-bold">{post.user.name}</h3>
                    <p className="text-[#00FFB3] text-xs font-mono mb-2">@{post.user.username} <span className="text-white/30">•</span> {post.timestamp}</p>
                    <p className="text-lg text-white mb-4 leading-relaxed font-light italic">"{post.content}"</p>
                </div>
            </div>

            <div className="bg-[#0F0F14] rounded-2xl p-4 border-l-4 border-[#8A2BE2] ml-4 md:ml-12 relative">
                <Quote className="absolute -top-3 -left-3 bg-[#0F0F14] text-[#8A2BE2] p-1 rounded-full border border-[#8A2BE2]" size={24} />
                <div className="flex items-center gap-2 mb-2">
                    <img src={post.referencePost.user.avatar} className="w-6 h-6 rounded-full" />
                    <span className="text-sm font-bold text-[#B3B3C6]">{post.referencePost.user.name}</span>
                </div>
                <p className="text-[#B3B3C6] text-sm mb-3">
                    {post.referencePost.content}
                </p>
                {post.referencePost.image && (
                    <img src={post.referencePost.image} className="w-full h-40 object-cover rounded-xl opacity-80 hover:opacity-100 transition-opacity" />
                )}
            </div>

            <div className="flex justify-end gap-4 mt-4 pt-4 border-t border-white/5 text-[#B3B3C6] text-xs font-mono uppercase tracking-widest">
                <span className="flex items-center gap-1 hover:text-[#00E5FF] cursor-pointer"><MessageSquareQuote size={14} /> Only on FreakZoo</span>
                <span className="hover:text-[#FF2E93] cursor-pointer">{post.likes} Revibes</span>
            </div>
        </motion.div>
    );
}
