import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/ai-video-course",
        destination: "/courses/prompt-to-pixel",
        permanent: true,
      },
      {
        source: "/ai-video-course/:path*",
        destination: "/courses/prompt-to-pixel",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
