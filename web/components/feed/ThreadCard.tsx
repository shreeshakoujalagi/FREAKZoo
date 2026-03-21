"use client";

import { motion } from 'framer-motion';

interface ThreadCardProps {
    thread: any;
}

export default function ThreadCard({ thread }: ThreadCardProps) {
    return (
        <motion.div
            whileHover={{ y: -2 }}
            className="group relative bg-[#1A1A22] rounded-3xl p-6 border border-white/5 space-y-4"
        >
            <div className="flex gap-4">
                <div className="flex flex-col items-center">
                    <img src={thread.user.avatar} className="w-12 h-12 rounded-full border-2 border-white/10" />
                    <div className="w-[2px] bg-white/10 h-full my-2 flex-grow" />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between mb-1">
                        <span className="font-bold text-white hover:underline cursor-pointer">{thread.user.name}</span>
                        <span className="text-xs text-[#B3B3C6]">{thread.timestamp}</span>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed mb-3 font-light">
                        {thread.content}
                    </p>
                </div>
            </div>

            {thread.replies?.map((reply, i) => (
                <div key={i} className="flex gap-4 group/reply hover:bg-white/5 rounded-xl p-3 -mx-3 transition-colors">
                    <img src={reply.user.avatar} className="w-8 h-8 rounded-full border border-white/10 mt-1" />
                    <div className="flex-1">
                        <div className="flex justify-between mb-1">
                            <span className="font-bold text-sm text-[#B3B3C6] group-hover/reply:text-[#00E5FF] transition-colors">{reply.user.name}</span>
                            <span className="text-[10px] text-[#B3B3C6]/50">{reply.timestamp}</span>
                        </div>
                        <p className="text-white/80 text-sm font-light">
                            {reply.content}
                        </p>
                    </div>
                </div>
            ))}

            <button className="text-[#00E5FF] text-xs font-bold hover:underline pl-14">Show 12 more replies</button>
        </motion.div>
    );
}
