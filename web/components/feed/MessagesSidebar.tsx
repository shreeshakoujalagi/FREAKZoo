"use client";

import { motion } from 'framer-motion';

const MOCK_MESSAGES = [
    { id: '1', name: 'Alex', lastMessage: 'Yo, did you see that new room?', time: '2m', isOnline: true },
    { id: '2', name: 'Sam', lastMessage: 'Lmao true 😂', time: '1h', isOnline: true },
    { id: '3', name: 'Jordan', lastMessage: 'Are we still meeting up later?', time: '3h', isOnline: false },
    { id: '4', name: 'Taylor', lastMessage: 'Sent a reel', time: '5h', isOnline: false },
    { id: '5', name: 'Casey', lastMessage: 'Thanks!', time: '1d', isOnline: false },
];

export default function MessagesSidebar() {
    return (
        <div className="mt-6 bg-gradient-to-br from-[#1A1A22] to-[#0F0F14] rounded-xl border border-white/5 overflow-hidden shadow-lg">
            <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#1A1A22]/50">
                <h3 className="text-white font-bold flex items-center gap-2">
                    Messages
                    <span className="bg-[#FF2E93] text-[9px] px-1.5 py-0.5 rounded-full text-white">2</span>
                </h3>
                <span className="text-xs text-[#00E5FF] cursor-pointer hover:underline">See all</span>
            </div>
            <div className="p-2 space-y-1">
                {MOCK_MESSAGES.map((msg, idx) => (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={msg.id}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors group relative"
                    >
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8A2BE2] to-[#00E5FF] flex items-center justify-center text-white font-bold text-sm shadow-md">
                                {msg.name[0]}
                            </div>
                            {msg.isOnline && (
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1A1A22]" />
                            )}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-white group-hover:text-[#00E5FF] transition-colors">{msg.name}</h4>
                            <p className="text-xs text-[#B3B3C6] truncate pr-2">{msg.lastMessage}</p>
                        </div>
                        <span className="text-[10px] text-[#B3B3C6] whitespace-nowrap">{msg.time}</span>
                        {/* Unread indicator mockup for top 2 msgs */}
                        {idx < 2 && (
                            <div className="absolute right-2 top-[50%] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                        )}
                    </motion.div>
                ))}
            </div>
            <div className="p-3 border-t border-white/5">
                <button className="w-full py-2 bg-white/5 hover:bg-white/10 text-[#B3B3C6] hover:text-white transition-all rounded-lg text-xs font-bold flex items-center justify-center gap-2">
                    Start a New Chat
                </button>
            </div>
        </div>
    );
}
