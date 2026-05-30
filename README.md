# playwright-bdd-tests

BDD test automation with Playwright, TypeScript and Gherkin.

![CI](https://github.com/roman-captain/playwright-bdd-tests/actions/workflows/ci.yml/badge.svg)

---

## Stack

- Playwright + TypeScript
- playwright-bdd (Gherkin integration)
- Allure reporting
- GitHub Actions CI with daily cron

---

## Architecture

```
src/
  fixtures/   - custom Playwright fixtures (POM injection)
  pages/      - Page Object Model classes
tests/
  features/   - Gherkin .feature files
  steps/      - TypeScript step definitions
```

**Custom fixtures** - page objects are injected into step definitions via Playwright's fixture mechanism, no manual instantiation in steps.

**POM** - all locators declared as `readonly` properties at the top of each page class.

---

## Run

```bash
npm install
npx playwright install chromium

npm test                  # all tests
npm run test:smoke        # @smoke only
npm run test:regression   # @regression only
npm run test:headed       # browser visible
```

---

## Reports

```bash
npm run allure:generate
npm run allure:open
```

---

## Tags

| Tag | Scope |
|---|---|
| `@smoke` | Core flows - run on every push |
| `@regression` | Extended coverage - run on schedule |
| `@shopping` | Shopping cart feature |
| `@auth` | Authentication feature |

---

## Target site

[Automation Exercise](https://www.automationexercise.com) - public e-commerce training site used as the system under test.
