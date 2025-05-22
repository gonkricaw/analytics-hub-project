import {
  getRedisClient,
  getCachedValue,
  setCachedValue,
  cacheableValue,
} from "@/lib/cache";
import { Redis } from "@upstash/redis";

// Mock Redis
jest.mock("@upstash/redis", () => {
  return {
    Redis: jest.fn().mockImplementation(() => ({
      get: jest.fn(),
      set: jest.fn(),
      del: jest.fn(),
    })),
  };
});

// Mock Sentry
jest.mock("@sentry/nextjs", () => ({
  captureException: jest.fn(),
}));

describe("Cache Utilities", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Reset the environment variables
    process.env.UPSTASH_REDIS_REST_URL = undefined;
    process.env.UPSTASH_REDIS_REST_TOKEN = undefined;
    process.env.REDIS_URL = undefined;
    process.env.REDIS_TOKEN = undefined;

    // Reset console mocks
    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  describe("getRedisClient", () => {
    it("should return null when no Redis configuration is found", () => {
      const client = getRedisClient();
      expect(client).toBeNull();
      expect(console.log).toHaveBeenCalledWith(
        "Redis configuration not found, caching will be disabled",
      );
    });

    it("should initialize Redis client with Upstash configuration", () => {
      // Set environment variables
      process.env.UPSTASH_REDIS_REST_URL = "https://upstash.redis.url";
      process.env.UPSTASH_REDIS_REST_TOKEN = "upstash-token";

      // Get Redis client
      const client = getRedisClient();

      // Check that Redis constructor was called with correct params
      expect(Redis).toHaveBeenCalledWith({
        url: "https://upstash.redis.url",
        token: "upstash-token",
      });

      expect(client).not.toBeNull();
      expect(console.log).toHaveBeenCalledWith(
        "Redis client initialized successfully",
      );
    });
  });

  describe("getCachedValue", () => {
    it("should return null when Redis client is not available", async () => {
      const result = await getCachedValue("test-key");
      expect(result).toBeNull();
    });

    it("should return cached value when available", async () => {
      // Set environment variables
      process.env.UPSTASH_REDIS_REST_URL = "https://upstash.redis.url";
      process.env.UPSTASH_REDIS_REST_TOKEN = "upstash-token";

      // Mock Redis get to return a value
      const mockRedisGet = jest.fn().mockResolvedValue("cached-value");
      (Redis as jest.Mock).mockImplementation(() => ({
        get: mockRedisGet,
        set: jest.fn(),
        del: jest.fn(),
      }));

      // Get cached value
      const result = await getCachedValue<string>("test-key");

      // Check that Redis.get was called with correct key
      expect(mockRedisGet).toHaveBeenCalledWith("test-key");
      expect(result).toBe("cached-value");
    });
  });

  describe("cacheableValue", () => {
    it("should compute and return value when cache misses", async () => {
      // Function to compute value
      const computeValue = jest.fn().mockResolvedValue("computed-value");

      // Mock Redis get to simulate cache miss
      const mockRedisGet = jest.fn().mockResolvedValue(null);
      const mockRedisSet = jest.fn().mockResolvedValue(true);

      // Set environment variables
      process.env.UPSTASH_REDIS_REST_URL = "https://upstash.redis.url";
      process.env.UPSTASH_REDIS_REST_TOKEN = "upstash-token";

      // Setup Redis mock
      (Redis as jest.Mock).mockImplementation(() => ({
        get: mockRedisGet,
        set: mockRedisSet,
        del: jest.fn(),
      }));

      // Call cacheableValue
      const result = await cacheableValue("test-key", computeValue);

      // Check that compute function was called
      expect(computeValue).toHaveBeenCalled();

      // Check that result was cached
      expect(mockRedisSet).toHaveBeenCalledWith(
        "test-key",
        "computed-value",
        {},
      );

      // Check that correct value was returned
      expect(result).toBe("computed-value");
    });

    it("should return cached value when available", async () => {
      // Function to compute value
      const computeValue = jest.fn().mockResolvedValue("computed-value");

      // Mock Redis get to simulate cache hit
      const mockRedisGet = jest.fn().mockResolvedValue("cached-value");

      // Set environment variables
      process.env.UPSTASH_REDIS_REST_URL = "https://upstash.redis.url";
      process.env.UPSTASH_REDIS_REST_TOKEN = "upstash-token";

      // Setup Redis mock
      (Redis as jest.Mock).mockImplementation(() => ({
        get: mockRedisGet,
        set: jest.fn(),
        del: jest.fn(),
      }));

      // Call cacheableValue
      const result = await cacheableValue("test-key", computeValue);

      // Check that compute function was not called
      expect(computeValue).not.toHaveBeenCalled();

      // Check that correct value was returned
      expect(result).toBe("cached-value");
    });
  });
});
