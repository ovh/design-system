import 'jest-puppeteer';
import { type ElementHandle, type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

async function getInput(page: Page): Promise<ElementHandle | null> {
  return page.$('[data-ods="quantity-input"]');
}

describe('Quantity rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-ods="quantity"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="quantity-control"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="quantity-input"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const quantity = await page.waitForSelector('[data-ods="quantity"]');
      const height = await quantity?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });

  describe('input ID', () => {
    it('should be randomly generated if not set', async() => {
      await gotoStory(page, 'rendering/id-unset');
      await page.waitForSelector('[data-ods="quantity"]');

      const input = await getInput(page);

      expect(await input?.evaluate((el) => el.id)).toBeDefined();
    });

    it('should use the one set on the QuantityInput', async() => {
      await gotoStory(page, 'rendering/id-set');
      await page.waitForSelector('[data-ods="quantity"]');

      const input = await getInput(page);

      expect(await input?.evaluate((el) => el.id)).toBe('input-id');
    });

    it('should use the one from the the FormField', async() => {
      await gotoStory(page, 'rendering/id-form-field');
      await page.waitForSelector('[data-ods="quantity"]');

      const input = await getInput(page);

      expect(await input?.evaluate((el) => el.id)).toBe('form-field-id');
    });
  });
});
