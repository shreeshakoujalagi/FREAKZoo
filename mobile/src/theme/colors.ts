export const colors = {
    // Brand
    primaryGradientStart: '#8A2BE2',
    primaryGradientEnd: '#00E5FF',
    accentPink: '#FF2E93',
    mint: '#00FFB3',

    // Backgrounds
    background: '#0F0F14',
    surface: '#1A1A22',
    surfaceHighlight: '#2A2A35',

    // Text
    textPrimary: '#FFFFFF',
    textSecondary: '#B3B3C6',
    textMuted: 'rgba(179, 179, 198, 0.5)',

    // Status
    error: '#FF4444',
    success: '#00FFB3',
    warning: '#FFD700',

    // Utils
    transparent: 'transparent',
    overlay: 'rgba(0,0,0,0.5)',
    white: '#FFFFFF',
    black: '#000000',
};

export const shadows = {
    glowPurple: {
        shadowColor: '#8A2BE2',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 10,
    },
    glowCyan: {
        shadowColor: '#00E5FF',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 10,
    },
    glowPink: {
        shadowColor: '#FF2E93',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 10,
    },
    soft: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
};

export const theme = {
    colors,
    shadows,
    radius: {
        s: 8,
        m: 12,
        l: 20,
        xl: 32,
        round: 9999,
    },
    spacing: {
        xs: 4,
        s: 8,
        m: 16,
        l: 24,
        xl: 32,
        xxl: 48,
    },
    font: {
        regular: 'Poppins-Regular',
        medium: 'Poppins-Medium',
        bold: 'Poppins-Bold',
        sizes: {
            h1: 32,
            h2: 24,
            h3: 20,
            body: 16,
            caption: 14,
            small: 12,
        }
    },
};
