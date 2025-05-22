import { test, expect } from '@playwright/test';

test.describe('Basic navigation', () => {
  test('should navigate to the home page', async ({ page }) => {
    // Navigate to the home page
    await page.goto('/');
    
    // Expect page to have a heading with 'Indonet Analytics Hub'
    const heading = await page.getByRole('heading', { name: /Indonet Analytics Hub/i });
    await expect(heading).toBeVisible();
  });
});

test.describe('Authentication', () => {
  test('should show login page', async ({ page }) => {
    // Navigate to the login page
    await page.goto('/login');
    
    // Expect to see login form elements
    await expect(page.getByRole('textbox', { name: /email/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /log in/i })).toBeVisible();
  });
  
  test('should show validation errors for invalid login', async ({ page }) => {
    // Navigate to the login page
    await page.goto('/login');
    
    // Click login without entering credentials
    await page.getByRole('button', { name: /log in/i }).click();
    
    // Expect to see validation errors
    const errorMessage = await page.getByText(/email is required/i);
    await expect(errorMessage).toBeVisible();
  });
});
