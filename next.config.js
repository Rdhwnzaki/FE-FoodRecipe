/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_BASE: process.env.URL_BASE,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
