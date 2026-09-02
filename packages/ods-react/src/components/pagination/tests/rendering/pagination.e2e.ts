import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Pagination rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="pagination"]')).not.toBeNull();
  });

  describe('link mode', () => {
    it('should render every page as a link carrying the page and the page size', async() => {
      await gotoStory(page, 'rendering/link');
      await page.waitForSelector('[data-testid="link"]');

      const items = await page.$$('[data-part="item"]');
      const rendered = await Promise.all(items.map((item) => item.evaluate((el: Element) => ({
        href: el.getAttribute('href'),
        tagName: el.tagName,
        type: el.getAttribute('type'),
      }))));

      expect(rendered.length).toBeGreaterThan(0);
      expect(rendered[0].href).toBe('#page-1-size-10');

      rendered.forEach(({ href, tagName, type }) => {
        expect(tagName).toBe('A');
        expect(type).toBeNull();
        expect(href).toMatch(/^#page-\d+-size-10$/);
      });
    });

    it('should render every page as a button without a page url builder', async() => {
      await gotoStory(page, 'rendering/pages');
      await page.waitForSelector('[data-testid="pages"]');

      const items = await page.$$('[data-part="item"]');
      const rendered = await Promise.all(items.map((item) => item.evaluate((el: Element) => ({
        href: el.getAttribute('href'),
        tagName: el.tagName,
        type: el.getAttribute('type'),
      }))));

      expect(rendered.length).toBeGreaterThan(0);

      rendered.forEach(({ href, tagName, type }) => {
        expect(tagName).toBe('BUTTON');
        expect(type).toBe('button');
        expect(href).toBeNull();
      });
    });

    it('should mark the active page link with aria-current', async() => {
      await gotoStory(page, 'rendering/link');
      await page.waitForSelector('[data-testid="link"]');

      const current = await page.$$('[data-part="item"][aria-current="page"]');

      expect(current.length).toBe(1);
      expect(await current[0].evaluate((el: Element) => el.textContent)).toBe('1');
    });

    it('should render the previous trigger as an inert link on the first page', async() => {
      await gotoStory(page, 'rendering/link');

      const trigger = await page.waitForSelector('[data-part="prev-trigger"]');

      expect(await trigger?.evaluate((el: Element) => el.tagName)).toBe('A');
      expect(await trigger?.evaluate((el: Element) => el.hasAttribute('href'))).toBe(false);
      expect(await trigger?.evaluate((el: Element) => el.getAttribute('aria-disabled'))).toBe('true');
      expect(await trigger?.evaluate((el: Element) => el.getAttribute('tabindex'))).toBe('-1');
    });

    it('should render the next trigger as a link to the next page', async() => {
      await gotoStory(page, 'rendering/link');

      const trigger = await page.waitForSelector('[data-part="next-trigger"]');

      expect(await trigger?.evaluate((el: Element) => el.tagName)).toBe('A');
      expect(await trigger?.evaluate((el: Element) => el.getAttribute('href'))).toBe('#page-2-size-10');
      expect(await trigger?.evaluate((el: Element) => el.getAttribute('aria-disabled'))).toBeNull();
    });

    it('should strip the href of every page link when the pagination is disabled', async() => {
      await gotoStory(page, 'rendering/link-disabled');
      await page.waitForSelector('[data-testid="link-disabled"]');

      const items = await page.$$('[data-part="item"]');
      const rendered = await Promise.all(items.map((item) => item.evaluate((el: Element) => ({
        ariaDisabled: el.getAttribute('aria-disabled'),
        hasHref: el.hasAttribute('href'),
        tabIndex: el.getAttribute('tabindex'),
        tagName: el.tagName,
      }))));

      expect(rendered.length).toBeGreaterThan(0);

      rendered.forEach(({ ariaDisabled, hasHref, tabIndex, tagName }) => {
        expect(tagName).toBe('A');
        expect(hasHref).toBe(false);
        expect(ariaDisabled).toBe('true');
        expect(tabIndex).toBe('-1');
      });
    });

    it('should keep the ellipsis a disabled button, as it is not a page', async() => {
      await gotoStory(page, 'rendering/link');

      const ellipsis = await page.waitForSelector('[data-part="ellipsis"]');

      expect(await ellipsis?.evaluate((el: Element) => el.tagName)).toBe('BUTTON');
      expect(await ellipsis?.evaluate((el: Element) => el.hasAttribute('disabled'))).toBe(true);
      expect(await ellipsis?.evaluate((el: Element) => el.hasAttribute('href'))).toBe(false);
    });
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const pagination = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await pagination?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });
});
