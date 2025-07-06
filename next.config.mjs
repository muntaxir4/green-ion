/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com", "cdn.pixabay.com", "images.pexels.com"],
  },
};

export default nextConfig;
