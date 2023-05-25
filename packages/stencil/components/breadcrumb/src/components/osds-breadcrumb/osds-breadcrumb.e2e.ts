import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing';

describe('osds-breadcrumb', () => {
  let page: E2EPage;
  let breadcrumb: E2EElement;
  let ellipsis: E2EElement;

  let activeElementId: string | undefined;

  async function setup({ html = '' }: { html?: string } = {}) {
    page = await newE2EPage();
    await page.setContent(`
      <osds-breadcrumb>
        ${html}
      </osds-breadcrumb>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
    breadcrumb = await page.find('osds-breadcrumb');
    ellipsis = await page.find('osds-breadcrumb >>> osds-icon[name="ellipsis"]');
  }

  async function updateReferences() {
    activeElementId = await page.evaluate(() => document.activeElement?.id);
  }

  describe('if we have 5 items', () => {
    beforeEach(async () => {
      await setup({
        html: `
        <osds-breadcrumb-item>
        <osds-link color="primary" href="home">Home</osds-link>
      </osds-breadcrumb-item>
      <osds-breadcrumb-item><osds-link color="primary" href="item1">Item 1</osds-link></osds-breadcrumb-item>
      <osds-breadcrumb-item><osds-link color="primary" href="item2">Item 2</osds-link></osds-breadcrumb-item>
      <osds-breadcrumb-item><osds-link color="primary" href="item3">Item 3</osds-link></osds-breadcrumb-item>
      <osds-breadcrumb-item><osds-text>Item active</osds-text></osds-breadcrumb-item>
        `,
      });
    });
    it('checks if the items are correctly displayed when clicking on the ellipsis', async () => {
      await page.waitForChanges(); // Wait for component to render

      expect(breadcrumb).not.toBeNull();
      expect(ellipsis).not.toBeNull();
      expect(breadcrumb.getAttribute('collapsed')).toBeTruthy;
      ellipsis.click();
      await page.waitForChanges(); // Wait for component to render
      expect(breadcrumb.getAttribute('collapsed')).toBeFalsy;
    });
  });
  describe('if we have 5 items and test with keyboard', () => {
    beforeEach(async () => {
      await setup({
        html: `
        <osds-breadcrumb-item>
        <osds-link color="primary" href="home">Home</osds-link>
      </osds-breadcrumb-item>
      <osds-breadcrumb-item><osds-link color="primary" href="item1">Item 1</osds-link></osds-breadcrumb-item>
      <osds-breadcrumb-item><osds-link color="primary" href="item2">Item 2</osds-link></osds-breadcrumb-item>
      <osds-breadcrumb-item><osds-link color="primary" href="item3">Item 3</osds-link></osds-breadcrumb-item>
      <osds-breadcrumb-item><osds-text>Item active</osds-text></osds-breadcrumb-item>
        `,
      });
      await updateReferences();
    });

    it('item should be focusable', async () => {
      await page.waitForChanges(); // Wait for component to render
    });

    it('checks whether the items are displayed when the Enter key is pressed on the ellipsis', async () => {
      await page.waitForChanges(); // Wait for component to render

      expect(breadcrumb).not.toBeNull();
      expect(ellipsis).not.toBeNull();
      expect(breadcrumb.getAttribute('collapsed')).toBeTruthy;

      // Simulate Enter key press on ellipsis
      await ellipsis.press('Enter');

      await page.waitForChanges(); // Wait for component to render

      expect(breadcrumb.getAttribute('collapsed')).toBeFalsy;
    });
    it('checks whether the items are displayed when the click is on the ellipsis', async () => {
      await page.waitForChanges(); // Wait for component to render

      expect(breadcrumb).not.toBeNull();
      expect(ellipsis).not.toBeNull();
      expect(breadcrumb.getAttribute('collapsed')).toBeTruthy;

      // Simulate Enter key press on ellipsis
      await ellipsis.click();

      await page.waitForChanges(); // Wait for component to render

      expect(breadcrumb.getAttribute('collapsed')).toBeFalsy;
    });
  });
});
