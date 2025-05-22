import { test, expect } from '@playwright/test';

// Admin user credentials
const ADMIN_EMAIL = 'admin@example.com';
const ADMIN_PASSWORD = 'AdminPassword123!';

test.describe('Admin CRUD Operations', () => {
  // Setup - Login as admin before each test
  test.beforeEach(async ({ page }) => {
    // Go to login page
    await page.goto('/login');
    
    // Fill in login form and submit
    await page.fill('input[name="email"]', ADMIN_EMAIL);
    await page.fill('input[name="password"]', ADMIN_PASSWORD);
    await page.click('button[type="submit"]');
    
    // Wait for dashboard to load
    await page.waitForURL('**/home');
    
    // Navigate to admin section
    await page.click('text=Admin');
    await page.waitForURL('**/admin');
  });
  
  test('should create, read, update, and delete a user', async ({ page }) => {
    // Navigate to users management
    await page.click('text=Users');
    await page.waitForURL('**/admin/users');
    
    // Click on "Add User" button
    await page.click('button:has-text("Add User")');
    
    // Fill user creation form
    const testEmail = `test-user-${Date.now()}@example.com`;
    await page.fill('input[name="email"]', testEmail);
    await page.fill('input[name="firstName"]', 'Test');
    await page.fill('input[name="lastName"]', 'User');
    await page.selectOption('select[name="role"]', { label: 'User' });
    
    // Submit the form
    await page.click('button:has-text("Invite User")');
    
    // Verify success message
    await expect(page.locator('text=User invited successfully')).toBeVisible();
    
    // Verify user appears in the list
    await expect(page.locator(`text=${testEmail}`)).toBeVisible();
    
    // Edit the user
    await page.click(`tr:has-text("${testEmail}") button:has-text("Edit")`);
    
    // Update user information
    await page.fill('input[name="firstName"]', 'Updated');
    await page.click('button:has-text("Save Changes")');
    
    // Verify success message
    await expect(page.locator('text=User updated successfully')).toBeVisible();
    
    // Verify updated information appears
    await expect(page.locator('text=Updated User')).toBeVisible();
    
    // Delete the user
    await page.click(`tr:has-text("${testEmail}") button:has-text("Delete")`);
    
    // Confirm deletion
    await page.click('button:has-text("Confirm")');
    
    // Verify success message
    await expect(page.locator('text=User deleted successfully')).toBeVisible();
    
    // Verify user no longer appears
    await expect(page.locator(`text=${testEmail}`)).not.toBeVisible();
  });
  
  test('should create, read, update, and delete content', async ({ page }) => {
    // Navigate to content management
    await page.click('text=Content');
    await page.waitForURL('**/admin/content');
    
    // Click on "Add Content" button
    await page.click('button:has-text("Add Content")');
    
    // Fill content creation form
    const contentTitle = `Test Content ${Date.now()}`;
    await page.fill('input[name="title"]', contentTitle);
    await page.fill('input[name="slug"]', contentTitle.toLowerCase().replace(/ /g, '-'));
    
    // Fill the rich text editor
    const editorFrame = page.frameLocator('iframe.tox-edit-area__iframe');
    await editorFrame.locator('body').fill('This is test content.');
    
    // Submit the form
    await page.click('button:has-text("Save")');
    
    // Verify success message
    await expect(page.locator('text=Content created successfully')).toBeVisible();
    
    // Verify content appears in the list
    await expect(page.locator(`text=${contentTitle}`)).toBeVisible();
    
    // Edit the content
    await page.click(`tr:has-text("${contentTitle}") button:has-text("Edit")`);
    
    // Update content information
    await page.fill('input[name="title"]', `${contentTitle} Updated`);
    
    // Update the rich text editor
    await editorFrame.locator('body').fill('This is updated test content.');
    
    // Submit the form
    await page.click('button:has-text("Save")');
    
    // Verify success message
    await expect(page.locator('text=Content updated successfully')).toBeVisible();
    
    // Verify updated content appears
    await expect(page.locator(`text=${contentTitle} Updated`)).toBeVisible();
    
    // Delete the content
    await page.click(`tr:has-text("${contentTitle} Updated") button:has-text("Delete")`);
    
    // Confirm deletion
    await page.click('button:has-text("Confirm")');
    
    // Verify success message
    await expect(page.locator('text=Content deleted successfully')).toBeVisible();
    
    // Verify content no longer appears
    await expect(page.locator(`text=${contentTitle} Updated`)).not.toBeVisible();
  });
});
