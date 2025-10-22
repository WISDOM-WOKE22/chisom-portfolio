import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'blog.openreplay.com',
      },
      {
        protocol: 'https',
        hostname: 'www.red-gate.com',
      },
    ],
  },
};

export default nextConfig;
