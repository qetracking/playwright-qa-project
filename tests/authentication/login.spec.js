const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

test.describe('Login tests', () => {

test('Login válido | User can login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://www.saucedemo.com/');

  await loginPage.login('standard_user', 'secret_sauce');

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