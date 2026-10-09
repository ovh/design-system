import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Table rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="table"]')).not.toBeNull();
  });

  describe('striped', () => {
    async function getRowsBackgroundColor(testId: string): Promise<[string, string]> {
      const table = await page.waitForSelector(`[data-testid="${testId}"]`);

      return await table!.evaluate((el) => {
        const cells = el.querySelectorAll('tbody tr td:first-of-type');

        return [
          getComputedStyle(cells[0]).backgroundColor,
          getComputedStyle(cells[1]).backgroundColor,
        ] as [string, string];
      });
    }

    it('should render rows with the same background when not striped', async() => {
      await gotoStory(page, 'rendering/not-striped');

      const [firstRowBackground, secondRowBackground] = await getRowsBackgroundColor('not-striped');

      expect(secondRowBackground).toBe(firstRowBackground);
    });

    it('should render alternate row backgrounds when striped', async() => {
      await gotoStory(page, 'rendering/striped');

      const [firstRowBackground, secondRowBackground] = await getRowsBackgroundColor('striped');

      expect(secondRowBackground).not.toBe(firstRowBackground);
    });

    it('should still render alternate row backgrounds with the deprecated striped variant', async() => {
      await gotoStory(page, 'rendering/deprecated-variant-striped');

      const [firstRowBackground, secondRowBackground] = await getRowsBackgroundColor('deprecated-variant-striped');

      expect(secondRowBackground).not.toBe(firstRowBackground);
    });
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const table = await page.waitForSelector('[data-testid="custom-style"]');
      const backgroundColor = await table?.evaluate((el) => getComputedStyle(el).backgroundColor);

      expect(backgroundColor).toBe('rgb(255, 0, 0)');
    });
  });
});
