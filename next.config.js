/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    // Optional: Only needed if you use next/image component, but safe to include
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
