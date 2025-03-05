import 'expect-puppeteer';
import 'jest-puppeteer';

describe('OdsText rendering', () => {
  it('should render with preset heading1', async() => {
    await page.goto('http://localhost:3000/iframe.html?args=&id=tests-rendering--preset-h-1&viewMode=story');
    await page.waitForNavigation();

    const odsText = await page.waitForSelector('[data-testid="preset-h1"]');
    const tagName = await odsText?.evaluate((el: Element) => el.tagName);
    const text = await odsText?.evaluate((el: Element) => el.textContent);

    expect(tagName).toBe('H1');
    expect(text).toBe('Preset H1');
  });

  it('should render with preset heading2', async() => {
    await page.goto('http://localhost:3000/iframe.html?args=&id=tests-rendering--preset-h-2&viewMode=story');
    await page.waitForNavigation();

    const odsText = await page.waitForSelector('[data-testid="preset-h2"]');
    const tagName = await odsText?.evaluate((el: Element) => el.tagName);
    const text = await odsText?.evaluate((el: Element) => el.textContent);

    expect(tagName).toBe('H2');
    expect(text).toBe('Preset H2');
  });
});
