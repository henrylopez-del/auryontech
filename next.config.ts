import type { NextConfig } from "next";

const repo = "auryontech";
const isProd = process.env.NODE_ENV === "production";
const base = isProd ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: base,
  assetPrefix: base || undefined,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BP: base,
  },
};

export default nextConfig;
