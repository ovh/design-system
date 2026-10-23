import 'jest-puppeteer';
import { getStatusStyle, gotoStory, gotoStoryAndCollectDeprecations } from '../../../../helpers/test';
import { BADGE_STATUSES } from '../../src/constants/badge-status';

describe('Badge rendering', () => {
  it('should render the web component', async() => {
    const warnings = await gotoStoryAndCollectDeprecations(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="badge"]')).not.toBeNull();
    expect(warnings).toEqual([]);
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const odsBadge = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await odsBadge?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });

  describe('sizes', () => {
    it('should respect increase order (sm < md < lg)', async() => {
      await gotoStory(page, 'rendering/sizes');

      const smBadge = await page.waitForSelector('[data-testid="size-sm"]');
      const mdBadge = await page.waitForSelector('[data-testid="size-md"]');
      const lgBadge = await page.waitForSelector('[data-testid="size-lg"]');

      const smHeight = await smBadge!.evaluate((el: Element) => el.getBoundingClientRect().height);
      const mdHeight = await mdBadge!.evaluate((el: Element) => el.getBoundingClientRect().height);
      const lgHeight = await lgBadge!.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(smHeight).toBeLessThan(mdHeight);
      expect(smHeight).toBeLessThan(lgHeight);
      expect(mdHeight).toBeLessThan(lgHeight);
      expect(mdHeight).toBeGreaterThan(smHeight);
      expect(lgHeight).toBeGreaterThan(smHeight);
      expect(lgHeight).toBeGreaterThan(mdHeight);
    });

    it('should add the border to the 19.7.3 heights of sm and lg', async() => {
      await gotoStory(page, 'rendering/sizes');

      const heights = await Promise.all(['sm', 'md', 'lg'].map(async(size) => {
        const badge = await page.waitForSelector(`[data-testid="size-${size}"]`);
        return badge!.evaluate((el: Element) => el.getBoundingClientRect().height);
      }));

      expect(heights).toEqual([22, 24, 30]);
    });
  });

  describe('statuses', () => {
    it('should style every status, unlike an unknown status, without any warning', async() => {
      const warnings = await gotoStoryAndCollectDeprecations(page, 'rendering/statuses');

      const unknownStyle = await getStatusStyle(page, 'status-none');

      const styles = await Promise.all(BADGE_STATUSES.map((status) => getStatusStyle(page, `status-${status}`)));
      const unstyledStatuses = BADGE_STATUSES.filter((_, index) => styles[index] === unknownStyle);

      expect(unstyledStatuses).toEqual([]);
      expect(warnings).toEqual([]);
    });
  });

  describe('deprecated color', () => {
    it('should render color primary as status accent, let status win and warn once', async() => {
      const warnings = await gotoStoryAndCollectDeprecations(page, 'rendering/deprecated-color');

      expect(await getStatusStyle(page, 'color-primary')).toBe(await getStatusStyle(page, 'status-accent'));
      expect(await getStatusStyle(page, 'color-critical-status-success')).toBe(await getStatusStyle(page, 'status-success'));
      expect(warnings).toEqual([
        '[DEPRECATED]: The color prop of Badge is deprecated and will be removed in v21, use the status prop instead.',
      ]);
    });
  });
});
