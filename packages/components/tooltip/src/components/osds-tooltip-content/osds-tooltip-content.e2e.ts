import type {E2EElement, E2EPage} from '@stencil/core/testing';
import {newE2EPage} from '@stencil/core/testing';

describe('e2e:osds-tooltip-content', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({html}: { html?: string } = {}) {
    page = await newE2EPage();
    await page.setContent(`<osds-tooltip-content>${html}</osds-tooltip-content>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-tooltip-content');
  }

  it('should render', async() => {
    await setup();
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('default slot', () => {
    it('should display a text', async() => {
      const slot = '<span>Dummy text</span>';
      await setup({html: slot});
      expect(el.innerHTML).toBe(slot);
    });
  });
});
