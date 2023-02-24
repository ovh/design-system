import { newSpecPage, SpecPage } from '@stencil/core/testing';
import {
  OdsCheckboxButtonAttributes,
  odsCheckboxButtonDefaultAttributes,
  OdsCheckboxButtonSizeList,
  OdsComponentAttributes2StringAttributes,
  OdsCreateDefaultValidityState,
} from '@ovhcloud/ods-core';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';
import {
  odsCheckboxButtonBaseAttributes,
  OdsCreateAttributes,
  OdsMockNativeMethod,
  OdsMockPropertyDescriptor,
  OdsStringAttributes2Str,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-testing';
import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsCheckboxButton } from './osds-checkbox-button';

// mock validity property that does not exist when stencil mock HTMLInputElement
OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => OdsCreateDefaultValidityState());

describe('spec:osds-checkbox-button', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsCheckboxButton;
  let startSlot: HTMLElement | null | undefined;
  let endSlot: HTMLElement | null | undefined;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsCheckboxButtonAttributes>, html?: string }) {
    const minimalAttributes: OdsCheckboxButtonAttributes = OdsCreateAttributes(attributes, odsCheckboxButtonBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCheckboxButtonAttributes>(minimalAttributes, odsCheckboxButtonDefaultAttributes);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, "setCustomValidity", jest.fn());

    page = await newSpecPage({
      components: [OsdsCheckboxButton],
      html: `<osds-checkbox-button ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-checkbox-button>`,
    });

    root = page.root;
    instance = page.rootInstance;
    startSlot = root?.shadowRoot?.querySelector('slot[name="start"]');
    endSlot = root?.shadowRoot?.querySelector('slot[name="end"]');
  }

  it('should render', async () => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a start slot', async () => {
      await setup({});
      expect(startSlot).toBeTruthy();
    });
    it('should have a end slot', async () => {
      await setup({});
      expect(endSlot).toBeTruthy();
    });
  });

  /**
   * @see OdsCheckboxButtonAttributes
   */
  describe('attributes', () => {

    const config = {
      page: () => page,
      instance: () => instance,
      setup,
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsCheckboxButtonAttributes, 'color'>({
        ...getAttributeContextOptions<OdsCheckboxButtonAttributes, OsdsCheckboxButton, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsCheckboxButtonDefaultAttributes.color,
          ...config,
        })
      });
      it('should set a color if attribute is added', async () => {
        const randomColor = OdsThemeColorIntentList[ Math.floor(Math.random() * OdsThemeColorIntentList.length) ];
        await setup({ attributes: { color: randomColor } });
        expect(page.root?.color).toBe(randomColor);
      });
    });

    describe('checked', () => {
      odsUnitTestAttribute<OdsCheckboxButtonAttributes, 'checked'>({
        ...getAttributeContextOptions<OdsCheckboxButtonAttributes, OsdsCheckboxButton, 'checked'>({
          name: 'checked',
          list: [false, true],
          defaultValue: odsCheckboxButtonDefaultAttributes.checked,
          ...config,
        })
      });
    });

    describe('checking', () => {
      odsUnitTestAttribute<OdsCheckboxButtonAttributes, 'checking'>({
        ...getAttributeContextOptions<OdsCheckboxButtonAttributes, OsdsCheckboxButton, 'checking'>({
          name: 'checking',
          list: [false, true],
          defaultValue: odsCheckboxButtonDefaultAttributes.checking,
          ...config,
        })
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsCheckboxButtonAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsCheckboxButtonAttributes, OsdsCheckboxButton, 'disabled'>({
          name: 'disabled',
          list: [false, true],
          defaultValue: odsCheckboxButtonDefaultAttributes.disabled,
          ...config,
        })
      });
    });

    describe('hasFocus', () => {
      odsUnitTestAttribute<OdsCheckboxButtonAttributes, 'hasFocus'>({
        ...getAttributeContextOptions<OdsCheckboxButtonAttributes, OsdsCheckboxButton, 'hasFocus'>({
          name: 'hasFocus',
          list: [false, true],
          defaultValue: odsCheckboxButtonDefaultAttributes.hasFocus,
          ...config,
        })
      });
    });

    describe('indeterminate', () => {
      odsUnitTestAttribute<OdsCheckboxButtonAttributes, 'indeterminate'>({
        ...getAttributeContextOptions<OdsCheckboxButtonAttributes, OsdsCheckboxButton, 'indeterminate'>({
          name: 'indeterminate',
          list: [false, true],
          defaultValue: odsCheckboxButtonDefaultAttributes.indeterminate,
          ...config,
        })
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsCheckboxButtonAttributes, 'size'>({
        ...getAttributeContextOptions<OdsCheckboxButtonAttributes, OsdsCheckboxButton, 'size'>({
          name: 'size',
          list: OdsCheckboxButtonSizeList,
          defaultValue: odsCheckboxButtonDefaultAttributes.size,
          ...config,
        })
      });
      it('should set a size if attribute is added', async () => {
        const randomSize = OdsCheckboxButtonSizeList[Math.floor(Math.random() * OdsCheckboxButtonSizeList.length)];
        await setup({ attributes: { size: randomSize } });
        expect(instance.size).toBe(randomSize);
      });
    });
  });

});
