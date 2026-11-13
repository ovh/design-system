import 'jest-puppeteer';
import { type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

async function getActiveDescendantLabel(page: Page): Promise<string | null> {
  return page.$eval('[role="combobox"]', (el) => document.getElementById(el.getAttribute('aria-activedescendant') ?? '')?.textContent ?? null);
}

async function getOptionStates(page: Page): Promise<Array<{ highlighted: boolean, label: string, selected: string | null }>> {
  return page.$$eval('[role="option"]', (els) => els.map((el) => ({
    highlighted: el.hasAttribute('data-highlighted'),
    label: el.textContent ?? '',
    selected: el.getAttribute('aria-selected'),
  })));
}

async function openContent(page: Page): Promise<void> {
  await page.click('[data-ods="combobox-control"] input');
  await page.waitForSelector('[data-ods="combobox-content"]:not([hidden])');
}

describe('Combobox accessibility', () => {
  describe('single', () => {
    beforeEach(async() => {
      await gotoStory(page, 'accessibility/single');
      await page.waitForSelector('[data-ods="combobox"]');
    });

    it('should keep the highlight out of aria-selected', async() => {
      await openContent(page);
      await page.keyboard.press('ArrowDown');
      await page.waitForSelector('[role="option"][data-highlighted]');

      expect(await getOptionStates(page)).toEqual([
        { highlighted: true, label: 'Apple', selected: 'false' },
        { highlighted: false, label: 'Banana', selected: 'false' },
        { highlighted: false, label: 'Cherry', selected: 'false' },
      ]);
      expect(await getActiveDescendantLabel(page)).toBe('Apple');
    });

    it('should mark the chosen option as selected once reopened', async() => {
      await openContent(page);
      const options = await page.$$('[role="option"]');
      await options[1].click();
      await page.waitForSelector('[data-ods="combobox-content"][hidden]');

      await openContent(page);

      expect(await getOptionStates(page)).toEqual([
        { highlighted: false, label: 'Banana', selected: 'true' },
      ]);
    });

    it('should not set aria-multiselectable', async() => {
      expect(await page.$eval('[role="listbox"]', (el) => el.getAttribute('aria-multiselectable'))).toBeNull();
    });
  });

  it('should set aria-multiselectable in multiple mode', async() => {
    await gotoStory(page, 'accessibility/multiple');
    await page.waitForSelector('[data-ods="combobox"]');

    expect(await page.$eval('[role="listbox"]', (el) => el.getAttribute('aria-multiselectable'))).toBe('true');
  });

  it('should point aria-activedescendant to the highlighted option of a group', async() => {
    await gotoStory(page, 'accessibility/group');
    await page.waitForSelector('[data-ods="combobox"]');

    await openContent(page);
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.waitForFunction(() => document.querySelectorAll('[role="option"]')[1]?.hasAttribute('data-highlighted'));

    expect(await getActiveDescendantLabel(page)).toBe('Banana');
  });
});
