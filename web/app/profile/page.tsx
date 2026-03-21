"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_USERS, PORTFOLIO } from '../../lib/mock-data';
import NeonAvatar from '../../components/ui/NeonAvatar';
import Badge from '../../components/ui/Badge';
import SkillBadge from '../../components/profile/SkillBadge';
import CredibilityMeter from '../../components/profile/CredibilityMeter';
import PortfolioCard from '../../components/profile/PortfolioCard';
import MoodBoardGrid from '../../components/profile/MoodBoardGrid';
import ZooDashboard from '../../components/zoo/ZooDashboard';
import { Share2, Settings, Zap, Grid, Briefcase, Activity, Edit2, Handshake, PawPrint } from 'lucide-react';

export default function ProfilePage() {
    const user = MOCK_USERS[0];
    const [activeTab, setActiveTab] = useState('zoo');

    return (
        <div className="flex flex-col items-center min-h-screen px-4 pb-24 md:pb-0 overflow-y-auto bg-gradient-to-b from-[#0F0F14] to-[#1A1A22]">
            {/* Profile Header */}
            <div className="w-full max-w-4xl relative pt-12 pb-8 flex flex-col md:flex-row items-start gap-8 border-b border-white/5">
                <div className="relative group mx-auto md:mx-0">
                    <NeonAvatar src={user.avatar} alt={user.name} size="xl" hasGlow />
                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="absolute -bottom-2 -right-2 bg-[#1A1A22] border-2 border-[#8A2BE2] p-2 rounded-full text-[#00E5FF] shadow-lg hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] z-10"
                    >
                        <Edit2 size={16} />
                    </motion.button>
                </div>

                <div className="flex-1 text-center md:text-left space-y-4 w-full">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B3B3C6] tracking-tighter mb-1">{user.name}</h1>
                            <p className="text-[#00E5FF] font-mono text-sm tracking-widest uppercase mb-2">{user.tagline}</p>
                            <div className="flex gap-2 justify-center md:justify-start flex-wrap">
                                {user.badges.map(badgeId => (
                                    <Badge key={badgeId} id={badgeId} size={18} />
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4 items-center justify-center md:justify-start">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2 bg-white text-black font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all flex items-center gap-2"
                            >
                                <Handshake size={18} /> Collab
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="p-2 border border-white/10 rounded-full text-[#B3B3C6] hover:text-white hover:bg-white/5 transition-colors"
                            >
                                <Share2 size={20} />
                            </motion.button>
                        </div>
                    </div>

                    <p className="text-white/80 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light text-lg">
                        {user.bio}
                    </p>

                    {/* Gen Z LinkedIn Skills */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-2">
                        {user.skills?.map(skill => (
                            <SkillBadge key={skill} skill={skill} />
                        ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        <CredibilityMeter score={user.reputation || 850} />

                        <div className="bg-[#1A1A22] rounded-xl p-4 border border-white/5 flex flex-col justify-center items-center group hover:border-[#FF2E93]/50 transition-colors">
                            <span className="text-2xl font-bold text-white group-hover:text-[#FF2E93] transition-colors">{user.streak}🔥</span>
                            <span className="text-[10px] text-[#B3B3C6] uppercase tracking-wider">Day Streak</span>
                        </div>

                        <div className="bg-[#1A1A22] rounded-xl p-4 border border-[#00FFB3]/20 flex flex-col justify-center items-center group hover:border-[#00FFB3]/50 transition-colors relative overflow-hidden">
                            <div className="absolute inset-0 bg-[#00FFB3]/5 -z-10 group-hover:bg-[#00FFB3]/10 transition-colors" />
                            <span className="text-2xl font-bold text-white group-hover:text-[#00FFB3] transition-colors">95%</span>
                            <span className="text-[10px] text-[#B3B3C6] uppercase tracking-wider">Zoo Authenticity</span>
                        </div>

                        <div className="bg-[#1A1A22] rounded-xl p-4 border border-white/5 flex flex-col justify-center items-center group hover:border-[#8A2BE2]/50 transition-colors">
                            <span className="text-2xl font-bold text-white group-hover:text-[#8A2BE2] transition-colors">45</span>
                            <span className="text-[10px] text-[#B3B3C6] uppercase tracking-wider">Collaborations</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="w-full max-w-4xl py-8 flex justify-start gap-8 border-b border-white/5 overflow-x-auto no-scrollbar">
                <button
                    onClick={() => setActiveTab('zoo')}
                    className={`flex items-center gap-2 font-bold border-b-2 pb-2 text-lg whitespace-nowrap transition-colors ${activeTab === 'zoo' ? 'text-[#8A2BE2] border-[#8A2BE2]' : 'text-[#B3B3C6] border-transparent hover:text-white'}`}
                >
                    <PawPrint size={20} /> Your Zoo
                </button>
                <button
                    onClick={() => setActiveTab('portfolio')}
                    className={`flex items-center gap-2 font-bold border-b-2 pb-2 text-lg whitespace-nowrap transition-colors ${activeTab === 'portfolio' ? 'text-[#00E5FF] border-[#00E5FF]' : 'text-[#B3B3C6] border-transparent hover:text-white'}`}
                >
                    <Briefcase size={20} /> Portfolio
                </button>
                <button
                    onClick={() => setActiveTab('vibes')}
                    className={`flex items-center gap-2 font-bold border-b-2 pb-2 text-lg whitespace-nowrap transition-colors ${activeTab === 'vibes' ? 'text-[#FF2E93] border-[#FF2E93]' : 'text-[#B3B3C6] border-transparent hover:text-white'}`}
                >
                    <Grid size={20} /> Vibe Grid
                </button>
            </div>

            {/* Content Area */}
            <div className="w-full max-w-4xl mt-8 min-h-[400px]">
                <AnimatePresence mode="wait">
                    {activeTab === 'zoo' && (
                        <motion.div
                            key="zoo"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <ZooDashboard />
                        </motion.div>
                    )}
                    {activeTab === 'portfolio' && (
                        <motion.div
                            key="portfolio"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {PORTFOLIO.map((item, index) => (
                                <PortfolioCard key={item.id} item={item} />
                            ))}

                            {/* Placeholder for "Add Project" */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="aspect-video rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-[#B3B3C6] hover:text-white hover:border-white/30 cursor-pointer transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-2 group-hover:bg-[#8A2BE2]/20 transition-colors">
                                    <div className="text-2xl">+</div>
                                </div>
                                <span className="font-bold">Add Project</span>
                            </motion.div>
                        </motion.div>
                    )}

                    {activeTab === 'vibes' && (
                        <motion.div
                            key="vibes"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                        >
                            <MoodBoardGrid />
                        </motion.div>
                    )}

                    {activeTab === 'activity' && (
                        <motion.div
                            key="activity"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="flex flex-col items-center justify-center h-64 text-[#B3B3C6]"
                        >
                            <Activity size={48} className="mb-4 opacity-50" />
                            <p>No recent activity needed to be cool.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
