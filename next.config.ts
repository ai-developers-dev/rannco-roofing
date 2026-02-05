import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rannco-roofing.lovable.app",
      },
    ],
  },
};

export default nextConfig;
