import { type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-textarea navigation', () => {
  let page: E2EPage;

  async function isFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      const element = document.querySelector('ods-textarea');
      return document.activeElement === element;
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  it('should be focused on tabulation', async() => {
    await setup('<ods-textarea></ods-textarea>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(true);
  });

  it('should not be focusable if disabled', async() => {
    await setup('<ods-textarea is-disabled></ods-textarea>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(false);
  });

  it('should be focused on associated label click', async() => {
    await setup('<label for="ods-textarea">Dummy label</label><ods-textarea id="ods-textarea"></ods-textarea>');
    const labelElement = await page.find('label');

    expect(await isFocused()).toBe(false);

    await labelElement.click();
    await page.waitForChanges();

    expect(await isFocused()).toBe(true);
  });
});
