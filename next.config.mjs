/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/v1/books',
            destination: 'http://localhost:5500/api/v1/books', // Proxy to Backend
          },
        ];
      },
};

export default nextConfig;
