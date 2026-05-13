import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Login and logout flow', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();

  await homePage.verifyLoggedIn();

  await homePage.logout();

  await homePage.verifyLoggedOut();
});
