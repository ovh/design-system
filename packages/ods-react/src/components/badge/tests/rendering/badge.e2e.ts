import 'jest-puppeteer';
import { type Page } from 'puppeteer';
import { getStatusStyle, gotoStory, gotoStoryAndCollectDeprecations } from '../../../../helpers/test';
import { BADGE_EMPHASES, BADGE_EMPHASIS } from '../../src/constants/badge-emphasis';
import { BADGE_STATUS, BADGE_STATUSES } from '../../src/constants/badge-status';

// Statuses without a high or low value yet: they keep their medium rendering in both.
const PROMOTIONAL_STATUSES = [BADGE_STATUS.alpha, BADGE_STATUS.beta, BADGE_STATUS.new, BADGE_STATUS.promotion];
const FILLED_STATUSES = [BADGE_STATUS.critical, BADGE_STATUS.information, BADGE_STATUS.neutral, BADGE_STATUS.success, BADGE_STATUS.warning];
const TEXT_ONLY_STATUSES = [BADGE_STATUS.accent, ...FILLED_STATUSES];
const PAGE_BACKGROUND = 'rgb(255, 255, 255)';
const TRANSPARENT = 'rgba(0, 0, 0, 0)';

type Colors = { background: string, text: string };

async function getColors(page: Page, testId: string): Promise<Colors> {
  const element = await page.waitForSelector(`[data-testid="${testId}"]`);

  return element!.evaluate((el: Element) => {
    const style = getComputedStyle(el);
    return { background: style.backgroundColor, text: style.color };
  });
}

function getLuminance(color: string): number {
  const [r, g, b] = color.match(/\d+(\.\d+)?/g)!.slice(0, 3).map((channel) => {
    const value = Number(channel) / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function getContrastRatio({ background, text }: Colors): number {
  // A transparent badge is read on the page background.
  const [lighter, darker] = [getLuminance(background === TRANSPARENT ? PAGE_BACKGROUND : background), getLuminance(text)].sort((a, b) => b - a);

  return (lighter + 0.05) / (darker + 0.05);
}

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

  describe('emphases', () => {
    beforeAll(async() => {
      await gotoStory(page, 'rendering/emphases');
    });

    it('should render medium by default, for every status, without any warning', async() => {
      const warnings = await gotoStoryAndCollectDeprecations(page, 'rendering/emphases');

      const defaultStyles = await Promise.all(BADGE_STATUSES.map((status) => getStatusStyle(page, `${status}-default`)));
      const mediumStyles = await Promise.all(BADGE_STATUSES.map((status) => getStatusStyle(page, `${status}-${BADGE_EMPHASIS.medium}`)));

      expect(defaultStyles).toEqual(mediumStyles);
      expect(warnings).toEqual([]);
    });

    it('should fill the background in high, unlike medium', async() => {
      const highColors = await Promise.all(FILLED_STATUSES.map((status) => getColors(page, `${status}-${BADGE_EMPHASIS.high}`)));
      const mediumColors = await Promise.all(FILLED_STATUSES.map((status) => getColors(page, `${status}-${BADGE_EMPHASIS.medium}`)));
      // The text may stay the same (warning keeps its dark text on its filled background).
      const unfilledStatuses = FILLED_STATUSES.filter((_, index) => highColors[index].background === mediumColors[index].background);

      expect(unfilledStatuses).toEqual([]);
    });

    it('should render low as colored text only, without background', async() => {
      const lowColors = await Promise.all(TEXT_ONLY_STATUSES.map((status) => getColors(page, `${status}-${BADGE_EMPHASIS.low}`)));
      const mediumColors = await Promise.all(TEXT_ONLY_STATUSES.map((status) => getColors(page, `${status}-${BADGE_EMPHASIS.medium}`)));
      const invalidStatuses = TEXT_ONLY_STATUSES.filter((_, index) => {
        return lowColors[index].background !== TRANSPARENT || lowColors[index].text === mediumColors[index].text;
      });

      expect(invalidStatuses).toEqual([]);
    });

    it('should keep the medium rendering where high or low has no value yet', async() => {
      const pairs = [
        [BADGE_STATUS.accent, BADGE_EMPHASIS.high],
        ...PROMOTIONAL_STATUSES.flatMap((status) => [[status, BADGE_EMPHASIS.high], [status, BADGE_EMPHASIS.low]]),
      ];
      const styles = await Promise.all(pairs.map(([status, emphasis]) => getStatusStyle(page, `${status}-${emphasis}`)));
      const mediumStyles = await Promise.all(pairs.map(([status]) => getStatusStyle(page, `${status}-${BADGE_EMPHASIS.medium}`)));

      expect(styles).toEqual(mediumStyles);
    });

    it('should keep an AA text contrast (4.5:1) for every status and emphasis', async() => {
      const testIds = BADGE_STATUSES.flatMap((status) => BADGE_EMPHASES.map((emphasis) => `${status}-${emphasis}`));
      const ratios = await Promise.all(testIds.map(async(testId) => getContrastRatio(await getColors(page, testId))));
      const failures = testIds
        .map((testId, index) => `${testId}: ${ratios[index].toFixed(2)}`)
        .filter((_, index) => ratios[index] < 4.5);

      expect(failures).toEqual([]);
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
