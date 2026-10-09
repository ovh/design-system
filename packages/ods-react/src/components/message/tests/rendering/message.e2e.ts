import 'jest-puppeteer';
import { getStatusStyle, gotoStory, gotoStoryAndCollectDeprecations } from '../../../../helpers/test';
import { MESSAGE_STATUSES } from '../../src/constants/message-status';

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
