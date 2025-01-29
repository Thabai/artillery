import { test, expect } from '@playwright/test';
import { testLogin } from './commands/login';

test('get started link', async ({ page }) => {
  await testLogin(page);
});
