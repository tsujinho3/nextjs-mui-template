/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, context) => {
        config.watchOptions = {
            poll: 800,
            aggregateTimeout: 300,
        }
        return config
    },
}

module.exports = nextConfig
