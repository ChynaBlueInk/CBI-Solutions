/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Youth Ethics Lab course lives in public/youth-ethics-lab/index.html.
  // Serve it at /youth-ethics-lab (without needing /index.html on the end).
  async rewrites() {
    return [
      { source: "/youth-ethics-lab", destination: "/youth-ethics-lab/index.html" },
    ];
  },
}

export default nextConfig
