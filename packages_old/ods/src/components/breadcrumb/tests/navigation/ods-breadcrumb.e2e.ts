import { type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-breadcrumb navigation', () => {
  let page: E2EPage;

  async function isItemFocused(itemId: string): Promise<boolean> {
    return await page.evaluate((id) => {
      const element = document.querySelector(`#${id}`);
      return document.activeElement === element;
    }, itemId);
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    await page.waitForChanges();
  }

  beforeEach(jest.clearAllMocks);

  it('should focus items on tabulation in sequence except the last', async() => {
    await setup(`
<ods-breadcrumb>
  <ods-breadcrumb-item id="first" label="First"></ods-breadcrumb-item>
  <ods-breadcrumb-item id="second" label="Second"></ods-breadcrumb-item>
  <ods-breadcrumb-item id="last" label="Last"></ods-breadcrumb-item>
</ods-breadcrumb>
<button id="button">Dummy</button>
`);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isItemFocused('first')).toBe(true);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isItemFocused('second')).toBe(true);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isItemFocused('button')).toBe(true);
  });

  it('should focus only first and expandable items if there is more than the max items', async() => {
    await setup(`
<ods-breadcrumb>
  <ods-breadcrumb-item id="first" label="First"></ods-breadcrumb-item>
  <ods-breadcrumb-item id="second" label="Second"></ods-breadcrumb-item>
  <ods-breadcrumb-item id="third" label="Third"></ods-breadcrumb-item>
  <ods-breadcrumb-item id="fourth" label="Fourth"></ods-breadcrumb-item>
  <ods-breadcrumb-item id="last" label="Last"></ods-breadcrumb-item>
</ods-breadcrumb>
<button id="button">Dummy</button>
`);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isItemFocused('first')).toBe(true);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isItemFocused('second')).toBe(true);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isItemFocused('button')).toBe(true);
  });
});
