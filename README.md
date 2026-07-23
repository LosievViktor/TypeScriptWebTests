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
