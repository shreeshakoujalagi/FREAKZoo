import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Brand
                primary: {
                    start: "#8A2BE2",
                    end: "#00E5FF",
                },
                accent: {
                    pink: "#FF2E93",
                    mint: "#00FFB3",
                },

                // Backgrounds
                background: {
                    DEFAULT: "#0F0F14",
                    surface: "#1A1A22",
                    surfaceHighlight: "#2A2A35",
                },

                // Text
                text: {
                    primary: "#FFFFFF",
                    secondary: "#B3B3C6",
                    muted: "rgba(179, 179, 198, 0.5)",
                },

                // Status
                error: "#FF4444",
                success: "#00FFB3",
                warning: "#FFD700",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            borderRadius: {
                s: "8px",
                m: "12px",
                l: "20px",
                xl: "32px",
                round: "9999px",
            },
            spacing: {
                xs: "4px",
                s: "8px",
                m: "16px",
                l: "24px",
                xl: "32px",
                xxl: "48px",
            },
            fontSize: {
                h1: "32px",
                h2: "24px",
                h3: "20px",
                body: "16px",
                caption: "14px",
                small: "12px",
            },
            boxShadow: {
                'glow-purple': '0 0 20px rgba(138, 43, 226, 0.5)',
                'glow-cyan': '0 0 20px rgba(0, 229, 255, 0.5)',
                'glow-pink': '0 0 20px rgba(255, 46, 147, 0.5)',
                'soft': '0 4px 8px rgba(0, 0, 0, 0.3)',
            },
            backgroundImage: {
                "gradient-brand": "linear-gradient(to right, #8A2BE2, #00E5FF)",
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
                'pulse-slow': 'pulse 3s infinite',
                'gradient': 'gradient 3s ease infinite',
                'spin-slow': 'spin 3s linear infinite',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px #8A2BE2, 0 0 10px #8A2BE2' },
                    '100%': { boxShadow: '0 0 20px #00E5FF, 0 0 30px #00E5FF' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
