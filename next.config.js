/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    })
    config.module.rules.push({
      test: /\.glb$/,
      use: {
        loader: 'file-loader',
      },
    })
    return config
  },
  transpilePackages: ['three'],
}

module.exports = nextConfig