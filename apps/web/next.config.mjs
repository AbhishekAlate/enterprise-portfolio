/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true };
export default {
    async redirects() {
      return [
        {
          source: "/",
          has: [{ type: "host", value: "abhialate.dev" }],
          destination: "https://www.abhialate.dev",
          permanent: true,
        },
      ];
    },
  };
  