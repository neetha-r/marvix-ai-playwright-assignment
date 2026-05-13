import { Page, expect } from '@playwright/test';

export class ListingPage {
  constructor(private page: Page) {}

  async getHostName(): Promise<string> {
    const hostText = this.page.locator('text=Hosted by').first();

    await expect(hostText).toBeVisible();

    const text = await hostText.textContent();

    return text || '';
  }
}
