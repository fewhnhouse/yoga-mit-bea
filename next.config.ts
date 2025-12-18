import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
        protocol: 'https',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Expose VERCEL_URL to Sanity Studio at build time
  env: {
    // If SANITY_STUDIO_PREVIEW_ORIGIN is set, use it; otherwise derive from VERCEL_URL
    SANITY_STUDIO_PREVIEW_ORIGIN:
      process.env.SANITY_STUDIO_PREVIEW_ORIGIN ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined),
  },
}

export default nextConfig
