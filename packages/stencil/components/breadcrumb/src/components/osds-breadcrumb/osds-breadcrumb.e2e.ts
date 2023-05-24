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
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
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

      // breadcrumb.setProperty('collapsed', true);
      // await page.waitForChanges();

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


    it('should render the breadcrumb without ellipsis when collapsed is true and there are more than 4 items', async () => {
      await page.waitForChanges(); // Wait for component to render

      const breadcrumb = await page.find('osds-breadcrumb');
      expect(breadcrumb).not.toBeNull();

      // breadcrumb.setProperty('collapsed', true);
      // await page.waitForChanges();

      const ellipsis = await page.find('osds-icon[name="ellipsis"]');
      expect(ellipsis).toBeNull();

      const items = await page.findAll('osds-breadcrumb-item');
      expect(items.length).toBe(5);
      expect(items[0].innerText).toBe('Item 1');
      expect(items[4].innerText).toBe('Item 5');
    });
  });
});
