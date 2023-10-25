import { OdsDeepPartial } from '@ovhcloud/ods-common-core';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming/src';
import { ODS_BUTTON_VARIANT } from '@ovhcloud/ods-component-button';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';
import { newE2EPage } from '@stencil/core/testing';
import type { E2EElement, E2EPage } from '@stencil/core/testing';

import { ODS_CODE_SIZE } from './constants/code-size';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import type { OdsCodeAttribute } from './interfaces/attributes';

describe('e2e:osds-code', () => {
  const baseAttribute = { color: ODS_THEME_COLOR_INTENT.default, contrasted: false, size: ODS_CODE_SIZE.md };
  let page: E2EPage;
  let el: E2EElement;

  async function setup({
    attributes = {},
    html = '',
  }: { attributes?: Partial<OdsCodeAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsCodeAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <osds-code ${odsStringAttributes2Str(stringAttributes)}>
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
          },
        },
      };
      Object.defineProperty(navigator, 'clipboard', { value: navigatorMocked.clipboard });
    });
  }

  it('should render', async() => {
    await setup();
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  it('should set default ods-icon', async() => {
    await setup({
      html: 'Lorem ipsum<osds-button slot="copy"></osds-button>',
    });
    const icon = await page.find('osds-button > osds-icon');

    expect(icon).not.toBeNull();
    expect(icon.getAttribute('name')).toBe(ODS_ICON_NAME.COPY);
    expect(icon.getAttribute('size')).toBe(ODS_ICON_SIZE.xs);
  });

  it('should set ods-button default attributes', async() => {
    await setup({
      html: 'Lorem ipsum<osds-button slot="copy"></osds-button>',
    });
    const button = await page.find('osds-code > osds-button');

    expect(button).not.toBeNull();
    expect(button.getAttribute('variant')).toBe(ODS_BUTTON_VARIANT.ghost);
    expect(button.getAttribute('size')).toBe(ODS_ICON_SIZE.sm);
  });

  it('should set ods-button variant', async() => {
    await setup({
      html: 'Lorem ipsum<osds-button slot="copy" variant="flat"></osds-button>',
    });
    const button = await page.find('osds-code > osds-button');

    expect(button).not.toBeNull();
    expect(button.getAttribute('variant')).toBe(ODS_BUTTON_VARIANT.flat);
  });

  describe('copy', () => {
    it('should copy text to clipboard (osds-button)', async() => {
      const expected = 'Lorem Ipsum';
      await setup({
        html: `${expected}<osds-button slot="copy"></osds-button>`,
      });
      const button = await page.find('osds-button');
      button.click();
      await page.waitForChanges();

      expect(await page.evaluate(() => navigator.clipboard.readText()))
        .toBe(expected);
    });

    it('should copy text to clipboard (vanilla button)', async() => {
      const expected = 'Lorem Ipsum';
      await setup({
        html: `${expected}<button slot="copy"></button>`,
      });
      const button = await page.find('button');
      button.click();
      await page.waitForChanges();

      expect(await page.evaluate(() => navigator.clipboard.readText()))
        .toBe(expected);
    });
  });
});
