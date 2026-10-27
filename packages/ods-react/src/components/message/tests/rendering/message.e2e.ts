import 'jest-puppeteer';
import { type Page } from 'puppeteer';
import { getStatusStyle, getTokenColor, gotoStory, gotoStoryAndCollectDeprecations } from '../../../../helpers/test';
import { MESSAGE_EMPHASES, MESSAGE_EMPHASIS, type MessageEmphasis } from '../../src/constants/message-emphasis';
import { MESSAGE_STATUS, MESSAGE_STATUSES, type MessageStatus } from '../../src/constants/message-status';

const TRANSPARENT = 'rgba(0, 0, 0, 0)';

type Rendering = { background: string, border: string, icon: string, text: string };
type SpecRoles = { high: [string, string], medium: [string, string] };

// The semantic roles each emphasis reads: high is [background, text], medium is [border, text] on the raised surface. Low uses the medium text.
const SPEC: Record<MessageStatus, SpecRoles> = {
  [MESSAGE_STATUS.accent]: { high: ['surface-accent-subtle', 'content-on-accent'], medium: ['border-accent-subtle', 'content-accent'] },
  [MESSAGE_STATUS.critical]: { high: ['surface-critical-subtle', 'content-on-critical'], medium: ['border-critical-subtle', 'content-critical'] },
  [MESSAGE_STATUS.information]: { high: ['surface-information-subtle', 'content-on-information'], medium: ['border-information-subtle', 'content-information'] },
  [MESSAGE_STATUS.neutral]: { high: ['surface-neutral-minimal', 'content-on-neutral'], medium: ['border-neutral-subtle', 'content-neutral'] },
  [MESSAGE_STATUS.success]: { high: ['surface-success-subtle', 'content-on-success'], medium: ['border-success-subtle', 'content-success'] },
  [MESSAGE_STATUS.warning]: { high: ['surface-warning-subtle', 'content-on-warning'], medium: ['border-warning-subtle', 'content-warning'] },
};

async function getExpectedRendering(page: Page, status: MessageStatus, emphasis: MessageEmphasis): Promise<Rendering> {
  const { high, medium } = SPEC[status];
  const color = (role: string): Promise<string> => getTokenColor(page, `--ods-semantic-color-${role}`);

  switch (emphasis) {
    case MESSAGE_EMPHASIS.high: {
      const [background, text] = await Promise.all(high.map(color));
      return { background, border: 'none', icon: text, text };
    }
    case MESSAGE_EMPHASIS.low: {
      const text = await color(medium[1]);
      return { background: TRANSPARENT, border: 'none', icon: text, text };
    }
    default: {
      const [background, border, text] = await Promise.all([color('surface-raised'), color(medium[0]), color(medium[1])]);
      return { background, border: `1px solid ${border}`, icon: text, text };
    }
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

    it('should apply the spec roles to the background, border, text and icon of every status and emphasis', async() => {
      const renderings = await Promise.all(PAIRS.map(([status, emphasis]) => getRendering(page, `${status}-${emphasis}`)));
      const expectations = await Promise.all(PAIRS.map(([status, emphasis]) => getExpectedRendering(page, status, emphasis)));
      const mismatches = PAIRS
        .map(([status, emphasis], index) => ({ actual: renderings[index], expected: expectations[index], testId: `${status}-${emphasis}` }))
        .filter(({ actual, expected }) => JSON.stringify(actual) !== JSON.stringify(expected));

      expect(mismatches).toEqual([]);
    });

    it('should render the same close button in every status and emphasis', async() => {
      const styles = await Promise.all(PAIRS.map(([status, emphasis]) => getCloseButtonStyle(page, `${status}-${emphasis}`)));

      expect(new Set(styles).size).toBe(1);
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
