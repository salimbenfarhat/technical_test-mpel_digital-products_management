import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "images.unsplash.com", // Ajout d'Unsplash
      },
    ],
  },
};

export default nextConfig;

