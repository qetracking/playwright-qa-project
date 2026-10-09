const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { chromium, expect } = require('playwright');
const { LoginPage } = require('../../../pages/LoginPage');

let browser;
let page;
let loginPage;

Before(async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
  loginPage = new LoginPage(page);
});

After(async function () {
  if (browser) {
    await browser.close();
  }
});

Given('the user is on the login page', async function () {
  await page.goto('https://www.saucedemo.com/');
});

When('the user enters valid credentials', async function () {
  await loginPage.usernameInput.fill('standard_user');
  await loginPage.passwordInput.fill('secret_sauce');
});

When('the user enters a valid username and an incorrect password', async function () {
  await loginPage.usernameInput.fill('standard_user');
  await loginPage.passwordInput.fill('wrong_password');
});

When('the user leaves the username field empty', async function () {
  await loginPage.passwordInput.fill('secret_sauce');
});

When('clicks the login button', async function () {
  await loginPage.loginButton.click();
});

Then('the user should access the inventory page', async function () {
  await page.waitForURL(/inventory/);
  if (!page.url().includes('inventory')) {
    throw new Error('The inventory page was not opened');
  }
});

Then('an error message should be displayed', async function () {
  await loginPage.errorMessage.waitFor({ state: 'visible' });
  if (!(await loginPage.errorMessage.isVisible())) {
    throw new Error('The error message is not visible');
  }
});

Then('a message indicating that the username is required should be displayed', async function () {
  await loginPage.errorMessage.waitFor({ state: 'visible' });
  const message = await loginPage.errorMessage.textContent();

  if (!message || !message.includes('Username is required')) {
    throw new Error('The expected username-required message was not displayed');
  }
});