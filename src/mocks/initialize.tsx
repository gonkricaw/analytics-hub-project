'use client';

import { useEffect, useState } from 'react';

// Initialize MSW in browser environment only
export function MSWInitializer() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Only run in browser environment and in development mode
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      // Dynamic import to avoid loading MSW in production
      import('../mocks/browser')
        .then(({ worker }) => {
          // Expose worker globally for development debugging
          window.msw = { worker };
          
          // Start the worker
          worker.start({
            onUnhandledRequest: 'bypass', // Don't warn on unhandled requests
          });
          
          setIsInitialized(true);
          console.log('[MSW] Mock Service Worker initialized successfully');
        })
        .catch((error) => {
          console.error('[MSW] Failed to initialize Mock Service Worker:', error);
        });
    }
  }, []);

  return null;
}
