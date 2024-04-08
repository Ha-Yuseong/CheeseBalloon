/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stimg.afreecatv.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "nng-phinf.pstatic.net",
        port: "",
      },
    ],
  },
};

export default nextConfig;
