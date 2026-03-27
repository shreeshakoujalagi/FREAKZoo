"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FEED_POSTS, STORIES } from '../../lib/mock-data';
import DropCard from '../../components/cards/DropCard';
import StoryBubble from '../../components/ui/StoryBubble';
import VibePost from '../../components/feed/VibePost';
import ReblogCard from '../../components/feed/ReblogCard';
import ReelCard from '../../components/feed/ReelCard';
import ReelViewer from '../../components/feed/ReelViewer';
import { Plus, PawPrint, Bell, MessageCircle, X } from 'lucide-react';
import ZooDashboard from '../../components/zoo/ZooDashboard';
import MessagesSidebar from '../../components/feed/MessagesSidebar';

export default function HomePage() {
    const [selectedReel, setSelectedReel] = useState<any>(null);
    const [isZooOpen, setIsZooOpen] = useState(false);
    const [isMessagesOpen, setIsMessagesOpen] = useState(false);

    return (
        <div className="flex justify-center min-h-screen px-4 pb-24 md:pb-0 pt-4 bg-[#0F0F14]">

            <AnimatePresence>
                {isZooOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                        onClick={() => setIsZooOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="w-full max-w-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <ZooDashboard />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isMessagesOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-end md:items-stretch justify-end bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsMessagesOpen(false)}
                    >
                        <motion.div
                            initial={{ x: '100%', y: 50, opacity: 0 }}
                            animate={{ x: 0, y: 0, opacity: 1 }}
                            exit={{ x: '100%', y: 50, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="w-full md:w-[400px] bg-[#0F0F14] rounded-t-2xl md:rounded-none md:border-l md:border-white/10 flex flex-col shadow-2xl max-h-[85vh] md:max-h-full h-full"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="sticky top-0 bg-[#1A1A22] z-10 flex justify-between p-4 rounded-t-2xl md:rounded-none items-center border-b border-white/10 shadow-md">
                                <h2 className="text-white font-bold text-lg hidden md:block">inbox_</h2>
                                <div className="w-12 h-1.5 bg-white/20 rounded-full md:hidden mx-auto" />
                                <button
                                    className="p-1 text-[#B3B3C6] hover:text-[#00E5FF] hover:bg-white/5 rounded-full transition-all md:absolute md:right-4"
                                    onClick={() => setIsMessagesOpen(false)}
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="flex-1 overflow-hidden flex flex-col relative bg-[#0F0F14]">
                                <MessagesSidebar />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <ReelViewer
                isOpen={!!selectedReel}
                onClose={() => setSelectedReel(null)}
                reel={selectedReel}
            />

            {/* Main Feed Column */}
            <div className="w-full max-w-xl md:mr-8">
                <header className="sticky top-0 bg-[#0F0F14]/90 backdrop-blur-lg z-50 py-4 mb-4 border-b border-white/5 flex justify-between items-center px-4">
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8A2BE2] to-[#00E5FF]">FREAK<span className="text-white">Zoo</span></h1>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsZooOpen(true)}
                            className="p-2 bg-[#1A1A22] rounded-full text-[#8A2BE2] hover:text-white hover:shadow-[0_0_10px_rgba(138,43,226,0.4)] transition-all"
                        >
                            <PawPrint size={20} />
                        </button>
                        <button
                            className="p-2 bg-[#1A1A22] rounded-full text-[#B3B3C6] hover:text-white transition-colors relative"
                            onClick={() => setIsMessagesOpen(true)}
                        >
                            <MessageCircle size={20} />
                            <div className="absolute top-1 right-1 w-2 h-2 bg-[#FF2E93] rounded-full border-2 border-[#1A1A22]" />
                        </button>
                        <button className="hidden sm:block p-2 bg-[#1A1A22] rounded-full text-[#B3B3C6] hover:text-white transition-colors">
                            <Plus size={20} />
                        </button>
                        <button className="p-2 bg-[#1A1A22] rounded-full text-[#B3B3C6] hover:text-white transition-colors hidden sm:block">
                            <Bell size={20} />
                        </button>
                    </div>
                </header>

                {/* Stories Row */}
                <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide no-scrollbar mb-6">
                    {/* Add Story Button */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-2 cursor-pointer group flex-shrink-0"
                    >
                        <div className="relative p-[3px] rounded-full border-2 border-dashed border-white/20 group-hover:border-[#00E5FF] transition-colors">
                            <div className="w-16 h-16 bg-[#1A1A22] rounded-full flex items-center justify-center">
                                <Plus className="text-[#00E5FF]" size={24} />
                            </div>
                            <div className="absolute bottom-0 right-0 bg-[#00E5FF] rounded-full p-1 border-2 border-[#0F0F14]">
                                <Plus size={10} color="black" strokeWidth={4} />
                            </div>
                        </div>
                        <span className="text-xs text-white">Add Story</span>
                    </motion.div>

                    {STORIES.map(story => (
                        <StoryBubble key={story.id} story={story} />
                    ))}
                </div>

                {/* Feed Items */}
                <div className="space-y-6">
                    {FEED_POSTS.map((post) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {post.type === 'vibe' && <VibePost post={post as any} />}
                            {post.type === 'reblog' && <ReblogCard post={post as any} />}
                            {post.type === 'reel' && <ReelCard reel={post as any} onClick={() => setSelectedReel(post)} />}
                            {(!post.type || post.type === 'drop') && <DropCard post={post as any} />}
                        </motion.div>
                    ))}

                    {/* Loading Indicator */}
                    <div className="flex justify-center p-8">
                        <div className="w-8 h-8 rounded-full border-4 border-[#8A2BE2] border-t-transparent animate-spin" />
                    </div>
                </div>
            </div>

            {/* Right Sidebar (Desktop Only) */}
            <div className="hidden md:block w-80 pt-20 pl-4 sticky top-4 h-screen pb-20 overflow-y-auto scrollbar-hide">


                <p className="text-[10px] text-[#B3B3C6] mt-8 text-center opacity-50">
                    Privacy • Terms • Vibes • © 2026 FREAKZoo
                </p>
            </div>

        </div>
    );
}
