import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "sethmakowsky.com" }],
        destination: "/founder",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.sethmakowsky.com" }],
        destination: "/founder",
        permanent: true,
      },
    ];
  },
  // Strict mode catches potential React issues early
  reactStrictMode: true,
};

export default nextConfig;
