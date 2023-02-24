import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OsdsSelect } from './osds-select';
import {
  OdsComponentAttributes2StringAttributes,
  OdsCreateDefaultValidityState,
  OdsSelectAttributes,
  odsSelectDefaultAttributes,
  OdsSelectSizeList,
  OdsLogger,
} from '@ovhcloud/ods-core';
import {
  odsGetUnitTestAttributeBaseOptions,
  odsGetUnitTestAttributeContextOptions,
  OdsSelectCreateAttributes, OdsMockNativeMethod, OdsMockPropertyDescriptor,
  OdsStringAttributes2Str,
  odsUnitTestAttribute,
  OdsUnitTestAttributeType
} from '@ovhcloud/ods-testing';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

const logger = new OdsLogger('osds-select-spec');

// mock validity property that does not exist when stencil mock HTMLInputElement
OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => OdsCreateDefaultValidityState());

describe('spec:osds-select', () => {
  logger.log('init');
  let page: SpecPage;
  let instance: OsdsSelect;
  let slotPlaceholder: HTMLElement | null | undefined;
  let htmlSelect: HTMLSelectElement | null | undefined;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsSelectAttributes>, html?: string }) {
    const minimalAttributes: OdsSelectAttributes = OdsSelectCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSelectAttributes>(minimalAttributes, odsSelectDefaultAttributes);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, "setCustomValidity", jest.fn());

    page = await newSpecPage({
      components: [OsdsSelect],
      html: `<osds-select ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-select>`,
    });

    instance = page.rootInstance;
    slotPlaceholder = page.root?.shadowRoot?.querySelector('slot[name=placeholder]');
    htmlSelect = document.querySelector('osds-select') as HTMLSelectElement;
    htmlSelect && (htmlSelect.focus = jest.fn());
  }

  it('should render', async () => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a placeholder slot', async () => {
      await setup({ attributes: {} });
      expect(slotPlaceholder).toBeTruthy();
    });
  });

  describe('attributes', () => {

    function getAttributeContextOptions<Name extends keyof OdsSelectAttributes = keyof OdsSelectAttributes>({
                                                                                                            name,
                                                                                                            list,
                                                                                                            defaultValue
                                                                                                          }: odsGetUnitTestAttributeContextOptions<OdsSelectAttributes, Name>) {
      return odsGetUnitTestAttributeBaseOptions<OdsSelectAttributes, Name, OsdsSelect>({
        name,
        list,
        defaultValue,
        instance: () => instance,
        root: () => page.root,
        wait: () => page.waitForChanges(),
        setup: (value) => {
          const attributes: Partial<OdsSelectAttributes> = {};
          attributes[ name ] = value;
          return setup({ attributes });
        },
      })
    }

    describe('color', () => {
      odsUnitTestAttribute<OdsSelectAttributes, 'color'>({
        ...getAttributeContextOptions({
          name: 'color',
          list: [OdsThemeColorIntent.primary],
          defaultValue: odsSelectDefaultAttributes.color,
        })
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsSelectAttributes, 'disabled'>({
        ...getAttributeContextOptions({
          name: 'disabled',
          list: [false, true],
          defaultValue: odsSelectDefaultAttributes.disabled,
        })
      });
    });

    describe('flex', () => {
      odsUnitTestAttribute<OdsSelectAttributes, 'flex'>({
        ...getAttributeContextOptions({
          name: 'flex',
          list: [false, true],
          defaultValue: odsSelectDefaultAttributes.flex,
        })
      });
    });

    describe('required', () => {
      odsUnitTestAttribute<OdsSelectAttributes, 'required'>({
        ...getAttributeContextOptions({
          name: 'required',
          list: [false, true],
          defaultValue: odsSelectDefaultAttributes.required,
        })
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsSelectAttributes, 'size'>({
        ...getAttributeContextOptions({
          name: 'size',
          list: OdsSelectSizeList,
          defaultValue: odsSelectDefaultAttributes.size,
        })
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsSelectAttributes, 'value'>({
        ...getAttributeContextOptions({
          name: 'value',
          list: [3, 4],
          defaultValue: odsSelectDefaultAttributes.value,
        }),
        include: [OdsUnitTestAttributeType.MUTABLE]
      });
    });

  });

  describe('methods', () => {
    it('should have defaultValue as value if set', async () => {
      const defaultValue = 4;
      await setup({ attributes: { defaultValue } });
      expect(instance).toBeTruthy();
      expect(instance?.value).toBe(`${defaultValue}`);
    });

    it('should call reset function and set value to defaultValue', async () => {
      const defaultValue = 4;
      await setup({ attributes: { defaultValue, value: 2 } });
      expect(instance).toBeTruthy();
      await instance.reset();
      expect(instance?.value).toBe(`${defaultValue}`);
    });

    it('should call reset function and set value to empty string if defaultValue is unset', async () => {
      await setup({ attributes: { value: 2 } });
      expect(instance).toBeTruthy();
      await instance.reset();
      expect(instance?.value).toBe('');
    });

    it('should call clear function and set value to an empty string', async () => {
      await setup({ attributes: { value: 2 } });
      expect(instance).toBeTruthy();
      await instance.clear();
      expect(instance?.value).toBe('');
    });

    it('should call setFocus function and change the focus state of the component', async () => {
      await setup({ attributes: { } });
      expect(instance).toBeTruthy();
      expect(htmlSelect).toBeTruthy();
      await instance.setFocus();
      expect(htmlSelect?.value).toBe('');
    });

    it('should call setInputTabindex function and inputTabindex should be set to 4', async () => {
      await setup({ attributes: { value: 2 } });
      expect(instance).toBeTruthy();
      await instance.setInputTabindex(4);
      expect(instance?.tabindex).toBe(4);
    });

    it('should call getValidity function and get an OdsValidityState.invalid to true', async () => {
      await setup({ attributes: { value: 'my-value-1' } });
      expect(instance).toBeTruthy();
      jest.spyOn(instance, 'getValidity');
      const validity = await instance.getValidity();
      expect(instance.getValidity).toHaveBeenCalledTimes(1);
      expect(validity?.invalid).toBe(false);
    });
  });

  describe('events', () => {
    it('odsValueChange', async () => {
      await setup({ attributes: { } });
      expect(instance.odsValueChange).toBeTruthy();
    });

    it('odsBlur', async () => {
      await setup({ attributes: { } });
      expect(instance.odsBlur).toBeTruthy();
    });

    it('odsFocus', async () => {
      await setup({ attributes: { } });
      expect(instance.odsFocus).toBeTruthy();
    });
  });
});
