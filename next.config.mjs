const nextConfig = {
  output: 'export', // Required for static exports
  trailingSlash: true,
  images: {
    unoptimized: true, // Mandatory for image optimization
  },
  env: {
    BUILD_STATIC_EXPORT: 'true', // Set directly as string
  },
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}',
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
