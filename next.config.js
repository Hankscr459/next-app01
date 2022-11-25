/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    ApiUrl: process.env.ApiUrl,
  },
  // experimental: {
  //   forceSwcTransforms: true,
  // },
};

module.exports = nextConfig;
