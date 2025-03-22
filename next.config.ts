import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: 'https://blog-a2-server.up.railway.app/api/:path*',
      },
    ]
  },
}

export default nextConfig
