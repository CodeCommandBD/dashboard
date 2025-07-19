import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [{
      protocol:'https',
      hostname:'cdn.sanity.io'
    }]
  },
  typescript:{
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
