import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-link rendering', () => {
  let aElement: E2EElement;
  let el: E2EElement;
  let page: E2EPage;
  let part: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
      await page.waitForChanges();
    }

    el = await page.find('ods-link');
    aElement = await page.find('ods-link >>> a');
    part = await page.find('ods-link >>> [part="link"]');
  }

  describe('part', () => {
    it('should render with custom style applied', async() => {
      await setup('<ods-link label="some link" href="https://www.ovhcloud.com/fr/"></ods-link>', 'ods-link::part(link) { color: #00FF00 }');
      await new Promise(resolve => setTimeout(resolve, 500));
      const partStyle = await part.getComputedStyle();
      expect(partStyle.getPropertyValue('color')).toBe('rgb(0, 255, 0)');
    });
  });

  describe('icon', () => {
    const dummyIcon = 'arrow-right';
    it('should render with an icon', async() => {
      await setup(`<ods-link icon="${dummyIcon}"></ods-link>`);

      const customIcon = await aElement.find(`ods-icon[name="${dummyIcon}"]`);

      expect(customIcon).not.toBeNull();
    });

    it('should render icon on the right', async() => {
      await setup(`<ods-link icon="${dummyIcon}"></ods-link>`);

      const linkStyle = await aElement.getComputedStyle();

      expect(linkStyle.getPropertyValue('flex-direction')).toBe('row');
    });

    it('should render icon on the left', async() => {
      await setup(`<ods-link icon="${dummyIcon}" icon-alignment="left"></ods-link>`);

      const linkStyle = await aElement.getComputedStyle();

      expect(linkStyle.getPropertyValue('flex-direction')).toBe('row-reverse');
    });
  });

  it('should render the web component', async() => {
    await setup('<ods-link></ods-link>');

    expect(el.shadowRoot).not.toBeNull();
  });

  it('should get class disabled', async() => {
    await setup('<ods-link is-disabled></ods-link>');

    expect(el.getAttribute('is-disabled')).toBe('');
    expect(aElement.classList.contains('ods-link__link--disabled')).toBe(true);
  });

  it('should get class color', async() => {
    await setup('<ods-link color="primary"></ods-link>');

    expect(el.getAttribute('color')).toBe('primary');
    expect(aElement.classList.contains('ods-link__link--primary')).toBe(true);
  });

});
