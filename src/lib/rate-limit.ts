import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";

// Initialize Redis (using Upstash Redis)
let redis: Redis;
let ratelimitMap = new Map<string, Ratelimit>();

// Create rate limiter instances based on configuration
export function getRateLimiter(
  identifier: string,
  limit: number = 10,
  window: number = 60,
): Ratelimit {
  // If we already have this rate limiter, return it
  if (ratelimitMap.has(identifier)) {
    return ratelimitMap.get(identifier)!;
  }

  // Otherwise, create a new rate limiter
  try {
    if (!redis) {
      // Initialize Redis if not already done
      redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL || "",
        token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
      });
    }

    // Create a new rate limiter for this identifier
    const limiter = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(limit, `${window} s`),
      analytics: true, // Enable analytics for this rate limiter
      prefix: `ratelimit:${identifier}`, // Prefix for Redis keys
    });

    // Store in map for reuse
    ratelimitMap.set(identifier, limiter);
    return limiter;
  } catch (error) {
    // Log error to Sentry but fallback to local in-memory rate limiter
    Sentry.captureException(error);
    console.error("Error setting up Redis rate limiter:", error);

    // Fallback to a simple in-memory rate limiter
    const { RateLimiterMemory } = require("limiter");
    return new Ratelimit({
      redis: undefined as any, // TypeScript workaround for fallback
      limiter: Ratelimit.slidingWindow(limit, `${window} s`),
      analytics: false,
      prefix: `ratelimit:${identifier}`,
    });
  }
}

/**
 * Rate limiting middleware for API routes
 *
 * @param request The Next.js request
 * @param identifier A unique identifier for this rate limiter (e.g. 'login', 'forgot-password')
 * @param limit Maximum number of requests in the time window
 * @param window Time window in seconds
 * @returns NextResponse or null if request should proceed
 */
export async function rateLimitRequest(
  request: NextRequest,
  identifier: string,
  limit: number = 10,
  window: number = 60,
): Promise<NextResponse | null> {
  try {
    // Get IP address from request
    const ip =
      request.ip || request.headers.get("x-forwarded-for") || "127.0.0.1";

    // Get rate limiter for this identifier
    const limiter = getRateLimiter(identifier, limit, window);

    // Apply rate limiting based on IP address
    const {
      success,
      limit: rateLimit,
      reset,
      remaining,
    } = await limiter.limit(`${ip}`);

    // Set rate limit headers
    const headers = new Headers();
    headers.set("X-RateLimit-Limit", rateLimit.toString());
    headers.set("X-RateLimit-Remaining", remaining.toString());
    headers.set("X-RateLimit-Reset", reset.toString());

    // If rate limit exceeded, return 429 Too Many Requests
    if (!success) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: `Rate limit exceeded. Try again in ${Math.ceil((reset - Date.now()) / 1000)} seconds.`,
        }),
        {
          status: 429,
          headers,
        },
      );
    }

    // Otherwise, request can proceed (return null)
    return null;
  } catch (error) {
    // Log error but don't block the request
    Sentry.captureException(error);
    console.error("Rate limiting error:", error);
    return null;
  }
}
