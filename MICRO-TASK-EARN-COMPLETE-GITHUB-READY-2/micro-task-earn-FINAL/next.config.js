/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ynnrhunxyyzxsttzhopm.supabase.co'],
    unoptimized: process.env.NODE_ENV === 'development'
  },
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;