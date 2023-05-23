import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing';

describe('osds-breadcrumb', () => {
  let page: E2EPage;
  let breadcrumb: E2EElement;

  async function setup({ html = '' }: { html?: string } = {}) {
    page = await newE2EPage();
    await page.setContent(`
    <osds-breadcrumb>
    ${html}
    </osds-breadcrumb>
  `);
    breadcrumb = await page.find('osds-breadcrumb');
  }

  describe('if we have 5 items', () => {
    beforeEach(async () => {
      await setup({
        html: ` <osds-breadcrumb-item>Item 1</osds-breadcrumb-item>
      <osds-breadcrumb-item>Item 2</osds-breadcrumb-item>
      <osds-breadcrumb-item>Item 3</osds-breadcrumb-item>
      <osds-breadcrumb-item>Item 4</osds-breadcrumb-item>
      <osds-breadcrumb-item>Item 5</osds-breadcrumb-item>`,
      });
    });

    it('should render the breadcrumb without ellipsis when collapsed is true', async () => {
      await page.waitForChanges(); // Wait for component to render

      const breadcrumb = await page.find('osds-breadcrumb');
      expect(breadcrumb).not.toBeNull();

      breadcrumb.setProperty('collapsed', true);
      await page.waitForChanges();

      const ellipsis = await page.find('osds-icon[name="ellipsis"]');
      expect(ellipsis).toBeNull();

      const items = await page.findAll('osds-breadcrumb-item');
      expect(items.length).toBe(5);
      expect(items[0].innerText).toBe('Item 1');
      expect(items[4].innerText).toBe('Item 5');
    });
  });

  describe('focus', () => {
    beforeEach(async () => {
      await setup({
        html: ` <osds-breadcrumb-item>Item 1</osds-breadcrumb-item>
      <osds-breadcrumb-item>Item 2</osds-breadcrumb-item>
      <osds-breadcrumb-item>Item 3</osds-breadcrumb-item>
      <osds-breadcrumb-item>Item 4</osds-breadcrumb-item>
      <osds-breadcrumb-item>Item 5</osds-breadcrumb-item>`,
      });
    });

    /* it('should render the breadcrumb with ellipsis when collapsed is false and there are more than 4 items', async () => {
      await page.waitForChanges(); // Wait for component to render

      const breadcrumb = await page.find('osds-breadcrumb');
      expect(breadcrumb).not.toBeNull();

      const ellipsis = await page.find('osds-icon[name="ellipsis"]');
      expect(ellipsis).not.toBeNull();

      const items = await page.findAll('osds-breadcrumb-item');
      expect(items.length).toBe(5);
      expect(items[0].innerText).toBe('Item 1');
      expect (items[4].innerText).toBe('Item 5');
    });*/
    it('should render the breadcrumb without ellipsis when collapsed is true and there are more than 4 items', async () => {
      await page.waitForChanges(); // Wait for component to render

      const breadcrumb = await page.find('osds-breadcrumb');
      expect(breadcrumb).not.toBeNull();

      breadcrumb.setProperty('collapsed', true);
      await page.waitForChanges();

      const ellipsis = await page.find('osds-icon[name="ellipsis"]');
      expect(ellipsis).toBeNull();

      const items = await page.findAll('osds-breadcrumb-item');
      expect(items.length).toBe(5);
      expect(items[0].innerText).toBe('Item 1');
      expect(items[4].innerText).toBe('Item 5');
    });
    it('should focus the item and toggle collapsed state on keydown with Enter', async () => {
      await breadcrumb.press('Tab'); // Move focus to the breadcrumb
      await page.waitForChanges();

      const item = await page.find('osds-breadcrumb-item');
      expect(item).not.toBeNull();

      await item.press('Enter'); // Trigger keydown with Enter
      await page.waitForChanges();

      breadcrumb = await page.find('osds-breadcrumb'); // Retrieve updated reference to breadcrumb
      const isCollapsed = await breadcrumb.getProperty('collapsed');
      expect(isCollapsed).toBeFalsy();
    });
    /*  it('should expand the breadcrumb on ellipsis click', async () => {
      await page.waitForChanges(); // Wait for component to render

      const breadcrumb = await page.find('osds-breadcrumb');
      expect(breadcrumb).not.toBeNull();

      const ellipsis = await page.find('osds-icon[name="ellipsis"]');
      expect(ellipsis).not.toBeNull();

      // Click on the ellipsis
      await ellipsis.click();
      await page.waitForChanges();

      const collapsed = await breadcrumb.getProperty('collapsed');
      expect(collapsed).toBeFalsy();

      const items = await page.findAll('osds-breadcrumb-item');
      expect(items.length).toBe(5);
    }); */
  });
});
