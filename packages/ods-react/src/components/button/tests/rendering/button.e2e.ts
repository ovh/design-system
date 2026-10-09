import 'jest-puppeteer';
import { getStatusStyle, gotoStory, gotoStoryAndCollectDeprecations } from '../../../../helpers/test';
import { BUTTON_STATUSES } from '../../src/constants/button-status';
import { BUTTON_VARIANTS } from '../../src/constants/button-variant';

describe('Button rendering', () => {
  it('should render the web component', async() => {
    const warnings = await gotoStoryAndCollectDeprecations(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="button"]')).not.toBeNull();
    expect(warnings).toEqual([]);
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const button = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await button?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });

  describe('loading', () => {
    it('should disable the button', async() => {
      await gotoStory(page, 'rendering/is-loading');

      const button = await page.waitForSelector('[data-testid="is-loading"]');
      const isDisabled = await button?.evaluate((el: Element) => el.hasAttribute('disabled'));

      expect(isDisabled).toBe(true);
    });
  });

  describe('sizes', () => {
    it('should respect increase order (xs < sm < md)', async() => {
      await gotoStory(page, 'rendering/sizes');

      const xsButton = await page.waitForSelector('[data-testid="size-xs"]');
      const smButton = await page.waitForSelector('[data-testid="size-sm"]');
      const mdButton = await page.waitForSelector('[data-testid="size-md"]');

      const xsHeight = await xsButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
      const smHeight = await smButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
      const mdHeight = await mdButton!.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(xsHeight).toBeLessThan(smHeight);
      expect(xsHeight).toBeLessThan(mdHeight);
      expect(smHeight).toBeLessThan(mdHeight);
      expect(smHeight).toBeGreaterThan(xsHeight);
      expect(mdHeight).toBeGreaterThan(xsHeight);
      expect(mdHeight).toBeGreaterThan(smHeight);
    });
  });

  describe('variants', () => {
    describe('xs', () => {
      it('should each have the exact same default height', async() => {
        await gotoStory(page, 'rendering/variants-xs');

        const defaultButton = await page.waitForSelector('[data-testid="variant-xs-default"]');
        const ghostButton = await page.waitForSelector('[data-testid="variant-xs-ghost"]');
        const outlineButton = await page.waitForSelector('[data-testid="variant-xs-outline"]');

        const defaultHeight = await defaultButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
        const ghostHeight = await ghostButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
        const outlineHeight = await outlineButton!.evaluate((el: Element) => el.getBoundingClientRect().height);

        expect(defaultHeight).toBe(ghostHeight);
        expect(ghostHeight).toBe(outlineHeight);
      });
    });

    describe('sm', () => {
      it('should each have the exact same default height', async() => {
        await gotoStory(page, 'rendering/variants-sm');

        const defaultButton = await page.waitForSelector('[data-testid="variant-sm-default"]');
        const ghostButton = await page.waitForSelector('[data-testid="variant-sm-ghost"]');
        const outlineButton = await page.waitForSelector('[data-testid="variant-sm-outline"]');

        const defaultHeight = await defaultButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
        const ghostHeight = await ghostButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
        const outlineHeight = await outlineButton!.evaluate((el: Element) => el.getBoundingClientRect().height);

        expect(defaultHeight).toBe(ghostHeight);
        expect(ghostHeight).toBe(outlineHeight);
      });
    });

    describe('md', () => {
      it('should each have the exact same default height', async() => {
        await gotoStory(page, 'rendering/variants-md');

        const defaultButton = await page.waitForSelector('[data-testid="variant-md-default"]');
        const ghostButton = await page.waitForSelector('[data-testid="variant-md-ghost"]');
        const outlineButton = await page.waitForSelector('[data-testid="variant-md-outline"]');

        const defaultHeight = await defaultButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
        const ghostHeight = await ghostButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
        const outlineHeight = await outlineButton!.evaluate((el: Element) => el.getBoundingClientRect().height);

        expect(defaultHeight).toBe(ghostHeight);
        expect(ghostHeight).toBe(outlineHeight);
      });
    });
  });

  describe('statuses', () => {
    it('should style every status in every variant, unlike an unknown status, without any warning', async() => {
      const warnings = await gotoStoryAndCollectDeprecations(page, 'rendering/statuses');

      const unstyled = await Promise.all(BUTTON_VARIANTS.map(async(variant) => {
        const unknownStyle = await getStatusStyle(page, `status-none-${variant}`);
        const styles = await Promise.all(BUTTON_STATUSES.map((status) => getStatusStyle(page, `status-${status}-${variant}`)));

        return BUTTON_STATUSES.filter((_, index) => styles[index] === unknownStyle).map((status) => `${variant} ${status}`);
      }));

      expect(unstyled.flat()).toEqual([]);
      expect(warnings).toEqual([]);
    });
  });

  describe('deprecated color', () => {
    it('should render color primary as status brand, let status win and warn once', async() => {
      const warnings = await gotoStoryAndCollectDeprecations(page, 'rendering/deprecated-color');

      expect(await getStatusStyle(page, 'color-primary')).toBe(await getStatusStyle(page, 'status-brand'));
      expect(await getStatusStyle(page, 'color-critical-status-neutral')).toBe(await getStatusStyle(page, 'status-neutral'));
      expect(warnings).toEqual([
        '[DEPRECATED]: The color prop of Button is deprecated and will be removed in v21, use the status prop instead (information, success and warning have no status equivalent).',
      ]);
    });

    it('should keep styling information, success and warning through color', async() => {
      await gotoStory(page, 'rendering/deprecated-color');

      const unknownStyle = await getStatusStyle(page, 'status-none');

      const colors = ['information', 'success', 'warning'];
      const styles = await Promise.all(colors.map((color) => getStatusStyle(page, `color-${color}`)));

      expect(colors.filter((_, index) => styles[index] === unknownStyle)).toEqual([]);
    });
  });
});
