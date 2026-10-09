import 'jest-puppeteer';
import { type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

const CONTENT = '[data-ods="drawer-content"]';

async function waitForDrawerState(page: Page, state: 'closed' | 'open'): Promise<void> {
  await page.waitForFunction((selector, expected) => {
    const content = document.querySelector(selector);

    return !!content &&
      content.getAttribute('data-state') === expected &&
      content.getAnimations().every((animation) => animation.playState !== 'running');
  }, {}, CONTENT, state);
}

async function waitForFocus(page: Page, testId: string): Promise<void> {
  await page.waitForFunction((id) => document.activeElement?.getAttribute('data-testid') === id, {}, testId);
}

async function getFocusedTestId(page: Page): Promise<string | null> {
  return page.evaluate(() => document.activeElement?.getAttribute('data-testid') ?? null);
}

async function isFocusInDrawer(page: Page): Promise<boolean> {
  return page.evaluate((selector) => !!document.querySelector(selector)?.contains(document.activeElement), CONTENT);
}

async function isFocusOnBody(page: Page): Promise<boolean> {
  return page.evaluate(() => document.activeElement === document.body);
}

async function getClicks(page: Page): Promise<string | null> {
  return page.$eval('[data-testid="background"]', (el) => el.getAttribute('data-clicks'));
}

// Clicks at the center of the background button, whatever is displayed above it.
async function clickBackgroundButtonPosition(page: Page): Promise<void> {
  const box = await (await page.$('[data-testid="background"]'))!.boundingBox();

  await page.mouse.click(box!.x + box!.width / 2, box!.y + box!.height / 2);
}

async function wait(page: Page, ms: number): Promise<void> {
  await page.evaluate((delay) => new Promise((resolve) => setTimeout(resolve, delay)), ms);
}

async function nextFrames(page: Page): Promise<void> {
  await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
}

async function openWithTrigger(page: Page): Promise<void> {
  await page.click('[data-testid="trigger"]');
  await waitForDrawerState(page, 'open');
  await waitForFocus(page, 'first');
}

async function wheelOverPage(page: Page): Promise<void> {
  await page.mouse.move(50, 300);
  await page.mouse.wheel({ deltaY: 800 });
}

describe('Drawer behavior', () => {
  describe('with backdrop', () => {
    it('should focus the first focusable element on open', async() => {
      await gotoStory(page, 'behavior/backdrop');
      await page.waitForSelector('[data-testid="trigger"]');

      await openWithTrigger(page);

      expect(await getFocusedTestId(page)).toBe('first');
    });

    it('should trap the focus inside the drawer', async() => {
      await gotoStory(page, 'behavior/backdrop');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);

      await page.keyboard.press('Tab');
      expect(await getFocusedTestId(page)).toBe('second');

      await page.keyboard.press('Tab');
      expect(await getFocusedTestId(page)).toBe('first');

      await page.keyboard.down('Shift');
      await page.keyboard.press('Tab');
      await page.keyboard.up('Shift');
      expect(await getFocusedTestId(page)).toBe('second');
    });

    it('should close on Escape and return the focus to the trigger', async() => {
      await gotoStory(page, 'behavior/backdrop');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);

      await page.keyboard.press('Escape');
      await waitForDrawerState(page, 'closed');

      await waitForFocus(page, 'trigger');
      expect(await getFocusedTestId(page)).toBe('trigger');
    });

    it('should close on backdrop click by default', async() => {
      await gotoStory(page, 'behavior/backdrop');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);

      await clickBackgroundButtonPosition(page);
      await waitForDrawerState(page, 'closed');

      // The click landed on the backdrop, not on the button below it.
      expect(await getClicks(page)).toBe('0');
      await waitForFocus(page, 'trigger');
    });

    it('should stay open on backdrop click when closeOnInteractOutside is false', async() => {
      await gotoStory(page, 'behavior/backdrop-no-interact-outside');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);

      await clickBackgroundButtonPosition(page);
      await nextFrames(page);

      expect(await page.$eval(CONTENT, (el) => el.getAttribute('data-state'))).toBe('open');
      expect(await getClicks(page)).toBe('0');
    });

    it('should lock the page scroll', async() => {
      await gotoStory(page, 'behavior/backdrop');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);

      expect(await page.evaluate(() => getComputedStyle(document.body).overflow)).toBe('hidden');
      const scrollYBefore = await page.evaluate(() => window.scrollY);

      await wheelOverPage(page);
      // Leaves time to a (smooth) scroll to happen, the same wheel scrolls the page without backdrop.
      await wait(page, 500);

      expect(await page.evaluate(() => window.scrollY)).toBe(scrollYBefore);
      expect(await page.evaluate(() => getComputedStyle(document.body).overflow)).toBe('hidden');
    });

    it('should not close when selecting an option of a portaled Select', async() => {
      await gotoStory(page, 'behavior/backdrop-with-select');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);

      await page.click('[data-ods="select-control"]');
      await page.waitForSelector('[role="option"]', { visible: true });
      await page.click('[role="option"]:nth-child(2)');
      await page.waitForFunction(() => document.querySelector('[data-ods="select-control"]')?.textContent?.includes('Cat'));
      await nextFrames(page);

      expect(await page.$eval(CONTENT, (el) => el.getAttribute('data-state'))).toBe('open');
    });
  });

  describe('without backdrop', () => {
    it('should focus the first focusable element on open', async() => {
      await gotoStory(page, 'behavior/no-backdrop');
      await page.waitForSelector('[data-testid="trigger"]');

      await openWithTrigger(page);

      expect(await getFocusedTestId(page)).toBe('first');
    });

    it('should keep the background interactive', async() => {
      await gotoStory(page, 'behavior/no-backdrop');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);

      await clickBackgroundButtonPosition(page);
      await nextFrames(page);

      expect(await getClicks(page)).toBe('1');
      expect(await page.$eval(CONTENT, (el) => el.getAttribute('data-state'))).toBe('open');
    });

    it('should keep the page scrollable', async() => {
      await gotoStory(page, 'behavior/no-backdrop');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);

      await wheelOverPage(page);

      await page.waitForFunction(() => window.scrollY > 0);
      expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
    });

    it('should close on Escape and return the focus to the trigger', async() => {
      await gotoStory(page, 'behavior/no-backdrop');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);

      await page.keyboard.press('Escape');
      await waitForDrawerState(page, 'closed');

      await waitForFocus(page, 'trigger');
      expect(await isFocusInDrawer(page)).toBe(false);
    });

    it('should return the focus to the external opener of a controlled drawer', async() => {
      await gotoStory(page, 'behavior/no-backdrop-controlled');
      await page.waitForSelector('[data-testid="external"]');

      await page.click('[data-testid="external"]');
      await waitForDrawerState(page, 'open');
      await waitForFocus(page, 'first');

      await page.keyboard.press('Escape');
      await waitForDrawerState(page, 'closed');

      await waitForFocus(page, 'external');
      expect(await getFocusedTestId(page)).toBe('external');
    });

    it('should close on outside click without stealing the focus from the clicked element', async() => {
      await gotoStory(page, 'behavior/no-backdrop-interact-outside');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);

      await page.click('[data-testid="background"]');
      await waitForDrawerState(page, 'closed');
      await nextFrames(page);

      expect(await getClicks(page)).toBe('1');
      expect(await getFocusedTestId(page)).toBe('background');
    });

    it('should close on a click on some page text without moving the focus to the trigger', async() => {
      await gotoStory(page, 'behavior/no-backdrop-interact-outside');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);

      await page.click('[data-testid="page-text"]');
      await waitForDrawerState(page, 'closed');
      await nextFrames(page);

      expect(await isFocusOnBody(page)).toBe(true);
    });

    it('should return the focus to the trigger when the focused element was removed from the drawer', async() => {
      await gotoStory(page, 'behavior/no-backdrop-removed-focus');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);

      await page.click('[data-testid="self-removing"]');
      await page.waitForFunction(() => !document.querySelector('[data-testid="self-removing"]'));
      // Leaves the next tick pass, where a focus loss to nowhere is settled.
      await wait(page, 50);

      await page.keyboard.press('Escape');
      await waitForDrawerState(page, 'closed');

      await waitForFocus(page, 'trigger');
      expect(await getFocusedTestId(page)).toBe('trigger');
    });

    it('should not move the focus when closed by code while the focus is outside', async() => {
      await gotoStory(page, 'behavior/no-backdrop-closed-by-code');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);

      await page.click('[data-testid="page-text"]');
      expect(await isFocusOnBody(page)).toBe(true);

      await page.click('[data-testid="close-by-code"]');
      await waitForDrawerState(page, 'closed');
      await nextFrames(page);

      expect(await isFocusOnBody(page)).toBe(true);
    });

    it('should not leave the focus in the closed content when no element can take it back', async() => {
      await gotoStory(page, 'behavior/no-backdrop-controlled');
      await page.waitForSelector('[data-testid="external-no-focus"]');

      await page.click('[data-testid="external-no-focus"]');
      await waitForDrawerState(page, 'open');
      await waitForFocus(page, 'first');

      await page.keyboard.press('Escape');
      await waitForDrawerState(page, 'closed');

      expect(await isFocusInDrawer(page)).toBe(false);
      expect(await isFocusOnBody(page)).toBe(true);
    });

    it('should give the focus back to each trigger only when the focus is inside the closed drawer', async() => {
      const isOpen = (name: string): Promise<string | null> =>
        page.$eval(`[data-testid="content-${name}"]`, (el) => el.getAttribute('data-state'));

      await gotoStory(page, 'behavior/two-drawers');
      await page.waitForSelector('[data-testid="trigger-a"]');

      await page.click('[data-testid="trigger-a"]');
      await waitForFocus(page, 'first-a');
      await page.click('[data-testid="trigger-b"]');
      await waitForFocus(page, 'first-b');
      expect(await isOpen('a')).toBe('open');

      // Escape closes the last opened drawer (B), which had the focus: it goes back to its trigger.
      await page.keyboard.press('Escape');
      await page.waitForFunction(() => document.querySelector('[data-testid="content-b"]')?.getAttribute('data-state') === 'closed');
      await waitForFocus(page, 'trigger-b');
      expect(await isOpen('a')).toBe('open');

      // Then closing A, which no longer has the focus, does not steal it.
      await page.keyboard.press('Escape');
      await page.waitForFunction(() => document.querySelector('[data-testid="content-a"]')?.getAttribute('data-state') === 'closed');
      await nextFrames(page);

      expect(await getFocusedTestId(page)).toBe('trigger-b');
    });
  });

  describe('closeOnEscape', () => {
    it('should stay open on Escape when closeOnEscape is false', async() => {
      await gotoStory(page, 'behavior/no-escape');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);

      await page.keyboard.press('Escape');
      await nextFrames(page);

      expect(await page.$eval(CONTENT, (el) => el.getAttribute('data-state'))).toBe('open');
    });
  });
});
