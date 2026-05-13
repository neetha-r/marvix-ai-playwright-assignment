import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 60000,

  retries: 1,

  use: {
    browserName: 'chromium',

    headless: false,

    viewport: {
      width: 1440,
      height: 900,
    },

    actionTimeout: 15000,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    storageState: 'storageState.json'
  },

  reporter: [
    ['html'],
    ['list']
  ]
});
