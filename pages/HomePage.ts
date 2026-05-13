import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.airbnb.com/');
  }

  async verifyLoggedIn() {
    await expect(
      this.page.locator('[data-testid="cypress-headernav-profile"]')
    ).toBeVisible();
  }

  async logout() {
    await this.page.locator('[data-testid="cypress-headernav-profile"]').click();

    await this.page.getByText('Log out').click();
  }

  async verifyLoggedOut() {
    await expect(
      this.page.getByText('Log in')
    ).toBeVisible();
  }
}
