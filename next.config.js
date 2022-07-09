/** @type {import('next').NextConfig}  */
if (process.env.NODE_ENV === 'production') {
  require('dotenv').config()
  throw new Error(process.env.DATABASE_URI)
}

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  env: {
    "DATABASE_URI": process.env.DATABASE_URI,
  }
};

module.exports = nextConfig;
