import 'jest-puppeteer';
import { type ElementHandle, type Page } from 'puppeteer';
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

async function waitForContentOpen(page: Page, testId: string): Promise<void> {
  await page.waitForFunction((id) => {
    const content = document.querySelector(`[data-testid="${id}"]`);

    return !!content &&
      content.getAttribute('data-state') === 'open' &&
      content.getAnimations().every((animation) => animation.playState !== 'running');
  }, {}, testId);
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

type ShadowHost = HTMLElement & { drawerShadowRoot: ShadowRoot };

// The shadow root of the shadow root stories, reached through the host as a closed one is not.
async function getShadowElement(page: Page, testId: string): Promise<ElementHandle<Element>> {
  return (await page.evaluateHandle((id) => {
    return (document.querySelector('[data-testid="host"]') as ShadowHost).drawerShadowRoot.querySelector(`[data-testid="${id}"]`);
  }, testId)) as ElementHandle<Element>;
}

async function waitForShadowFocus(page: Page, testId: string): Promise<void> {
  await page.waitForFunction((id) => {
    return (document.querySelector('[data-testid="host"]') as ShadowHost | null)?.drawerShadowRoot?.activeElement?.getAttribute('data-testid') === id;
  }, {}, testId);
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
      // Leaves time for a (smooth) scroll to happen, the same wheel scrolls the page without backdrop.
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

    it('should return the focus to the trigger when the content has a custom id', async() => {
      await gotoStory(page, 'behavior/no-backdrop-custom-content-id');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);

      expect(await page.$eval(CONTENT, (el) => el.id)).toBe('custom-content-id');
      await page.focus('[data-testid="second"]');

      await page.keyboard.press('Escape');
      await waitForDrawerState(page, 'closed');

      await waitForFocus(page, 'trigger');
      expect(await isFocusInDrawer(page)).toBe(false);
    });

    it('should return the focus to the trigger when it has a custom id', async() => {
      await gotoStory(page, 'behavior/no-backdrop-custom-trigger-id');
      await waitForDrawerState(page, 'open');

      expect(await page.$eval('[data-testid="trigger"]', (el) => el.id)).toBe('custom-trigger-id');
      await page.focus('[data-testid="second"]');

      await page.keyboard.press('Escape');
      await waitForDrawerState(page, 'closed');

      await waitForFocus(page, 'trigger');
      expect(await isFocusInDrawer(page)).toBe(false);
    });

    it('should handle a custom content id when open on mount', async() => {
      await gotoStory(page, 'behavior/no-backdrop-open-custom-content-id');
      await waitForDrawerState(page, 'open');

      expect(await page.$eval(CONTENT, (el) => el.id)).toBe('custom-content-id');
      await waitForFocus(page, 'first');

      await page.keyboard.press('Escape');
      await waitForDrawerState(page, 'closed');

      await waitForFocus(page, 'trigger');
      expect(await isFocusInDrawer(page)).toBe(false);
    });

    it('should return the focus to the trigger when the content id changed while open', async() => {
      await gotoStory(page, 'behavior/no-backdrop-changing-content-id');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);

      await page.click('[data-testid="next-item"]');
      await page.waitForFunction((selector) => document.querySelector(selector)?.id === 'details-2', {}, CONTENT);

      // Interacting inside the drawer under its new id, then losing the focus there, is not an outside interaction.
      await page.click('[data-testid="self-removing"]');
      await page.waitForFunction(() => !document.querySelector('[data-testid="self-removing"]'));
      expect(await isFocusOnBody(page)).toBe(true);

      await page.keyboard.press('Escape');
      await waitForDrawerState(page, 'closed');

      await waitForFocus(page, 'trigger');
      expect(await isFocusInDrawer(page)).toBe(false);
    });

    it('should return the focus to the valued trigger the drawer was opened from', async() => {
      await gotoStory(page, 'behavior/no-backdrop-valued-triggers');
      await page.waitForSelector('[data-testid="trigger-3"]');

      await page.click('[data-testid="trigger-3"]');
      await waitForDrawerState(page, 'open');
      await waitForFocus(page, 'first');

      await page.keyboard.press('Escape');
      await waitForDrawerState(page, 'closed');

      await waitForFocus(page, 'trigger-3');
      expect(await getFocusedTestId(page)).toBe('trigger-3');
    });

    it('should return the focus to the valued trigger the drawer was opened from when the click did not focus it', async() => {
      await gotoStory(page, 'behavior/no-backdrop-valued-triggers');
      await page.waitForSelector('[data-testid="trigger-2"]');

      // A scripted click does not focus the button, as in WebKit: the opener is body.
      await page.$eval('[data-testid="trigger-2"]', (el) => (el as HTMLElement).click());
      await waitForDrawerState(page, 'open');
      await waitForFocus(page, 'first');

      await page.keyboard.press('Escape');
      await waitForDrawerState(page, 'closed');

      await waitForFocus(page, 'trigger-2');
      expect(await getFocusedTestId(page)).toBe('trigger-2');
    });

    it('should scroll the trigger into view when giving it the focus back', async() => {
      await gotoStory(page, 'behavior/no-backdrop');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);

      await page.evaluate(() => window.scrollTo(0, 2000));
      await page.waitForFunction(() => window.scrollY > 0);

      await page.keyboard.press('Escape');
      await waitForDrawerState(page, 'closed');
      await waitForFocus(page, 'trigger');

      expect(await page.$eval('[data-testid="trigger"]', (el) => {
        const { bottom, top } = el.getBoundingClientRect();

        return top >= 0 && bottom <= window.innerHeight;
      })).toBe(true);
    });

    it('should give the focus to the trigger when a layer opened from the drawer gives it back to the closed drawer', async() => {
      await gotoStory(page, 'behavior/no-backdrop-nested-modal');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);

      await page.click('[data-testid="close"]');
      await page.waitForSelector('[data-testid="discard"]', { visible: true });
      await page.click('[data-testid="discard"]');
      await waitForDrawerState(page, 'closed');

      await waitForFocus(page, 'trigger');
      await wait(page, 300);
      expect(await getFocusedTestId(page)).toBe('trigger');
    });

    it('should return the focus to the valued trigger of the last opening when the click did not focus it', async() => {
      await gotoStory(page, 'behavior/no-backdrop-valued-triggers');
      await page.waitForSelector('[data-testid="trigger-1"]');

      await page.click('[data-testid="trigger-1"]');
      await waitForFocus(page, 'first');
      await page.keyboard.press('Escape');
      await waitForFocus(page, 'trigger-1');

      // The focus is still on trigger 1 when trigger 2 opens the drawer without taking it.
      await page.$eval('[data-testid="trigger-2"]', (el) => (el as HTMLElement).click());
      await waitForDrawerState(page, 'open');
      await waitForFocus(page, 'first');

      await page.keyboard.press('Escape');
      await waitForDrawerState(page, 'closed');

      await waitForFocus(page, 'trigger-2');
      expect(await getFocusedTestId(page)).toBe('trigger-2');
    });

    it('should return the focus to the valued trigger the open drawer switched to', async() => {
      await gotoStory(page, 'behavior/no-backdrop-valued-triggers');
      await page.waitForSelector('[data-testid="trigger-1"]');

      await page.click('[data-testid="trigger-1"]');
      await waitForFocus(page, 'first');

      // Another valued trigger switches the open drawer to its value instead of closing it.
      await page.click('[data-testid="trigger-2"]');
      await page.waitForFunction(() => document.querySelector('[data-testid="trigger-2"]')?.hasAttribute('data-current'));
      await page.focus('[data-testid="first"]');

      await page.keyboard.press('Escape');
      await waitForDrawerState(page, 'closed');

      await waitForFocus(page, 'trigger-2');
      expect(await getFocusedTestId(page)).toBe('trigger-2');
    });

    it('should not leave the focus in the closed drawer when a layer gives it back and nothing can take it', async() => {
      await gotoStory(page, 'behavior/no-backdrop-nested-modal-without-trigger');
      await page.waitForSelector('[data-testid="external-no-focus"]');

      await page.click('[data-testid="external-no-focus"]');
      await waitForDrawerState(page, 'open');
      await waitForFocus(page, 'close');

      await page.click('[data-testid="close"]');
      await page.waitForSelector('[data-testid="discard"]', { visible: true });
      await page.click('[data-testid="discard"]');
      await waitForDrawerState(page, 'closed');
      await wait(page, 300);

      expect(await isFocusInDrawer(page)).toBe(false);
    });

    it('should give the focus to the outer trigger when the outer drawer closed before the inner one', async() => {
      await gotoStory(page, 'behavior/no-backdrop-nested-drawers');
      await page.waitForSelector('[data-testid="outer-trigger"]');

      await page.click('[data-testid="outer-trigger"]');
      await waitForContentOpen(page, 'outer-content');
      await page.click('[data-testid="inner-trigger"]');
      await waitForContentOpen(page, 'inner-content');
      await waitForFocus(page, 'close-outer');

      await page.click('[data-testid="close-outer"]');
      await page.waitForFunction(() => document.querySelector('[data-testid="outer-content"]')?.getAttribute('data-state') === 'closed');
      await page.keyboard.press('Escape');
      await page.waitForFunction(() => document.querySelector('[data-testid="inner-content"]')?.getAttribute('data-state') === 'closed');
      await nextFrames(page);

      expect(await getFocusedTestId(page)).toBe('outer-trigger');
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

      await page.keyboard.press('Escape');
      await waitForDrawerState(page, 'closed');

      await waitForFocus(page, 'trigger');
      expect(await getFocusedTestId(page)).toBe('trigger');
    });

    it('should return the focus to the trigger when the focused element was removed after an interaction outside', async() => {
      await gotoStory(page, 'behavior/no-backdrop-removed-focus');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);

      // Outside, then back inside: only the last interaction counts.
      await page.click('[data-testid="page-input"]');
      await waitForFocus(page, 'page-input');
      await page.click('[data-testid="self-removing"]');
      await page.waitForFunction(() => !document.querySelector('[data-testid="self-removing"]'));

      await page.keyboard.press('Escape');
      await waitForDrawerState(page, 'closed');

      await waitForFocus(page, 'trigger');
      expect(await getFocusedTestId(page)).toBe('trigger');
    });

    it('should not move the focus when the focused element was removed then the focus moved to the page', async() => {
      await gotoStory(page, 'behavior/no-backdrop-removed-focus');
      await page.waitForSelector('[data-testid="trigger"]');

      // Closed by code.
      await openWithTrigger(page);
      await page.click('[data-testid="self-removing"]');
      await page.waitForFunction(() => !document.querySelector('[data-testid="self-removing"]'));
      await page.click('[data-testid="page-input"]');
      await waitForFocus(page, 'page-input');

      await page.$eval('[data-testid="close-by-code"]', (el) => (el as HTMLElement).click());
      await waitForDrawerState(page, 'closed');
      await nextFrames(page);
      expect(await getFocusedTestId(page)).toBe('page-input');

      // Closed by Escape typed in the page input.
      await gotoStory(page, 'behavior/no-backdrop-removed-focus');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);
      await page.click('[data-testid="self-removing"]');
      await page.waitForFunction(() => !document.querySelector('[data-testid="self-removing"]'));
      await page.click('[data-testid="page-input"]');
      await waitForFocus(page, 'page-input');

      await page.keyboard.press('Escape');
      await waitForDrawerState(page, 'closed');
      await nextFrames(page);
      expect(await getFocusedTestId(page)).toBe('page-input');
    });

    it('should not move the focus when the focused element was removed then some page text was clicked', async() => {
      await gotoStory(page, 'behavior/no-backdrop-removed-focus');
      await page.waitForSelector('[data-testid="trigger"]');
      await openWithTrigger(page);

      await page.click('[data-testid="self-removing"]');
      await page.waitForFunction(() => !document.querySelector('[data-testid="self-removing"]'));
      await page.click('[data-testid="page-text"]');

      await page.$eval('[data-testid="close-by-code"]', (el) => (el as HTMLElement).click());
      await waitForDrawerState(page, 'closed');
      await nextFrames(page);

      expect(await isFocusOnBody(page)).toBe(true);
    });

    it('should return the focus to the trigger inside a shadow root', async() => {
      await gotoStory(page, 'behavior/no-backdrop-in-shadow-root');
      const trigger = await page.waitForSelector('[data-testid="host"] >>> [data-testid="trigger"]');

      await trigger!.click();
      await page.waitForFunction(() => document.querySelector('[data-testid="host"]')?.shadowRoot?.activeElement?.getAttribute('data-testid') === 'first');

      await page.keyboard.press('Escape');

      await page.waitForFunction(() => document.querySelector('[data-testid="host"]')?.shadowRoot?.activeElement?.getAttribute('data-testid') === 'trigger');
    });

    it('should not take the focus from the page when closed by code inside a shadow root', async() => {
      await gotoStory(page, 'behavior/no-backdrop-in-shadow-root');
      const trigger = await page.waitForSelector('[data-testid="host"] >>> [data-testid="trigger"]');

      await trigger!.click();
      await page.waitForFunction(() => document.querySelector('[data-testid="host"]')?.shadowRoot?.activeElement?.getAttribute('data-testid') === 'first');

      await page.click('[data-testid="page-input"]');
      await waitForFocus(page, 'page-input');

      await page.$eval('[data-testid="host"] >>> [data-testid="close-by-code"]', (el) => (el as HTMLElement).click());
      await page.waitForFunction(() => document.querySelector('[data-testid="host"]')?.shadowRoot?.querySelector('[data-ods="drawer-content"]')?.getAttribute('data-state') === 'closed');
      await nextFrames(page);

      expect(await getFocusedTestId(page)).toBe('page-input');
    });

    it('should return the focus to the trigger inside a closed shadow root when the focused element was removed', async() => {
      await gotoStory(page, 'behavior/no-backdrop-in-closed-shadow-root');
      await page.waitForFunction(() => !!(document.querySelector('[data-testid="host"]') as ShadowHost | null)?.drawerShadowRoot?.querySelector('[data-testid="trigger"]'));

      await (await getShadowElement(page, 'trigger')).click();
      await waitForShadowFocus(page, 'first');
      await (await getShadowElement(page, 'self-removing')).click();
      await page.waitForFunction(() => !(document.querySelector('[data-testid="host"]') as ShadowHost).drawerShadowRoot.querySelector('[data-testid="self-removing"]'));

      await page.keyboard.press('Escape');

      await waitForShadowFocus(page, 'trigger');
    });

    it('should not take the focus from an iframe of the page when closed by code', async() => {
      await gotoStory(page, 'behavior/no-backdrop-outside-iframe');
      const frame = (await (await page.waitForSelector('[data-testid="outside-frame"]'))!.contentFrame())!;

      await page.click('[data-testid="trigger"]');
      await waitForFocus(page, 'first');

      await frame.waitForSelector('[data-testid="frame-input"]');
      await frame.focus('[data-testid="frame-input"]');
      await waitForFocus(page, 'outside-frame');

      await page.$eval('[data-testid="close-by-code"]', (el) => (el as HTMLElement).click());
      await waitForDrawerState(page, 'closed');
      await nextFrames(page);

      expect(await getFocusedTestId(page)).toBe('outside-frame');
      expect(await frame.evaluate(() => document.activeElement?.getAttribute('data-testid') ?? null)).toBe('frame-input');
    });

    it('should not take the focus from the parent page when closed by code in an iframe', async() => {
      await gotoStory(page, 'behavior/no-backdrop-in-iframe');
      const frame = (await (await page.waitForSelector('[data-testid="frame"]'))!.contentFrame())!;

      await frame.waitForSelector('[data-testid="trigger"]');
      await frame.click('[data-testid="trigger"]');
      await frame.waitForFunction(() => document.activeElement?.getAttribute('data-testid') === 'first');

      await page.click('[data-testid="parent-input"]');
      await waitForFocus(page, 'parent-input');
      expect(await frame.evaluate(() => document.hasFocus())).toBe(false);

      await frame.$eval('[data-testid="close-by-code"]', (el) => (el as HTMLElement).click());
      await frame.waitForFunction((selector) => document.querySelector(selector)?.getAttribute('data-state') === 'closed', {}, CONTENT);
      await nextFrames(page);

      expect(await getFocusedTestId(page)).toBe('parent-input');
      expect(await frame.evaluate(() => document.hasFocus())).toBe(false);
    });

    it('should return the focus to the trigger when closed by code in an iframe while the window lost the focus', async() => {
      let otherPage: Page | undefined;
      const session = await page.createCDPSession();

      try {
        // Without focus emulation, the page really loses the focus when another tab comes to front.
        await session.send('Emulation.setFocusEmulationEnabled', { enabled: false });
        otherPage = await browser.newPage();
        await page.bringToFront();
        await gotoStory(page, 'behavior/no-backdrop-in-iframe');
        const frame = (await (await page.waitForSelector('[data-testid="frame"]'))!.contentFrame())!;

        await frame.waitForSelector('[data-testid="trigger"]');
        await frame.click('[data-testid="trigger"]');
        await frame.waitForFunction(() => document.activeElement?.getAttribute('data-testid') === 'first');

        await otherPage.bringToFront();
        await frame.waitForFunction(() => !document.hasFocus());
        expect(await page.evaluate(() => document.hasFocus())).toBe(false);

        await frame.$eval('[data-testid="close-by-code"]', (el) => (el as HTMLElement).click());
        await frame.waitForFunction((selector) => document.querySelector(selector)?.getAttribute('data-state') === 'closed', {}, CONTENT);
        await page.bringToFront();
        await nextFrames(page);

        expect(await frame.evaluate(() => document.activeElement?.getAttribute('data-testid') ?? null)).toBe('trigger');
      } finally {
        await otherPage?.close();
        await session.send('Emulation.setFocusEmulationEnabled', { enabled: true });
        await session.detach();
        await page.bringToFront();
      }
    });

    it('should not take the focus from the parent page when closed by code in an iframe while the window lost the focus', async() => {
      let otherPage: Page | undefined;
      const session = await page.createCDPSession();

      try {
        // Without focus emulation, the page really loses the focus when another tab comes to front.
        await session.send('Emulation.setFocusEmulationEnabled', { enabled: false });
        otherPage = await browser.newPage();
        await page.bringToFront();
        await gotoStory(page, 'behavior/no-backdrop-in-iframe');
        const frame = (await (await page.waitForSelector('[data-testid="frame"]'))!.contentFrame())!;

        await frame.waitForSelector('[data-testid="trigger"]');
        await frame.click('[data-testid="trigger"]');
        await frame.waitForFunction(() => document.activeElement?.getAttribute('data-testid') === 'first');
        await page.click('[data-testid="parent-input"]');
        await waitForFocus(page, 'parent-input');

        await otherPage.bringToFront();
        await page.waitForFunction(() => !document.hasFocus());

        await frame.$eval('[data-testid="close-by-code"]', (el) => (el as HTMLElement).click());
        await frame.waitForFunction((selector) => document.querySelector(selector)?.getAttribute('data-state') === 'closed', {}, CONTENT);
        await page.bringToFront();
        await nextFrames(page);

        expect(await getFocusedTestId(page)).toBe('parent-input');
      } finally {
        await otherPage?.close();
        await session.send('Emulation.setFocusEmulationEnabled', { enabled: true });
        await session.detach();
        await page.bringToFront();
      }
    });

    it('should not take the focus from the top page when closed by code two iframes below', async() => {
      await gotoStory(page, 'behavior/no-backdrop-in-nested-iframe');
      const outerFrame = (await (await page.waitForSelector('[data-testid="outer-frame"]'))!.contentFrame())!;
      const frame = (await (await outerFrame.waitForSelector('[data-testid="frame"]'))!.contentFrame())!;

      await frame.waitForSelector('[data-testid="trigger"]');
      await frame.click('[data-testid="trigger"]');
      await frame.waitForFunction(() => document.activeElement?.getAttribute('data-testid') === 'first');

      await page.click('[data-testid="top-input"]');
      await waitForFocus(page, 'top-input');

      await frame.$eval('[data-testid="close-by-code"]', (el) => (el as HTMLElement).click());
      await frame.waitForFunction((selector) => document.querySelector(selector)?.getAttribute('data-state') === 'closed', {}, CONTENT);
      await nextFrames(page);

      expect(await getFocusedTestId(page)).toBe('top-input');
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
