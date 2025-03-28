import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: 'https://blog-a2-server.up.railway.app/api/:path*',
      },
      {
        source: '/usersAvatars/:path*',
        destination: 'https://blog-a2-server.up.railway.app/usersAvatars/:path*',
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog-a2-server.up.railway.app',
        pathname: '/usersAvatars/**',
      },
    ],
  },
}

export default nextConfig
