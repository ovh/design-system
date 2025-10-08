import 'jest-puppeteer';
import { type ElementHandle, type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';
import { LOCALE } from '../../../../utils/locales';
import { INPUT_I18N, TRANSLATION } from '../../../input/src/constants/input-i18n';

async function getClearButton(page: Page): Promise<ElementHandle | null> {
  return page.$(`[data-ods="button"][aria-label="${TRANSLATION[INPUT_I18N.clearButton][LOCALE.en]}"]`);
}

describe('Datepicker rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-ods="datepicker"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="datepicker-content"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="datepicker-control"]')).not.toBeNull();
  });

  describe('clearable', () => {
    it('should not render the button if the input is empty', async() => {
      await gotoStory(page, 'rendering/clearable-empty');
      await page.waitForSelector('[data-ods="datepicker"]');

      expect(await getClearButton(page)).toBeNull();
    });

    it('should render the button if default value is set', async() => {
      await gotoStory(page, 'rendering/clearable-default-value');
      await page.waitForSelector('[data-ods="datepicker"]');

      const clearButton = await getClearButton(page);

      expect(await clearButton?.isVisible()).toBe(true);
    });

    it('should render the button if value is set', async() => {
      await gotoStory(page, 'rendering/clearable-value');
      await page.waitForSelector('[data-ods="datepicker"]');

      const clearButton = await getClearButton(page);

      expect(await clearButton?.isVisible()).toBe(true);
    });
  });
});
