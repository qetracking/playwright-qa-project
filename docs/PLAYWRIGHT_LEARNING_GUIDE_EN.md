# Playwright Learning Guide

## Project

Playwright QA Project

## Objective

Document the concepts, exercises, automated test scenarios, and lessons learned while building a QA Automation project using Playwright, JavaScript, Git, and GitHub.

---

# 1. Project Description

This project was created with the objective of learning UI and API test automation using Playwright.

During the project, automated test scenarios were developed for a practice web application (SauceDemo) and public APIs used for learning purposes.

Technologies used:

* Playwright
* JavaScript
* Git
* GitHub
* Visual Studio Code

---

# 2. Automated Test Inventory

## UI Testing

### Login

| ID     | Scenario                |
| ------ | ----------------------- |
| UI-001 | Valid Login             |
| UI-002 | Invalid Login           |
| UI-003 | Login with Empty Fields |

### Cart

| ID     | Scenario                 |
| ------ | ------------------------ |
| UI-004 | Add to Cart              |
| UI-005 | Cart Counter Increases   |
| UI-006 | Button Changes to Remove |

### Checkout

| ID     | Scenario                   |
| ------ | -------------------------- |
| UI-007 | Checkout with Empty Fields |
| UI-008 | Successful Checkout        |

---

## API Testing

| ID      | Scenario               |
| ------- | ---------------------- |
| API-001 | GET Post by ID         |
| API-002 | POST Create Post       |
| API-003 | GET Invalid Post (404) |

---

# 3. Learning Summary

Concepts learned:

* Locators
* Assertions
* UI Testing
* API Testing
* GET Requests
* POST Requests
* Status Codes
* JSON Responses
* Git Commits
* Git Push
* GitHub Repository Management

---

# 4. Fundamental Concepts

## How to Read an Automation Script

During the learning process, a fundamental rule was identified:

Every line of code usually belongs to one of these categories:

### Action

Performs an operation within the system.

Examples:

```js
await page.click();
await page.fill();
await request.get();
await request.post();
```

Translation:

* Click an element
* Fill a field
* Request information
* Send information

---

### Reading

Retrieves information from the system.

Examples:

```js
response.status();
response.json();
body.id;
```

Translation:

* Get response status code
* Get JSON content
* Read a field value

---

### Validation

Compares the obtained result with the expected result.

Examples:

```js
expect(response.status()).toBe(200);

expect(body.title).toContain('sunt');
```

Translation:

* Validate that the status code is 200
* Validate that the text contains the word sunt

---

## Mental Formula for Reading Code

Instead of reading symbols and parentheses, it is recommended to translate each line into QA language.

Example:

Code:

```js
expect(response.status()).toBe(200);
```

QA Translation:

Validate that the response status code is 200.

---

Code:

```js
await request.get('/posts/1');
```

QA Translation:

Perform a GET request to the endpoint of post 1.

---

# 5. UI Testing Concepts

## Locator

Definition:

Method used to identify elements within a web page.

Example:

```js
page.locator('[data-test="error"]');
```

Translation:

Find the element whose data-test attribute has the value error.

---

## Click

Definition:

Action used to interact with a button or element.

Example:

```js
await page.click();
```

Translation:

Click an element.

---

## Fill

Definition:

Action used to enter information into a field.

Example:

```js
await page.fill('#first-name', 'John');
```

Translation:

Enter the value John into the First Name field.

---

## Expect

Definition:

Method used to validate expected results.

Example:

```js
expect(locator).toHaveText('Remove');
```

Translation:

Validate that the element text is Remove.

---

# 6. API Testing Concepts

## What is an API?

An API (Application Programming Interface) is a mechanism that allows communication between systems.

In API Testing, there is no direct interaction with buttons or screens.

Communication is performed through requests and responses.

---

## Request

Definition:

A request sent from a client to a server.

Example:

```js
await request.get('/posts/1');
```

Translation:

Request information from the server.

---

## Response

Definition:

The response received from the server after a request.

Example:

```js
const response = await request.get('/posts/1');
```

Translation:

Store the response returned by the server.

---

## GET

Definition:

Method used to retrieve information.

Example:

```js
await request.get('/posts/1');
```

Translation:

Request information for the resource with ID 1.

---

## POST

Definition:

Method used to send information to the server.

Example:

```js
await request.post('/posts');
```

Translation:

Send information to create a new resource.

---

## JSON

Definition:

Format used to exchange data between systems.

Example:

```json
{
  "userId": 1,
  "id": 1,
  "title": "QA Test"
}
```

