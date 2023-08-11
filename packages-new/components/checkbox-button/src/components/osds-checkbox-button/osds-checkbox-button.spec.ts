import type { OdsCheckboxButtonAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsCreateDefaultValidityState } from '@ovhcloud/ods-common-core';
import {
  odsComponentAttributes2StringAttributes,
  OdsMockNativeMethod,
  OdsMockPropertyDescriptor,
  odsStringAttributes2Str,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-common-testing';
import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsCheckboxButton } from './osds-checkbox-button';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_CHECKBOX_BUTTON_SIZE, ODS_CHECKBOX_BUTTON_SIZES } from './constants/ods-checkbox-button-size';

// mock validity property that does not exist when stencil mock HTMLInputElement
OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => OdsCreateDefaultValidityState());

describe('spec:osds-checkbox-button', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsCheckboxButton;
  let startSlot: HTMLElement | null | undefined;
  let endSlot: HTMLElement | null | undefined;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsCheckboxButtonAttribute>, html?: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsCheckboxButtonAttribute>(attributes, DEFAULT_ATTRIBUTE);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, "setCustomValidity", jest.fn());

    page = await newSpecPage({
      components: [OsdsCheckboxButton],
      html: `<osds-checkbox-button ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-checkbox-button>`,
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
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsCheckboxButtonAttribute, 'color'>({
          name: 'color',
          defaultValue: DEFAULT_ATTRIBUTE.color,
          newValue: OdsThemeColorIntent.primary,
          value: OdsThemeColorIntent.default,
          setup: (color) => setup({ attributes: { color } }),
          ...config,
      });
      it('should set a color if attribute is added', async () => {
        const randomColor = OdsThemeColorIntentList[ Math.floor(Math.random() * OdsThemeColorIntentList.length) ];
        await setup({ attributes: { color: randomColor } });
        expect(page.root?.color).toBe(randomColor);
      });
    });

    describe('checked', () => {
      odsUnitTestAttribute<OdsCheckboxButtonAttribute, 'checked'>({
        name: 'checked',
        defaultValue: DEFAULT_ATTRIBUTE.checked,
        newValue: true,
        value: false,
        setup: (checked) => setup({ attributes: { checked } }),
        ...config,
      });
    });

    describe('checking', () => {
      odsUnitTestAttribute<OdsCheckboxButtonAttribute, 'checking'>({
        name: 'checking',
        defaultValue: DEFAULT_ATTRIBUTE.checking,
        newValue: true,
        value: false,
        setup: (checking) => setup({ attributes: { checking } }),
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsCheckboxButtonAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: true,
        value: false,
        setup: (disabled) => setup({ attributes: { disabled } }),
        ...config,
      });
    });

    describe('hasFocus', () => {
      odsUnitTestAttribute<OdsCheckboxButtonAttribute, 'hasFocus'>({
        name: 'hasFocus',
        defaultValue: DEFAULT_ATTRIBUTE.hasFocus,
        newValue: true,
        value: false,
        setup: (hasFocus) => setup({ attributes: { hasFocus } }),
        ...config,
      });
    });

    describe('indeterminate', () => {
      odsUnitTestAttribute<OdsCheckboxButtonAttribute, 'indeterminate'>({
        name: 'indeterminate',
        defaultValue: DEFAULT_ATTRIBUTE.indeterminate,
        newValue: true,
        value: false,
        setup: (indeterminate) => setup({ attributes: { indeterminate } }),
        ...config,
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsCheckboxButtonAttribute, 'size'>({
          name: 'size',
          defaultValue: DEFAULT_ATTRIBUTE.size,
          newValue: ODS_CHECKBOX_BUTTON_SIZE.md,
          value: ODS_CHECKBOX_BUTTON_SIZE.sm,
          setup: (size) => setup({ attributes: { size } }),
          ...config,
      });
      it('should set a size if attribute is added', async () => {
        const randomSize = ODS_CHECKBOX_BUTTON_SIZES[Math.floor(Math.random() * ODS_CHECKBOX_BUTTON_SIZES.length)];
        await setup({ attributes: { size: randomSize } });
        expect(instance.size).toBe(randomSize);
      });
    });
  });
});
