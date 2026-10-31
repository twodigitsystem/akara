import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    /* config options here */
    logging: {
        browserToTerminal: true,
    },

    images: {
        // Only the hosts actually used: Unsplash product photography + Google-hosted OG image
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
        ],
    },
    experimental: {
        useTypeScriptCli: true,
    },
}

export default nextConfig