---

## response.json()

Definition:

Method used to convert the response into JSON format and access its data.

Example:

```js
const body = await response.json();
```

Translation:

Store the data returned by the server.

---

## body.id

Definition:

Access a specific field within the JSON.

Example:

```js
body.id
```

Translation:

Read the value of the id field.

---

# 7. Status Codes

## 200 OK

Meaning:

The request was processed successfully.

Example:

```js
expect(response.status()).toBe(200);
```

Translation:

Validate that the response was successful.

---

## 201 Created

Meaning:

The resource was created successfully.

Example:

```js
expect(response.status()).toBe(201);
```

Translation:

Validate that the resource was created successfully.

---

## 404 Not Found

Meaning:

The requested resource does not exist.

Example:

```js
expect(response.status()).toBe(404);
```

Translation:

Validate that the resource was not found.

---

## Other Important Status Codes

| Code | Meaning               |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 500  | Internal Server Error |

---

# 8. Assertions Used

## toBe()

Definition:

Validates that a value is exactly equal to the expected value.

Example:

```js
expect(body.id).toBe(1);
```

Translation:

Validate that the value is exactly 1.

---

## toContain()

Definition:

Validates that a text contains a specific word or fragment.

Example:

```js
expect(body.title).toContain('sunt');
```

Translation:

Validate that the text contains the word sunt.

---

# 9. Lessons Learned

During the development of this project, several concepts initially caused difficulties and were later understood through practice.

---

## Lesson 1: Do Not Read Code Like a Developer

Initial issue:

Trying to understand every symbol, parenthesis, or bracket individually.

Lesson learned:

Translate code into QA language.

Example:

```js
expect(response.status()).toBe(200);
```

Translation:

Validate that the response status code is 200.

---

## Lesson 2: Differentiate Action and Validation

Initial issue:

Confusing an action with a validation.

Lesson learned:

Actions perform something.

Validations verify something.

Examples:

Action:

```js
await page.click();
```

Validation:

```js
expect(locator).toHaveText('Remove');
```

---

## Lesson 3: Understanding Locators

Initial issue:

Not knowing how to identify a locator within HTML.

Lesson learned:

A locator is built using attributes, classes, IDs, or visible text.

Example:

```html
<h3 data-test="error">
```

Tag:

```txt
h3
```

Attribute:

```txt
data-test
```

Value:

```txt
error
```

Locator:

```js
page.locator('[data-test="error"]');
```

---

## Lesson 4: Understanding GET and POST

GET:

Retrieve information.

POST:

Send information.

---

## Lesson 5: Understanding JSON

Initial issue:

Not understanding where the values used in validations came from.

Lesson learned:

The data comes from the JSON returned by the API.

Example:

```json
{
  "userId": 1,
  "id": 1,
  "title": "QA Test"
}
```

The fields can be accessed through:

```js
body.userId
body.id
body.title
```

---

## Lesson 6: Understanding WebKit

Initial issue:

Thinking that WebKit was related to API Testing.

Lesson learned:

WebKit represents Safari within Playwright.

API tests do not depend on the browser.

The API tests appeared three times because of the project configuration:

* Chromium
* Firefox
* WebKit

---

## Lesson 7: Understanding Test, Project, and Execution

Test:

Individual automated scenario.

Example:

```txt
Valid Login
```

Project:

Browser configuration defined in playwright.config.js.

Example:

```txt
Chromium
Firefox
WebKit
```

Execution:

Result of running a test within a project.

Example:

```txt
1 Test × 3 Projects = 3 Executions
```

---

# 10. Playwright Quick Reference

## UI

| Code         | Translation   |
| ------------ | ------------- |
| goto()       | Open page     |
| click()      | Click         |
| fill()       | Fill field    |
| locator()    | Find element  |
| expect()     | Validate      |
| toHaveText() | Validate text |

---

## API

| Code              | Translation      |
| ----------------- | ---------------- |
| request.get()     | Get information  |
| request.post()    | Send information |
| response.status() | Get status code  |
| response.json()   | Get JSON content |
| body.id           | Read id field    |
| body.title        | Read title field |

---

## Assertions

| Method      | Meaning               |
| ----------- | --------------------- |
| toBe()      | Must be exactly equal |
| toContain() | Must contain          |

---

# 11. Project Evolution

Topics for future Playwright learning:

* Page Object Model (POM)
* Fixtures
* Hooks
* Reporting
* CI/CD

---

# 12. Project Status

Version: Playwright UI + API V1

Status: Completed
