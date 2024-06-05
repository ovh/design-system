import { type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-file-upload navigation', () => {
  let page: E2EPage;

  async function isBrowseButtonFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      const fileUpload = document.querySelector('ods-file-upload');
      return fileUpload?.shadowRoot?.activeElement?.tagName === 'ODS-BUTTON';
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  it('should focus the browse button on tabulation', async() => {
    await setup('<ods-file-upload></ods-file-upload>');

    expect(await isBrowseButtonFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isBrowseButtonFocused()).toBe(true);
  });

  it('should not focus the browse button on tabulation if disabled', async() => {
    await setup('<ods-file-upload is-disabled></ods-file-upload>');

    expect(await isBrowseButtonFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isBrowseButtonFocused()).toBe(false);
  });
});
