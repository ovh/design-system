import 'jest-puppeteer';
import { type Page } from 'puppeteer';
import { gotoStory, gotoStoryAndCollectDeprecations } from '../../../../helpers/test';

async function getFill(page: Page, testId: string): Promise<string> {
  const spinner = await page.waitForSelector(`[data-testid="${testId}"]`);

  return spinner!.evaluate((el: Element) => getComputedStyle(el).fill);
}

async function resolveColor(page: Page, color: string): Promise<string> {
  return page.evaluate((value: string) => {
    const probe = document.createElement('span');
    probe.style.color = value;
    document.body.appendChild(probe);
    const resolved = getComputedStyle(probe).color;
    probe.remove();
    return resolved;
  }, color);
}

describe('Spinner rendering', () => {
  it('should render the web component', async() => {
    const warnings = await gotoStoryAndCollectDeprecations(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="spinner"]')).not.toBeNull();
    expect(warnings).toEqual([]);
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const spinner = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await spinner?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });

  describe('sizes', () => {
    it('should respect increase order (xs < sm < md < lg)', async() => {
      await gotoStory(page, 'rendering/sizes');

      const xsSpinner = await page.waitForSelector('[data-testid="size-xs"]');
      const smSpinner = await page.waitForSelector('[data-testid="size-sm"]');
      const mdSpinner = await page.waitForSelector('[data-testid="size-md"]');
      const lgSpinner = await page.waitForSelector('[data-testid="size-lg"]');

      const xsHeight = await xsSpinner!.evaluate((el: Element) => el.getBoundingClientRect().height);
      const smHeight = await smSpinner!.evaluate((el: Element) => el.getBoundingClientRect().height);
      const mdHeight = await mdSpinner!.evaluate((el: Element) => el.getBoundingClientRect().height);
      const lgHeight = await lgSpinner!.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(xsHeight).toBeLessThan(smHeight);
      expect(xsHeight).toBeLessThan(mdHeight);
      expect(xsHeight).toBeLessThan(lgHeight);
      expect(smHeight).toBeLessThan(mdHeight);
      expect(smHeight).toBeLessThan(lgHeight);
      expect(smHeight).toBeGreaterThan(xsHeight);
      expect(mdHeight).toBeLessThan(lgHeight);
      expect(mdHeight).toBeGreaterThan(xsHeight);
      expect(mdHeight).toBeGreaterThan(smHeight);
      expect(lgHeight).toBeGreaterThan(xsHeight);
      expect(lgHeight).toBeGreaterThan(smHeight);
      expect(lgHeight).toBeGreaterThan(mdHeight);
    });
  });

  describe('color', () => {
    it('should fill with primary by default and with the --ods-spinner-color custom property, without any warning', async() => {
      const warnings = await gotoStoryAndCollectDeprecations(page, 'rendering/color');

      expect(await getFill(page, 'default')).toBe(await resolveColor(page, 'var(--ods-theme-primary-color)'));
      expect(await getFill(page, 'current-color')).toBe('rgb(255, 0, 0)');
      expect(await getFill(page, 'custom-property')).toBe('rgb(0, 128, 0)');
      expect(await getFill(page, 'parent-custom-property')).toBe('rgb(0, 0, 255)');
      expect(warnings).toEqual([]);
    });
  });
});
