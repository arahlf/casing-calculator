/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";

console.log('alan was here: ' + debug);

const nextConfig = {
    assetPrefix: debug ? '' : '/casing-calculator',
    output: 'export'
}

module.exports = nextConfig
