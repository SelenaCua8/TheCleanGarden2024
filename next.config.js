/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'out', // Directorio de salida para Netlify
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '/icones-gratuites/**', // Puedes ajustar el pathname según sea necesario
      },
    ],
  },
};

module.exports = nextConfig;
