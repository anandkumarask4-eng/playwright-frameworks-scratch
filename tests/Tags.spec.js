import { test } from '@playwright/test';

test('test-1 @sanity', async ({ page }) => {
  console.log('test-1 is successful');
});

test('test-2 @sanity', async ({ page }) => {
  console.log('test-2 is successful');
});

test('test-3 @sanity', async ({ page }) => {
  console.log('test-3 is successful');
});

test('test-4 @reg', async ({ page }) => {
  console.log('regression test-4 is successful');
});

test('test-5 @reg', async ({ page }) => {
  console.log('regression test-5 is successful');
});