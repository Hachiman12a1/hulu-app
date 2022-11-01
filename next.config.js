/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
