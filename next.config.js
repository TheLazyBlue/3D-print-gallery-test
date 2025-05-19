/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/3D-print-gallery-test',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: '/3D-print-gallery-test/',
  distDir: 'out',
}

module.exports = nextConfig 