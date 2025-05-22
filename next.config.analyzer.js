// filepath: d:/Project/NEXTJS/analytics-hub-project/next.config.analyzer.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({});
