import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/anijam",
  assetPrefix: '/anijam/',
  reactStrictMode: true,
  images: { unoptimized: true }
};

export default nextConfig;
