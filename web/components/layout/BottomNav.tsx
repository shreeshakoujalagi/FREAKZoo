"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, MessageSquare, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BottomNav() {
    const pathname = usePathname();

    const links = [
        { href: '/home', icon: Home, label: 'Home' },
        { href: '/discover', icon: Compass, label: 'Discover' },
        { href: '/rooms', icon: MessageSquare, label: 'Rooms' },
        { href: '/profile', icon: User, label: 'Profile' },
    ];

    if (pathname === '/' || pathname.startsWith('/onboarding')) return null;

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-[#1A1A22]/90 backdrop-blur-lg border-t border-white/5 pb-safe pt-2 px-6 z-50 md:hidden">
            <div className="flex justify-between items-center max-w-md mx-auto">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;

                    return (
                        <Link key={link.href} href={link.href} className="flex flex-col items-center gap-1 p-2 relative">
                            {isActive && (
                                <motion.div
                                    layoutId="nav-glow"
                                    className="absolute inset-0 bg-gradient-to-t from-[#8A2BE2]/20 to-transparent rounded-lg"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <Icon
                                className={`w-6 h-6 transition-colors duration-300 ${isActive ? 'text-[#00E5FF]' : 'text-[#B3B3C6]'}`}
                                strokeWidth={isActive ? 2.5 : 2}
                            />
                            <span className={`text-[10px] font-medium transition-colors ${isActive ? 'text-[#00E5FF]' : 'text-[#B3B3C6]'}`}>
                                {link.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
