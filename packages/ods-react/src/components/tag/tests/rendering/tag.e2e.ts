import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Tag rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="tag"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const tag = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await tag?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });

  describe('as', () => {
    it('should render a button with its removal icon by default', async() => {
      await gotoStory(page, 'rendering/render');

      const tag = await page.waitForSelector('[data-testid="render"]');
      const tagName = await tag?.evaluate((el: Element) => el.tagName);
      const type = await tag?.evaluate((el: Element) => el.getAttribute('type'));
      const icon = await tag?.$('[data-ods="icon"]');

      expect(tagName).toBe('BUTTON');
      expect(type).toBe('button');
      expect(icon).not.toBeNull();
    });

    it('should render a link when asked to', async() => {
      await gotoStory(page, 'rendering/link');

      const tag = await page.waitForSelector('[data-testid="link"]');
      const tagName = await tag?.evaluate((el: Element) => el.tagName);
      const href = await tag?.evaluate((el: Element) => el.getAttribute('href'));

      expect(tagName).toBe('A');
      expect(href).toBe('#dummy-target');
    });

    it('should not render the removal icon on a link, as there is nothing to remove', async() => {
      await gotoStory(page, 'rendering/link');

      const tag = await page.waitForSelector('[data-testid="link"]');

      expect(await tag?.$('[data-ods="icon"]')).toBeNull();
    });

    it('should not render the button type attribute on a link', async() => {
      await gotoStory(page, 'rendering/link');

      const tag = await page.waitForSelector('[data-testid="link"]');

      expect(await tag?.evaluate((el: Element) => el.getAttribute('type'))).toBeNull();
    });

    it('should render a link without the browser underline', async() => {
      await gotoStory(page, 'rendering/link');

      const tag = await page.waitForSelector('[data-testid="link"]');
      const decoration = await tag?.evaluate((el: Element) => getComputedStyle(el).textDecorationLine);

      expect(decoration).toBe('none');
    });
  });

  describe('sizes', () => {
    it('should respect increase order ( md < lg)', async() => {
      await gotoStory(page, 'rendering/sizes');

      const mdTag = await page.waitForSelector('[data-testid="size-md"]');
      const lgTag = await page.waitForSelector('[data-testid="size-lg"]');

      const mdHeight = await mdTag!.evaluate((el: Element) => el.getBoundingClientRect().height);
      const lgHeight = await lgTag!.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(mdHeight).toBeLessThan(lgHeight);
      expect(lgHeight).toBeGreaterThan(mdHeight);
    });
  });

});
