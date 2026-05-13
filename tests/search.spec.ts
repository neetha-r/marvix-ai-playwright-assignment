import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';
import { ListingPage } from '../pages/ListingPage';

test('Search Mumbai listing and verify host', async ({ page }) => {
  const searchPage = new SearchPage(page);
  const listingPage = new ListingPage(page);

  await page.goto('https://www.airbnb.com');

  await searchPage.searchMumbaiStay();

  await searchPage.openFirstListing();

  const hostName = await listingPage.getHostName();

  console.log(`Host Name: ${hostName}`);

  expect(hostName).toContain('Hosted by');
});
