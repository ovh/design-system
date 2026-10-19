import 'jest-puppeteer';
import { type Page } from 'puppeteer';
import { getStatusStyle, gotoStory, gotoStoryAndCollectDeprecations } from '../../../../helpers/test';
import { MESSAGE_EMPHASES, MESSAGE_EMPHASIS, type MessageEmphasis } from '../../src/constants/message-emphasis';
import { MESSAGE_STATUS, MESSAGE_STATUSES, type MessageStatus } from '../../src/constants/message-status';

const PAGE_BACKGROUND = 'rgb(255, 255, 255)';
const TRANSPARENT = 'rgba(0, 0, 0, 0)';

type Rendering = { background: string, border: string, icon: string, text: string };
type SpecColors = { high: [string, string], medium: [string, string] };

// Default theme values of the spec: high is [background, text], medium is [border, text]. Low uses the medium text.
const INFORMATION_SPEC: SpecColors = { high: ['#e6faff', '#000e9c'], medium: ['#bef1ff', '#0050d7'] };
const SPEC: Record<MessageStatus, SpecColors> = {
  [MESSAGE_STATUS.accent]: INFORMATION_SPEC,
  [MESSAGE_STATUS.critical]: { high: ['#ffccd9', '#800015'], medium: ['#ef99ab', '#bf0020'] },
  [MESSAGE_STATUS.information]: INFORMATION_SPEC,
  [MESSAGE_STATUS.neutral]: { high: ['#cccccc', '#4d4d4d'], medium: ['#cccccc', '#808080'] },
  [MESSAGE_STATUS.success]: { high: ['#d2f2c2', '#1a4d00'], medium: ['#90cc7a', '#2b8000'] },
  [MESSAGE_STATUS.warning]: { high: ['#feea86', '#663800'], medium: ['#fed265', '#995400'] },
};

// Pending design answer (ODS-2335): the spec neutral medium and low text (#808080 on white) is 3.95:1, under AA.
const AA_EXCEPTIONS = [`${MESSAGE_STATUS.neutral}-${MESSAGE_EMPHASIS.medium}`, `${MESSAGE_STATUS.neutral}-${MESSAGE_EMPHASIS.low}`];

function toRgb(hex: string): string {
  const [r, g, b] = hex.slice(1).match(/../g)!.map((channel) => parseInt(channel, 16));

  return `rgb(${r}, ${g}, ${b})`;
}

function getExpectedRendering(status: MessageStatus, emphasis: MessageEmphasis): Rendering {
  const { high, medium } = SPEC[status];

  switch (emphasis) {
    case MESSAGE_EMPHASIS.high:
      return { background: toRgb(high[0]), border: 'none', icon: toRgb(high[1]), text: toRgb(high[1]) };
    case MESSAGE_EMPHASIS.low:
      return { background: TRANSPARENT, border: 'none', icon: toRgb(medium[1]), text: toRgb(medium[1]) };
    default:
      return { background: PAGE_BACKGROUND, border: `1px solid ${toRgb(medium[0])}`, icon: toRgb(medium[1]), text: toRgb(medium[1]) };
  }
}

async function getRendering(page: Page, testId: string): Promise<Rendering> {
  const element = await page.waitForSelector(`[data-testid="${testId}"]`);

  return element!.evaluate((el: Element) => {
    const style = getComputedStyle(el);
    const border = style.borderTopStyle === 'none' ? 'none' : `${style.borderTopWidth} ${style.borderTopStyle} ${style.borderTopColor}`;

    return {
      background: style.backgroundColor,
      border,
      icon: getComputedStyle(el.querySelector('[data-ods="message-icon"]')!).color,
      text: style.color,
    };
  });
}

async function getCloseButtonStyle(page: Page, testId: string): Promise<string> {
  const element = await page.waitForSelector(`[data-testid="${testId}"] button`);

  return element!.evaluate((el: Element) => {
    const style = getComputedStyle(el);
    return [style.backgroundColor, style.borderTopColor, style.color, style.height].join(' | ');
  });
}

