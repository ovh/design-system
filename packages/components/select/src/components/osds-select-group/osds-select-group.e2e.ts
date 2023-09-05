import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('e2e:osds-select-group', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ onPage }: { onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-select-group>
        My-group
      </osds-select-group>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-select-group');
  }

  describe('defaults', () => {
    beforeEach(async () => {
      await setup();
    });

    it('should render', async () => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });
  });
});
