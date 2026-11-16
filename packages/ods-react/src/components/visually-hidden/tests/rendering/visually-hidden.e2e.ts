import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('VisuallyHidden rendering', () => {
  beforeEach(async() => {
    await gotoStory(page, 'rendering/render');
    await page.waitForSelector('[data-testid="render"]');
  });

  it('should take no visible space', async() => {
    const box = await page.$eval('[data-testid="render"]', (el) => {
      const { height, width } = el.getBoundingClientRect();
      return { clipPath: getComputedStyle(el).clipPath, height, width };
    });

    expect(box).toEqual({ clipPath: 'inset(50%)', height: 1, width: 1 });
  });

  it('should keep its text in the accessibility tree', async() => {
    const snapshot = await page.accessibility.snapshot({ interestingOnly: false });

    expect(JSON.stringify(snapshot)).toContain('Hidden text');
  });
});
