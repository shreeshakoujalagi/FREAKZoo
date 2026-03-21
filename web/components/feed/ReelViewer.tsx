"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Share2, MoreVertical, X } from 'lucide-react';
import { useState } from 'react';

interface ReelViewerProps {
    isOpen: boolean;
    onClose: () => void;
    reel: any; // Mock data
}

export default function ReelViewer({ isOpen, onClose, reel }: ReelViewerProps) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 md:p-8"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-white/20"
                    >
                        <X size={24} />
                    </button>

                    <div className="relative w-full max-w-sm aspect-[9/16] bg-[#1A1A22] rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
                        {/* Video Mock */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />
                        <img
                            src={reel.image}
                            alt="Reel"
                            className="w-full h-full object-cover"
                        />

                        {/* UI Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                            <div className="flex items-center gap-3 mb-4">
                                <img src={reel.user.avatar} className="w-10 h-10 rounded-full border-2 border-white" />
                                <div>
                                    <h4 className="font-bold text-shadow">{reel.user.name}</h4>
                                    <button className="px-3 py-1 bg-white/20 text-xs font-bold rounded-full backdrop-blur-md hover:bg-white/40 transition-colors">Follow</button>
                                </div>
                            </div>
                            <p className="mb-4 text-sm drop-shadow-md">{reel.content}</p>

                            {/* Audio Track */}
                            <div className="flex items-center gap-2 mb-2 opacity-80 w-full overflow-hidden">
                                <div className="w-4 h-4 rounded-full bg-white flex-shrink-0 flex items-center justify-center animate-spin-slow">🎵</div>
                                <div className="flex-1 overflow-hidden relative h-4">
                                    <span className="text-xs scrolling-text absolute whitespace-nowrap">Original Audio - {reel.user.name}</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="absolute bottom-24 right-4 z-30 flex flex-col gap-6 items-center">
                            <button onClick={() => setIsLiked(!isLiked)} className="flex flex-col items-center gap-1 group">
                                <div className={`p-2 rounded-full bg-black/40 backdrop-blur-md ${isLiked ? 'text-[#FF2E93]' : 'text-white'} group-hover:scale-110 transition-transform`}>
                                    <Heart size={28} fill={isLiked ? "currentColor" : "none"} />
                                </div>
                                <span className="text-xs font-bold">{isLiked ? reel.likes + 1 : reel.likes}</span>
                            </button>
                            <button className="flex flex-col items-center gap-1 group">
                                <div className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white group-hover:scale-110 transition-transform">
                                    <MessageCircle size={28} />
                                </div>
                                <span className="text-xs font-bold">{reel.comments}</span>
                            </button>
                            <button className="flex flex-col items-center gap-1 group">
                                <div className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white group-hover:scale-110 transition-transform">
                                    <Share2 size={24} />
                                </div>
                                <span className="text-xs font-bold">Share</span>
                            </button>
                            <button className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-white/20">
                                <MoreVertical size={20} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
