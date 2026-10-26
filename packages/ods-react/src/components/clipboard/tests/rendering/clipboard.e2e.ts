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
});
