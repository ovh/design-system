import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Select rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="select"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="select-content"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="select-control"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const select = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await select?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });

  describe('default width', () => {
    async function widthOf(testId: string): Promise<number> {
      return page.$eval(`[data-testid="${testId}"] .probe`, (el) => el.getBoundingClientRect().width);
    }

    it('should share the 280px default, shrink in a narrow container and accept a consumer width', async() => {
      await gotoStory(page, 'rendering/default-width');

      expect(await widthOf('default')).toBe(280);
      expect(await widthOf('narrow')).toBe(200);
      expect(await widthOf('override')).toBe(400);
    });
  });

  describe('in a scroll container', () => {
    it('should not let the hidden native select extend the document', async() => {
      await gotoStory(page, 'rendering/in-scroll-container');
      await page.waitForSelector('[data-ods="select"] select');

      const [scrollHeight, clientHeight] = await page.evaluate(() => [
        document.documentElement.scrollHeight,
        document.documentElement.clientHeight,
      ]);

      expect(scrollHeight).toBe(clientHeight);
    });
  });

  describe('list width', () => {
    it('should give the list the width of the control by default', async() => {
      await gotoStory(page, 'rendering/list-width');
      await page.waitForSelector('[data-testid="list-width"] [data-ods="select-content"]', { visible: true });

      const [list, control] = await page.evaluate(() => [
        document.querySelector('[data-testid="list-width"] [data-ods="select-content"]')!.getBoundingClientRect().width,
        document.querySelector('[data-testid="list-width"] [data-ods="select-control"]')!.getBoundingClientRect().width,
      ]);

      expect(list).toBe(control);
    });
  });
});
