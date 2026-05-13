import { expect, Page } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  async navigateToLogin() {

    await this.page.goto('https://www.airbnb.com/');

    const loginButton = this.page.getByText('Log in');

    await expect(loginButton).toBeVisible();

    await loginButton.click();
  }

  async verifyLoginPageVisible() {

    await expect(
      this.page.getByText('Welcome to Airbnb')
    ).toBeVisible();
  }

  async verifyUserLoggedIn() {

    const profileButton = this.page.locator(
      '[data-testid="cypress-headernav-profile"]'
    );

    await expect(profileButton).toBeVisible();
  }

  async logout() {

    const profileButton = this.page.locator(
      '[data-testid="cypress-headernav-profile"]'
    );

    await profileButton.click();

    const logoutButton = this.page.getByText('Log out');

    await expect(logoutButton).toBeVisible();

    await logoutButton.click();
  }

  async verifyUserLoggedOut() {

    await expect(
      this.page.getByText('Log in')
    ).toBeVisible();
  }
}
