"use client";

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import BottomNav from './BottomNav';
import { Home, Compass, MessageSquare, User, Zap } from 'lucide-react';
import Link from 'next/link';

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Hide wrapper on landing page or onboarding
    const hideChrome = pathname === '/' || pathname.startsWith('/onboarding');

    return (
        <div className={`min-h-screen bg-[#0F0F14] text-white flex`}>
            {/* Desktop Sidebar */}
            {!hideChrome && (
                <aside className="hidden md:flex flex-col w-64 border-r border-white/5 bg-[#1A1A22]/50 backdrop-blur-md sticky top-0 h-screen p-6">
                    <Link href="/home" className="flex items-center gap-3 mb-10 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#8A2BE2] to-[#00E5FF] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-[0_0_15px_rgba(138,43,226,0.5)] transition-shadow">
                            <Zap className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#B3B3C6]">FREAKZoo</span>
                    </Link>

                    <nav className="flex-1 space-y-2">
                        {[
                            { href: '/home', icon: Home, label: 'Home' },
                            { href: '/discover', icon: Compass, label: 'Discover' },
                            { href: '/rooms', icon: MessageSquare, label: 'Rooms' },
                            { href: '/profile', icon: User, label: 'Profile' },
                        ].map((link) => {
                            const isActive = pathname === link.href;
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative group overflow-hidden ${isActive ? 'bg-white/5 text-white' : 'text-[#B3B3C6] hover:bg-white/5 hover:text-white'}`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="sidebar-active"
                                            className="absolute left-0 top-0 bottom-0 w-1 bg-[#00E5FF] rounded-r-lg"
                                        />
                                    )}
                                    <Icon className={`w-5 h-5 ${isActive ? 'text-[#00E5FF]' : 'group-hover:text-[#00E5FF]'}`} />
                                    <span className="font-medium">{link.label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="mt-auto pt-6 border-t border-white/5">
                        <div className="p-4 bg-gradient-to-br from-[#1A1A22] to-[#0F0F14] rounded-2xl border border-white/5">
                            <p className="text-xs text-[#B3B3C6] mb-2 font-medium">🔥 Pro Tip</p>
                            <p className="text-sm text-white/80 leading-relaxed">Join active rooms to maintain your streak!</p>
                        </div>
                    </div>
                </aside>
            )}

            {/* Main Content Area */}
            <main className={`flex-1 relative ${!hideChrome ? 'pb-24 md:pb-0' : ''}`}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full"
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Mobile Nav */}
            {!hideChrome && <BottomNav />}
        </div>
    );
}
