# Playwright QA Automation Project

## Overview

This project contains automated UI and API tests built with Playwright and JavaScript.

The objective of this project is to practice QA Automation concepts, API Testing, cross-browser execution, Git/GitHub workflows, and technical documentation.

---

## Technologies Used

* Playwright
* JavaScript
* Node.js
* Git
* GitHub
* Visual Studio Code

---

## Automated Test Scenarios

### UI Testing

#### Login

* Valid Login
* Invalid Login
* Login with Empty Fields

#### Cart

* Add Product to Cart
* Cart Counter Validation
* Button State Validation (Add to Cart → Remove)

#### Checkout

* Checkout Validation with Empty Fields
* Successful Checkout Process

---

### API Testing

#### GET Requests

* Get Post by ID (Status 200)

#### POST Requests

* Create Post Successfully (Status 201)

#### Negative Testing

* Get Invalid Post (Status 404)

---

## Browsers Tested

* Chromium
* Firefox
* WebKit (Safari Engine)

---

## How to Run Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.js
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

---

## HTML Report

Generate and open the Playwright report:

```bash
npx playwright show-report
```

---

## Project Structure

```txt
playwrite_projects/
│
├── docs/
│   ├── PLAYWRIGHT_LEARNING_GUIDE_ES.md
│   └── PLAYWRIGHT_LEARNING_GUIDE_EN.md
│
├── tests/
│   ├── login.spec.js
│   ├── cart.spec.js
│   ├── checkout.spec.js
│   └── api.spec.js
│
├── README.md
├── playwright.config.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## Documentation

Additional project documentation is available in:

* docs/PLAYWRIGHT_LEARNING_GUIDE_EN.md
* docs/PLAYWRIGHT_LEARNING_GUIDE_ES.md

These documents include:

* Learning notes
* QA concepts
* UI Testing concepts
* API Testing concepts
* Status Codes
* Assertions
* Lessons Learned
* Playwright Quick Reference

---

## Skills Practiced

### QA Automation

* UI Test Automation
* API Test Automation
* Cross-Browser Testing
* Functional Validation
* Negative Testing

### Technical Skills

* Playwright
* JavaScript
* Git
* GitHub
* HTML Reporting

### Documentation

* Technical Writing
* Test Documentation
* Learning Guides
* Bilingual Documentation (English / Spanish)

---

## Current Project Status

Version: Playwright UI + API V1

Status: Completed
---

## Author
QA Automation Portfolio Project
