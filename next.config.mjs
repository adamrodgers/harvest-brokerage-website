/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Add compression and optimization
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
};

export default nextConfig;
