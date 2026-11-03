import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Breadcrumb rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="breadcrumb"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="breadcrumb-item"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="breadcrumb-link"]')).not.toBeNull();
  });

  describe('rest underline', () => {
    beforeEach(async() => {
      // The pointer stays where the previous test left it: off the links, so that a rest value is not read hovered.
      await page.mouse.move(0, 0);
      await gotoStory(page, 'rendering/rest-underline');
      await page.waitForSelector('[data-testid="rest-underline-collapsed"]');
    });

    it('should draw the rest underline of Link under each link of the trail', async() => {
      const underlines = await page.$$eval('[data-testid="rest-underline-trail"] a[href]', (elements) => elements.map((el) => getComputedStyle(el, '::after').height));

      expect(underlines).toEqual(['1px', '1px']);
    });

    it('should draw none under the ellipsis button, nor under the current page', async() => {
      const ellipsis = await page.$eval('[data-testid="rest-underline-collapsed"] button', (el: Element) => getComputedStyle(el, '::after').height);
      const current = await page.$eval('[data-testid="rest-underline-trail"] [aria-current="page"]', (el: Element) => getComputedStyle(el, '::after').content);

      expect(ellipsis).toBe('0px');
      expect(current).toBe('none');
    });
  });
});
