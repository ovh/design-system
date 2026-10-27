import 'jest-puppeteer';
import { getStatusStyle, gotoStory } from '../../../../helpers/test';
import { CARD_STATUSES } from '../../src/constants/card-status';

describe('Card rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="card"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const card = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await card?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });

  describe('statuses', () => {
    it('should style every status, unlike an unknown status', async() => {
      await gotoStory(page, 'rendering/statuses');

      const unknownStyle = await getStatusStyle(page, 'status-none');

      const styles = await Promise.all(CARD_STATUSES.map((status) => getStatusStyle(page, `status-${status}`)));
      const unstyledStatuses = CARD_STATUSES.filter((_, index) => styles[index] === unknownStyle);

      expect(unstyledStatuses).toEqual([]);
    });

    it('should render neutral without status', async() => {
      await gotoStory(page, 'rendering/statuses');

      expect(await getStatusStyle(page, 'default')).toBe(await getStatusStyle(page, 'status-neutral'));
    });
  });
});
