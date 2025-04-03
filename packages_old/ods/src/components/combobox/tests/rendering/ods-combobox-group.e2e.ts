import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-combobox-group rendering', () => {
  let el: E2EElement;
  let titleElement: E2EElement;
  let page: E2EPage;

  function isVisible(): boolean {
    return !titleElement.classList.contains('ods-combobox-group__title--hidden');
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    el = await page.find('ods-combobox-group');
    titleElement = await page.find('ods-combobox-group >>> .ods-combobox-group__title');
  }

  it('should render the web component', async() => {
    await setup('<ods-combobox-group></ods-combobox-group>');

    expect(el.shadowRoot).not.toBeNull();
  });

  it('should render hidden by default', async() => {
    await setup('<ods-combobox-group></ods-combobox-group>');

    expect(isVisible()).toBe(false);
  });

  it('should render hidden if isVisible is set', async() => {
    await setup('<ods-combobox-group is-visible></ods-combobox-group>');

    expect(isVisible()).toBe(true);
  });

  it('should render hidden if isVisible is set to false', async() => {
    await setup('<ods-combobox-group is-visible="false"></ods-combobox-group>');

    expect(isVisible()).toBe(false);
  });
});
