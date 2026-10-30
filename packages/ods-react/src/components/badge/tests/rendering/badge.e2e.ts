import 'jest-puppeteer';
import { type Page } from 'puppeteer';
import { getStatusStyle, getTokenColor, gotoStory } from '../../../../helpers/test';
import { BADGE_EMPHASES, BADGE_EMPHASIS, type BadgeEmphasis } from '../../src/constants/badge-emphasis';
import { BADGE_STATUS, BADGE_STATUSES, type BadgeStatus } from '../../src/constants/badge-status';

// Statuses without a high or low value yet: they keep their medium rendering in both.
const PROMOTIONAL_STATUSES = [BADGE_STATUS.alpha, BADGE_STATUS.beta, BADGE_STATUS.new, BADGE_STATUS.promotion];
const FILLED_STATUSES = [BADGE_STATUS.accent, BADGE_STATUS.critical, BADGE_STATUS.information, BADGE_STATUS.neutral, BADGE_STATUS.success, BADGE_STATUS.warning];
const TEXT_ONLY_STATUSES = FILLED_STATUSES;
const TRANSPARENT = 'rgba(0, 0, 0, 0)';

type Colors = { background: string, border: string, text: string };
type SpecRoles = { high: [string, string, string], medium: [string, string, string], low: string };

// The semantic roles each emphasis reads, as on Message. High and medium are [background, border, text], both lined
// with the subtle status border: high on the subtle status surface, medium on the raised surface. Low has a transparent
// background and border, and the status text.
const SPEC: Partial<Record<BadgeStatus, SpecRoles>> = Object.fromEntries(FILLED_STATUSES.map((status) => [status, {
  high: [`surface-${status}-subtle`, `border-${status}-subtle`, `content-on-${status}`],
  low: `content-${status}`,
  medium: ['surface-raised', `border-${status}-subtle`, `content-${status}`],
}]));

async function getExpectedColors(page: Page, status: BadgeStatus, emphasis: BadgeEmphasis): Promise<Colors> {
  const { high, low, medium } = SPEC[status]!;
  const color = (role: string): Promise<string> => getTokenColor(page, `--ods-semantic-color-${role}`);

  if (emphasis === BADGE_EMPHASIS.low) {
    return { background: TRANSPARENT, border: TRANSPARENT, text: await color(low) };
  }

  const [background, border, text] = await Promise.all((emphasis === BADGE_EMPHASIS.high ? high : medium).map(color));
  return { background, border, text };
}

async function getColors(page: Page, testId: string): Promise<Colors> {
  const element = await page.waitForSelector(`[data-testid="${testId}"]`);

  return element!.evaluate((el: Element) => {
    const style = getComputedStyle(el);
    return { background: style.backgroundColor, border: style.borderTopColor, text: style.color };
  });
}

describe('Badge rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="badge"]')).not.toBeNull();
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

    it('should keep the 19.7.3 heights, border included', async() => {
      await gotoStory(page, 'rendering/sizes');

      const heights = await Promise.all(['sm', 'md', 'lg'].map(async(size) => {
        const badge = await page.waitForSelector(`[data-testid="size-${size}"]`);
        return badge!.evaluate((el: Element) => el.getBoundingClientRect().height);
      }));

      expect(heights).toEqual([20, 24, 28]);
    });
  });

  describe('statuses', () => {
    it('should style every status, unlike an unknown status', async() => {
      await gotoStory(page, 'rendering/statuses');

      const unknownStyle = await getStatusStyle(page, 'status-none');

      const styles = await Promise.all(BADGE_STATUSES.map((status) => getStatusStyle(page, `status-${status}`)));
      const unstyledStatuses = BADGE_STATUSES.filter((_, index) => styles[index] === unknownStyle);

      expect(unstyledStatuses).toEqual([]);
    });
  });

  describe('emphases', () => {
    beforeAll(async() => {
      await gotoStory(page, 'rendering/emphases');
    });

    it('should render medium by default, for every status', async() => {
      await gotoStory(page, 'rendering/emphases');

      const defaultStyles = await Promise.all(BADGE_STATUSES.map((status) => getStatusStyle(page, `${status}-default`)));
      const mediumStyles = await Promise.all(BADGE_STATUSES.map((status) => getStatusStyle(page, `${status}-${BADGE_EMPHASIS.medium}`)));

      expect(defaultStyles).toEqual(mediumStyles);
    });

    it('should fill the background in high, unlike medium', async() => {
      const highColors = await Promise.all(FILLED_STATUSES.map((status) => getColors(page, `${status}-${BADGE_EMPHASIS.high}`)));
      const mediumColors = await Promise.all(FILLED_STATUSES.map((status) => getColors(page, `${status}-${BADGE_EMPHASIS.medium}`)));
      // The text may stay the same (warning keeps its dark text on its filled background).
      const unfilledStatuses = FILLED_STATUSES.filter((_, index) => highColors[index].background === mediumColors[index].background);

      expect(unfilledStatuses).toEqual([]);
    });

    it('should render low as text only, without background nor border', async() => {
      const lowColors = await Promise.all(TEXT_ONLY_STATUSES.map((status) => getColors(page, `${status}-${BADGE_EMPHASIS.low}`)));
      const invalidStatuses = TEXT_ONLY_STATUSES.filter((_, index) => lowColors[index].background !== TRANSPARENT || lowColors[index].border !== TRANSPARENT);

      expect(invalidStatuses).toEqual([]);
    });

    it('should apply the spec roles to the background, border and text of every status and emphasis', async() => {
      const pairs = FILLED_STATUSES.flatMap((status) => BADGE_EMPHASES.map((emphasis) => [status, emphasis] as const));
      const colors = await Promise.all(pairs.map(([status, emphasis]) => getColors(page, `${status}-${emphasis}`)));
      const expectations = await Promise.all(pairs.map(([status, emphasis]) => getExpectedColors(page, status, emphasis)));
      const mismatches = pairs
        .map(([status, emphasis], index) => ({ actual: colors[index], expected: expectations[index], testId: `${status}-${emphasis}` }))
        .filter(({ actual, expected }) => JSON.stringify(actual) !== JSON.stringify(expected));

      expect(mismatches).toEqual([]);
    });

    it('should keep the medium rendering where high or low has no value yet', async() => {
      const pairs = PROMOTIONAL_STATUSES.flatMap((status) => [[status, BADGE_EMPHASIS.high], [status, BADGE_EMPHASIS.low]]);
      const styles = await Promise.all(pairs.map(([status, emphasis]) => getStatusStyle(page, `${status}-${emphasis}`)));
      const mediumStyles = await Promise.all(pairs.map(([status]) => getStatusStyle(page, `${status}-${BADGE_EMPHASIS.medium}`)));

      expect(styles).toEqual(mediumStyles);
    });
  });
});
