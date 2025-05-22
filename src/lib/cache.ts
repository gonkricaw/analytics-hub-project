import { Redis } from '@upstash/redis';
import * as Sentry from '@sentry/nextjs';

// Initialize Redis client
let redis: Redis | null = null;

/**
 * Get the Redis client instance
 * @returns Redis client instance or null if not configured
 */
export function getRedisClient(): Redis | null {
  try {
    if (!redis) {
      // Check for production and staging environments first
      let url = process.env.UPSTASH_REDIS_REST_URL;
      let token = process.env.UPSTASH_REDIS_REST_TOKEN;
      
      // Fall back to development Redis config if available
      if (!url && !token) {
        url = process.env.REDIS_URL;
        token = process.env.REDIS_TOKEN;
      }
      
      // Only initialize if both URL and token are provided
      if (url && token) {
        redis = new Redis({
          url,
          token
        });
        console.log('Redis client initialized successfully');
      } else {
        console.log('Redis configuration not found, caching will be disabled');
      }
    }
    
    return redis;
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error initializing Redis client:', error);
    return null;
  }
}

/**
 * Interface for cache options
 */
interface CacheOptions {
  expireInSeconds?: number;
}

/**
 * Generic cache get function with type safety
 * @param key Cache key
 * @returns Cached value or null if not found
 */
export async function getCachedValue<T>(key: string): Promise<T | null> {
  try {
    const client = getRedisClient();
    if (!client) return null;
    
    const data = await client.get(key);
    return data as T;
  } catch (error) {
    Sentry.captureException(error);
    console.error(`Cache get error for key ${key}:`, error);
    return null;
  }
}

/**
 * Generic cache set function with type safety
 * @param key Cache key
 * @param value Value to cache
 * @param options Cache options (e.g. expiration)
 */
export async function setCachedValue<T>(key: string, value: T, options: CacheOptions = {}): Promise<boolean> {
  try {
    const client = getRedisClient();
    if (!client) return false;
    
    // With expiration
    if (options.expireInSeconds) {
      await client.set(key, value, { ex: options.expireInSeconds });
    } else {
      // No expiration
      await client.set(key, value);
    }
    
    return true;
  } catch (error) {
    Sentry.captureException(error);
    console.error(`Cache set error for key ${key}:`, error);
    return false;
  }
}

/**
 * Delete a cached value
 * @param key Cache key
 */
export async function deleteCachedValue(key: string): Promise<boolean> {
  try {
    const client = getRedisClient();
    if (!client) return false;
    
    await client.del(key);
    return true;
  } catch (error) {
    Sentry.captureException(error);
    console.error(`Cache delete error for key ${key}:`, error);
    return false;
  }
}

/**
 * Generic cache function that computes and caches a value if not already cached
 * @param key Cache key
 * @param fn Function to compute the value if not cached
 * @param options Cache options (e.g. expiration)
 * @returns Cached or computed value
 */
export async function cacheableValue<T>(
  key: string,
  fn: () => Promise<T>,
  options: CacheOptions = {}
): Promise<T> {
  try {
    const client = getRedisClient();
    
    // If Redis is not available, just compute and return the value
    if (!client) {
      return await fn();
    }
    
    // Try to get from cache first
    const cachedValue = await getCachedValue<T>(key);
    
    // Return cached value if available
    if (cachedValue !== null) {
      return cachedValue;
    }
    
    // Otherwise compute the value
    const value = await fn();
    
    // Cache the computed value
    await setCachedValue<T>(key, value, options);
    
    return value;
  } catch (error) {
    Sentry.captureException(error);
    console.error(`Cache operation error for key ${key}:`, error);
    
    // If caching fails, just compute and return the value
    return await fn();
  }
}
