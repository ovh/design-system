import type { OdsRadioButtonAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';

import { OdsCreateDefaultValidityState } from '@ovhcloud/ods-common-core';
import { OdsMockNativeMethod, OdsMockPropertyDescriptor, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { newSpecPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_RADIO_BUTTON_SIZE, ODS_RADIO_BUTTON_SIZES } from './constants/radio-button-size';
import { OsdsRadioButton } from './osds-radio-button';

// mock validity property that does not exist when stencil mock HTMLInputElement
OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => OdsCreateDefaultValidityState());

describe('spec:osds-radio-button', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsRadioButton;
  let startSlot: HTMLElement | null | undefined;
  let endSlot: HTMLElement | null | undefined;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsRadioButtonAttribute>, html?: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsRadioButtonAttribute>(attributes, DEFAULT_ATTRIBUTE);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, 'setCustomValidity', jest.fn());

    page = await newSpecPage({
      components: [OsdsRadioButton],
      html: `<osds-radio-button ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-radio-button>`,
    });

    root = page.root;
    instance = page.rootInstance;
    startSlot = root?.shadowRoot?.querySelector('slot[name="start"]');
    endSlot = root?.shadowRoot?.querySelector('slot[name="end"]');
  }

  it('should render', async() => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a start slot', async() => {
      await setup({});
      expect(startSlot).toBeTruthy();
    });
    it('should have a end slot', async() => {
      await setup({});
      expect(endSlot).toBeTruthy();
    });
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsRadioButtonAttribute, 'color'>({
        name: 'color',
        defaultValue: DEFAULT_ATTRIBUTE.color,
        newValue: ODS_THEME_COLOR_INTENT.primary,
        value: ODS_THEME_COLOR_INTENT.default,
        setup: (value) => setup({ attributes: { ['color']: value } }),
        ...config,
      });

      it('should set a color if attribute is added', async() => {
        const randomColor = ODS_THEME_COLOR_INTENTS[ Math.floor(Math.random() * ODS_THEME_COLOR_INTENTS.length) ];
        await setup({ attributes: { color: randomColor } });
        expect(instance.color).toBe(randomColor);
      });
    });

    describe('checked', () => {
      odsUnitTestAttribute<OdsRadioButtonAttribute, 'checked'>({
        name: 'checked',
        defaultValue: DEFAULT_ATTRIBUTE.checked,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['checked']: value } }),
        ...config,
      });
    });

    describe('checking', () => {
      odsUnitTestAttribute<OdsRadioButtonAttribute, 'checking'>({
        name: 'checking',
        defaultValue: DEFAULT_ATTRIBUTE.checking,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['checking']: value } }),
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsRadioButtonAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        ...config,
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsRadioButtonAttribute, 'size'>({
        name: 'size',
        defaultValue: DEFAULT_ATTRIBUTE.size,
        newValue: ODS_RADIO_BUTTON_SIZE.md,
        value: ODS_RADIO_BUTTON_SIZE.md,
        setup: (value) => setup({ attributes: { ['size']: value } }),
        ...config,
      });
      it('should set a size if attribute is added', async() => {
        const randomSize = ODS_RADIO_BUTTON_SIZES[Math.floor(Math.random() * ODS_RADIO_BUTTON_SIZES.length)];
        await setup({ attributes: { size: randomSize } });
        expect(instance.size).toBe(randomSize);
      });
    });
  });
});
