/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['cdn.example.com', 'picsum.photos', 'images.unsplash.com'],
    },
};

module.exports = nextConfig;
