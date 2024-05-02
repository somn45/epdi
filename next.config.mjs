/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  experimental: {
    esmExternals: 'loose', // <-- add this
    serverComponentsExternalPackages: ['mongoose'], // <-- and this
  },
};

export default nextConfig;
