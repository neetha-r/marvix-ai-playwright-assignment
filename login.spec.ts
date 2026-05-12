import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Login and Logout Flow', async ({ page }) => {

  const home = new HomePage(page);

  await home.goto();

  // Reusing authenticated session
  // Login step skipped intentionally
  // due to Airbnb bot protection

  await home.verifyLoggedIn();

  await home.logout();

  await home.verifyLoggedOut();
});