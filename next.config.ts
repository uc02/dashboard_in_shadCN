import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for static deployments
  images: {
    unoptimized: true, // Disable Image Optimization (static exports don't support it)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  // Optional: Add basePath if deploying to GitHub Pages
  // basePath: '/your-repo-name',
};

export default nextConfig;