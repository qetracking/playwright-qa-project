const { test, expect } = require('@playwright/test');

test.describe('Login tests', () => {

test('Add to cart', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('text=Add to cart');

  await page.click('.shopping_cart_link');

  await expect(page.locator('.cart_item')).toBeVisible();
});

test('Cart counter increases', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  const cartBadge = page.locator('.shopping_cart_badge');

  await expect(cartBadge).toHaveCount(0);

  await page.click('text=Add to cart');

  await expect(cartBadge).toHaveText('1');
});

});