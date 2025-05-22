import { test, expect } from '@playwright/test';

test.describe('Rate Limiting Tests', () => {
  const RATE_LIMIT_ATTEMPTS = 10; // Number of requests to trigger rate limiting
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });
  
  test('should enforce rate limits on login attempts', async ({ page, request }) => {
    // Make multiple rapid login attempts to trigger rate limiting
    for (let i = 0; i < RATE_LIMIT_ATTEMPTS; i++) {
      await page.fill('input[name="email"]', `user${i}@example.com`);
      await page.fill('input[name="password"]', 'wrongpassword');
      await page.click('button[type="submit"]');
      
      // Wait a short time between requests
      await page.waitForTimeout(100);
      
      // Reset the form for the next attempt
      await page.reload();
      await page.waitForSelector('input[name="email"]');
    }
    
    // Try one more login attempt which should be rate limited
    await page.fill('input[name="email"]', 'admin@example.com');
    await page.fill('input[name="password"]', 'AdminPassword123!');
    await page.click('button[type="submit"]');
    
    // Verify rate limit message is displayed
    await expect(page.locator('text=Too many login attempts')).toBeVisible();
  });
  
  test('should enforce rate limits on password reset attempts', async ({ page }) => {
    // Go to forgot password page
    await page.goto('/forgot-password');
    
    // Make multiple rapid password reset attempts
    for (let i = 0; i < RATE_LIMIT_ATTEMPTS; i++) {
      await page.fill('input[name="email"]', `user${i}@example.com`);
      await page.click('button[type="submit"]');
      
      // Wait a short time between requests
      await page.waitForTimeout(100);
      
      // Reset the form for the next attempt
      await page.reload();
      await page.waitForSelector('input[name="email"]');
    }
    
    // Try one more attempt which should be rate limited
    await page.fill('input[name="email"]', 'admin@example.com');
    await page.click('button[type="submit"]');
    
    // Verify rate limit message is displayed
    await expect(page.locator('text=Too many requests')).toBeVisible();
  });
  
  test('should enforce API rate limits', async ({ request }) => {
    // Make multiple rapid API requests to a public endpoint
    let rateLimited = false;
    
    for (let i = 0; i < RATE_LIMIT_ATTEMPTS + 5; i++) {
      const response = await request.get('/api/content/1');
      
      if (response.status() === 429) {
        rateLimited = true;
        break;
      }
      
      // Small delay between requests
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    // Verify we eventually got rate limited
    expect(rateLimited).toBe(true);
  });
});
