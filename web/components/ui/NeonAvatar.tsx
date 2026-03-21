"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

interface AvatarProps {
    src: string;
    alt: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    hasGlow?: boolean;
}

const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
};

export default function NeonAvatar({ src, alt, size = 'md', hasGlow = true }: AvatarProps) {
    return (
        <div className={`relative ${sizeClasses[size]} rounded-full flex items-center justify-center`}>
            {hasGlow && (
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#00E5FF] blur-sm opacity-60 z-0"
                />
            )}
            <div className={`relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-[#1A1A22]`}>
                <Image src={src} alt={alt} fill className="object-cover" />
            </div>
        </div>
    );
}
