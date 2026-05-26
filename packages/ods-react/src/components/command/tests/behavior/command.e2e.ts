import 'jest-puppeteer';
import { type ElementHandle, type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

async function getOptions(page: Page): Promise<ElementHandle[]> {
  return page.$$('[data-ods="command-option"]');
}

async function getHighlightedOptionId(page: Page): Promise<string | null> {
  const el = await page.$('[data-ods="command-option"][aria-selected="true"]');
  if (!el) {
    return null;
  }
  return el.evaluate((node: Element) => node.id);
}

async function clickFilter(page: Page): Promise<void> {
  await page.click('[data-ods="command-filter"]');
}

async function typeInFilter(page: Page, text: string): Promise<void> {
  await page.click('[data-ods="command-filter"]');
  await page.type('[data-ods="command-filter"]', text);
}

async function getSelectedValue(page: Page): Promise<string> {
  return page.$eval('[data-testid="selected-value"]', (el) => el.textContent || '');
}

describe('Command behaviour', () => {
  describe('keyboard navigation', () => {
    beforeEach(async() => {
      await gotoStory(page, 'behavior/keyboard-navigation');
      await page.waitForSelector('[data-ods="command-content"]');
      await page.waitForSelector('[data-ods="command-option"][aria-selected="true"]');
    });

    it('should highlight the first option by default', async() => {
      expect(await getHighlightedOptionId(page)).toBe('opt-new-file');
    });

    it('should highlight the next option on ArrowDown', async() => {
      await clickFilter(page);
      await page.keyboard.press('ArrowDown');

      expect(await getHighlightedOptionId(page)).toBe('opt-open-file');
    });

    it('should highlight the previous option on ArrowUp', async() => {
      await clickFilter(page);
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowUp');

      expect(await getHighlightedOptionId(page)).toBe('opt-open-file');
    });

    it('should highlight the last option on End', async() => {
      await clickFilter(page);
      await page.keyboard.press('End');

      expect(await getHighlightedOptionId(page)).toBe('opt-save-file');
    });

    it('should highlight the first option on Home', async() => {
      await clickFilter(page);
      await page.keyboard.press('End');
      await page.keyboard.press('Home');

      expect(await getHighlightedOptionId(page)).toBe('opt-new-file');
    });

    it('should not go past the last option with repeated ArrowDown', async() => {
      await clickFilter(page);
      await page.keyboard.press('End');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowDown');

      expect(await getHighlightedOptionId(page)).toBe('opt-save-file');
    });

    it('should not go past the first option with repeated ArrowUp', async() => {
      await clickFilter(page);
      await page.keyboard.press('Home');
      await page.keyboard.press('ArrowUp');
      await page.keyboard.press('ArrowUp');

      expect(await getHighlightedOptionId(page)).toBe('opt-new-file');
    });
  });

  describe('on select', () => {
    beforeEach(async() => {
      await gotoStory(page, 'behavior/on-select');
      await page.waitForSelector('[data-ods="command-content"]');
      await page.waitForSelector('[data-ods="command-option"][aria-selected="true"]');
    });

    it('should call onSelect when an option is clicked', async() => {
      await page.click('#opt-open-file');

      expect(await getSelectedValue(page)).toBe('opt-open-file');
    });

    it('should call onSelect for the highlighted option on Enter', async() => {
      await clickFilter(page);
      await page.keyboard.press('Enter');

      expect(await getSelectedValue(page)).toBe('opt-new-file');
    });

    it('should call onSelect for a navigated option on Enter', async() => {
      await clickFilter(page);
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      expect(await getSelectedValue(page)).toBe('opt-save-file');
    });

    it('should update highlight when hovering over an option', async() => {
      await page.hover('#opt-save-file');

      expect(await getHighlightedOptionId(page)).toBe('opt-save-file');
    });
  });

  describe('filter', () => {
    describe('built-in', () => {
      beforeEach(async() => {
        await gotoStory(page, 'behavior/filter');
        await page.waitForSelector('[data-ods="command-content"]');
      });

      it('should show all options initially', async() => {
        expect((await getOptions(page)).length).toBe(3);
      });

      it('should hide non-matching options when typing in the filter', async() => {
        await typeInFilter(page, 'file');

        expect((await getOptions(page)).length).toBe(2);
      });

      it('should show the empty state when no options match', async() => {
        await typeInFilter(page, 'zzz');

        expect((await getOptions(page)).length).toBe(0);
        expect(await page.waitForSelector('[data-ods="command-empty"]')).not.toBeNull();
      });

      it('should filter case-insensitively', async() => {
        await typeInFilter(page, 'COPY');

        expect((await getOptions(page)).length).toBe(1);
      });

      it('should update the highlighted option to the first visible one after filtering', async() => {
        await typeInFilter(page, 'save');
        await page.waitForSelector('[data-ods="command-option"][aria-selected="true"]');

        expect(await getHighlightedOptionId(page)).toBe('opt-save-file');
      });
    });

    describe('controlled', () => {
      beforeEach(async() => {
        await gotoStory(page, 'behavior/controlled-filter');
        await page.waitForSelector('[data-ods="command-content"]');
      });

      it('should show all options initially', async() => {
        expect((await getOptions(page)).length).toBe(4);
      });

      it('should filter options based on external value', async() => {
        await typeInFilter(page, 'file');

        expect((await getOptions(page)).length).toBe(2);
      });

      it('should show the empty state when no options match the controlled filter', async() => {
        await typeInFilter(page, 'zzz');

        expect((await getOptions(page)).length).toBe(0);
        expect(await page.waitForSelector('[data-ods="command-empty"]')).not.toBeNull();
      });
    });
  });

  describe('disabled option', () => {
    beforeEach(async() => {
      await gotoStory(page, 'behavior/disabled-option');
      await page.waitForSelector('[data-ods="command-content"]');
    });

    it('should not call onSelect when a disabled option is clicked', async() => {
      await page.click('#opt-disabled');

      expect(await getSelectedValue(page)).toBe('');
    });

    it('should not highlight a disabled option via keyboard', async() => {
      await clickFilter(page);
      await page.keyboard.press('End');

      expect(await getHighlightedOptionId(page)).toBe('opt-enabled');
    });

    it('should call onSelect for the enabled option', async() => {
      await page.click('#opt-enabled');

      expect(await getSelectedValue(page)).toBe('enabled');
    });
  });

  describe('open / close', () => {
    beforeEach(async() => {
      await gotoStory(page, 'behavior/open-close');
      await page.waitForSelector('[data-ods="command-trigger"]');
    });

    it('should not render content when closed', async() => {
      const isContentHidden = await page.$eval('[data-ods="command-content"]',
        (el) => getComputedStyle(el).display === 'none',
      );

      expect(isContentHidden).toBe(true);
    });

    it('should open when the trigger is clicked', async() => {
      await page.click('[data-ods="command-trigger"]');

      expect(await page.waitForSelector('[data-ods="command-content"]', { visible: true })).not.toBeNull();
    });

    it('should close on Escape key', async() => {
      await page.click('[data-ods="command-trigger"]');
      await page.waitForSelector('[data-ods="command-content"]', { visible: true });
      await page.click('[data-ods="command-filter"]');

      await page.keyboard.press('Escape');
      await page.waitForSelector('[data-ods="command-content"]', { hidden: true });

      const isContentHidden = await page.$eval('[data-ods="command-content"]',
        (el) => getComputedStyle(el).display === 'none',
      );

      expect(isContentHidden).toBe(true);
    });

    it('should re-open after being closed', async() => {
      await page.click('[data-ods="command-trigger"]');
      await page.waitForSelector('[data-ods="command-content"]', { visible: true });
      await page.keyboard.press('Escape');
      await page.waitForSelector('[data-ods="command-content"]', { hidden: true });

      await page.click('[data-ods="command-trigger"]');

      expect(await page.waitForSelector('[data-ods="command-content"]', { visible: true })).not.toBeNull();
    });

    it('should reset filter when closed and reopened', async() => {
      await page.click('[data-ods="command-trigger"]');
      await page.waitForSelector('[data-ods="command-content"]', { visible: true });
      await typeInFilter(page, 'file');

      await page.keyboard.press('Escape');
      await page.waitForSelector('[data-ods="command-content"]', { hidden: true });

      await page.click('[data-ods="command-trigger"]');
      await page.waitForSelector('[data-ods="command-content"]', { visible: true });

      const filterValue = await page.$eval('[data-ods="command-filter"]', (el) => (el as HTMLInputElement).value);

      expect(filterValue).toBe('');
    });
  });

  describe('groups', () => {
    beforeEach(async() => {
      await gotoStory(page, 'behavior/groups');
      await page.waitForSelector('[data-ods="command-content"]');
      await page.waitForSelector('[data-ods="command-option"][aria-selected="true"]');
    });

    it('should select an option from a group via click', async() => {
      await page.click('#opt-copy');

      expect(await getSelectedValue(page)).toBe('copy');
    });

    it('should navigate across groups with ArrowDown', async() => {
      await clickFilter(page);
      await page.keyboard.press('End');

      expect(await getHighlightedOptionId(page)).toBe('opt-paste');
    });

    it('should select an option from a different group via keyboard', async() => {
      await clickFilter(page);
      await page.keyboard.press('End');
      await page.keyboard.press('Enter');

      expect(await getSelectedValue(page)).toBe('paste');
    });

    it('should filter options within groups', async() => {
      await typeInFilter(page, 'file');

      const options = await getOptions(page);

      expect(options.length).toBe(2);
    });

    it('should hide a group when all its options are filtered out', async() => {
      await typeInFilter(page, 'copy');

      const options = await getOptions(page);

      expect(options.length).toBe(1);
      expect(await getHighlightedOptionId(page)).toBe('opt-copy');
    });
  });
});
