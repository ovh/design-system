import 'jest-puppeteer';
import { type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';
import { LOCALE } from '../../../../utils/locales';
import { DATA_TABLE_I18N, TRANSLATION } from '../../src/constants/data-table-i18n';

type SortButtonDescription = {
  hidden: boolean,
  insideButton: boolean,
  text: string | null,
};

async function getSortButtonDescriptions(page: Page, testId: string): Promise<SortButtonDescription[]> {
  return page.$$eval(`[data-testid="${testId}"] th button`, (buttons) => buttons.map((button) => {
    const description = document.getElementById(button.getAttribute('aria-describedby') ?? '');

    return {
      hidden: !!description?.hidden,
      insideButton: !!description && button.contains(description),
      text: description?.textContent ?? null,
    };
  }));
}

describe('DataTable rendering', () => {
  it('should render the component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-ods="data-table"]')).not.toBeNull();
  });

  describe('sortable headers', () => {
    it('should describe each sort button with the translated hint, outside of its name', async() => {
      await gotoStory(page, 'rendering/sortable');
      await page.waitForSelector('[data-testid="sortable"]');

      const descriptions = await getSortButtonDescriptions(page, 'sortable');

      expect(descriptions).toHaveLength(5);
      descriptions.forEach((description) => {
        expect(description).toEqual({
          hidden: true,
          insideButton: false,
          text: TRANSLATION[DATA_TABLE_I18N.sortableColumn][LOCALE.en],
        });
      });
    });

    it('should apply the i18n override to the hint', async() => {
      await gotoStory(page, 'rendering/sortable-translated');
      await page.waitForSelector('[data-testid="sortable-translated"]');

      const descriptions = await getSortButtonDescriptions(page, 'sortable-translated');

      expect(descriptions.map(({ text }) => text)).toEqual(Array(5).fill('Activate to sort'));
    });

    it('should render no sort button when the sorting is disabled', async() => {
      await gotoStory(page, 'rendering/not-sortable');
      await page.waitForSelector('[data-testid="not-sortable"]');

      expect(await page.$$('[data-testid="not-sortable"] th button')).toHaveLength(0);
    });

    it('should sort from the keyboard and expose the direction on the sorted header only', async() => {
      await gotoStory(page, 'rendering/sortable');
      await page.waitForSelector('[data-testid="sortable"]');

      const getAriaSorts = (): Promise<Array<string | null>> => page.$$eval('[data-testid="sortable"] th', (headers) => headers.map((header) => header.getAttribute('aria-sort')));

      await page.focus('[data-testid="sortable"] th button');
      await page.keyboard.press('Enter');
      await page.waitForSelector('[data-testid="sortable"] th[aria-sort="ascending"]');
      expect(await getAriaSorts()).toEqual(['ascending', null, null, null, null]);

      await page.keyboard.press('Space');
      await page.waitForSelector('[data-testid="sortable"] th[aria-sort="descending"]');
      expect(await getAriaSorts()).toEqual(['descending', null, null, null, null]);
    });
  });
});
