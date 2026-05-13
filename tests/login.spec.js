const { test, expect } = require('@playwright/test');

test.describe('Login tests', () => {

test('Login válido | User can login with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory/);
});

test('Login inválido | User cannot login with invalid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'wrong');
  await page.fill('#password', 'wrong');
  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('Login vacío | User sees error when fields are empty', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Username is required');
});

});