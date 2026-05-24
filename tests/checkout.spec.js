const { test, expect } = require('@playwright/test');

test.describe('Checkout tests', () => {

test('Checkout empty | User sees error when fields are empty', async ({ page }) => {

await page.goto('https://www.saucedemo.com/');

await page.fill('#user-name', 'standard_user');

await page.fill('#password', 'secret_sauce');

await page.click('#login-button');

await page.click('text=Add to cart');

await page.click('.shopping_cart_link');

await page.click('#checkout');

await page.click('#continue');

await expect(
page.locator('[data-test="error"]')
).toContainText('First Name is required');

});

});


test('Checkout valid | User completes purchase successfully', async ({ page }) => {

await page.goto('https://www.saucedemo.com/');

await page.fill('#user-name', 'standard_user');

await page.fill('#password', 'secret_sauce');

await page.click('#login-button');

await page.click('text=Add to cart');

await page.click('.shopping_cart_link');

await page.click('#checkout');

await page.fill('#first-name', 'QA');

await page.fill('#last-name', 'Automation');

await page.fill('#postal-code', '12345');

await page.click('#continue');

await page.click('#finish');

await expect(
page.locator('.complete-header')
).toContainText('Thank you for your order!');

});