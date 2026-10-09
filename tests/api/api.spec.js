const { test, expect } = require('@playwright/test');

test.describe('API Tests', () => {

  test('GET post by id | User receives status 200', async ({ request }) => {

    const response = await request.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);

    expect(body.userId).toBe(1);

    expect(body.title).toContain('sunt');

  });

});



test('POST request | User creates a new post successfully', async ({ request }) => {

  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'QA Test',
        body: 'Learning Playwright API',
        userId: 1
      }
    }
  );

  expect(response.status()).toBe(201);
  const responseBody = await response.json();
  expect(responseBody.title).toBe('QA Test');
  expect(responseBody.userId).toBe(1);

});


test('GET invalid post | User receives status 404', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/999999'
  );

  expect(response.status()).toBe(404);

});