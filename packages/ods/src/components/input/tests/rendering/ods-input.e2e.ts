import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-input rendering', () => {
  let el: E2EElement;
  let page: E2EPage;
  let part: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-input');
    part = await page.find('ods-input >>> [part="input"]');
    await page.waitForChanges();
  }

  it('should render the web component', async() => {
    await setup('<ods-input></ods-input>');

    expect(el.shadowRoot).not.toBeNull();
  });

  describe('part', () => {
    it('should render with custom style applied', async() => {
      await setup('<ods-input></ods-input>', 'ods-input::part(input) { width: 100px }');
      const partStyle = await part.getComputedStyle();
      expect(partStyle.getPropertyValue('width')).toBe('100px');
    });
  });

  describe('Form', () => {
    it('should get form data with button type submit', async() => {
      await setup(`<form method="get">
        <ods-input name="odsInput" value="On Vous Heberge ?"></ods-input>
        <input type="text" name="natifInput">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.get('odsInput')).toBe('On Vous Heberge ?');
      expect(url.searchParams.get('natifInput')).toBe('');
    });

    it('should reset form with button type reset', async() => {
      await setup(`<form method="get">
        <ods-input name="odsInput" value="On Vous Heberge ?"></ods-input>
        <input type="text" name="natifInput">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const resetButton = await page.find('button[type="reset"]');
      await resetButton.click();

      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.get('natifInput')).toBe('');
      expect(url.searchParams.get('odsInput')).toBe('');
    });
  });
});
