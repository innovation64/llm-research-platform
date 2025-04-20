/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/llm-research-platform',
    assetPrefix: '/llm-research-platform/',
    images: {
      unoptimized: true,
    },
  }
  
  module.exports = nextConfig