function getLuminance(color: string): number {
  const [r, g, b] = color.match(/\d+(\.\d+)?/g)!.slice(0, 3).map((channel) => {
    const value = Number(channel) / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function getContrastRatio({ background, text }: Rendering): number {
  // A transparent (low) Message is read on the page background.
  const [lighter, darker] = [getLuminance(background === TRANSPARENT ? PAGE_BACKGROUND : background), getLuminance(text)].sort((a, b) => b - a);

  return (lighter + 0.05) / (darker + 0.05);
}

const PAIRS = MESSAGE_STATUSES.flatMap((status) => MESSAGE_EMPHASES.map((emphasis) => [status, emphasis] as const));

describe('Message rendering', () => {
  it('should render the web component', async() => {
    const warnings = await gotoStoryAndCollectDeprecations(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="message"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="message-body"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="message-icon"]')).not.toBeNull();
    expect(warnings).toEqual([]);
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const message = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await message?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });

  describe('statuses', () => {
    it('should style every status, unlike an unknown status, without any warning', async() => {
      const warnings = await gotoStoryAndCollectDeprecations(page, 'rendering/statuses');

      const unknownStyle = await getStatusStyle(page, 'status-none');

      const styles = await Promise.all(MESSAGE_STATUSES.map((status) => getStatusStyle(page, `status-${status}`)));
      const unstyledStatuses = MESSAGE_STATUSES.filter((_, index) => styles[index] === unknownStyle);

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

      const defaultStyles = await Promise.all(MESSAGE_STATUSES.map((status) => getStatusStyle(page, `${status}-default`)));
      const mediumStyles = await Promise.all(MESSAGE_STATUSES.map((status) => getStatusStyle(page, `${status}-${MESSAGE_EMPHASIS.medium}`)));

      expect(defaultStyles).toEqual(mediumStyles);
      expect(warnings).toEqual([]);
    });

    it('should render an unknown emphasis as medium', async() => {
      const unknownStyles = await Promise.all(MESSAGE_STATUSES.map((status) => getStatusStyle(page, `${status}-unknown`)));
      const mediumStyles = await Promise.all(MESSAGE_STATUSES.map((status) => getStatusStyle(page, `${status}-${MESSAGE_EMPHASIS.medium}`)));

      expect(unknownStyles).toEqual(mediumStyles);
    });

    it('should apply the spec colors to the background, border, text and icon of every status and emphasis', async() => {
      const renderings = await Promise.all(PAIRS.map(([status, emphasis]) => getRendering(page, `${status}-${emphasis}`)));
      const mismatches = PAIRS
        .map(([status, emphasis], index) => ({ actual: renderings[index], expected: getExpectedRendering(status, emphasis), testId: `${status}-${emphasis}` }))
        .filter(({ actual, expected }) => JSON.stringify(actual) !== JSON.stringify(expected));

      expect(mismatches).toEqual([]);
    });

    it('should render accent as information in every emphasis', async() => {
      const accentStyles = await Promise.all(MESSAGE_EMPHASES.map((emphasis) => getStatusStyle(page, `${MESSAGE_STATUS.accent}-${emphasis}`)));
      const informationStyles = await Promise.all(MESSAGE_EMPHASES.map((emphasis) => getStatusStyle(page, `${MESSAGE_STATUS.information}-${emphasis}`)));

      expect(accentStyles).toEqual(informationStyles);
    });

    it('should render the same close button in every status and emphasis', async() => {
      const styles = await Promise.all(PAIRS.map(([status, emphasis]) => getCloseButtonStyle(page, `${status}-${emphasis}`)));

      expect(new Set(styles).size).toBe(1);
    });

    it('should keep an AA text contrast (4.5:1) for every status and emphasis', async() => {
      const testIds = PAIRS.map(([status, emphasis]) => `${status}-${emphasis}`).filter((testId) => !AA_EXCEPTIONS.includes(testId));
      const ratios = await Promise.all(testIds.map(async(testId) => getContrastRatio(await getRendering(page, testId))));
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
        '[DEPRECATED]: The color prop of Message is deprecated and will be removed in v21, use the status prop instead.',
      ]);
    });
  });
});
