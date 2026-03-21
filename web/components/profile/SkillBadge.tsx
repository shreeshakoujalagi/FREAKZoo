"use client";

import { motion } from 'framer-motion';

interface SkillBadgeProps {
    skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
    return (
        <motion.span
            whileHover={{ scale: 1.1, rotate: -2, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#B3B3C6] cursor-pointer hover:bg-[#8A2BE2]/10 hover:border-[#8A2BE2] hover:text-[#00E5FF] transition-all flex items-center gap-1.5 shadow-sm hover:shadow-[0_0_10px_rgba(138,43,226,0.3)]"
        >
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#00E5FF]" />
            {skill}
        </motion.span>
    );
}
