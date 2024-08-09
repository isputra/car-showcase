/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["cdn.imagin.studio"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.imagin.studio",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
