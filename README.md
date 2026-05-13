# Airbnb Automation Assignment

## Framework
- Playwright
- TypeScript

## Project Structure

- Page Object Model design
- Reusable page classes
- Configurable test data
- Robust waits and assertions

---

## Setup

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Generate Auth Session

```bash
npx playwright codegen airbnb.com --save-storage=storageState.json
```

Login manually once and close browser.

---

## Execute Tests

Run all tests:

```bash
npm test
```

Run in headed mode:

```bash
npm run test:headed
```

Open HTML report:

```bash
npm run report
```

---

## Scenarios Covered

### Scenario A
- Verify logged-in state
- Logout
- Verify session termination

### Scenario B
- Search 1-night stay in Mumbai
- Open first listing
- Extract and validate host name

---

## Assumptions

- Login session reused using Playwright storageState
- Real login automation intentionally skipped due to CAPTCHA and OTP protections

---

## Tradeoffs

- Airbnb UI is dynamic and may change frequently
- Some selectors may vary by region
- Listing results depend on availability and location

---

## Improvements With More Time

- CI/CD integration
- Cross-browser execution
- Better reporting
- Retry strategy
- API mocking
- Parallel execution
- Environment-based configuration
