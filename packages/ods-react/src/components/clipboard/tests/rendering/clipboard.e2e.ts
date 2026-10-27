import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Clipboard rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render-trigger"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="clipboard"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="clipboard-control"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="clipboard-trigger"]')).not.toBeNull();
  });

  it('should keep the trigger as far from the end as from the top and bottom', async() => {
    await gotoStory(page, 'rendering/render');
    await page.waitForSelector('[data-testid="render-trigger"]');

    const gap = await page.evaluate(() => {
      const field = document.querySelector('[data-ods="clipboard"]')!.getBoundingClientRect();
      const trigger = document.querySelector('[data-testid="render-trigger"]')!.getBoundingClientRect();

      return {
        bottom: field.bottom - trigger.bottom,
        end: field.right - trigger.right,
        top: trigger.top - field.top,
      };
    });

    expect(gap.end).toBe(gap.top);
    expect(gap.end).toBe(gap.bottom);
  });

  it('should take the form field width with a control, and the width of its trigger without one', async() => {
    await gotoStory(page, 'rendering/width');
    await page.waitForSelector('[data-testid="width-trigger-only-trigger"]');

    const widths = await page.evaluate(() => Object.fromEntries(['width-control', 'width-trigger-only', 'width-trigger-only-trigger']
      .map((testId) => [testId, document.querySelector(`[data-testid="${testId}"]`)!.getBoundingClientRect().width])));

    expect(widths['width-control']).toBe(280);
    expect(widths['width-trigger-only']).toBeLessThan(280);
    expect(widths['width-trigger-only']).toBeGreaterThanOrEqual(widths['width-trigger-only-trigger']);
  });
});
