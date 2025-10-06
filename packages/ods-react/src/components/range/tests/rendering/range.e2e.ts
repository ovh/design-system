import 'jest-puppeteer';
import { type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

async function getRangePadding(page: Page): Promise<{ bottom?: number, left?: number, right?: number, top?: number }> {
  return page.evaluate(() => {
    function stripPx(value: string): number {
      return parseInt(value.split('px')[0], 10);
    }

    const range = document.querySelector('[data-ods="range"]');

    if (!range) {
      return {};
    }

    const style = window.getComputedStyle(range);

    return {
      bottom: stripPx(style.getPropertyValue('padding-bottom')),
      left: stripPx(style.getPropertyValue('padding-left')),
      right: stripPx(style.getPropertyValue('padding-right')),
      top: stripPx(style.getPropertyValue('padding-top')),
    };
  });
}

describe('Range rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-ods="range"]')).not.toBeNull();
  });

  describe('custom ticks', () => {
    it('should render with no horizontal padding if bound labels are small', async() => {
      await gotoStory(page, 'rendering/custom-small-ticks');
      await page.waitForSelector('[data-ods="range"]');

      const padding = await getRangePadding(page);

      expect(padding.bottom).toBeGreaterThan(0);
      expect(padding.left).toBe(0);
      expect(padding.right).toBe(0);
      expect(padding.top).toBeGreaterThan(0);
    });

    it('should render with some horizontal padding if bound labels are large', async() => {
      await gotoStory(page, 'rendering/custom-large-ticks');
      await page.waitForSelector('[data-ods="range"]');

      const padding = await getRangePadding(page);

      expect(padding.bottom).toBeGreaterThan(0);
      expect(padding.left).toBeGreaterThan(0);
      expect(padding.right).toBeGreaterThan(0);
      expect(padding.top).toBeGreaterThan(0);
    });
  });
});
