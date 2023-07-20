import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsButtonVariant,
  OdsCodeAttributes,
  odsCodeDefaultAttributes,
  OdsComponentAttributes2StringAttributes,
  OdsDeepPartial,
} from '@ovhcloud/ods-core';
import { odsCodeBaseAttributes, OdsCreateAttributes, OdsStringAttributes2Str } from '@ovhcloud/ods-testing';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';

describe('e2e:osds-code', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({
                         attributes = {},
                         html = ``
                       }: { attributes?: Partial<OdsCodeAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsCodeAttributes = OdsCreateAttributes(attributes, odsCodeBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCodeAttributes>(minimalAttributes, odsCodeDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-code ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-code>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
    el = await page.find('osds-code');

    // mocked clipboard
    await page.evaluate(() => {
      let storedText = '';
      const navigatorMocked: OdsDeepPartial<Pick<typeof navigator, 'clipboard'>> = {
        clipboard: {
          async writeText(text: string) {
            storedText = text;
          },
          async readText() {
            return storedText;
          }
        }
      }
      Object.defineProperty(navigator, 'clipboard', { value: navigatorMocked.clipboard });
    });
  }

  it('should render', async () => {
    await setup();
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  it('should set default ods-icon', async () => {
    await setup({
      html: `Lorem ipsum<osds-button slot="copy"></osds-button>`
    });
    const icon = await page.find('osds-button > osds-icon');

    expect(icon).not.toBeNull();
    expect(icon.getAttribute('name')).toBe(ODS_ICON_NAME.COPY);
    expect(icon.getAttribute('size')).toBe(ODS_ICON_SIZE.xs);
  });

  it('should set ods-button default attributes', async () => {
    await setup({
      html: `Lorem ipsum<osds-button slot="copy"></osds-button>`
    });
    const button = await page.find('osds-code > osds-button');

    expect(button).not.toBeNull();
    expect(button.getAttribute('variant')).toBe(OdsButtonVariant.ghost);
    expect(button.getAttribute('size')).toBe(ODS_ICON_SIZE.sm);
  });

  it('should set ods-button variant', async () => {
    await setup({
      html: `Lorem ipsum<osds-button slot="copy" variant="flat"></osds-button>`
    });
    const button = await page.find('osds-code > osds-button');

    expect(button).not.toBeNull();
    expect(button.getAttribute('variant')).toBe(OdsButtonVariant.flat);
  });

  describe('copy', () => {
    it('should copy text to clipboard (osds-button)', async () => {
      const expected = 'Lorem Ipsum';
      await setup({
        html: `${expected}<osds-button slot="copy"></osds-button>`
      });
      const button = await page.find('osds-button');
      button.click();
      await page.waitForChanges();

      expect(await page.evaluate(() => navigator.clipboard.readText()))
        .toBe(expected);
    });

    it('should copy text to clipboard (vanilla button)', async () => {
      const expected = 'Lorem Ipsum';
      await setup({
        html: `${expected}<button slot="copy"></button>`
      });
      const button = await page.find('button');
      button.click();
      await page.waitForChanges();

      expect(await page.evaluate(() => navigator.clipboard.readText()))
        .toBe(expected);
    });
  });
});
