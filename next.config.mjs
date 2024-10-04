/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        // Updated to use the new configuration format
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'basinasbase.com',
                port: '',
                pathname: '/**',
            }
        ],
        loader: 'custom',
        loaderFile: './loader.js',
    },
    distDir: 'out',
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
      ) => {
        if (config.cache && !dev) {
          config.cache = Object.freeze({
            type: 'memory',
          })
        }
        // Important: return the modified config
        return config
    }
};

export default nextConfig;
