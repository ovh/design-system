import 'jest-puppeteer';
import { type ElementHandle, type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';
import { LOCALE } from '../../../../utils/locales';
import { INPUT_I18N, TRANSLATION } from '../../src/constants/input-i18n';

async function getClearButton(page: Page): Promise<ElementHandle | null> {
  return page.$(`[data-ods="button"][aria-label="${TRANSLATION[INPUT_I18N.clearButton][LOCALE.en]}"]`);
}

describe('Input rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="input"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const input = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await input?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });

  describe('clearable', () => {
    it('should not render the button if the input is empty', async() => {
      await gotoStory(page, 'rendering/clearable-empty');
      await page.waitForSelector('[data-ods="input"]');

      expect(await getClearButton(page)).toBeNull();
    });

    it('should render the button if default value is set', async() => {
      await gotoStory(page, 'rendering/clearable-default-value');
      await page.waitForSelector('[data-ods="input"]');

      const clearButton = await getClearButton(page);

      expect(await clearButton?.isVisible()).toBe(true);
    });

    it('should render the button if value is set', async() => {
      await gotoStory(page, 'rendering/clearable-value');
      await page.waitForSelector('[data-ods="input"]');

      const clearButton = await getClearButton(page);

      expect(await clearButton?.isVisible()).toBe(true);
    });
  });
});
