import 'expect-puppeteer';
import 'jest-puppeteer';

describe('OdsIcon rendering', () => {
  it('should render the web component', async() => {
    await page.goto('http://localhost:3000/iframe.html?args=&id=tests-rendering--render&viewMode=story');
    await page.waitForNavigation();

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await page.goto('http://localhost:3000/iframe.html?args=&id=tests-rendering--custom-style&viewMode=story');
      await page.waitForNavigation();

      const odsIcon = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await odsIcon?.evaluate((el: Element) => parseInt(getComputedStyle(el).getPropertyValue('height'), 10));

      expect(height).toBe(42);
    });
  });
});
