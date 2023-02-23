/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "ssl.gstatic.com",
      "media.glassdoor.com",
      "seeklogo.com",
      "upload.wikimedia.org",
      "www.tonicradio.fr",
    ],
  },
};

module.exports = nextConfig;
