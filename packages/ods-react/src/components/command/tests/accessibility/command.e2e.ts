import 'jest-puppeteer';
import { type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

async function getFilterAttr(page: Page, attr: string): Promise<string | null> {
  return page.$eval('[data-ods="command-filter"]', (el, a) => el.getAttribute(a), attr);
}

describe('Command accessibility', () => {
  describe('filter input', () => {
    beforeEach(async() => {
      await gotoStory(page, 'accessibility/default');
      await page.waitForSelector('[data-ods="command-content"]');
      await page.waitForSelector('[data-ods="command-option"][aria-selected="true"]');
    });

    it('should have role="combobox"', async() => {
      expect(await getFilterAttr(page, 'role')).toBe('combobox');
    });

    it('should have aria-expanded="true"', async() => {
      expect(await getFilterAttr(page, 'aria-expanded')).toBe('true');
    });

    it('should have aria-controls pointing to the listbox', async() => {
      const controlsId = await getFilterAttr(page, 'aria-controls');

      expect(controlsId).not.toBeNull();

      const role = await page.evaluate((id) => document.getElementById(id!)?.getAttribute('role') ?? null, controlsId);

      expect(role).toBe('listbox');
    });

    it('should have aria-activedescendant pointing to the highlighted option', async() => {
      const activeDescendantId = await getFilterAttr(page, 'aria-activedescendant');

      expect(activeDescendantId).not.toBeNull();

      const ariaSelected = await page.$eval(`#${activeDescendantId}`, (el) => el.getAttribute('aria-selected'));

      expect(ariaSelected).toBe('true');
    });

    it('should update aria-activedescendant when the highlight changes', async() => {
      await page.click('[data-ods="command-filter"]');
      await page.keyboard.press('Home');
      await page.waitForSelector('#opt-new-file[aria-selected="true"]');

      const before = await getFilterAttr(page, 'aria-activedescendant');

      await page.keyboard.press('ArrowDown');

      const after = await getFilterAttr(page, 'aria-activedescendant');

      expect(after).not.toBe(before);
      expect(after).not.toBeNull();

      const ariaSelected = await page.$eval(`#${after}`, (el) => el.getAttribute('aria-selected'));

      expect(ariaSelected).toBe('true');
    });

    it('should clear aria-activedescendant when all options are filtered out', async() => {
      await page.click('[data-ods="command-filter"]');
      await page.type('[data-ods="command-filter"]', 'zzz');
      await page.waitForFunction(() => !document.querySelector('[data-ods="command-option"]'));

      expect(await getFilterAttr(page, 'aria-activedescendant')).toBeNull();
    });
  });

  describe('listbox', () => {
    beforeEach(async() => {
      await gotoStory(page, 'accessibility/default');
      await page.waitForSelector('[data-ods="command-content"]');
    });

    it('should have role="listbox" on the command list', async() => {
      const role = await page.$eval('[data-ods="command-list"]', (el) => el.getAttribute('role'));

      expect(role).toBe('listbox');
    });
  });

  describe('options', () => {
    beforeEach(async() => {
      await gotoStory(page, 'accessibility/default');
      await page.waitForSelector('[data-ods="command-content"]');
      await page.waitForSelector('[data-ods="command-option"][aria-selected="true"]');
    });

    it('should have role="option" on every option', async() => {
      const roles = await page.$$eval('[data-ods="command-option"]', (els) =>
        els.map((el) => el.getAttribute('role')),
      );

      expect(roles.length).toBeGreaterThan(0);
      expect(roles.every((r) => r === 'option')).toBe(true);
    });

    it('should mark exactly one option as aria-selected="true"', async() => {
      const selectedOptions = await page.$$('[data-ods="command-option"][aria-selected="true"]');

      expect(selectedOptions.length).toBe(1);
    });

    it('should move aria-selected to the next option after ArrowDown', async() => {
      const before = await page.$eval(
        '[data-ods="command-option"][aria-selected="true"]',
        (el) => el.id,
      );

      await page.click('[data-ods="command-filter"]');
      await page.keyboard.press('ArrowDown');

      const after = await page.$eval(
        '[data-ods="command-option"][aria-selected="true"]',
        (el) => el.id,
      );

      expect(after).not.toBe(before);
    });

    it('should keep aria-selected in sync with aria-activedescendant', async() => {
      await page.click('[data-ods="command-filter"]');
      await page.keyboard.press('ArrowDown');

      const activeDescendantId = await getFilterAttr(page, 'aria-activedescendant');
      const selectedId = await page.$eval(
        '[data-ods="command-option"][aria-selected="true"]',
        (el) => el.id,
      );

      expect(activeDescendantId).toBe(selectedId);
    });
  });

  describe('groups', () => {
    beforeEach(async() => {
      await gotoStory(page, 'accessibility/with-group');
      await page.waitForSelector('[data-ods="command-content"]');
    });

    it('should have role="group" on the inner group container', async() => {
      const roles = await page.$$eval('[data-ods="command-group"] [role]', (els) =>
        els.map((el) => el.getAttribute('role')),
      );

      expect(roles).toContain('group');
    });

    it('should expose the heading text via aria-label on the group', async() => {
      const labels = await page.$$eval('[role="group"]', (els) =>
        els.map((el) => el.getAttribute('aria-label')),
      );

      expect(labels).toContain('File');
      expect(labels).toContain('Edit');
    });

    it('should hide the visual heading from assistive technology', async() => {
      const hidden = await page.$$eval('[data-ods="command-group"] [aria-hidden="true"]', (els) =>
        els.map((el) => el.textContent?.trim()),
      );

      expect(hidden).toContain('File');
      expect(hidden).toContain('Edit');
    });
  });
});
