jest.mock('./core/controller'); // keep jest.mock before any

import type { SpecPage } from '@stencil/core/testing';
import type { OdsDatepickerAttribute } from './interfaces/attributes';
import { newSpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OsdsDatepicker } from './osds-datepicker';
import { OdsDatepickerController } from './core/controller';

describe('spec:osds-datepicker', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsDatepicker;
  let controller: OdsDatepickerController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsDatepickerAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsDatepickerAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsDatepicker],
      html: `<osds-datepicker ${odsStringAttributes2Str(stringAttributes)}></osds-datepicker>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsDatepickerController as unknown as jest.SpyInstance<OdsDatepickerController, unknown[]>).mock.instances[0];
  }

  it('should render', async () => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('clearable', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'clearable'>({
        name: 'clearable',
        defaultValue: DEFAULT_ATTRIBUTE.clearable,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['clearable']: value } }),
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        ...config,
      });
    });

    describe('error', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'error'>({
        name: 'error',
        defaultValue: DEFAULT_ATTRIBUTE.error,
        newValue: 'Bip bop, we encountered a problem.',
        value: '',
        setup: (value) => setup({ attributes: { ['error']: value } }),
        ...config,
      });
    });

    describe('format', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'format'>({
        name: 'format',
        defaultValue: DEFAULT_ATTRIBUTE.format,
        newValue: 'dd/mm/yyyy',
        value: 'yyyy-mm-dd',
        setup: (value) => setup({ attributes: { ['format']: value } }),
        ...config,
      });
    });

    describe('placeholder', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'placeholder'>({
        name: 'placeholder',
        defaultValue: DEFAULT_ATTRIBUTE.placeholder,
        newValue: 'placeholder',
        value: '',
        setup: (value) => setup({ attributes: { ['placeholder']: value } }),
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        newValue: new Date('1999-11-02'),
        value: null,
        setup: (value) => setup({ attributes: { ['value']: value } }),
        ...config,
      });
    });
  });

  describe('controller', () => {
    describe('events', () => {
      it('should call onBlur on blur', async () => {
        await setup({});
        instance?.onBlur();
        expect(controller.onBlur).toHaveBeenCalledTimes(1);
        expect(controller.onBlur).toHaveBeenCalledWith();
      });

      it('should call onChange on change', async () => {
        await setup({});
        instance.onChange(new Date(''));
        expect(controller.onChange).toHaveBeenCalledTimes(1);
      });

      it('should call onFocus on focus', async () => {
        await setup({});
        instance?.onFocus();
        expect(controller.onFocus).toHaveBeenCalledTimes(1);
        expect(controller.onFocus).toHaveBeenCalledWith();
      });
    });

    describe('watchers', () => {
      it('should call onValueChange on value change', async () => {
        const value = new Date('1999-11-02');
        await setup({ });
        instance.value = value;

        expect(controller.onValueChange).toHaveBeenCalledTimes(1);
        expect(controller.onValueChange).toHaveBeenCalledWith(value, null);
      });
    });
  });
});
