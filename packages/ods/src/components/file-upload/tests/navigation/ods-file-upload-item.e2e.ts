import { type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-file-upload-item navigation', () => {
  let page: E2EPage;

  async function isCancelButtonFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      const fileItem = document.querySelector('ods-file-upload-item');
      return fileItem?.shadowRoot?.activeElement?.tagName === 'ODS-BUTTON';
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  it('should focus the cancel button on tabulation', async() => {
    await setup('<ods-file-upload-item name="name" size="1" success-label="ok"></ods-file-upload-item>');

    expect(await isCancelButtonFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isCancelButtonFocused()).toBe(true);
  });

  it('should not focus the cancel button on tabulation if disabled', async() => {
    await setup('<ods-file-upload-item is-disabled name="name" size="1" success-label="ok"></ods-file-upload-item>');

    expect(await isCancelButtonFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isCancelButtonFocused()).toBe(false);
  });
});
