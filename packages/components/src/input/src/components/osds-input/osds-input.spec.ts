jest.mock('./core/controller'); // keep jest.mock before any
jest.mock('@ovhcloud/ods-common-core'); // keep jest.mock before any

import type { OdsInputAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { OdsCreateDefaultValidityState } from '@ovhcloud/ods-common-core';
import { OdsMockNativeMethod, OdsMockPropertyDescriptor, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_INPUT_TYPE } from './constants/input-type';
import { OdsInputController } from './core/controller';
import { OsdsInput } from './osds-input';

// mock validity property that does not exist when stencil mock HTMLInputElement
OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => OdsCreateDefaultValidityState());

describe('spec:osds-input', () => {

  const baseAttribute = {
    ariaLabel: null,
    defaultValue: '',
    disabled: false,
    error: false,
    forbiddenValues: [],
    name: 'OsdsInput',
    type: ODS_INPUT_TYPE.text,
    value: '',
  };
  let page: SpecPage;
  let htmlInput: HTMLInputElement | null | undefined;
  let instance: OsdsInput;
  let controller: OdsInputController<OsdsInput>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsInputAttribute>, html?: string } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsInputAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, 'setCustomValidity', jest.fn());

    page = await newSpecPage({
      components: [OsdsInput],
      html: `<osds-input ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-input>`,
    });

    instance = page.rootInstance;
    htmlInput = page.root?.shadowRoot?.querySelector('input');
    // mock methods from the vanilla input into the MockInputElement from stencil
    htmlInput && (htmlInput.stepUp = jest.fn());
    htmlInput && (htmlInput.stepDown = jest.fn());

    controller = (OdsInputController as unknown as jest.SpyInstance<OdsInputController<OsdsInput>, unknown[]>).mock.instances[0];
  }

  it('should render', async() => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  it('should use an html input', async() => {
    await setup({});
    expect(htmlInput).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: (): OsdsInput => instance,
      page: (): SpecPage => page,
      root: (): SpecPage['root'] => page.root,
      wait: (): Promise<void> => page.waitForChanges(),
    };

    describe('clearable', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'clearable'>({
        defaultValue: DEFAULT_ATTRIBUTE.clearable,
        name: 'clearable',
        newValue: false,
        setup: (value) => setup({ attributes: { ['clearable']: value } }),
        value: true,
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'disabled'>({
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        name: 'disabled',
        newValue: false,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        value: true,
        ...config,
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'inline'>({
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        name: 'inline',
        newValue: false,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        value: true,
        ...config,
      });
    });

    describe('loading', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'loading'>({
        defaultValue: DEFAULT_ATTRIBUTE.loading,
        name: 'loading',
        newValue: false,
        setup: (value) => setup({ attributes: { ['loading']: value } }),
        value: true,
        ...config,
      });
    });

    describe('masked', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'masked'>({
        defaultValue: DEFAULT_ATTRIBUTE.masked,
        name: 'masked',
        newValue: false,
        setup: (value) => setup({ attributes: { ['masked']: value } }),
        value: true,
        ...config,
      });
    });

    describe('max', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'max'>({
        defaultValue: DEFAULT_ATTRIBUTE.max,
        name: 'max',
        newValue: 3,
        setup: (value) => setup({ attributes: { ['max']: value } }),
        value: 6,
        ...config,
      });
    });

    describe('min', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'min'>({
        defaultValue: DEFAULT_ATTRIBUTE.min,
        name: 'min',
        newValue: 3,
        setup: (value) => setup({ attributes: { ['min']: value } }),
        value: 6,
        ...config,
      });
    });

    describe('pattern', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'pattern'>({
        defaultValue: DEFAULT_ATTRIBUTE.pattern,
        name: 'pattern',
        // eslint-disable-next-line no-useless-escape
        newValue: '\d{4,4}',
        setup: (value) => setup({ attributes: { ['pattern']: value } }),
        value: '',
        ...config,
      });
    });

    describe('placeholder', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'placeholder'>({
        defaultValue: DEFAULT_ATTRIBUTE.placeholder,
        name: 'placeholder',
        newValue: 'oles',
        setup: (value) => setup({ attributes: { ['placeholder']: value } }),
        value: 'ipsum',
        ...config,
      });
    });

    describe('prefixValue', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'prefixValue'>({
        defaultValue: DEFAULT_ATTRIBUTE.prefixValue,
        name: 'prefixValue',
        newValue: 'prefix',
        setup: (value) => setup({ attributes: { ['prefixValue']: value } }),
        value: '',
        ...config,
      });
    });

    describe('step', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'step'>({
        defaultValue: DEFAULT_ATTRIBUTE.step,
        name: 'step',
        newValue: 1,
        setup: (value) => setup({ attributes: { ['step']: value } }),
        value: 2,
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'value'>({
        defaultValue: DEFAULT_ATTRIBUTE.value,
        name: 'value',
        newValue: 1,
        setup: (value) => setup({ attributes: { ['value']: value } }),
        value: 2,
        ...config,
      });
    });
  });

  describe('value changes', () => {
    it('input value should change if component value changed', async() => {
      const newValue = 2;
      await setup({ attributes: { type: ODS_INPUT_TYPE.number, value: 2 } });
      instance.value = newValue;
      await page.waitForChanges();
      expect(`${htmlInput?.value}`).toBe(`${newValue}`);
    });
  });

  describe('events', () => {
    it('odsValueChange', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number } });
      expect(instance.odsValueChange).toBeTruthy();
    });

    it('odsBlur', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number } });
      expect(instance.odsBlur).toBeTruthy();
    });

    it('odsFocus', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number } });
      expect(instance.odsFocus).toBeTruthy();
    });
  });

  describe('controller', () => {
    describe('lifecycle', () => {
      it('should call beforeInit', async() => {
        await setup({});
        expect(controller.beforeInit).toHaveBeenCalledTimes(1);
        expect(controller.beforeInit).toHaveBeenCalledWith();
      });
    });

    describe('events', () => {
      it('should call onInput on input', async() => {
        const event = new Event('');
        await setup({});
        instance?.onInput(event);
        expect(controller.onInput).toHaveBeenCalledTimes(1);
        expect(controller.onInput).toHaveBeenCalledWith(event);
      });
    });

    describe('methods', () => {
      it('should call getValidity from getValidity method', async() => {
        await setup({});
        await instance.getValidity();

        expect(controller.getValidity).toHaveBeenCalledTimes(1);
      });

      it('should call clear from clear method', async() => {
        await setup({});
        await instance.clear();

        expect(controller.clear).toHaveBeenCalledTimes(1);
        expect(controller.clear).toHaveBeenCalledWith();
      });

      it('should call clear from clear method but should not change the value if disabled', async() => {
        await setup({ attributes: { disabled: true, masked: false, type: ODS_INPUT_TYPE.password, value: 'Just ODS being ahead' } });
        await instance.clear();

        expect(controller.clear).toHaveBeenCalledTimes(1);
        expect(controller.clear).toHaveBeenCalledWith();

        const value = instance.value;
        expect(value).toBe('Just ODS being ahead');
      });

      it('should call hide from hide method', async() => {
        await setup({});
        await instance.hide();

        expect(controller.hide).toHaveBeenCalledTimes(1);
        expect(controller.hide).toHaveBeenCalledWith();
      });

      it('should call hide from hide method but should not display the value if disabled', async() => {
        await setup({ attributes: { disabled: true, masked: true, type: ODS_INPUT_TYPE.password, value: 'Just ODS being ahead' } });
        await instance.hide();

        expect(controller.hide).toHaveBeenCalledTimes(1);
        expect(controller.hide).toHaveBeenCalledWith();

        const type = instance.type;
        expect(type).toBe(ODS_INPUT_TYPE.password);
      });

      it('should call reset from reset method', async() => {
        await setup({});
        await instance.reset();

        expect(controller.reset).toHaveBeenCalledTimes(1);
        expect(controller.reset).toHaveBeenCalledWith();
      });

      it('should call stepUp from stepUp method', async() => {
        await setup({});
        await instance.stepUp();

        expect(controller.stepUp).toHaveBeenCalledTimes(1);
        expect(controller.stepUp).toHaveBeenCalledWith();
      });

      it('should call stepDown from stepDown method', async() => {
        await setup({});
        await instance.stepDown();

        expect(controller.stepDown).toHaveBeenCalledTimes(1);
        expect(controller.stepDown).toHaveBeenCalledWith();
      });
    });

    describe('watchers', () => {
      it('should call onValueChange on value change', async() => {
        const value = 'value';
        const oldValue = 'oldValue';
        await setup({ attributes: { value: oldValue } });
        instance.value = value;

        expect(controller.onValueChange).toHaveBeenCalledTimes(1);
        expect(controller.onValueChange).toHaveBeenCalledWith(value, oldValue);
      });
    });
  });
});
