/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // required for S3/static hosting
    formats: ['image/avif', 'image/webp'],
  },
  output: 'export', // 👈 this makes Next.js create a static "out/" folder
  
  // Performance optimizations
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header
  
  // Optimize production build
  swcMinify: true, // Use SWC for minification (faster than Terser)
  
  // Experimental optimizations
  experimental: {
    optimizeCss: true, // Optimize CSS
    optimizePackageImports: ['framer-motion', 'lucide-react', '@radix-ui/react-accordion'], // Tree-shake heavy packages
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Production client-side optimizations
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            // Vendor chunk for React/Next
            vendor: {
              test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
              name: 'vendor',
              priority: 10,
            },
            // Framer Motion separate chunk
            framerMotion: {
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              name: 'framer-motion',
              priority: 9,
            },
            // Radix UI components
            radix: {
              test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
              name: 'radix-ui',
              priority: 8,
            },
            // Common chunk for shared code
            common: {
              minChunks: 2,
              priority: 5,
              reuseExistingChunk: true,
            },
          },
        },
      }
    }
    return config
  },
};

export default nextConfig;
