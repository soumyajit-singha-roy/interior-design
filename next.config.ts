import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/interior-design',
  experimental: {
    turbopack: {
      root: process.cwd(),
    },
  },
};

export default nextConfig;
