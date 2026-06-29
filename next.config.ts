import type { NextConfig } from "next";

// Static export: produces an `out/` folder deployable to plain shared hosting
// (no Node server, no API routes, no image optimization server).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  outputFileTracingRoot: process.cwd(),
  images: {
    // next/image's optimization API needs a server; shared hosting has none.
    unoptimized: true,
  },
};

export default nextConfig;
