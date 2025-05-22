// This file configures the initialization of Sentry on the server.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  // Adjust this to control how many traces you want to collect (0 to 1)
  tracesSampleRate: 0.1,
  
  // Set to 1.0 to capture 100% of transactions
  profilesSampleRate: 0.1,
});
