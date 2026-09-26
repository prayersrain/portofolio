import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ponytail: static export, no Node server needed
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
