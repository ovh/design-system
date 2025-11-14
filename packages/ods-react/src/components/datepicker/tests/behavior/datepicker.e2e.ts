import 'jest-puppeteer';
import { type ElementHandle, type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';
import { LOCALE } from '../../../../utils/locales';
import { INPUT_I18N, TRANSLATION } from '../../../input/src/constants/input-i18n';

async function getClearButton(page: Page): Promise<ElementHandle | null> {
  return page.$(`[data-ods="button"][aria-label="${TRANSLATION[INPUT_I18N.clearButton][LOCALE.en]}"]`);
}

async function getInputValue(page: Page): Promise<string> {
  return page.$eval('[data-ods="datepicker-control"]', (el) => (el as HTMLInputElement).value);
}

describe('Datepicker behavior', () => {
  describe('clearable', () => {
    describe('uncontrolled', () => {
      beforeEach(async() => {
        await gotoStory(page, 'behavior/clearable');
        await page.waitForSelector('[data-ods="datepicker"]');
      });

      it('should clear the input value', async() => {
        const clearButton = await getClearButton(page);

        await clearButton?.click();

        expect(await getInputValue(page)).toBe('');
      });
    });

    describe('controlled', () => {
      beforeEach(async() => {
        await gotoStory(page, 'behavior/clearable-controlled');
        await page.waitForSelector('[data-ods="datepicker"]');
      });

      it('should clear the input value', async() => {
        const clearButton = await getClearButton(page);

        await clearButton?.click();

        expect(await getInputValue(page)).toBe('');
      });
    });
  });
});
