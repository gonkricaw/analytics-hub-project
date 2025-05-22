import { test, expect } from '@playwright/test';

// Test data for UAT scenarios
const USER_EMAIL = 'test-user@example.com';
const USER_PASSWORD = 'TestPassword123!';
const ADMIN_EMAIL = 'admin@example.com';
const ADMIN_PASSWORD = 'AdminPassword123!';

test.describe('User Acceptance Tests', () => {
  test.describe('User Journey', () => {
    test('complete user journey - view content, update profile, change password', async ({ page }) => {
      // Step 1: User Login
      await page.goto('/login');
      await page.fill('input[name="email"]', USER_EMAIL);
      await page.fill('input[name="password"]', USER_PASSWORD);
      await page.click('button[type="submit"]');
      
      // Verify successful login and redirect to dashboard
      await page.waitForURL('**/home');
      await expect(page.locator('h1:has-text("Dashboard")')).toBeVisible();
      
      // Step 2: View notifications
      await page.click('[data-testid="notification-icon"]');
      await expect(page.locator('[data-testid="notifications-dropdown"]')).toBeVisible();
      
      // Close notifications
      await page.keyboard.press('Escape');
      
      // Step 3: Navigate to content
      await page.click('text=Content Library');
      
      // Verify content page loaded
      await expect(page.locator('h1:has-text("Content Library")')).toBeVisible();
      
      // Step 4: View a specific content item
      await page.click('text=Getting Started Guide');
      await expect(page.locator('text=Welcome to Indonet Analytics Hub')).toBeVisible();
      
      // Step 5: Go to profile page
      await page.click('text=Profile');
      await page.waitForURL('**/profile');
      
      // Step 6: Update profile information
      await page.fill('input[name="firstName"]', 'Updated');
      await page.fill('input[name="lastName"]', 'User');
      await page.click('button:has-text("Save")');
      
      // Verify success message
      await expect(page.locator('text=Profile updated successfully')).toBeVisible();
      
      // Step 7: Change password
      await page.click('button:has-text("Change Password")');
      await page.fill('input[name="currentPassword"]', USER_PASSWORD);
      await page.fill('input[name="newPassword"]', `${USER_PASSWORD}1`);
      await page.fill('input[name="confirmPassword"]', `${USER_PASSWORD}1`);
      await page.click('button:has-text("Update Password")');
      
      // Verify success message
      await expect(page.locator('text=Password updated successfully')).toBeVisible();
      
      // Step 8: Logout
      await page.click('button:has-text("Logout")');
      
      // Verify redirect to login page
      await page.waitForURL('**/login');
    });
  });
  
  test.describe('Administrator Journey', () => {
    test('complete admin journey - manage users, content, and system settings', async ({ page }) => {
      // Step 1: Admin Login
      await page.goto('/login');
      await page.fill('input[name="email"]', ADMIN_EMAIL);
      await page.fill('input[name="password"]', ADMIN_PASSWORD);
      await page.click('button[type="submit"]');
      
      // Verify successful login and redirect to dashboard
      await page.waitForURL('**/home');
      
      // Step 2: Navigate to Admin Panel
      await page.click('text=Admin');
      await page.waitForURL('**/admin');
      
      // Step 3: Check users management
      await page.click('text=Users');
      await page.waitForURL('**/admin/users');
      await expect(page.locator('h1:has-text("User Management")')).toBeVisible();
      
      // Step 4: Check content management
      await page.click('text=Content');
      await page.waitForURL('**/admin/content');
      await expect(page.locator('h1:has-text("Content Management")')).toBeVisible();
      
      // Step 5: Check system configuration
      await page.click('text=Configuration');
      await page.waitForURL('**/admin/configuration');
      await expect(page.locator('h1:has-text("System Configuration")')).toBeVisible();
      
      // Step 6: Check audit logs
      await page.click('text=Audit Logs');
      await page.waitForURL('**/admin/audit-logs');
      await expect(page.locator('h1:has-text("Audit Logs")')).toBeVisible();
      
      // Verify search functionality in audit logs
      await page.fill('input[placeholder="Search..."]', 'login');
      await page.click('button:has-text("Search")');
      
      // Wait for search results
      await page.waitForTimeout(1000);
      
      // Step 7: Check menu management
      await page.click('text=Menus');
      await page.waitForURL('**/admin/menus');
      await expect(page.locator('h1:has-text("Menu Management")')).toBeVisible();
      
      // Step 8: Logout
      await page.click('button:has-text("Logout")');
      
      // Verify redirect to login page
      await page.waitForURL('**/login');
    });
  });
});
