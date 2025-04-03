import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsDrawer } from '../../src';

describe('ods-drawer behaviour', () => {
  let page: SpecPage;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsDrawer],
      html,
    });
  }

  it('should open on open method call', async() => {
    await setup('<ods-drawer></ods-drawer>');

    const modal = page.rootInstance as OdsDrawer;
    await modal.open();
    await page.waitForChanges();

    expect(modal.isOpen).toBe(true);
  });

  it('should close on close method call', async() => {
    await setup('<ods-drawer is-open position="left"></ods-drawer>');

    const modal = page.rootInstance as OdsDrawer;
    await modal.close();
    await page.waitForChanges();

    const closeAnimation = page.root?.shadowRoot?.querySelector('.ods-drawer__dialog--close-animation--left');

    expect(closeAnimation).not.toBeNull();

  });
});
