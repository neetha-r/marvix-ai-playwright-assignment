# Marvix AI Playwright Assignment

## Overview

This project contains automated UI test scenarios implemented using Playwright and TypeScript for the Marvix AI Automation Engineering assignment.

The framework is designed with maintainability, reliability, and scalability in mind using the Page Object Model (POM) design pattern.

---

# Tech Stack

- Playwright
- TypeScript
- Node.js

---

# Project Structure

```text
marvix-ai-playwright-assignment/
│
├── pages/
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── SearchPage.ts
│   └── ListingPage.ts
│
├── tests/
│   ├── login.spec.ts
│   └── search.spec.ts
│
├── utils/
│   └── testData.ts
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

---

# Scenarios Covered

## Scenario A – Login Flow

- Open Airbnb website
- Validate authenticated session
- Logout from application
- Verify session termination

## Scenario B – Search Flow

- Search for a 1-night stay in Mumbai
- Open the first listing
- Extract host name
- Validate host name presence

---

# Framework Design Highlights

- Page Object Model implementation
- Reusable page methods
- Robust locator strategy
- Playwright auto waits
- Failure screenshots and traces
- Easy to scale and maintain

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone <repository-url>
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Install Playwright Browsers

```bash
npx playwright install
```

---

# Authentication Setup

Airbnb uses CAPTCHA and OTP protections which can make direct login automation unstable.

To maintain reliability, Playwright storageState is used for authenticated session reuse.

Generate authenticated session locally using:

```bash
npx playwright codegen airbnb.com --save-storage=storageState.json
```

Steps:
1. Browser opens
2. Login manually to Airbnb
3. Complete OTP/CAPTCHA if prompted
4. Close the browser

This generates:

```text
storageState.json
```

Note:
`storageState.json` is intentionally excluded from GitHub for security reasons.

---

# Execute Tests

## Run All Tests

```bash
npm test
```

---

## Run Tests in Headed Mode

```bash
npm run test:headed
```

---

## Open HTML Report

```bash
npm run report
```

---

# Playwright Features Used

- storageState session reuse
- Retry mechanism
- Trace collection
- Screenshot capture on failure
- Page Object Model
- Network idle waiting strategy

---

# Assumptions

- Authenticated session is reused through storageState
- Real login automation intentionally avoided due to CAPTCHA/OTP limitations
- Airbnb UI may vary slightly based on region/location

---

# Tradeoffs / Limitations

- Airbnb selectors are dynamic and may occasionally change
- Search results vary based on availability and location
- Login automation depends on previously generated authenticated session

---

# Improvements With More Time

- CI/CD integration using GitHub Actions
- Cross-browser parallel execution
- Allure reporting integration
- Environment-specific configuration
- API mocking
- Better test data management
- Visual regression testing

---

# Author

Navaneetha
