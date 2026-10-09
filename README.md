# Playwright QA Automation Portfolio

## Overview

This project demonstrates functional UI testing, API testing, regression scenarios, cross-browser execution, Page Object Model (POM), and BDD using Cucumber and Gherkin.

The project uses SauceDemo for UI testing and a public API for practice. GitHub Actions is configured to execute the Playwright test suite automatically.

## Technologies Used

- Playwright Test
- Playwright
- JavaScript
- Node.js and npm
- Cucumber
- Gherkin
- Page Object Model (POM)
- Git and GitHub
- GitHub Actions
- Visual Studio Code

## Automated Test Coverage

### UI Testing

**Authentication**
- Valid login
- Invalid login
- Login with empty fields

**Shopping cart**
- Add product to cart
- Validate cart counter
- Validate button state: Add to Cart → Remove

**Checkout**
- Validate checkout with empty fields
- Complete checkout successfully

### API Testing

- GET post by ID — status 200
- POST create post — status 201
- GET invalid post — status 404

### BDD with Cucumber and Gherkin

The project includes three Gherkin login scenarios:

- Successful login
- Login with an incorrect password
- Login without a username

Cucumber step definitions execute the scenarios using Playwright.

## Page Object Model

The login page interactions are encapsulated in `pages/LoginPage.js`. The page object provides reusable locators and login-related actions.

## Cross-Browser Testing

The Playwright configuration includes:

- Chromium
- Firefox
- WebKit (Safari engine)

The original Playwright suite contains 33 test executions across the configured browser projects.

## How to Run Tests

Install project dependencies:

```bash
npm install
```

Run the Playwright test suite:

```bash
npm test
```

Run Cucumber scenarios:

```bash
npm run test:cucumber
```

Open the Playwright HTML report:

```bash
npm run test:report
```

## Continuous Integration

The GitHub Actions workflow is located at:

`.github/workflows/playwright.yml`

It installs dependencies and browsers, runs the Playwright test suite, and uploads the HTML report as an artifact.

The workflow runs on pushes to `main`, pull requests targeting `main`, and manual execution.

## Project Structure

```text
01_PLAYWRIGHT_PORTFOLIO/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── docs/
│   ├── features/
│   │   └── login.feature
│   ├── PLAYWRIGHT_LEARNING_GUIDE_EN.md
│   └── PLAYWRIGHT_LEARNING_GUIDE_ES.md
├── pages/
│   └── LoginPage.js
├── tests/
│   ├── api/
│   │   └── api.spec.js
│   ├── authentication/
│   │   └── login.spec.js
│   ├── cart/
│   │   └── cart.spec.js
│   ├── checkout/
│   │   └── checkout.spec.js
│   └── cucumber/
│       └── steps/
│           └── login.steps.js
├── README.md
├── package.json
├── package-lock.json
└── playwright.config.js
```

## Documentation

The `docs` directory contains the bilingual learning guides:

- `PLAYWRIGHT_LEARNING_GUIDE_EN.md`
- `PLAYWRIGHT_LEARNING_GUIDE_ES.md`

The guides cover UI and API testing concepts, locators, assertions, HTTP status codes, JSON responses, test execution, and lessons learned.

## Skills Demonstrated

- Functional and regression testing
- UI and API test automation
- Positive and negative test scenarios
- Cross-browser testing
- Page Object Model
- BDD scenario writing with Gherkin
- Cucumber step definitions
- Git and GitHub workflows
- CI/CD with GitHub Actions
- Test reporting and technical documentation

## Verified Local Results

The following results were confirmed during local execution:

- Playwright Test: 33 tests passed
- Cucumber: 3 scenarios and 18 steps passed

These results describe the local test runs. The current GitHub Actions status should be checked separately after the latest changes are pushed.

## Project Status

**Version:** Playwright UI + API V1, extended with POM, Cucumber/Gherkin, and CI/CD.

**Status:** Implemented and locally validated. Documentation and repository updates are pending.

## Author

QA Automation Portfolio Project
