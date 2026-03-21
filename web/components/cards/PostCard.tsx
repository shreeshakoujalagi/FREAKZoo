"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { theme } from '../../lib/theme';

interface PostCardProps {
    post: {
        id: string;
        user: {
            name: string;
            username: string;
            avatar: string;
        };
        content: string;
        image?: string | null;
        likes: number;
        comments: number;
        timestamp: string;
    };
}

export default function PostCard({ post }: PostCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="bg-[#1A1A22] rounded-3xl overflow-hidden border border-white/5 shadow-xl hover:border-[#8A2BE2]/30 transition-colors group mb-8"
        >
            <div className="p-4 flex justify-between items-start">
                <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#8A2BE2]">
                        <Image src={post.user.avatar} alt={post.user.name} fill className="object-cover" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white leading-none">{post.user.name}</h3>
                        <span className="text-xs text-[#B3B3C6]">{post.user.username} • {post.timestamp}</span>
                    </div>
                </div>
                <button className="text-[#B3B3C6] hover:text-white transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
            </div>

            <div className="px-4 pb-4">
                <p className="text-white/90 leading-relaxed mb-4">{post.content}</p>

                {post.image && (
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/50 border border-white/5">
                        <Image src={post.image} alt="Post content" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between px-6 py-4 bg-black/20 border-t border-white/5">
                <div className="flex gap-6">
                    <button className="flex items-center gap-2 group/btn">
                        <Heart className="w-5 h-5 text-[#B3B3C6] group-hover/btn:text-[#FF2E93] transition-colors" />
                        <span className="text-sm font-medium text-[#B3B3C6] group-hover/btn:text-[#FF2E93]">{post.likes}</span>
                    </button>

                    <button className="flex items-center gap-2 group/btn">
                        <MessageCircle className="w-5 h-5 text-[#B3B3C6] group-hover/btn:text-[#00FFB3] transition-colors" />
                        <span className="text-sm font-medium text-[#B3B3C6] group-hover/btn:text-[#00FFB3]">{post.comments}</span>
                    </button>
                </div>

                <button className="flex items-center gap-2 text-[#B3B3C6] hover:text-white transition-colors">
                    <Share2 className="w-5 h-5" />
                </button>
            </div>
        </motion.div>
    );
}
