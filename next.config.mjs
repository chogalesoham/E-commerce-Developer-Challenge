/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other configurations ...
  images: {
    domains: [
      "fakestoreapi.com",
      "another-image-domain.com",
      "yet-another.net",
    ],
  },
};

export default nextConfig;
