/** @type {import('next').NextConfig}  */

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  env: {
    "DATABASE_URI": process.env.DATABASE_URI,
  }
};

module.exports = nextConfig;
