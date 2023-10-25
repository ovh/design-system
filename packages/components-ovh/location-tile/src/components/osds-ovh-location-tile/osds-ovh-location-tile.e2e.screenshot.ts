import type { E2EPage } from '@stencil/core/testing';

import { newE2EPage } from '@stencil/core/testing';

describe('e2e:osds-ovh-location-tile', () => {
  let page: E2EPage;

  async function setup() {
    page = await newE2EPage();
    await page.setContent(`
      <osds-ovh-location-tile>
      </osds-ovh-location-tile>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  describe('screenshots', () => {
    it('standard', async() => {
      await setup();

      const results = await page.compareScreenshot('ovh-location-tile', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});
