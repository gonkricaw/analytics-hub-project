import type { NextConfig } from "next";
// import { withSentryConfig } from '@sentry/nextjs';
import withBundleAnalyzer from '@next/bundle-analyzer';

// Import security headers
import { securityHeaders } from './src/lib/securityHeaders';

// Configure bundle analyzer
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Add security headers
  headers: async () => [
    {
      source: '/(.*)',
      headers: securityHeaders,
    },
  ],
  
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com',
      },
    ],
  },
};



// Apply bundle analyzer
const configWithBundleAnalyzer = bundleAnalyzer(nextConfig);

// Export config without Sentry for debugging
export default configWithBundleAnalyzer;

// Configure Sentry with updated options (temporarily disabled)
// export default withSentryConfig(
//   configWithBundleAnalyzer,
//   {
//     // Only enable in production
//     silent: process.env.NODE_ENV !== 'production'
//   },
//   {
//     // For all available options, see:
//     // https://github.com/getsentry/sentry-webpack-plugin#options
//     org: process.env.SENTRY_ORG || '',
//     project: process.env.SENTRY_PROJECT || '',
//     authToken: process.env.SENTRY_AUTH_TOKEN || '',
//   }
// );
