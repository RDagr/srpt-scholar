/** @type {import('next').NextConfig} */
const nextConfig = {
  output: undefined,
  images: {
    unoptimized: false,
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
};

export default nextConfig;
