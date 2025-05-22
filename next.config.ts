import type { NextConfig } from "next";
import { withSentryConfig } from '@sentry/nextjs';
import withBundleAnalyzer from '@next/bundle-analyzer';

// Import security headers
import { securityHeaders } from './src/lib/securityHeaders';

// Configure bundle analyzer
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
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

// Configure Sentry
export default withSentryConfig(configWithBundleAnalyzer, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options
  org: process.env.SENTRY_ORG || '',
  project: process.env.SENTRY_PROJECT || '',
  
  // Auth tokens can be obtained from sentry.io/settings/account/api/auth-tokens/
  // and need `project:releases` and `org:read` scopes
  authToken: process.env.SENTRY_AUTH_TOKEN || '',
  
  silent: true, // Suppresses all logs
  
  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
  
  // Upload source maps in production
  disableServerWebpackPlugin: process.env.NODE_ENV !== 'production',
  disableClientWebpackPlugin: process.env.NODE_ENV !== 'production',
});
