import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Button rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="button"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const button = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await button?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });

  describe('as', () => {
    it('should render a button by default', async() => {
      await gotoStory(page, 'rendering/render');

      const button = await page.waitForSelector('[data-testid="render"]');

      expect(await button?.evaluate((el: Element) => el.tagName)).toBe('BUTTON');
      expect(await button?.evaluate((el: Element) => el.getAttribute('type'))).toBe('button');
    });

    it('should render a link when asked to', async() => {
      await gotoStory(page, 'rendering/link');

      const button = await page.waitForSelector('[data-testid="link"]');

      expect(await button?.evaluate((el: Element) => el.tagName)).toBe('A');
      expect(await button?.evaluate((el: Element) => el.getAttribute('href'))).toBe('#dummy-target');
    });

    it('should not render the button only attributes on a link', async() => {
      await gotoStory(page, 'rendering/link');

      const button = await page.waitForSelector('[data-testid="link"]');

      expect(await button?.evaluate((el: Element) => el.getAttribute('type'))).toBeNull();
      expect(await button?.evaluate((el: Element) => el.hasAttribute('disabled'))).toBe(false);
    });

    it('should render a link without the browser underline', async() => {
      await gotoStory(page, 'rendering/link');

      const button = await page.waitForSelector('[data-testid="link"]');

      expect(await button?.evaluate((el: Element) => getComputedStyle(el).textDecorationLine)).toBe('none');
    });

    it('should make a disabled link inert without the disabled attribute', async() => {
      await gotoStory(page, 'rendering/link-disabled');

      const link = await page.waitForSelector('[data-testid="link-disabled"]');

      expect(await link?.evaluate((el: Element) => el.getAttribute('aria-disabled'))).toBe('true');
      expect(await link?.evaluate((el: Element) => el.hasAttribute('href'))).toBe(false);
      expect(await link?.evaluate((el: Element) => el.getAttribute('tabindex'))).toBe('-1');
    });

    it('should apply the disabled style to a disabled link', async() => {
      await gotoStory(page, 'rendering/link-disabled');

      const button = await page.waitForSelector('[data-testid="link-disabled-button"]');
      const link = await page.waitForSelector('[data-testid="link-disabled"]');

      const buttonColor = await button?.evaluate((el: Element) => getComputedStyle(el).color);
      const linkColor = await link?.evaluate((el: Element) => getComputedStyle(el).color);

      expect(await link?.evaluate((el: Element) => getComputedStyle(el).cursor)).toBe('not-allowed');
      expect(linkColor).toBe(buttonColor);
    });
  });

  describe('loading', () => {
    it('should disable the button', async() => {
      await gotoStory(page, 'rendering/is-loading');

      const button = await page.waitForSelector('[data-testid="is-loading"]');
      const isDisabled = await button?.evaluate((el: Element) => el.hasAttribute('disabled'));

      expect(isDisabled).toBe(true);
    });
  });

  describe('sizes', () => {
    it('should respect increase order (xs < sm < md)', async() => {
      await gotoStory(page, 'rendering/sizes');

      const xsButton = await page.waitForSelector('[data-testid="size-xs"]');
      const smButton = await page.waitForSelector('[data-testid="size-sm"]');
      const mdButton = await page.waitForSelector('[data-testid="size-md"]');

      const xsHeight = await xsButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
      const smHeight = await smButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
      const mdHeight = await mdButton!.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(xsHeight).toBeLessThan(smHeight);
      expect(xsHeight).toBeLessThan(mdHeight);
      expect(smHeight).toBeLessThan(mdHeight);
      expect(smHeight).toBeGreaterThan(xsHeight);
      expect(mdHeight).toBeGreaterThan(xsHeight);
      expect(mdHeight).toBeGreaterThan(smHeight);
    });
  });

  describe('variants', () => {
    describe('xs', () => {
      it('should each have the exact same default height', async() => {
        await gotoStory(page, 'rendering/variants-xs');

        const defaultButton = await page.waitForSelector('[data-testid="variant-xs-default"]');
        const ghostButton = await page.waitForSelector('[data-testid="variant-xs-ghost"]');
        const outlineButton = await page.waitForSelector('[data-testid="variant-xs-outline"]');

        const defaultHeight = await defaultButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
        const ghostHeight = await ghostButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
        const outlineHeight = await outlineButton!.evaluate((el: Element) => el.getBoundingClientRect().height);

        expect(defaultHeight).toBe(ghostHeight);
        expect(ghostHeight).toBe(outlineHeight);
      });
    });

    describe('sm', () => {
      it('should each have the exact same default height', async() => {
        await gotoStory(page, 'rendering/variants-sm');

        const defaultButton = await page.waitForSelector('[data-testid="variant-sm-default"]');
        const ghostButton = await page.waitForSelector('[data-testid="variant-sm-ghost"]');
        const outlineButton = await page.waitForSelector('[data-testid="variant-sm-outline"]');

        const defaultHeight = await defaultButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
        const ghostHeight = await ghostButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
        const outlineHeight = await outlineButton!.evaluate((el: Element) => el.getBoundingClientRect().height);

        expect(defaultHeight).toBe(ghostHeight);
        expect(ghostHeight).toBe(outlineHeight);
      });
    });

    describe('md', () => {
      it('should each have the exact same default height', async() => {
        await gotoStory(page, 'rendering/variants-md');

        const defaultButton = await page.waitForSelector('[data-testid="variant-md-default"]');
        const ghostButton = await page.waitForSelector('[data-testid="variant-md-ghost"]');
        const outlineButton = await page.waitForSelector('[data-testid="variant-md-outline"]');

        const defaultHeight = await defaultButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
        const ghostHeight = await ghostButton!.evaluate((el: Element) => el.getBoundingClientRect().height);
        const outlineHeight = await outlineButton!.evaluate((el: Element) => el.getBoundingClientRect().height);

        expect(defaultHeight).toBe(ghostHeight);
        expect(ghostHeight).toBe(outlineHeight);
      });
    });
  });
});
