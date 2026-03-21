"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell
} from 'recharts';
import { Zap, Brain, Users, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';

const data = [
    { name: 'Mon', impact: 400 },
    { name: 'Tue', impact: 300 },
    { name: 'Wed', impact: 600 },
    { name: 'Thu', impact: 800 },
    { name: 'Fri', impact: 500 },
    { name: 'Sat', impact: 900 },
    { name: 'Sun', impact: 1000 },
];

const COLORS = ['#8A2BE2', '#00FFB3', '#00E5FF', '#FF2E93'];

const ZooDashboard = () => {
    return (
        <div className="w-full bg-[#1A1A22]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8A2BE2]/10 blur-[100px] -z-10" />

            <header className="flex justify-between items-start mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">Your ZOO</h2>
                    <p className="text-sm text-[#B3B3C6]">Your personal creative ecosystem</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-[#8A2BE2]/20 border border-[#8A2BE2]/30 rounded-full">
                    <Zap size={16} className="text-[#8A2BE2] fill-[#8A2BE2]" />
                    <span className="text-[10px] font-bold text-[#8A2BE2]">LION LEVEL</span>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Vibe Energy */}
                <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="none" />
                            <motion.circle
                                cx="48" cy="48" r="40" stroke="#8A2BE2" strokeWidth="8" fill="none"
                                strokeDasharray="251.2"
                                initial={{ strokeDashoffset: 251.2 }}
                                animate={{ strokeDashoffset: 251.2 * (1 - 0.82) }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="absolute text-lg font-bold text-white">82%</span>
                    </div>
                    <span className="text-xs text-[#B3B3C6] mt-2 font-medium">Vibe Energy</span>
                </div>

                {/* Authenticity */}
                <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="none" />
                            <motion.circle
                                cx="48" cy="48" r="40" stroke="#00FFB3" strokeWidth="8" fill="none"
                                strokeDasharray="251.2"
                                initial={{ strokeDashoffset: 251.2 }}
                                animate={{ strokeDashoffset: 251.2 * (1 - 0.95) }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="absolute text-lg font-bold text-white">95%</span>
                    </div>
                    <span className="text-xs text-[#B3B3C6] mt-2 font-medium">Authenticity</span>
                </div>

                {/* Collab Strength */}
                <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="none" />
                            <motion.circle
                                cx="48" cy="48" r="40" stroke="#00E5FF" strokeWidth="8" fill="none"
                                strokeDasharray="251.2"
                                initial={{ strokeDashoffset: 251.2 }}
                                animate={{ strokeDashoffset: 251.2 * (1 - 0.64) }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="absolute text-lg font-bold text-white">64%</span>
                    </div>
                    <span className="text-xs text-[#B3B3C6] mt-2 font-medium">Collab Strength</span>
                </div>
            </div>

            <div className="bg-black/20 rounded-2xl p-4 border border-white/5 mb-8">
                <div className="flex items-center gap-2 mb-4">
                    <TrendingUp size={16} className="text-[#B3B3C6]" />
                    <span className="text-xs font-bold text-[#B3B3C6] uppercase tracking-widest">Community Impact</span>
                </div>
                <div className="h-40 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <defs>
                                <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#00E5FF" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1A1A22', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                                itemStyle={{ color: '#00E5FF' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="impact"
                                stroke="#00E5FF"
                                strokeWidth={3}
                                dot={{ fill: '#00E5FF', r: 4 }}
                                activeDot={{ r: 6, stroke: '#FFF', strokeWidth: 2 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div>
                <h3 className="text-[10px] font-bold text-[#B3B3C6] uppercase tracking-[0.2em] mb-4">Unlocked Badges</h3>
                <div className="flex justify-between">
                    {[
                        { icon: <Zap size={20} />, label: 'Lion', color: 'text-[#8A2BE2]', border: 'border-[#8A2BE2]' },
                        { icon: <Brain size={20} />, label: 'Owl', color: 'text-[#00FFB3]', border: 'border-[#00FFB3]' },
                        { icon: <Users size={20} />, label: 'Wolf', color: 'text-[#00E5FF]', border: 'border-[#00E5FF]' },
                        { icon: <Sparkles size={20} />, label: 'Fox', color: 'text-[#FF2E93]', border: 'border-[#FF2E93]' },
                    ].map((badge, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className={`flex flex-col items-center justify-center w-16 h-16 rounded-full border bg-white/5 ${badge.border} ${badge.color}`}
                        >
                            {badge.icon}
                            <span className="text-[8px] mt-1 font-bold uppercase">{badge.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ZooDashboard;
