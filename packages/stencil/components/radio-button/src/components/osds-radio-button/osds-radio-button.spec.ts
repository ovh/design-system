import {
  OdsComponentAttributes2StringAttributes,
  OdsCreateDefaultValidityState,
  OdsRadioButtonAttributes,
  OdsRadioButtonSizeList,
  odsRadioButtonDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  getAttributeContextOptions,
} from '@ovhcloud/ods-stencil/libraries/stencil-testing';
import {
  OdsMockNativeMethod,
  OdsMockPropertyDescriptor,
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  OdsUnitTestAttributeType,
  odsGetUnitTestAttributeBaseOptions,
  odsGetUnitTestAttributeContextOptions,
  odsGetUnitTestAttributeBaseOptionsArgs,
  odsRadioButtonBaseAttributes,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-testing';
import {
  OdsThemeColorIntent,
  OdsThemeColorIntentList,
} from '@ovhcloud/ods-theming';
import { newSpecPage, SpecPage } from '@stencil/core/testing';

import { OsdsRadioButton } from './osds-radio-button';

// mock validity property that does not exist when stencil mock HTMLInputElement
OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => OdsCreateDefaultValidityState());

describe('spec:osds-radio-button', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsRadioButton;
  let startSlot: HTMLElement | null | undefined;
  let endSlot: HTMLElement | null | undefined;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsRadioButtonAttributes>, html?: string }) {
    const minimalAttributes: OdsRadioButtonAttributes = OdsCreateAttributes(attributes, odsRadioButtonBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsRadioButtonAttributes>(minimalAttributes, odsRadioButtonDefaultAttributes);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, "setCustomValidity", jest.fn());

    page = await newSpecPage({
      components: [OsdsRadioButton],
      html: `<osds-radio-button ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-radio-button>`,
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

  describe('attributes', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      setup
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsRadioButtonAttributes, 'color'>({
        ...getAttributeContextOptions<OdsRadioButtonAttributes, OsdsRadioButton, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsRadioButtonDefaultAttributes.color,
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
      odsUnitTestAttribute<OdsRadioButtonAttributes, 'checked'>({
        ...getAttributeContextOptions<OdsRadioButtonAttributes, OsdsRadioButton, 'checked'>({
          name: 'checked',
          list: [false, true],
          defaultValue: odsRadioButtonDefaultAttributes.checked,
          ...config,
        })
      });
    });

    describe('checking', () => {
      odsUnitTestAttribute<OdsRadioButtonAttributes, 'checking'>({
        ...getAttributeContextOptions<OdsRadioButtonAttributes, OsdsRadioButton, 'checking'>({
          name: 'checking',
          list: [false, true],
          defaultValue: odsRadioButtonDefaultAttributes.checking,
          ...config,
        })
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsRadioButtonAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsRadioButtonAttributes, OsdsRadioButton, 'disabled'>({
          name: 'disabled',
          list: [false, true],
          defaultValue: odsRadioButtonDefaultAttributes.disabled,
          ...config,
        })
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsRadioButtonAttributes, 'size'>({
        ...getAttributeContextOptions<OdsRadioButtonAttributes, OsdsRadioButton, 'size'>({
          name: 'size',
          list: OdsRadioButtonSizeList,
          defaultValue: odsRadioButtonDefaultAttributes.size,
          ...config,
        })
      });
      it('should set a size if attribute is added', async () => {
        const randomSize = OdsRadioButtonSizeList[Math.floor(Math.random() * OdsRadioButtonSizeList.length)];
        await setup({ attributes: { size: randomSize } });
        expect(instance.size).toBe(randomSize);
      });
    });
  });
});
