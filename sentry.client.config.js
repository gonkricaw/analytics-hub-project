// This file configures the initialization of Sentry on the client.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Adjust this to control how many traces you want to collect (0 to 1)
  tracesSampleRate: 0.1,

  // This sets the sample rate to be 10%. You may want to change it to 1.0 for development
  replaysSessionSampleRate: 0.1,
  
  // If you want to record all sessions with errors, set this to 1.0
  replaysOnErrorSampleRate: 1.0,

  integrations: [
    // Enable replay to capture user sessions for better debugging
    new Sentry.Replay({
      // Additional SDK options
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});
