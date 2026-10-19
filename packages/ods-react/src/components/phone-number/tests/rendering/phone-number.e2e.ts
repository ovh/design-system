import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('PhoneNumber rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="phone-number"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="phone-number-control"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="phone-number-country-list"]')).not.toBeNull();
  });

  describe('default width', () => {
    async function widthOf(testId: string): Promise<number> {
      return page.$eval(`[data-testid="${testId}"] .probe`, (el) => el.getBoundingClientRect().width);
    }

    it('should share the 280px default, shrink in a narrow container and accept a consumer width', async() => {
      await gotoStory(page, 'rendering/default-width');

      expect(await widthOf('default')).toBe(280);
      expect(await widthOf('narrow')).toBe(200);
      expect(await widthOf('override')).toBe(400);
    });
  });
});
