"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface PollCardProps {
    id: string;
    question: string;
    options: { id: string; text: string; votes: number }[];
    totalVotes: number;
}

export default function PollCard({ id, question, options, totalVotes }: PollCardProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleVote = (optionId: string) => {
        if (selectedOption) return;
        setSelectedOption(optionId);
        // Simulate vote logic
    };

    return (
        <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-[#1A1A22] rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-[#FF2E93]/50 transition-colors"
        >
            <h3 className="text-xl font-bold text-white mb-4">{question}</h3>

            <div className="space-y-3 relative z-10">
                {options.map((option) => {
                    const percentage = Math.round((option.votes / totalVotes) * 100);
                    const isSelected = selectedOption === option.id;

                    return (
                        <motion.button
                            key={option.id}
                            onClick={() => handleVote(option.id)}
                            disabled={selectedOption !== null}
                            whileTap={{ scale: 0.98 }}
                            className={`relative w-full text-left p-4 rounded-xl border transition-all overflow-hidden ${isSelected ? 'border-[#FF2E93] bg-[#FF2E93]/10' : 'border-white/10 hover:bg-white/5'}`}
                        >
                            {/* Progress Bar background */}
                            {(selectedOption || isSelected) && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${percentage}%` }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="absolute left-0 top-0 bottom-0 bg-white/5 z-0"
                                />
                            )}

                            <div className="flex justify-between items-center relative z-10">
                                <span className={`font-medium ${isSelected ? 'text-[#FF2E93]' : 'text-white'}`}>{option.text}</span>
                                {(selectedOption || isSelected) && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-sm font-bold text-[#B3B3C6]"
                                    >
                                        {percentage}%
                                    </motion.span>
                                )}
                            </div>
                        </motion.button>
                    );
                })}
            </div>

            <div className="mt-4 text-xs text-[#B3B3C6] font-mono text-right">
                {totalVotes} votes • {selectedOption ? 'Voted' : 'Tap to vote'}
            </div>

            {/* Background Glow */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#FF2E93] blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    );
}
