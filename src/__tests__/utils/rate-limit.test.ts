import { RateLimiter } from '@/lib/rate-limit';

// Mock Redis client
jest.mock('ioredis', () => {
  return jest.fn().mockImplementation(() => ({
    incr: jest.fn(),
    expire: jest.fn(),
  }));
});

describe('Rate Limiter', () => {
  let rateLimiter: RateLimiter;
  let mockRedis: any;
  
  beforeEach(() => {
    jest.clearAllMocks();
    rateLimiter = new RateLimiter();
    mockRedis = rateLimiter['redis'];
  });
  
  it('should allow requests within the rate limit', async () => {
    // Arrange
    const ip = '192.168.1.1';
    const endpoint = 'login';
    mockRedis.incr.mockResolvedValue(5); // Below default limit of 10
    
    // Act
    const result = await rateLimiter.check(ip, endpoint);
    
    // Assert
    expect(result.success).toBe(true);
    expect(mockRedis.incr).toHaveBeenCalledWith(expect.stringContaining(`${ip}:${endpoint}`));
    expect(mockRedis.expire).toHaveBeenCalled();
  });
  
  it('should block requests that exceed the rate limit', async () => {
    // Arrange
    const ip = '192.168.1.1';
    const endpoint = 'login';
    mockRedis.incr.mockResolvedValue(15); // Above default limit of 10
    
    // Act
    const result = await rateLimiter.check(ip, endpoint);
    
    // Assert
    expect(result.success).toBe(false);
    expect(result.limit).toBe(10);
    expect(result.remaining).toBe(0);
  });
  
  it('should accept custom max attempts', async () => {
    // Arrange
    const ip = '192.168.1.1';
    const endpoint = 'api';
    const maxAttempts = 5;
    mockRedis.incr.mockResolvedValue(5); // At the custom limit
    
    // Act
    const result = await rateLimiter.check(ip, endpoint, maxAttempts);
    
    // Assert
    expect(result.success).toBe(false);
    expect(result.limit).toBe(maxAttempts);
    expect(result.remaining).toBe(0);
  });
  
  it('should handle redis errors gracefully', async () => {
    // Arrange
    const ip = '192.168.1.1';
    const endpoint = 'login';
    mockRedis.incr.mockRejectedValue(new Error('Redis connection error'));
    
    // Act
    const result = await rateLimiter.check(ip, endpoint);
    
    // Assert
    expect(result.success).toBe(true); // Default to allowing requests on errors
  });
});
