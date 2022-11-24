/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    ApiUrl: process.env.ApiUrl,
  },
};

module.exports = nextConfig;
