/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: 'export',
    distDir: 'docs',
    // assetPrefix: isProd ? 'https://bfeldkamp3.github.io/immaculate-gridiron/' : '',
}

module.exports = nextConfig
