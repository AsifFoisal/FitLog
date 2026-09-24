import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        // https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740"
        protocol: 'https',
        hostname: 'img.magnific.com',
        pathname: '/free-photo/**',
        
      },
    ],
  },
};

export default nextConfig;
