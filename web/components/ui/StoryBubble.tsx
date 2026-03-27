"use client";

import { motion } from 'framer-motion';

interface StoryBubbleProps {
    story: any;
}

export default function StoryBubble({ story }: StoryBubbleProps) {
    /**
     * 10-point Decagon Path (Clockwise from top)
     * Calculated to keep the shape symmetrical and balanced.
     */
    const decagonPath = "polygon(50% 0%, 80% 10%, 100% 35%, 100% 65%, 80% 90%, 50% 100%, 20% 90%, 0% 65%, 0% 35%, 20% 10%)";

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 cursor-pointer group"
        >
            {/* 1. Outer Gradient Layer (The "Border") */}
            <div 
                style={{ clipPath: decagonPath }}
                className={`p-[3px] bg-gradient-to-tr ${
                    story.viewed ? 'from-white/20 to-white/20' : 'from-[#8A2BE2] via-[#FF2E93] to-[#00E5FF]'
                } group-hover:shadow-[0_0_20px_rgba(255,46,147,0.4)] transition-all duration-300`}
            >
                {/* 2. Inner Background Layer (Creates the gap) */}
                <div 
                    style={{ clipPath: decagonPath }}
                    className="p-[2.5px] bg-[#0F0F14]"
                >
                    {/* 3. The Decagonal Image */}
                    <img
                        src={story.user.avatar}
                        alt={story.user.name}
                        style={{ clipPath: decagonPath }}
                        className="w-16 h-16 object-cover"
                    />
                </div>
            </div>
            
            <span className="text-xs text-white max-w-[64px] truncate opacity-80 group-hover:opacity-100 transition-opacity">
                {story.user.name}
            </span>
        </motion.div>
    );
}