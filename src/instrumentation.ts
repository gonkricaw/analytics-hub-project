export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    try {
      await import('../sentry.server.config');
    } catch (error) {
      console.warn('Sentry server config not found or failed to load');
    }
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    try {
      await import('../sentry.edge.config');
    } catch (error) {
      console.warn('Sentry edge config not found or failed to load');
    }
  }
}
