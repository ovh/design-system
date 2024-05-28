import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsModal } from '../../src';

describe('ods-modal behaviour', () => {
  let page: SpecPage;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsModal],
      html,
    });
  }

  it('should open on open method call', async() => {
    await setup('<ods-modal></ods-modal>');

    const modal = page.rootInstance as OdsModal;
    await modal.open();
    await page.waitForChanges();

    expect(modal.isOpen).toBe(true);
  });

  it('should close on close method call', async() => {
    await setup('<ods-modal is-open></ods-modal>');

    const modal = page.rootInstance as OdsModal;
    await modal.close();
    await page.waitForChanges();

    // Wait for the dialog to close
    await new Promise((resolve) => setTimeout(resolve, 200));

    expect(modal.isOpen).toBe(false);
  });
});
