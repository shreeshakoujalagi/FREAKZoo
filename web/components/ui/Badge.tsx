"use client";

import { Crown, Palette, Flame, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, any> = {
    'check-circle': CheckCircle,
    'flame': Flame,
    'palette': Palette,
    'crown': Crown,
    'shield-check': ShieldCheck,
};

const colorMap: Record<string, string> = {
    'verified': 'text-[#00E5FF] drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]',
    'streak-fire': 'text-[#FF2E93] drop-shadow-[0_0_8px_rgba(255,46,147,0.6)]',
    'artist': 'text-[#8A2BE2] drop-shadow-[0_0_8px_rgba(138,43,226,0.6)]',
    'og': 'text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]',
    'authentic': 'text-[#00FFB3] drop-shadow-[0_0_8px_rgba(0,255,179,0.8)]',
};

interface BadgeProps {
    id: string;
    size?: number;
}

export default function Badge({ id, size = 16 }: BadgeProps) {
    const Icon = iconMap[id === 'authentic' ? 'shield-check' : id === 'verified' ? 'check-circle' : id === 'artist' ? 'palette' : id === 'og' ? 'crown' : 'flame'] || CheckCircle;
    const colorClass = colorMap[id] || 'text-white';

    return (
        <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            className={`${colorClass}`}
            title={id.charAt(0).toUpperCase() + id.slice(1)}
        >
            <Icon size={size} strokeWidth={2.5} />
        </motion.div>
    );
}
