import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gojonime.com*",
        port: "",
        pathname: "**gojonime.com**",
      },
    ],
  },
};

export default nextConfig;
