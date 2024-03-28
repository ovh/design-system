import puppeteer, { Browser, Page } from 'puppeteer';

async function goToComponentPage(page, componentName) {
  await page.goto(`http://localhost:3000/#/${componentName}`);
  await page.waitForSelector(componentName);
  // Small delay to prevent random test errors on slow render
  await new Promise((resolve) => setTimeout(resolve, 100));
}

function setupBrowser() {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: true
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  return () => ({ browser, page });
}

export {
  goToComponentPage,
  setupBrowser,
};
