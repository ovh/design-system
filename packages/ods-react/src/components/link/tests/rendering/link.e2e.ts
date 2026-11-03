import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Link rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="link"]')).not.toBeNull();
  });

  describe('rest underline', () => {
    const getUnderline = (testId: string): Promise<{ color: string, height: string, lineColor: string }> => page.$eval(
      `[data-testid="${testId}"]`,
      (el: Element) => ({
        color: getComputedStyle(el).color,
        height: getComputedStyle(el, '::after').height,
        lineColor: getComputedStyle(el, '::after').backgroundColor,
      }),
    );

    beforeEach(async() => {
      // The pointer stays where the previous test left it: off the links, so that a rest value is not read hovered.
      await page.mouse.move(0, 0);
      await gotoStory(page, 'rendering/rest-underline');
      await page.waitForSelector('[data-testid="rest-underline-default"]');
    });

    it('should draw a 1px underline in the link color at rest', async() => {
      const { color, height, lineColor } = await getUnderline('rest-underline-default');

      expect(height).toBe('1px');
      expect(lineColor).toBe(color);
    });

    it('should thicken the underline to 2px on hover', async() => {
      await page.hover('[data-testid="rest-underline-default"]');

      expect((await getUnderline('rest-underline-default')).height).toBe('2px');
    });

    it('should draw no underline under an icon only link until it is hovered', async() => {
      expect((await getUnderline('rest-underline-no-text')).height).toBe('0px');

      await page.hover('[data-testid="rest-underline-no-text"]');

      expect((await getUnderline('rest-underline-no-text')).height).toBe('2px');
    });

    it('should draw no underline at rest under icons wrapped in a fragment', async() => {
      expect((await getUnderline('rest-underline-fragment')).height).toBe('0px');
    });

    it('should keep the rest underline of a label rendered by a component', async() => {
      expect((await getUnderline('rest-underline-component-label')).height).toBe('1px');
    });

    it('should draw the underline with the link color of the palette in forced colors', async() => {
      const session = await page.createCDPSession();
      await session.send('Emulation.setEmulatedMedia', { features: [{ name: 'forced-colors', value: 'active' }] });

      const { color, lineColor } = await getUnderline('rest-underline-default');

      await session.send('Emulation.setEmulatedMedia', { features: [{ name: 'forced-colors', value: 'none' }] });
      await session.detach();

      expect(lineColor).toBe(color);
    });

    it('should read both thicknesses from a container', async() => {
      expect((await getUnderline('rest-underline-inherited')).height).toBe('3px');

      await page.hover('[data-testid="rest-underline-inherited"]');

      expect((await getUnderline('rest-underline-inherited')).height).toBe('5px');
    });

    it('should keep the rest underline of a disabled link on hover', async() => {
      expect((await getUnderline('rest-underline-disabled')).height).toBe('1px');

      await page.hover('[data-testid="rest-underline-disabled"]');

      expect((await getUnderline('rest-underline-disabled')).height).toBe('1px');
    });

    it('should draw no underline under a disabled icon only link on hover', async() => {
      expect((await getUnderline('rest-underline-no-text-disabled')).height).toBe('0px');

      await page.hover('[data-testid="rest-underline-no-text-disabled"]');

      expect((await getUnderline('rest-underline-no-text-disabled')).height).toBe('0px');
    });

    it('should keep the rest thickness of its container on a disabled link on hover', async() => {
      expect((await getUnderline('rest-underline-inherited-disabled')).height).toBe('3px');

      await page.hover('[data-testid="rest-underline-inherited-disabled"]');

      expect((await getUnderline('rest-underline-inherited-disabled')).height).toBe('3px');
    });
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const link = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await link?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });
});
