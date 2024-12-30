import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-tooltip navigation', () => {
  const triggerId = 'trigger-id';
  const notTriggerId = 'not-trigger-id';
  let page: E2EPage;
  let el: E2EElement;
  let trigger: E2EElement;
  let notTrigger: E2EElement;

  async function isTooltipVisible(): Promise<boolean> {
    return page.evaluate(() => {
      return document.querySelector<HTMLElement>('ods-tooltip')?.style.display === 'block';
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-tooltip');
    trigger = await page.find(`#${triggerId}`);
    notTrigger = await page.find(`#${notTriggerId}`);
  }

  beforeEach(async() => {
    await setup(`
      <button id="${triggerId}">
        Trigger
      </button>
      <ods-tooltip trigger-id="${triggerId}">
        Tooltip content
      </ods-tooltip>
      <button id="${notTriggerId}">
        Not a trigger
      </button>
    `);
  });

  it('should be visible on trigger focus using tabulation', async() => {
    expect(await isTooltipVisible()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isTooltipVisible()).toBe(true);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isTooltipVisible()).toBe(false);
  });

  it('should be visible on trigger mouse over', async() => {
    expect(await isTooltipVisible()).toBe(false);

    await trigger.hover();
    await page.waitForChanges();

    expect(await isTooltipVisible()).toBe(true);

    await notTrigger.hover();
    await page.waitForChanges();
    await new Promise((resolve) => setTimeout(resolve, 100)); // wait the mouse leave

    expect(await isTooltipVisible()).toBe(false);
  });

  it('should be visible on tooltip mouse over', async() => {
    expect(await isTooltipVisible()).toBe(false);

    await trigger.hover();
    await page.waitForChanges();

    expect(await isTooltipVisible()).toBe(true);

    await el.hover();
    await page.waitForChanges();

    expect(await isTooltipVisible()).toBe(true);

    await notTrigger.hover();
    await page.waitForChanges();
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(await isTooltipVisible()).toBe(false);
  });
});
