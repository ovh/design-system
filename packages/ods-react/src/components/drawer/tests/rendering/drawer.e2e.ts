import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Drawer rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="drawer-body"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="drawer-content"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="drawer-trigger"]')).not.toBeNull();
  });

  it('should render a backdrop when the backdrop prop is set', async() => {
    await gotoStory(page, 'rendering/with-backdrop');
    await page.waitForSelector('[data-ods="drawer-content"]');

    expect(await page.$('[data-scope="dialog"][data-part="backdrop"]')).not.toBeNull();
  });

  it('should not render a backdrop by default', async() => {
    await gotoStory(page, 'rendering/without-backdrop');
    await page.waitForSelector('[data-ods="drawer-content"]');

    expect(await page.$('[data-scope="dialog"][data-part="backdrop"]')).toBeNull();
  });

  it('should not intercept pointer events while closed', async() => {
    await gotoStory(page, 'rendering/closed-inert');
    await page.waitForSelector('[data-ods="drawer-content"]');

    const probe = await page.evaluate(() => {
      const contents = document.querySelectorAll('[data-ods="drawer-content"][data-state="closed"]');
      const target = document.querySelector('[data-testid="under-drawer"]') as HTMLElement;
      const rect = target.getBoundingClientRect();
      const hit = document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2);
      return { closedCount: contents.length, isHit: hit === target };
    });

    // All three non-modal variants are mounted closed over the button area.
    expect(probe.closedCount).toBe(3);
    expect(probe.isHit).toBe(true);
  });
});
