import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { ListingPage } from '../pages/ListingPage';

test('Search Mumbai stay and verify host', async ({ page }) => {

  const home = new HomePage(page);
  const search = new SearchPage(page);
  const listing = new ListingPage(page);

  await home.goto();

  await home.verifyLoggedIn();

  await search.searchMumbaiStay();

  await search.openFirstListing();

  const pages = page.context().pages();

  const listingPage = pages[pages.length - 1];

  const listingObj = new ListingPage(listingPage);

  const hostName = await listingObj.getHostName();

  expect(hostName).toContain('Hosted by');
});