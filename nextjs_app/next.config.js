/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'wembleypark.com'],
  },
  webpack(config) {
    // Babel configuration
    config.module.rules.push({
      test: /\.jsx?$/, // Match both .js and .jsx files
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'], // Use the default Next.js Babel preset
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
