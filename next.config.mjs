/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    turbopack: true,
    turbopack: {
      root: __dirname, // sets project root explicitly
    },
  },
};

export default nextConfig;
