import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Pagination rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="pagination"]')).not.toBeNull();
  });

  describe('link mode', () => {
    it('should render the pages a user can go to as links, not as buttons', async() => {
      await gotoStory(page, 'rendering/link');
      await page.waitForSelector('[data-testid="link"]');

      const items = await page.$$('[data-part="item"]:not([aria-current="page"])');
      const rendered = await Promise.all(items.map((item) => item.evaluate((el: Element) => ({
        href: el.getAttribute('href'),
        ods: el.getAttribute('data-ods'),
        tagName: el.tagName,
      }))));

      expect(rendered.length).toBeGreaterThan(0);

      rendered.forEach(({ href, ods, tagName }) => {
        expect(tagName).toBe('A');
        expect(ods).toBe('link');
        expect(href).toMatch(/^#page-\d+-size-10$/);
      });
    });

    it('should render the active page as plain text, as there is nowhere to navigate to', async() => {
      await gotoStory(page, 'rendering/link');
      await page.waitForSelector('[data-testid="link"]');

      const current = await page.$$('[data-part="item"][aria-current="page"]');

      expect(current.length).toBe(1);

      const rendered = await current[0].evaluate((el: Element) => ({
        hasHref: el.hasAttribute('href'),
        ods: el.getAttribute('data-ods'),
        tabIndex: (el as HTMLElement).tabIndex,
        tagName: el.tagName,
        textContent: el.textContent,
      }));

      expect(rendered.tagName).toBe('SPAN');
      expect(rendered.textContent).toBe('1');
      expect(rendered.hasHref).toBe(false);
      // Neither a link nor a button: it is not actionable, so it is not styled as one.
      expect(rendered.ods).toBeNull();
      expect(rendered.tabIndex).toBe(-1);
    });

    it('should underline the digits only, never the cell around them', async() => {
      await gotoStory(page, 'rendering/link');
      await page.waitForSelector('[data-testid="link"]');

      const items = await page.$$('[data-part="item"]');
      const measured = await Promise.all(items.map((item) => item.evaluate((el: Element) => ({
        cell: (el.parentElement as HTMLElement).getBoundingClientRect().width,
        text: el.getBoundingClientRect().width,
        underline: parseFloat(window.getComputedStyle(el, '::after').width),
      }))));

      expect(measured.length).toBeGreaterThan(0);

      // The underline belongs to the page number, not to the 40px cell it sits in.
      measured.forEach(({ cell, text, underline }) => {
        expect(underline).toBeCloseTo(text, 1);
        expect(underline).toBeLessThan(cell);
      });
    });

    it('should underline the chevron of a trigger, the way an icon only link is underlined', async() => {
      await gotoStory(page, 'rendering/link');

      const trigger = await page.waitForSelector('[data-part="next-trigger"]');
      const measured = await trigger?.evaluate((el: Element) => ({
        cell: (el.parentElement as HTMLElement).getBoundingClientRect().width,
        glyph: el.getBoundingClientRect().width,
        underline: parseFloat(window.getComputedStyle(el, '::after').width),
      }));

      // An icon only Link keeps its underline, at the width of the glyph and not of the cell.
      expect(measured?.underline).toBeGreaterThan(0);
      expect(measured?.underline).toBeCloseTo(measured!.glyph, 1);
      expect(measured?.underline).toBeLessThan(measured!.cell);
    });

    it('should render every page as a button without a page url builder', async() => {
      await gotoStory(page, 'rendering/pages');
      await page.waitForSelector('[data-testid="pages"]');

      const items = await page.$$('[data-part="item"]');
      const rendered = await Promise.all(items.map((item) => item.evaluate((el: Element) => ({
        href: el.getAttribute('href'),
        ods: el.getAttribute('data-ods'),
        tagName: el.tagName,
        type: el.getAttribute('type'),
      }))));

      expect(rendered.length).toBeGreaterThan(0);

      rendered.forEach(({ href, ods, tagName, type }) => {
        expect(tagName).toBe('BUTTON');
        expect(ods).toBe('button');
        expect(type).toBe('button');
        expect(href).toBeNull();
      });
    });

    it('should render the previous trigger as an inert link on the first page', async() => {
      await gotoStory(page, 'rendering/link');

      const trigger = await page.waitForSelector('[data-part="prev-trigger"]');
      const rendered = await trigger?.evaluate((el: Element) => ({
        ariaDisabled: el.getAttribute('aria-disabled'),
        hasHref: el.hasAttribute('href'),
        ods: el.getAttribute('data-ods'),
        tabIndex: el.getAttribute('tabindex'),
        tagName: el.tagName,
      }));

      expect(rendered?.tagName).toBe('A');
      expect(rendered?.ods).toBe('link');
      expect(rendered?.hasHref).toBe(false);
      expect(rendered?.ariaDisabled).toBe('true');
      expect(rendered?.tabIndex).toBe('-1');
    });

    it('should render the next trigger as a link to the next page', async() => {
      await gotoStory(page, 'rendering/link');

      const trigger = await page.waitForSelector('[data-part="next-trigger"]');
      const rendered = await trigger?.evaluate((el: Element) => ({
        ariaDisabled: el.getAttribute('aria-disabled'),
        href: el.getAttribute('href'),
        ods: el.getAttribute('data-ods'),
        tagName: el.tagName,
      }));

      expect(rendered?.tagName).toBe('A');
      expect(rendered?.ods).toBe('link');
      expect(rendered?.href).toBe('#page-2-size-10');
      expect(rendered?.ariaDisabled).toBeNull();
    });

    it('should apply the disabled contract of Link to every page when the pagination is disabled', async() => {
      await gotoStory(page, 'rendering/link-disabled');
      await page.waitForSelector('[data-testid="link-disabled"]');

      const items = await page.$$('[data-part="item"]:not([aria-current="page"])');
      const rendered = await Promise.all(items.map((item) => item.evaluate((el: Element) => ({
        ariaDisabled: el.getAttribute('aria-disabled'),
        tabIndex: el.getAttribute('tabindex'),
        tagName: el.tagName,
      }))));

      expect(rendered.length).toBeGreaterThan(0);

      rendered.forEach(({ ariaDisabled, tabIndex, tagName }) => {
        expect(tagName).toBe('A');
        expect(ariaDisabled).toBe('true');
        expect(tabIndex).toBe('-1');
      });
    });

    it('should render the ellipsis as plain text, as it is a gap and not a page', async() => {
      await gotoStory(page, 'rendering/link');

      const ellipsis = await page.waitForSelector('[data-part="ellipsis"]');
      const rendered = await ellipsis?.evaluate((el: Element) => ({
        hasHref: el.hasAttribute('href'),
        ods: el.getAttribute('data-ods'),
        tagName: el.tagName,
      }));

      expect(rendered?.tagName).toBe('SPAN');
      expect(rendered?.ods).toBeNull();
      expect(rendered?.hasHref).toBe(false);
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
