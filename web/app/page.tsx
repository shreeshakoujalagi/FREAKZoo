import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Users } from 'lucide-react';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24 overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#8A2BE2] rounded-full blur-[150px] opacity-20 animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#00E5FF] rounded-full blur-[150px] opacity-20 animate-pulse delay-1000" />

            {/* Hero Section */}
            <div className="relative z-10 text-center max-w-5xl space-y-8 flex flex-col items-center">

                <div className="inline-block px-6 py-2 rounded-full border border-[#00FFB3]/30 bg-[#00FFB3]/10 text-[#00FFB3] text-sm font-bold mb-4 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,179,0.2)]">
                    🔥 Private Beta Access Open
                </div>

                <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none">
                    REAL.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] via-[#FF2E93] to-[#00E5FF] animate-gradient">EPHEMERAL.</span><br />
                    YOU.
                </h1>

                <p className="text-xl md:text-2xl text-[#B3B3C6] max-w-2xl mx-auto leading-relaxed font-light">
                    No feeds. No ads. No receipts.<br />
                    Just 24-hour rooms and pure vibes.
                </p>

                {/* Mockup Preview - Abstract Representation */}
                <div className="relative w-full max-w-xs md:max-w-md aspect-[9/16] bg-[#1A1A22] rounded-[40px] border-8 border-[#2A2A35] shadow-2xl overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 my-10 group">
                    {/* Screen Content */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#8A2BE2]/20 to-[#0F0F14] flex flex-col p-6">
                        <div className="w-full flex justify-between items-center mb-8">
                            <div className="w-8 h-8 rounded-full bg-white/20" />
                            <div className="w-20 h-4 rounded-full bg-white/10" />
                        </div>
                        <div className="flex-1 space-y-4">
                            <div className="w-full h-40 rounded-2xl bg-white/5 border border-white/10 animate-pulse" />
                            <div className="w-3/4 h-4 rounded-full bg-white/20" />
                            <div className="w-1/2 h-4 rounded-full bg-white/10" />
                        </div>
                        <div className="mt-auto flex justify-around">
                            {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-full bg-white/5" />)}
                        </div>
                    </div>

                    {/* Glare */}
                    <div className="absolute -top-20 -right-20 w-60 h-60 bg-white opacity-5 blur-3xl pointer-events-none" />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                    <Link
                        href="/onboarding"
                        className="group relative px-10 py-5 bg-gradient-to-r from-[#8A2BE2] to-[#00E5FF] rounded-full font-bold text-white text-xl shadow-[0_0_30px_rgba(138,43,226,0.5)] hover:shadow-[0_0_50px_rgba(0,229,255,0.6)] hover:scale-105 transition-all duration-300 overflow-hidden w-full sm:w-auto text-center"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Join the Vibe <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Link>
                </div>
            </div>

            <div className="mt-20 text-[#B3B3C6] text-sm font-mono opacity-50">
                <p>FREAKZoo © 2026 • Bengaluru</p>
            </div>
        </main>
    );
}
