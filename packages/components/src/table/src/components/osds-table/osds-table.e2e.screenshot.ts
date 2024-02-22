import type { E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('e2e:osds-table', () => {
  let page: E2EPage;
  let variations: Array<string>;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => {
      document.body.style.setProperty('margin', '0px');
    });
  }

  describe('screenshots', () => {
    beforeEach(() => {
      variations = [];
    });

    it('should take screenshots of all attributes variations', async() => {
      variations.push(`
        <osds-table size='sm''></osds-table>
      `);
      variations.push(`
        <osds-table size='md''></osds-table>
      `);
      variations.push(`
        <osds-table size='lg''></osds-table>
      `);
      variations.push(`
        <osds-table size='striped''></osds-table>
      `);

      await setup(variations.join(''));
      await page.waitForChanges();

      const results = await page.compareScreenshot('table', { fullPage: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});
