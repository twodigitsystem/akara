import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    /* config options here */
    logging: {
        browserToTerminal: true,
    },

    images: {
        remotePatterns: [
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
