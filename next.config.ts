import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All images are local (public/), no external domains needed
    formats: ["image/avif", "image/webp"],
  },
  // Strict mode catches potential React issues early
  reactStrictMode: true,
};

export default nextConfig;
