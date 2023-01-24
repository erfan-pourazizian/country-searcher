/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'upload.wikimedia.org',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'flagcdn.com',
    //   },
        domains: ['upload.wikimedia.org','flagcdn.com'],
    // ],
  },
}

module.exports = nextConfig
