/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/llmresearchplatform', // 修改为新的仓库名称
    assetPrefix: '/llmresearchplatform/', // 修改为新的仓库名称
    images: {
      unoptimized: true,
    },
  }
  
  module.exports = nextConfig