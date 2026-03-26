export const MOCK_USERS = [
    {
        id: '1',
        name: 'Aarav Techie',
        username: '@aaravdev',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
        badges: ['verified', 'streak-fire'],
        streak: 12,
        bio: 'Building the next big thing in BLR 🚀',
    },
    {
        id: '2',
        name: 'Sneha Arts',
        username: '@snehadesign',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
        badges: ['artist'],
        streak: 5,
        bio: 'UI/UX Designer | Coffee addict ☕',
    },
    {
        id: '3',
        name: 'Karthik Vibe',
        username: '@karthik_v',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
        badges: ['trendsetter'],
        streak: 8,
        bio: 'Music & Vibes | 📍 Indiranagar',
    },
];

export const STORIES = [
    { id: 's1', user: MOCK_USERS[0], isNew: true },
    { id: 's2', user: MOCK_USERS[1], isNew: false },
    { id: 's3', user: MOCK_USERS[2], isNew: true },
    { id: 's4', user: MOCK_USERS[0], isNew: false },
    { id: 's5', user: MOCK_USERS[1], isNew: true },
];

export const MOCK_ROOMS = [
    {
        id: 'r1',
        title: 'Late Night Coding session 💻',
        host: MOCK_USERS[0],
        participants: 12,
        tags: ['Tech', 'Coding'],
        expiresIn: '2h 15m',
        isLive: true,
    },
    {
        id: 'r2',
        title: 'K-Pop Stan Twitter check-in ✨',
        host: MOCK_USERS[1],
        participants: 45,
        tags: ['K-Pop', 'Music'],
        expiresIn: '45m',
        isLive: true,
    },
    {
        id: 'r3',
        title: 'Startup Pitches - Feedback only',
        host: MOCK_USERS[0],
        participants: 8,
        tags: ['Startups', 'Business'],
        expiresIn: '5h 30m',
        isLive: false,
    },
];

export const FEED_POSTS = [
    {
        id: '1',
        type: 'vibe',
        user: MOCK_USERS[2],
        content: 'Just discovered this insane cafe in HSR! The vibes are unmatched 🍵✨',
        likes: 1204,
        comments: 42,
        timestamp: '1h ago',
    },
    {
        id: '2',
        type: 'reel',
        user: MOCK_USERS[0],
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-light-33434-large.mp4',
        content: 'whts the diff between me and others ',
        likes: 8900,
        comments: 156,
        timestamp: '2h ago',
    },
    {
        id: '3',
        type: 'moodboard',
        user: MOCK_USERS[1],
        images: [
            'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2070&auto=format&fit=crop',
        ],
        title: 'Midnight Aesthetics',
        likes: 450,
        comments: 12,
        timestamp: '4h ago',
    },
    {
        id: '4',
        type: 'reblog',
        user: MOCK_USERS[0],
        originalPost: {
            user: MOCK_USERS[1],
            content: 'Design is not just what it looks like and feels like. Design is how it works.',
        },
        content: 'Pure facts! Always prioritize UX 🚀',
        likes: 120,
        comments: 8,
        timestamp: '5h ago',
    },
    {
        id: '5',
        type: 'collab',
        users: [MOCK_USERS[1], MOCK_USERS[2]],
        content: 'Working on something big! Can\'t wait to share �✨',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
        likes: 3400,
        comments: 89,
        timestamp: '6h ago',
    },
];

export const TRENDING_TAGS = [
    '#BangaloreTech',
    '#LateNightVibes',
    '#IndieDev',
    '#MemeEconomy',
    '#AIRevolution',
];
