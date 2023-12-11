import type { E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('e2e:osds-medium', () => {
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
        <osds-medium src='https://corporate.ovhcloud.com/sites/default/files/2022-03/ovhcloud-logo2.png' alt='OVHcloud logo'></osds-medium>
      `);
      variations.push(`
        <osds-medium height='150' src='https://corporate.ovhcloud.com/sites/default/files/2022-03/ovhcloud-logo2.png' alt='OVHcloud logo'></osds-medium>
      `);
      variations.push(`
        <osds-medium width='600' src='https://corporate.ovhcloud.com/sites/default/files/2022-03/ovhcloud-logo2.png' alt='OVHcloud logo'></osds-medium>
      `);

      await setup(variations.join(''));
      await page.waitForChanges();

      const results = await page.compareScreenshot('medium', { fullPage: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});
