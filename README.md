# WebTests (TypeScript)

TypeScript port of the C# `PlaywrightTestExamples` project — the same UI automation
suite against http://uitestingplayground.com/, built with `@playwright/test`.

## How to launch

1. Install dependencies:

   ```
   npm install
   ```

2. Install Playwright browsers:

   ```
   npm run install:browsers
   ```

3. Run the tests:

   ```
   npm test
   ```

   Run headed (visible browser), matching the C# `live.runsettings` default:

   ```
   npm run test:headed
   ```

## Configuration

Runtime parameters mirror `live.runsettings` and are read from environment
variables (defaults shown):

| Variable         | Default                              |
|------------------|---------------------------------------|
| `ENVIRONMENT`    | `http://uitestingplayground.com/`     |
| `LOGIN`          | `Viktor`                              |
| `PASSWORD`       | `pwd`                                 |
| `WRONG_PASSWORD` | `pwd123`                              |
| `HEADLESS`       | `false`                               |

Example:

```
ENVIRONMENT=http://uitestingplayground.com/ LOGIN=Viktor PASSWORD=pwd WRONG_PASSWORD=pwd123 HEADLESS=true npx playwright test
```

## Project layout

- `pages/` — Page Object Model classes (mirrors the C# `Pages/` folder).
- `tests/` — Spec files plus `fixtures.ts`, a custom Playwright Test fixture
  that plays the role of the C# `BaseTest` class (`loadMainPage`, `loadPage`,
  and page-object fixtures).
- `resources/` — Test data (`file.txt` used by the file upload test).
