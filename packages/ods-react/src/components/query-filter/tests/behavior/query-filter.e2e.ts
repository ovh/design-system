import 'jest-puppeteer';
import { type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

async function openContent(page: Page): Promise<void> {
  await page.click('[data-ods="query-filter-control"]');
  await page.waitForSelector('[data-ods="query-filter-content"] [role="option"]');
}

async function getHighlightedIndex(page: Page): Promise<number> {
  return page.$$eval('[data-ods="query-filter-content"] [role="option"]', (els) => els.findIndex((el) => el.getAttribute('aria-selected') === 'true'));
}

// The first option cut by the bottom of the scrolled list, and the middle of its visible slice.
async function getClippedOption(page: Page): Promise<{ index: number, x: number, y: number }> {
  return page.evaluate(() => {
    const listBottom = document.querySelector('[data-ods="query-filter-content"]')!.getBoundingClientRect().bottom;
    const options = Array.from(document.querySelectorAll('[data-ods="query-filter-content"] [role="option"]'));
    const index = options.findIndex((el) => el.getBoundingClientRect().bottom > listBottom);
    const { left, top } = options[index].getBoundingClientRect();
    return { index, x: left + 20, y: (top + listBottom) / 2 };
  });
}

async function getListScrollTop(page: Page): Promise<number> {
  return page.$eval('[data-ods="query-filter-content"]', (el) => el.scrollTop);
}

async function nextFrame(page: Page): Promise<void> {
  await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(resolve)));
}

describe('QueryFilter behavior', () => {
  describe('scrolling', () => {
    beforeEach(async() => {
      await gotoStory(page, 'behavior/many-options');
      await page.waitForSelector('[data-ods="query-filter"]');
      await openContent(page);
      // The cases need a list that scrolls, so wait for its styles.
      await page.waitForFunction(() => {
        const list = document.querySelector('[data-ods="query-filter-content"]')!;
        return list.scrollHeight > list.clientHeight;
      });
    });

    it('should not scroll the list when hovering a partly visible option', async() => {
      const scrollTop = await getListScrollTop(page);
      const { index, x, y } = await getClippedOption(page);

      await page.mouse.move(x, y);
      await nextFrame(page);

      expect(await getHighlightedIndex(page)).toBe(index);
      expect(await getListScrollTop(page)).toBe(scrollTop);
    });

    it('should scroll a hovered option into view once reached back by keyboard', async() => {
      const { index, x, y } = await getClippedOption(page);

      // The pointer stays still on the partly visible option from here on.
      await page.mouse.move(x, y);
      await page.keyboard.press('ArrowUp');
      await page.keyboard.press('ArrowDown');
      await nextFrame(page);

      expect(await getHighlightedIndex(page)).toBe(index);
      const { bottom, listBottom } = await page.evaluate((idx) => ({
        bottom: document.querySelectorAll('[data-ods="query-filter-content"] [role="option"]')[idx].getBoundingClientRect().bottom,
        listBottom: document.querySelector('[data-ods="query-filter-content"]')!.getBoundingClientRect().bottom,
      }), index);
      expect(bottom).toBeLessThanOrEqual(listBottom);
    });

    it('should keep the keyboard highlight when the list scrolls under a resting pointer', async() => {
      const { index } = await getClippedOption(page);
      const { x, y } = await page.$eval('[data-ods="query-filter-content"] [role="option"]', (el) => {
        const { left, top, height } = el.getBoundingClientRect();
        return { x: left + 20, y: top + height / 2 };
      });

      await page.mouse.move(x, y);
      // Past the clipped option, so that the list scrolls under the pointer.
      await Array.from({ length: index + 3 }).reduce<Promise<void>>(
        (previous) => previous.then(async() => {
          await page.keyboard.press('ArrowDown');
          await nextFrame(page);
        }),
        Promise.resolve(),
      );

      expect(await getHighlightedIndex(page)).toBe(index + 3);
    });
  });
});
