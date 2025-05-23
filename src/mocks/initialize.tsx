"use client";

import { useEffect } from "react";

// Initialize MSW in browser environment only
export function MSWInitializer() {
  useEffect(() => {
    async function startMSW() {
      if (
        typeof window !== "undefined" &&
        process.env.NODE_ENV === "development"
      ) {
        try {
          const { worker } = await import("../mocks/browser");
          
          // Expose worker globally for debugging
          window.msw = { worker };
          
          await worker.start({
            onUnhandledRequest: "bypass",
            serviceWorker: {
              url: "/mockServiceWorker.js"
            }
          });
          
          console.log("[MSW] Mock Service Worker initialized successfully");
        } catch (error) {
          console.error("[MSW] Failed to initialize Mock Service Worker:", error);
        }
      }
    }
    
    startMSW();
  }, []);

  return null;
}
