/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },
  images: {
    domains: ["images.unsplash.com", "cdn.pixabay.com"],
  },
};

export default nextConfig;
