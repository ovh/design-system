import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-breadcrumb-item rendering', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-breadcrumb-item');
  }

  it('should render the web component', async() => {
    await setup('<ods-breadcrumb-item></ods-breadcrumb-item>');

    expect(el.shadowRoot).not.toBeNull();
  });

  it('should render a specific link if expandable', async() => {
    const dummyLabel = 'dummy label';
    await setup(`<ods-breadcrumb-item is-expandable label="${dummyLabel}"></ods-breadcrumb-item>`);
    const linkElement = await el.shadowRoot.querySelector('ods-link');

    expect(linkElement).not.toBeNull();
    expect(linkElement?.getAttribute('label')).not.toBe(dummyLabel);
  });

  it('should render a text if last', async() => {
    const dummyLabel = 'dummy label';
    await setup(`<ods-breadcrumb-item is-last label="${dummyLabel}"></ods-breadcrumb-item>`);
    const linkElement = await el.shadowRoot.querySelector('ods-link');
    const textElement = await el.shadowRoot.querySelector('span');

    expect(linkElement).toBeNull();
    expect(textElement).not.toBeNull();
  });

  it('should render a link by default', async() => {
    const dummyLabel = 'dummy label';
    await setup(`<ods-breadcrumb-item label="${dummyLabel}"></ods-breadcrumb-item>`);
    const linkElement = await el.shadowRoot.querySelector('ods-link');

    expect(linkElement).not.toBeNull();
    expect(linkElement?.getAttribute('label')).toBe(dummyLabel);
  });

  it('should not be visible if collapsed', async() => {
    await setup('<ods-breadcrumb-item is-collapsed label="dummy-label"></ods-breadcrumb-item>');

    expect(await el.isVisible()).toBe(false);
  });
});
