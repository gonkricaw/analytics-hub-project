import { test, expect } from '@playwright/test';

test.describe('User Authentication Flow', () => {
  test('complete login flow', async ({ page }) => {
    // Go to login page
    await page.goto('/login');
    
    // Fill in credentials - these are test credentials that should be set up in a test DB
    await page.getByLabel(/email/i).fill('admin@example.com');
    await page.getByLabel(/password/i).fill('Admin123!');
    
    // Submit form
    await page.getByRole('button', { name: /log in/i }).click();
    
    // Expect to be redirected to dashboard or home
    await expect(page).toHaveURL(/home/);
    
    // Check for presence of dashboard elements
    await expect(page.getByRole('navigation')).toBeVisible();
    await expect(page.getByRole('link', { name: /profile/i })).toBeVisible();
  });
  
  test('forgot password flow', async ({ page }) => {
    // Go to login page
    await page.goto('/login');
    
    // Click on forgot password link
    await page.getByRole('link', { name: /forgot password/i }).click();
    
    // Expect to be on forgot password page
    await expect(page).toHaveURL(/forgot-password/);
    
    // Enter email
    await page.getByLabel(/email/i).fill('user@example.com');
    
    // Submit form
    await page.getByRole('button', { name: /send reset link/i }).click();
    
    // Expect confirmation message
    await expect(
      page.getByText(/password reset link has been sent/i)
    ).toBeVisible();
  });
});

test.describe('User Profile', () => {
  test.beforeEach(async ({ page }) => {
    // Login before each test in this group
    await page.goto('/login');
    await page.getByLabel(/email/i).fill('admin@example.com');
    await page.getByLabel(/password/i).fill('Admin123!');
    await page.getByRole('button', { name: /log in/i }).click();
    
    // Wait for dashboard to load
    await page.waitForURL(/home/);
  });
  
  test('navigate to profile page', async ({ page }) => {
    // Navigate to profile
    await page.getByRole('link', { name: /profile/i }).click();
    
    // Expect to be on profile page
    await expect(page).toHaveURL(/profile/);
    
    // Check for profile form elements
    await expect(page.getByLabel(/name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
  });
  
  test('update password', async ({ page }) => {
    // Navigate to profile
    await page.getByRole('link', { name: /profile/i }).click();
    await expect(page).toHaveURL(/profile/);
    
    // Click on change password section
    await page.getByRole('button', { name: /change password/i }).click();
    
    // Fill in password form
    await page.getByLabel(/current password/i).fill('Admin123!');
    await page.getByLabel(/new password/i).fill('NewAdmin456!');
    await page.getByLabel(/confirm password/i).fill('NewAdmin456!');
    
    // Submit form
    await page.getByRole('button', { name: /update password/i }).click();
    
    // Expect success message
    await expect(page.getByText(/password updated successfully/i)).toBeVisible();
    
    // Reset password back for future tests
    await page.getByLabel(/current password/i).fill('NewAdmin456!');
    await page.getByLabel(/new password/i).fill('Admin123!');
    await page.getByLabel(/confirm password/i).fill('Admin123!');
    await page.getByRole('button', { name: /update password/i }).click();
  });
});
