"use client";

import { motion } from 'framer-motion';

interface StoryBubbleProps {
    story: any;
}

export default function StoryBubble({ story }: StoryBubbleProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 cursor-pointer group"
        >
            <div className={`p-[3px] rounded-full bg-gradient-to-tr ${story.viewed ? 'from-white/20 to-white/20' : 'from-[#8A2BE2] via-[#FF2E93] to-[#00E5FF]'} group-hover:shadow-[0_0_15px_rgba(255,46,147,0.5)] transition-shadow duration-300`}>
                <div className="p-[2px] bg-[#0F0F14] rounded-full">
                    <img
                        src={story.user.avatar}
                        alt={story.user.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#1A1A22]"
                    />
                </div>
            </div>
            <span className="text-xs text-white max-w-[64px] truncate">{story.user.name}</span>
        </motion.div>
    );
}
