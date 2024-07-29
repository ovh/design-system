import puppeteer, { Browser, Page } from 'puppeteer';

async function goToComponentPage(page, componentName) {
  await page.goto('http://localhost:3000');
  await page.waitForSelector(`#${componentName}`);
  await page.click(`#${componentName}`);
  await page.waitForSelector(componentName);
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
