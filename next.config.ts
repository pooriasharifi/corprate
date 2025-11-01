import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "beconnected.esafety.gov.au",
      },
      {
        protocol: "https",
        hostname: "cdn.mos.cms.futurecdn.net",
      },
      {
        protocol: "https",
        hostname: "dkstatics-public.digikala.com",
      },
      {
        protocol: "https",
        hostname: "www.georgetown.edu",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
