import { test, expect } from '@playwright/test';

test.describe('Security Tests', () => {
  test('should enforce authentication for protected routes', async ({ page }) => {
    // Attempt to access protected admin route
    await page.goto('/admin/users');
    
    // Should be redirected to login page
    await expect(page).toHaveURL(/.*\/login/);
    
    // Attempt to access protected dashboard route
    await page.goto('/home');
    
    // Should be redirected to login page
    await expect(page).toHaveURL(/.*\/login/);
    
    // Attempt to access protected API
    const response = await page.request.get('/api/users/me');
    
    // Should return unauthorized
    expect(response.status()).toBe(401);
  });
  
  test('should prevent XSS in user input', async ({ page }) => {
    // Login as admin
    await page.goto('/login');
    await page.fill('input[name="email"]', 'admin@example.com');
    await page.fill('input[name="password"]', 'AdminPassword123!');
    await page.click('button[type="submit"]');
    await page.waitForURL('**/home');
    
    // Go to content management
    await page.click('text=Admin');
    await page.click('text=Content');
    await page.waitForURL('**/admin/content');
    
    // Create content with potential XSS payload
    await page.click('button:has-text("Add Content")');
    
    const xssTitle = '<script>alert("XSS")</script> Test';
    await page.fill('input[name="title"]', xssTitle);
    await page.fill('input[name="slug"]', 'xss-test');
    
    // Fill the rich text editor with XSS payload
    const editorFrame = page.frameLocator('iframe.tox-edit-area__iframe');
    await editorFrame.locator('body').fill('<script>alert("XSS")</script> Content');
    
    // Submit the form
    await page.click('button:has-text("Save")');
    
    // Navigate to view the content
    await page.goto('/content/xss-test');
    
    // Check if the script tag is rendered as text rather than executed
    const pageContent = await page.content();
    
    // The page should contain the escaped script tag content, not execute the script
    expect(pageContent).toContain('&lt;script&gt;');
    expect(pageContent).not.toContain('<script>alert("XSS")</script>');
    
    // Cleanup: delete the test content (go back to admin page)
    await page.goto('/admin/content');
    await page.click('text=XSS Test');
    await page.click('button:has-text("Delete")');
    await page.click('button:has-text("Confirm")');
  });
  
  test('should have proper CSRF protection', async ({ page }) => {
    // Login first
    await page.goto('/login');
    await page.fill('input[name="email"]', 'admin@example.com');
    await page.fill('input[name="password"]', 'AdminPassword123!');
    await page.click('button[type="submit"]');
    await page.waitForURL('**/home');
    
    // Go to profile page where we can make a POST request
    await page.goto('/profile');
    
    // Intercept requests to check for CSRF token
    let csrfTokenFound = false;
    await page.route('**/api/**', route => {
      const headers = route.request().headers();
      if (headers['csrf-token']) {
        csrfTokenFound = true;
      }
      route.continue();
    });
    
    // Trigger a form submission
    await page.fill('input[name="firstName"]', 'CSRFTest');
    await page.click('button:has-text("Save")');
    
    // Wait for the request to complete
    await page.waitForTimeout(1000);
    
    // Verify CSRF token was sent with the request
    expect(csrfTokenFound).toBe(true);
  });
  
  test('should have appropriate security headers', async ({ request }) => {
    const response = await request.get('/');
    
    // Check for essential security headers
    const headers = response.headers();
    
    // Content Security Policy
    expect(headers['content-security-policy']).toBeTruthy();
    
    // X-XSS-Protection
    expect(headers['x-xss-protection']).toBeTruthy();
    
    // X-Content-Type-Options
    expect(headers['x-content-type-options']).toBe('nosniff');
    
    // Strict Transport Security
    expect(headers['strict-transport-security']).toBeTruthy();
  });
});
