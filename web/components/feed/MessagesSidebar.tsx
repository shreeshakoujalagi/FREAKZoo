"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, Send, Phone, Video, MoreVertical } from 'lucide-react';

const MOCK_MESSAGES = [
    { id: '1', name: 'Alex', lastMessage: 'Yo, did you see that new room?', time: '2m', isOnline: true },
    { id: '2', name: 'Sam', lastMessage: 'Lmao true 😂', time: '1h', isOnline: true },
    { id: '3', name: 'Jordan', lastMessage: 'Are we still meeting up later?', time: '3h', isOnline: false },
    { id: '4', name: 'Taylor', lastMessage: 'Sent a reel', time: '5h', isOnline: false },
    { id: '5', name: 'Casey', lastMessage: 'Thanks!', time: '1d', isOnline: false },
];

const CHAT_HISTORY = [
    { id: 1, sender: 'them', text: 'Yo, did you see that new room?', time: '2:15 PM' },
    { id: 2, sender: 'me', text: 'Nah what room?', time: '2:16 PM' },
    { id: 3, sender: 'them', text: 'The neon one in the tech district. It went crazy yesterday.', time: '2:18 PM' },
    { id: 4, sender: 'them', text: 'You gotta check it out tonight.', time: '2:18 PM' },
];

export default function MessagesSidebar() {
    const [activeChat, setActiveChat] = useState<string | null>(null);
    const [newMessage, setNewMessage] = useState('');

    const activeUser = MOCK_MESSAGES.find(m => m.id === activeChat);

    return (
        <div className="flex flex-col h-full w-full bg-[#0F0F14] overflow-hidden relative">
            <AnimatePresence mode="wait">
                {!activeChat ? (
                    <motion.div
                        key="list"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col h-full overflow-hidden"
                    >
                        <div className="p-4 flex justify-between items-center bg-[#1A1A22]/30 border-b border-white/5 shrink-0">
                            <h3 className="text-white font-bold flex items-center gap-2">
                                Messages
                                <span className="bg-[#FF2E93] text-[9px] px-1.5 py-0.5 rounded-full text-white">2</span>
                            </h3>
                            <span className="text-xs text-[#00E5FF] cursor-pointer hover:underline">Requests</span>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto p-2 space-y-1">
                            {MOCK_MESSAGES.map((msg, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    key={msg.id}
                                    onClick={() => setActiveChat(msg.id)}
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 cursor-pointer transition-colors group relative border border-transparent hover:border-white/5"
                                >
                                    <div className="relative shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8A2BE2] to-[#00E5FF] flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(138,43,226,0.2)] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-shadow">
                                            {msg.name[0]}
                                        </div>
                                        {msg.isOnline && (
                                            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#00FF00] rounded-full border-2 border-[#0F0F14]" />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="text-sm font-bold text-white group-hover:text-[#00E5FF] transition-colors">{msg.name}</h4>
                                            <span className="text-[10px] text-[#B3B3C6] whitespace-nowrap ml-2">{msg.time}</span>
                                        </div>
                                        <p className="text-xs text-[#B3B3C6] truncate pr-2 group-hover:text-white/80 transition-colors">{msg.lastMessage}</p>
                                    </div>
                                    {idx < 2 && (
                                        <div className="absolute right-3 top-[50%] -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF2E93] shadow-[0_0_8px_rgba(255,46,147,0.6)]" />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                        <div className="p-4 border-t border-white/5 bg-[#1A1A22]/20 shrink-0">
                            <button className="w-full py-3 bg-gradient-to-r from-[#8A2BE2] to-[#00E5FF] hover:opacity-90 text-white transition-opacity rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(138,43,226,0.3)]">
                                Start a New Chat
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="chat"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col h-full bg-[#0F0F14] overflow-hidden"
                    >
                        {/* Chat Header */}
                        <div className="p-3 border-b border-white/10 flex items-center justify-between bg-[#1A1A22]/50 backdrop-blur-md shrink-0">
                            <div className="flex items-center gap-3 min-w-0">
                                <button
                                    onClick={() => setActiveChat(null)}
                                    className="p-2 -ml-2 shrink-0 text-[#B3B3C6] hover:text-white rounded-full hover:bg-white/10 transition-colors"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <div className="flex items-center gap-2 cursor-pointer min-w-0">
                                    <div className="relative shrink-0">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8A2BE2] to-[#00E5FF] flex items-center justify-center text-white font-bold text-xs">
                                            {activeUser?.name[0]}
                                        </div>
                                        {activeUser?.isOnline && (
                                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#00FF00] rounded-full border-2 border-[#1A1A22]" />
                                        )}
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="text-sm font-bold text-white leading-tight truncate">{activeUser?.name}</h4>
                                        <p className="text-[10px] text-[#00E5FF] leading-tight truncate">{activeUser?.isOnline ? 'Online now' : 'Offline'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 shrink-0 text-[#B3B3C6]">
                                <button className="p-2 hover:text-[#00E5FF] hover:bg-white/5 rounded-full transition-all"><Phone size={16} /></button>
                                <button className="p-2 hover:text-[#00E5FF] hover:bg-white/5 rounded-full transition-all"><Video size={16} /></button>
                                <button className="p-2 hover:text-white hover:bg-white/5 rounded-full transition-all"><MoreVertical size={16} /></button>
                            </div>
                        </div>

                        {/* Chat History */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-transparent to-[#1A1A22]/20">
                            {CHAT_HISTORY.map((msg, i) => {
                                const isMe = msg.sender === 'me';
                                return (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        key={msg.id}
                                        className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                                    >
                                        <div className={`px-4 py-2.5 max-w-[85%] rounded-2xl text-sm ${
                                            isMe 
                                                ? 'bg-gradient-to-br from-[#8A2BE2] to-[#601AB4] text-white rounded-br-sm shadow-[0_4px_15px_rgba(138,43,226,0.3)]' 
                                                : 'bg-[#1A1A22] text-[#E0E0E0] rounded-bl-sm border border-white/5'
                                        }`}>
                                            {msg.text}
                                        </div>
                                        <span className="text-[9px] text-[#B3B3C6] mt-1 px-1">{msg.time}</span>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-[#1A1A22]/80 backdrop-blur-sm border-t border-white/10 shrink-0">
                            <div className="flex items-center gap-2 bg-[#0F0F14] rounded-full p-1 pl-4 border border-white/10 focus-within:border-[#00E5FF] focus-within:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && newMessage.trim()) {
                                            setNewMessage('');
                                        }
                                    }}
                                    className="flex-1 w-full bg-transparent text-sm text-white focus:outline-none py-2"
                                />
                                <button 
                                    className={`p-2 rounded-full transition-all shrink-0 ${newMessage.trim() ? 'bg-[#00E5FF] text-black shadow-[0_0_10px_rgba(0,229,255,0.4)]' : 'bg-white/5 text-[#B3B3C6]'}`}
                                    onClick={() => {
                                        if(newMessage.trim()) setNewMessage('');
                                    }}
                                >
                                    <Send size={16} className={newMessage.trim() ? 'translate-x-0.5' : ''} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
