"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, ShieldAlert, Mic, Menu, Send, Ghost } from 'lucide-react';
import { MOCK_ROOMS } from '../../lib/mock-data';
import RoomCard from '../../components/cards/RoomCard';
import NeonAvatar from '../../components/ui/NeonAvatar';
import PollCard from '../../components/cards/PollCard';
import VoiceNotePlaceholder from '../../components/ui/VoiceNote';

export default function RoomsPage() {
    const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
    const [isConfessionMode, setIsConfessionMode] = useState(false);

    const activeRoom = MOCK_ROOMS.find(r => r.id === selectedRoom);

    return (
        <div className="flex h-screen bg-[#0F0F14] overflow-hidden">
            {/* Room Sidebar */}
            <AnimatePresence mode="popLayout">
                <motion.aside
                    initial={{ width: 0 }}
                    animate={{ width: selectedRoom ? '0%' : '100%', opacity: selectedRoom ? 0 : 1 }}
                    exit={{ width: 0 }}
                    className={`flex-shrink-0 w-full md:w-80 border-r border-white/5 bg-[#1A1A22]/50 backdrop-blur-md flex flex-col transition-all duration-300 ${selectedRoom ? 'hidden md:flex' : 'flex'}`}
                >
                    <div className="p-6 border-b border-white/5 flex justify-between items-center sticky top-0 bg-[#0F0F14]/90 z-10 backdrop-blur-md">
                        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8A2BE2] to-[#00E5FF]">Live Rooms</h1>
                        <motion.button
                            whileHover={{ rotate: 90 }}
                            className="p-2 bg-gradient-to-r from-[#8A2BE2] to-[#00E5FF] rounded-full text-white shadow-lg hover:shadow-[0_0_15px_rgba(138,43,226,0.4)]"
                        >
                            <Plus size={20} />
                        </motion.button>
                    </div>

                    <div className="p-4 space-y-4 overflow-y-auto custom-scrollbar flex-1 pb-24 md:pb-4">
                        {MOCK_ROOMS.map(room => (
                            <RoomCard key={room.id} room={room} onJoin={setSelectedRoom} />
                        ))}
                    </div>
                </motion.aside>
            </AnimatePresence>

            {/* Main Chat Interface */}
            <main className={`flex-1 flex flex-col relative transition-all duration-300 ${!selectedRoom ? 'hidden md:flex' : 'flex'}`}>
                {!selectedRoom ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-8 opacity-50">
                        <div className="w-24 h-24 bg-[#1A1A22] rounded-full flex items-center justify-center mb-6 animate-pulse">
                            <Search size={40} className="text-[#B3B3C6]" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Select a Room</h2>
                        <p className="text-[#B3B3C6]">Join the conversation or start your own vibe.</p>
                    </div>
                ) : (
                    <>
                        {/* Chat Header */}
                        <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#1A1A22]/80 backdrop-blur-md z-20">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setSelectedRoom(null)}
                                    className="md:hidden p-2 text-[#B3B3C6] hover:text-white"
                                >
                                    <Menu size={20} />
                                </button>
                                <div>
                                    <h2 className="font-bold text-white flex items-center gap-2">
                                        {activeRoom?.title}
                                        {activeRoom?.isLive && <span className="w-2 h-2 bg-[#FF4444] rounded-full animate-pulse" />}
                                    </h2>
                                    <p className="text-xs text-[#B3B3C6]">{activeRoom?.participants} vibes online</p>
                                </div>
                            </div>

                            <div className="flex -space-x-2">
                                {/* Mock avatars */}
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1A1A22] bg-[#2A2A35] flex items-center justify-center text-[10px] text-white font-bold">
                                        {String.fromCharCode(64 + i)}
                                    </div>
                                ))}
                                <div className="w-8 h-8 rounded-full border-2 border-[#1A1A22] bg-[#1A1A22] flex items-center justify-center text-[10px] text-[#B3B3C6]">
                                    +9
                                </div>
                            </div>
                        </header>

                        {/* Secure Banner */}
                        <div className="bg-[#FF2E93]/10 border-b border-[#FF2E93]/20 py-1.5 px-4 flex items-center justify-center gap-2 text-[10px] font-bold text-[#FF2E93] uppercase tracking-wider">
                            <ShieldAlert size={12} /> Anti-Screenshot Enabled — Messages vanish in 24h
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar pb-24 md:pb-6">
                            {/* Mock Messages */}
                            <div className="flex gap-4 group">
                                <div className="flex-shrink-0 mt-1">
                                    <NeonAvatar src={activeRoom?.host.avatar || ''} alt="Host" size="md" hasGlow />
                                </div>
                                <div>
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="font-bold text-[#00E5FF] text-sm hover:underline cursor-pointer">{activeRoom?.host.name}</span>
                                        <span className="text-[10px] text-[#B3B3C6] bg-[#8A2BE2]/20 px-1.5 py-0.5 rounded text-xs font-bold uppercase">HOST</span>
                                        <span className="text-[10px] text-[#B3B3C6]">Today at 8:42 PM</span>
                                    </div>
                                    <p className="text-white/90 leading-relaxed text-sm bg-[#1A1A22] p-3 rounded-r-xl rounded-bl-xl border border-white/5 shadow-md inline-block">
                                        Welcome to the room everyone! Let's keep the vibes high. 🚀
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-[#2A2A35] flex items-center justify-center text-sm font-bold text-[#B3B3C6]">S</div>
                                </div>
                                <div>
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="font-bold text-[#FF2E93] text-sm hover:underline cursor-pointer">Sneha</span>
                                        <span className="text-[10px] text-[#B3B3C6]">Today at 8:44 PM</span>
                                    </div>
                                    <VoiceNotePlaceholder />
                                </div>
                            </div>

                            {/* Poll */}
                            <div className="max-w-sm ml-14">
                                <PollCard
                                    id="poll-1"
                                    question="Which stack is better?"
                                    options={[
                                        { id: '1', text: 'React Native', votes: 45 },
                                        { id: '2', text: 'Flutter', votes: 20 },
                                    ]}
                                    totalVotes={65}
                                />
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className={`p-4 border-t backdrop-blur-md transition-colors duration-500 ${isConfessionMode ? 'bg-black/90 border-[#8A2BE2]/50' : 'bg-[#1A1A22]/90 border-white/5'}`}>
                            {isConfessionMode && (
                                <div className="flex justify-center mb-2">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#8A2BE2] animate-pulse">
                                        🕵️ Confession Mode Active
                                    </span>
                                </div>
                            )}
                            <div className={`relative flex items-center gap-2 rounded-full px-4 py-2 border transition-colors shadow-inner ${isConfessionMode ? 'bg-[#0F0F14] border-[#8A2BE2] shadow-[0_0_15px_rgba(138,43,226,0.2)]' : 'bg-[#0F0F14] border-white/10 focus-within:border-[#00E5FF]/50'}`}>
                                <button className="p-2 text-[#B3B3C6] hover:text-[#00E5FF] transition-colors rounded-full hover:bg-white/5">
                                    <Plus size={20} />
                                </button>
                                <input
                                    type="text"
                                    placeholder={isConfessionMode ? "Whisper your secret..." : `Message #${activeRoom?.tags[0] || 'room'}...`}
                                    className={`flex-1 bg-transparent placeholder:text-[#B3B3C6]/50 focus:outline-none py-2 text-sm transition-colors ${isConfessionMode ? 'text-[#8A2BE2] font-medium' : 'text-white'}`}
                                />
                                <button
                                    onClick={() => setIsConfessionMode(!isConfessionMode)}
                                    className={`p-2 transition-colors rounded-full hover:bg-white/5 relative group ${isConfessionMode ? 'text-[#8A2BE2]' : 'text-[#B3B3C6] hover:text-[#8A2BE2]'}`}
                                    title="Toggle Confession Mode"
                                >
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                        {isConfessionMode ? 'Reveal Identity' : 'Go Anonymous'}
                                    </span>
                                    <Ghost size={20} />
                                </button>
                                <button className="p-2 text-[#B3B3C6] hover:text-[#FF2E93] transition-colors rounded-full hover:bg-white/5">
                                    <Mic size={20} />
                                </button>
                                <button className={`p-2 rounded-full transition-colors shadow-lg ${isConfessionMode ? 'bg-[#8A2BE2] text-white hover:bg-[#9D4EDD] shadow-[#8A2BE2]/20' : 'bg-[#00E5FF] text-[#0F0F14] hover:bg-[#00FFB3] shadow-[#00E5FF]/20'}`}>
                                    <Send size={18} fill="currentColor" />
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}
