import 'jest-puppeteer';
import { type Page } from 'puppeteer';
import { getStatusStyle, getTokenColor, gotoStory, gotoStoryAndCollectDeprecations } from '../../../../helpers/test';
import { BUTTON_EMPHASES } from '../../src/constants/button-emphasis';
import { BUTTON_STATUSES } from '../../src/constants/button-status';

const TRANSPARENT = 'rgba(0, 0, 0, 0)';

type Variant = 'default' | 'ghost' | 'outline';

// The semantic roles (background-color | border-color | color) each v19 variant mixin reads, per status.
// null: transparent.
const VARIANT_ROLES: Record<'brand' | 'critical' | 'neutral', Record<Variant, (string | null)[]>> = {
  brand: {
    default: ['surface-brand', 'border-brand', 'content-on-brand-solid'],
    ghost: [null, null, 'content-brand-minor'],
    outline: ['surface-control', 'border-brand-minor', 'content-brand-minor'],
  },
  critical: {
    default: ['surface-critical', 'border-critical', 'content-on-critical-solid'],
    ghost: [null, null, 'content-critical'],
    outline: ['surface-control', 'border-critical', 'content-critical'],
  },
  neutral: {
    default: ['surface-neutral', 'border-neutral', 'content-on-neutral-solid'],
    ghost: [null, null, 'content-neutral'],
    outline: ['surface-control', 'border-neutral', 'content-neutral'],
  },
};

// The rendering (background-color | border-color | color) of each status, per v19 variant mixin
async function getVariantStyle(page: Page, status: keyof typeof VARIANT_ROLES, variant: Variant): Promise<string> {
  const colors = await Promise.all(VARIANT_ROLES[status][variant].map((role) => {
    return role ? getTokenColor(page, `--ods-semantic-color-${role}`) : TRANSPARENT;
  }));

  return colors.join(' | ');
}

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

    it('should hide its content but the spinner', async() => {
      await gotoStory(page, 'rendering/is-loading');

      const button = await page.waitForSelector('[data-testid="is-loading"]');
      const textFillColor = await button?.evaluate((el: Element) => getComputedStyle(el).webkitTextFillColor);
      const childOpacities = await button?.evaluate((el: Element) => Array.from(el.children, (child) => getComputedStyle(child).opacity));

      expect(textFillColor).toBe('rgba(0, 0, 0, 0)');
      expect(childOpacities).toEqual(['1', '0']);
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

  describe('emphases', () => {
    describe('xs', () => {
      it('should each have the exact same default height', async() => {
        await gotoStory(page, 'rendering/emphases-xs');

        const highButton = await page.waitForSelector('[data-testid="emphasis-xs-high"]');
        const lowButton = await page.waitForSelector('[data-testid="emphasis-xs-low"]');
        const mediumButton = await page.waitForSelector('[data-testid="emphasis-xs-medium"]');

        const highHeight = await highButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
        const lowHeight = await lowButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
        const mediumHeight = await mediumButton!.evaluate((el: Element) => el.getBoundingClientRect().height);

        expect(highHeight).toBe(lowHeight);
        expect(lowHeight).toBe(mediumHeight);
      });
    });

    describe('sm', () => {
      it('should each have the exact same default height', async() => {
        await gotoStory(page, 'rendering/emphases-sm');

        const highButton = await page.waitForSelector('[data-testid="emphasis-sm-high"]');
        const lowButton = await page.waitForSelector('[data-testid="emphasis-sm-low"]');
        const mediumButton = await page.waitForSelector('[data-testid="emphasis-sm-medium"]');

        const highHeight = await highButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
        const lowHeight = await lowButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
        const mediumHeight = await mediumButton!.evaluate((el: Element) => el.getBoundingClientRect().height);

        expect(highHeight).toBe(lowHeight);
        expect(lowHeight).toBe(mediumHeight);
      });
    });

    describe('md', () => {
      it('should each have the exact same default height', async() => {
        await gotoStory(page, 'rendering/emphases-md');

        const highButton = await page.waitForSelector('[data-testid="emphasis-md-high"]');
        const lowButton = await page.waitForSelector('[data-testid="emphasis-md-low"]');
        const mediumButton = await page.waitForSelector('[data-testid="emphasis-md-medium"]');

        const highHeight = await highButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
        const lowHeight = await lowButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
        const mediumHeight = await mediumButton!.evaluate((el: Element) => el.getBoundingClientRect().height);

        expect(highHeight).toBe(lowHeight);
        expect(lowHeight).toBe(mediumHeight);
      });
    });
  });

  describe('statuses', () => {
    it('should style every status in every emphasis, unlike an unknown status, without any warning', async() => {
      const warnings = await gotoStoryAndCollectDeprecations(page, 'rendering/statuses');

      const unstyled = await Promise.all(BUTTON_EMPHASES.map(async(emphasis) => {
        const unknownStyle = await getStatusStyle(page, `status-none-${emphasis}`);
        const styles = await Promise.all(BUTTON_STATUSES.map((status) => getStatusStyle(page, `status-${status}-${emphasis}`)));

        return BUTTON_STATUSES.filter((_, index) => styles[index] === unknownStyle).map((status) => `${emphasis} ${status}`);
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

  describe('emphasis', () => {
    it('should render each emphasis of each status like its v19 variant (high as default, medium as outline, low as ghost), without any warning', async() => {
      const warnings = await gotoStoryAndCollectDeprecations(page, 'rendering/emphases');
      const v19Variants = { high: 'default', low: 'ghost', medium: 'outline' } as const;

      const pairs = BUTTON_STATUSES.flatMap((status) => BUTTON_EMPHASES.map((emphasis) => ({ emphasis, status })));
      const styles = await Promise.all(pairs.map(({ emphasis, status }) => getStatusStyle(page, `emphasis-${status}-${emphasis}`)));
      const variantStyles = await Promise.all(pairs.map(({ emphasis, status }) => getVariantStyle(page, status, v19Variants[emphasis])));

      expect(pairs.map(({ emphasis, status }, index) => `${status} ${emphasis}: ${styles[index]}`))
        .toEqual(pairs.map(({ emphasis, status }, index) => `${status} ${emphasis}: ${variantStyles[index]}`));
      expect(warnings).toEqual([]);
    });

    it('should render as medium (the v19 outline) by default', async() => {
      await gotoStory(page, 'rendering/emphases');

      expect(await getStatusStyle(page, 'emphasis-none')).toBe(await getVariantStyle(page, 'brand', 'outline'));
      expect(await getStatusStyle(page, 'emphasis-none')).toBe(await getStatusStyle(page, 'emphasis-brand-medium'));
    });

    it('should fall back to medium for an unknown emphasis', async() => {
      await gotoStory(page, 'rendering/emphases');

      expect(await getStatusStyle(page, 'emphasis-unknown')).toBe(await getStatusStyle(page, 'emphasis-brand-medium'));
    });
  });
});
