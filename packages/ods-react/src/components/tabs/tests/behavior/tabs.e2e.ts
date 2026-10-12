import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Tabs behavior', () => {
  describe('keyboard navigation (no initial selection)', () => {
    it('should not set data-focus on tabs when no initial selection', async() => {
      await gotoStory(page, 'behavior/keyboard-navigation');
      await page.waitForSelector('[data-ods="tab-list"]');

      await page.keyboard.press('Tab');

      expect(await page.$eval('[data-ods="tab"]:nth-child(1)', (el) => el.getAttribute('data-focus') || null)).toBeNull();
      expect(await page.$eval('[data-ods="tab"]:nth-child(2)', (el) => el.getAttribute('data-focus') || null)).toBeNull();
      expect(await page.$eval('[data-ods="tab"]:nth-child(3)', (el) => el.getAttribute('data-focus') || null)).toBeNull();

      await page.keyboard.press('ArrowRight');
      expect(await page.$eval('[data-ods="tab"]:nth-child(1)', (el) => el.getAttribute('data-focus') || null)).toBeNull();
      expect(await page.$eval('[data-ods="tab"]:nth-child(2)', (el) => el.getAttribute('data-focus') || null)).toBeNull();
      expect(await page.$eval('[data-ods="tab"]:nth-child(3)', (el) => el.getAttribute('data-focus') || null)).toBeNull();
    });
  });

  describe('controlled mode', () => {
    it('should update value on click and reflect in test id', async() => {
      await gotoStory(page, 'behavior/controlled');
      await page.waitForSelector('[data-testid="controlled-value"]');

      expect(await page.$eval('[data-testid="controlled-value"]', (el) => el.textContent || '')).toBe('tab1');

      await page.click('[data-ods="tab"]:nth-child(2)');
      expect(await page.$eval('[data-testid="controlled-value"]', (el) => el.textContent || '')).toBe('tab2');
    });
  });

  describe('disabled tabs', () => {
    it('should skip disabled tabs on ArrowRight and not activate on click', async() => {
      await gotoStory(page, 'behavior/disabled');
      await page.waitForSelector('[data-ods="tab-list"]');

      await page.keyboard.press('Tab');
      const disabledSecondHasDataFocusInitially = await page.$eval('[data-ods="tab"]:nth-child(2)', (el) => el.getAttribute('data-focus') || null);
      expect(disabledSecondHasDataFocusInitially).toBeNull();

      await page.keyboard.press('ArrowRight');
      const disabledSecondHasDataFocusAfterArrow = await page.$eval('[data-ods="tab"]:nth-child(2)', (el) => el.getAttribute('data-focus') || null);
      expect(disabledSecondHasDataFocusAfterArrow).toBeNull();

      await page.click('[data-ods="tab"]:nth-child(2)');
      const ariaSelectedSecond = await page.$eval('[data-ods="tab"]:nth-child(2)', (el) => el.getAttribute('aria-selected'));
      expect(ariaSelectedSecond).not.toBe('true');
    });
  });

  describe('mount strategy', () => {
    async function hasElement(testId: string): Promise<boolean> {
      return !!(await page.$(`[data-testid="${testId}"]`));
    }

    async function panelCount(): Promise<number> {
      return page.$$eval('[data-ods="tab-content"][role="tabpanel"][aria-labelledby]', (els) => els.length);
    }

    async function selectTab(index: number): Promise<void> {
      await page.click(`[data-ods="tab"]:nth-child(${index})`);
      await page.waitForSelector(`[data-ods="tab"]:nth-child(${index})[aria-selected="true"]`);
    }

    async function typeInTab2AndComeBack(): Promise<string | null> {
      await selectTab(2);
      await page.type('[data-testid="input-2"]', 'kept');
      await selectTab(1);
      await selectTab(2);

      return page.$eval('[data-testid="input-2"]', (el) => (el as HTMLInputElement).value);
    }

    it('should render every panel content with keep', async() => {
      await gotoStory(page, 'behavior/mount-strategy-keep');
      await page.waitForSelector('[data-ods="tab-list"]');

      expect(await panelCount()).toBe(3);
      expect(await hasElement('input-2')).toBe(true);
      expect(await hasElement('content-3')).toBe(true);
      expect(await typeInTab2AndComeBack()).toBe('kept');
    });

    it('should render a panel content once shown and keep it with lazy', async() => {
      await gotoStory(page, 'behavior/mount-strategy-lazy');
      await page.waitForSelector('[data-ods="tab-list"]');

      expect(await panelCount()).toBe(3);
      expect(await hasElement('content-1')).toBe(true);
      expect(await hasElement('input-2')).toBe(false);
      expect(await hasElement('content-3')).toBe(false);

      expect(await typeInTab2AndComeBack()).toBe('kept');

      await selectTab(1);
      expect(await hasElement('input-2')).toBe(true);
      expect(await hasElement('content-3')).toBe(false);
    });

    it('should render a panel content only while shown with unmount', async() => {
      await gotoStory(page, 'behavior/mount-strategy-unmount');
      await page.waitForSelector('[data-ods="tab-list"]');

      expect(await panelCount()).toBe(3);
      expect(await hasElement('input-2')).toBe(false);

      expect(await typeInTab2AndComeBack()).toBe('');

      await selectTab(1);
      expect(await panelCount()).toBe(3);
      expect(await hasElement('input-2')).toBe(false);
      expect(await hasElement('content-1')).toBe(true);
    });

    it('should not render a lazy panel content after an abandoned transition to it', async() => {
      await gotoStory(page, 'behavior/mount-strategy-lazy-abandoned-transition');
      await page.waitForSelector('[data-testid="content-1"]');

      await page.click('[data-testid="transition-to-tab2"]');
      await page.click('[data-testid="back-to-tab1"]');
      await page.click('[data-testid="rerender"]');

      expect(await hasElement('fallback')).toBe(false);
      expect(await hasElement('suspended-content')).toBe(false);
      expect(await hasElement('content-1')).toBe(true);
    });

    it('should let a panel override the root strategy', async() => {
      await gotoStory(page, 'behavior/mount-strategy-override');
      await page.waitForSelector('[data-ods="tab-list"]');

      expect(await hasElement('input-2')).toBe(false);
      expect(await hasElement('content-3')).toBe(true);

      expect(await typeInTab2AndComeBack()).toBe('');

      await selectTab(3);
      expect(await hasElement('input-2')).toBe(false);
      expect(await hasElement('content-1')).toBe(true);
    });
  });
});

