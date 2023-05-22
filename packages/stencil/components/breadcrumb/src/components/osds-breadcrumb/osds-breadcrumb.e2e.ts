import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing';

async function setup({ html = '' }: { html?: string } = {}) {
  page = await newE2EPage();
  await page.setContent(`
    <osds-breadcrumb>
    ${html}
    </osds-breadcrumb>
  `);
  await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
  el = await page.find('osds-accordion-group');
}

describe('osds-breadcrumb', () => {
  let page: E2EPage;
  let el: E2EElement;
  beforeEach(async () => {
    await setup({
      html: ` <osds-breadcrumb-item>Item 1</osds-breadcrumb-item>
    <osds-breadcrumb-item>Item 2</osds-breadcrumb-item>
    <osds-breadcrumb-item>Item 3</osds-breadcrumb-item>
    <osds-breadcrumb-item>Item 4</osds-breadcrumb-item>
    <osds-breadcrumb-item>Item 5</osds-breadcrumb-item>`,
    });
  });
  it('should render the breadcrumb with ellipsis when collapsed is false and more than 4 items', async () => {
    await page.waitForChanges(); // Wait for component to render

    const breadcrumb = await page.find('osds-breadcrumb');
    expect(breadcrumb).not.toBeNull();

    breadcrumb.setProperty('collapsed', false);
    await page.waitForChanges();

    const ellipsis = await page.find('osds-breadcrumb osds-icon[name="ellipsis"]');
    expect(ellipsis).toBeFalsy();

    const items = await page.findAll('osds-breadcrumb-item');
    expect(items.length).toBe(5); // Adjust the expected length to 5
    expect(items[0].innerText).toBe('Item 1');
    expect(items[1].innerText).toBe('Item 2');
    expect(items[2].innerText).toBe('Item 3');
    expect(items[3].innerText).toBe('Item 4');
    expect(items[4].innerText).toBe('Item 5');
  });

  it('should render the breadcrumb without ellipsis when collapsed is true', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <osds-breadcrumb>
        <osds-breadcrumb-item>Item 1</osds-breadcrumb-item>
        <osds-breadcrumb-item>Item 2</osds-breadcrumb-item>
        <osds-breadcrumb-item>Item 3</osds-breadcrumb-item>
        <osds-breadcrumb-item>Item 4</osds-breadcrumb-item>
        <osds-breadcrumb-item>Item 5</osds-breadcrumb-item>
        <osds-breadcrumb-item>Item 6</osds-breadcrumb-item>
      </osds-breadcrumb>
    `);

    await page.waitForChanges(); // Wait for component to render

    const breadcrumb = await page.find('osds-breadcrumb');
    expect(breadcrumb).not.toBeNull();

    breadcrumb.setProperty('collapsed', true);
    await page.waitForChanges();

    const ellipsis = await page.find('osds-icon[name="ellipsis"]');
    expect(ellipsis).toBeNull();

    const items = await page.findAll('osds-breadcrumb-item');
    expect(items.length).toBe(6);
    expect(items[0].innerText).toBe('Item 1');
    expect(items[5].innerText).toBe('Item 6');
  });
});
