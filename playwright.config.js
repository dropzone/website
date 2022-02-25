// @ts-check
import { devices } from '@playwright/test'

const port = 3318

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  webServer: {
    command: `npm run build && npm run preview -- -p ${port}`,
    port: port,
  },
  testIgnore: 'cypress/**',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'iOS',
      use: { ...devices['iPhone 11'] },
    },
  ],
}

export default config
