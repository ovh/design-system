import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-tab rendering', () => {
  let page: E2EPage;
  let tab: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    tab = await page.find('ods-tab');
  }

  it('should render the web component', async() => {
    await setup('<ods-tab>tab</ods-tab>');

    expect(tab.shadowRoot).not.toBeNull();
  });

  it('should render disabled if set', async() => {
    await setup('<ods-tab is-disabled>Tab</ods-tab>');

    expect(tab?.classList.contains('ods-tab--disabled')).toBe(true);
  });

  it('should render selected if set', async() => {
    await setup('<ods-tab is-selected>Tab</ods-tab>');

    expect(tab?.classList.contains('ods-tab--selected')).toBe(true);
  });
});
