import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('e2e:osds-ovh-location-tile', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup() {
    page = await newE2EPage();
    await page.setContent(`
      <osds-ovh-location-tile>
      </osds-ovh-location-tile>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-ovh-location-tile');
  }

  it('should render', async() => {
    await setup();
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });
});
