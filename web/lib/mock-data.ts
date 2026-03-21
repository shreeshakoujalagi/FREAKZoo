export const MOCK_USERS = [
    {
        id: 'u1',
        name: 'Aarav Techie',
        username: '@aaravdev',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop',
        badges: ['verified', 'streak-fire', 'authentic'],
        streak: 12,
        bio: ' 🚀 | Indie Dev | Music Producer',
        tagline: 'Indie Dev | Music Producer | Meme Researcher',
        skills: ['React Native', 'Next.js', 'Synthwave', 'Memeology'],
        reputation: 850,
    },
    {
        id: 'u2',
        name: 'Sneha Arts',
        username: '@snehadesign',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        badges: ['artist'],
        streak: 5,
        bio: 'UI/UX Designer | Coffee addict ☕ | Creating aesthetics',
        tagline: 'Visual Storyteller | Coffee Connoisseur',
        skills: ['Figma', '3D Art', 'Color Theory'],
        reputation: 720,
    },
];

export const STORIES = [
    { id: 's1', user: MOCK_USERS[0], image: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=400&h=800&fit=crop', viewed: false },
    { id: 's2', user: MOCK_USERS[1], image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&h=800&fit=crop', viewed: true },
    { id: 's3', user: { ...MOCK_USERS[0], id: 'u3', name: 'Rohan', username: '@rohan_vibe' }, image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=800&fit=crop', viewed: false },
];

export const PORTFOLIO = [
    { id: 'pf1', title: 'Neon UI Kit', category: 'Design', image: 'https://images.unsplash.com/photo-1558655146-d09347e0b7a9?w=600&h=400&fit=crop', likes: 120 },
    { id: 'pf2', title: 'Cyberpunk beats', category: 'Music', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop', likes: 85 },
];

export const TRENDING_TAGS = [
    { id: 't1', tag: 'BangaloreTech', count: '12.5k' },
    { id: 't2', tag: 'LateNightVibes', count: '8.2k' },
    { id: 't3', tag: 'IndieHacking', count: '5.1k' },
    { id: 't4', tag: 'GenZDesign', count: '3.4k' },
];

export const MOCK_ROOMS = [
    {
        id: 'r1',
        title: 'Late Night Coding session 💻',
        host: MOCK_USERS[0],
        participants: 12,
        tags: ['Tech', 'Coding', 'Bengaluru'],
        expiresIn: '2h 15m',
        isLive: true,
    },
    {
        id: 'r2',
        title: 'K-Pop Stan Twitter check-in ✨',
        host: MOCK_USERS[1],
        participants: 45,
        tags: ['K-Pop', 'Music', ' Meme 🇮🇳'],
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

export const INTERESTS = [
    { id: 'tech', label: 'Tech & AI', icon: 'cpu' },
    { id: 'music', label: 'Music', icon: 'music' },
    { id: 'startups', label: 'Startups', icon: 'rocket' },
    { id: 'gaming', label: 'Gaming', icon: 'gamepad-2' },
    { id: 'art', label: 'Art & Design', icon: 'palette' },
    { id: 'lifestyle', label: 'Lifestyle', icon: 'coffee' },
    { id: 'memes', label: 'Kannada Pages', icon: 'smile' },
];

export const FEED_POSTS = [
    {
        id: 'p1',
        type: 'reblog',
        user: MOCK_USERS[0],
        content: 'This is exactly what I was talking about yesterday. The future of UI is NEON. 🔮',
        referencePost: {
            user: MOCK_USERS[1],
            content: 'Just finished this new dark mode concept. Thoughts? #Design #UI',
            image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop'
        },
        likes: 42,
        comments: 5,
        timestamp: '2h ago',
    },
    {
        id: 'p4',
        type: 'reel',
        user: MOCK_USERS[1],
        content: 'Process video of my latest 3D render! using Blender + Cycles. #3DArt',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=800&fit=crop',
        likes: 1205,
        comments: 89,
        timestamp: '1h ago',
    },
    {
        id: 'p2',
        type: 'vibe', // Twitter style
        user: MOCK_USERS[1],
        content: 'Bengaluru traffic is real today... but the weather is perfect! 🌦️ #BangaloreWeather',
        likes: 128,
        comments: 12,
        timestamp: '15m ago',
    },
    {
        id: 'p3',
        type: 'drop', // Instagram style
        user: MOCK_USERS[0],
        content: 'Just deployed the new feature! Who wants to test? 🚀 #coding #indiehackers',
        image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&h=400&fit=crop',
        likes: 250,
        comments: 20,
        timestamp: '2m ago',
    }
];

export const BADGES = [
    { id: 'verified', label: 'Verified', icon: 'check-circle' },
    { id: 'streak-fire', label: 'Streak Fire', icon: 'flame' },
    { id: 'artist', label: 'Artist', icon: 'palette' },
    { id: 'og', label: 'OG Member', icon: 'crown' },
    { id: 'authentic', label: 'Authentic', icon: 'shield-check' },
];

export const POLLS = [
    {
        id: 'poll1',
        question: 'Best late night snack? 🌮',
        options: [
            { id: '1', text: 'Tacos', votes: 45 },
            { id: '2', text: 'Pizza', votes: 30 },
            { id: '3', text: 'Maggi', votes: 85 },
        ],
        totalVotes: 160,
    }
];

export const MOODS = ['Chill', 'Hype', 'Deep', 'Funny', 'WTF', 'Gaming', 'Music', 'Tech'];
