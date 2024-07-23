/** @type {import('next').NextConfig} */
const nextConfig = {
    // Habilitar la exportación estática
     // Esta opción es necesaria para exportar la aplicación como HTML estático
    distDir: 'out',   // Directorio de salida para Netlify (debe coincidir con el directorio en el que se genera el build)
  };
  
  module.exports = nextConfig;