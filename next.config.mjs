/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'kqcnbskzonslscatafxy.supabase.co',
                pathname: '/storage/v1/object/public/cabin-images/**',
            },
        ],
    },
    // output: "export"
};

export default nextConfig;