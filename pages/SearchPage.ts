import { Page } from '@playwright/test';

export class SearchPage {
  constructor(private page: Page) {}

  async searchMumbaiStay() {
    await this.page.getByPlaceholder('Search destinations').fill('Mumbai');

    await this.page.keyboard.press('Enter');

    await this.page.waitForLoadState('networkidle');
  }

  async openFirstListing() {
    const firstCard = this.page.locator('[itemprop="itemListElement"]').first();

    await firstCard.click();
  }
}
