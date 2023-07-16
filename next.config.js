/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV === "dev";

const nextConfig = {
    output: 'export',
    distDir: 'docs',
    assetPrefix: !debug ? 'https://bfeldkamp3.github.io/immaculate-gridiron/' : ''
}

module.exports = nextConfig
