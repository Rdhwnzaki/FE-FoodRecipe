/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_BASE: process.env.URL_BASE,
  },
};

module.exports = nextConfig;
