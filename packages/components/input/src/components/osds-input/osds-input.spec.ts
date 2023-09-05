jest.mock('./core/controller'); // keep jest.mock before any

import type { SpecPage } from '@stencil/core/testing';
import type { OdsInputAttribute } from './interfaces/attributes';
import { newSpecPage } from '@stencil/core/testing';
import { OdsCreateDefaultValidityState, OdsFormControl, OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsMockNativeMethod, OdsMockPropertyDescriptor, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_INPUT_SIZE } from './constants/input-size';
import { ODS_INPUT_TYPE } from './constants/input-type';
import { OdsInputController } from './core/controller';
import { OsdsInput } from './osds-input';

const logger = new OdsLogger('osds-input-spec');

// mock validity property that does not exist when stencil mock HTMLInputElement
OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => OdsCreateDefaultValidityState());

describe('spec:osds-input', () => {
  logger.log('init');
  const baseAttribute = { ariaLabel: null, defaultValue: '', forbiddenValues: [], type: ODS_INPUT_TYPE.text, value: '' };
  let page: SpecPage;
  let htmlInput: HTMLInputElement | null | undefined;
  let instance: OsdsInput;
  let controller: OdsInputController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsInputAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsInputAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, "setCustomValidity", jest.fn());

    page = await newSpecPage({
      components: [OsdsInput],
      html: `<osds-input ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-input>`,
    });

    instance = page.rootInstance;
    htmlInput = page.root?.shadowRoot?.querySelector('input');
    // mock methods from the vanilla input into the MockInputElement from stencil
    htmlInput && (htmlInput.stepUp = jest.fn());
    htmlInput && (htmlInput.stepDown = jest.fn());

    controller = (OdsInputController as unknown as jest.SpyInstance<OdsInputController, unknown[]>).mock.instances[0];
  }

  it('should render', async () => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  it('should use an html input', async () => {
    await setup({});
    expect(htmlInput).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('clearable', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'clearable'>({
        name: 'clearable',
        defaultValue: DEFAULT_ATTRIBUTE.clearable,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['clearable']: value } }),
        ...config,
      });
    });

    describe('color', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'color'>({
        name: 'color',
        defaultValue: DEFAULT_ATTRIBUTE.color,
        newValue: ODS_THEME_COLOR_INTENT.primary,
        value: ODS_THEME_COLOR_INTENT.default,
        setup: (value) => setup({ attributes: { ['color']: value } }),
        ...config,
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'contrasted'>({
        name: 'contrasted',
        defaultValue: DEFAULT_ATTRIBUTE.contrasted,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['contrasted']: value } }),
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        ...config,
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'inline'>({
        name: 'inline',
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        ...config,
      });
    });

    describe('loading', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'loading'>({
        name: 'loading',
        defaultValue: DEFAULT_ATTRIBUTE.loading,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['loading']: value } }),
        ...config,
      });
    });

    describe('masked', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'masked'>({
        name: 'masked',
        defaultValue: DEFAULT_ATTRIBUTE.masked,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['masked']: value } }),
        ...config,
      });
    });

    describe('max', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'max'>({
        name: 'max',
        defaultValue: DEFAULT_ATTRIBUTE.max,
        newValue: 3,
        value: 6,
        setup: (value) => setup({ attributes: { ['max']: value } }),
        ...config,
      });
    });

    describe('min', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'min'>({
        name: 'min',
        defaultValue: DEFAULT_ATTRIBUTE.min,
        newValue: 3,
        value: 6,
        setup: (value) => setup({ attributes: { ['min']: value } }),
        ...config,
      });
    });

    describe('placeholder', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'placeholder'>({
        name: 'placeholder',
        defaultValue: DEFAULT_ATTRIBUTE.placeholder,
        newValue: 'oles',
        value: 'ipsum',
        setup: (value) => setup({ attributes: { ['placeholder']: value } }),
        ...config,
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'size'>({
        name: 'size',
        defaultValue: DEFAULT_ATTRIBUTE.size,
        newValue: ODS_INPUT_SIZE.md,
        value: ODS_INPUT_SIZE.md,
        setup: (value) => setup({ attributes: { ['size']: value } }),
        ...config,
      });
    });

    describe('step', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'step'>({
        name: 'step',
        defaultValue: DEFAULT_ATTRIBUTE.step,
        newValue: 1,
        value: 2,
        setup: (value) => setup({ attributes: { ['step']: value } }),
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsInputAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        newValue: 1,
        value: 2,
        setup: (value) => setup({ attributes: { ['value']: value } }),
        ...config,
      });
    });
  });

  describe('value changes', () => {
    it('input value should change if component value changed', async () => {
      const newValue = 2;
      await setup({ attributes: { type: ODS_INPUT_TYPE.number, value: 2 } });
      instance.value = newValue;
      await page.waitForChanges();
      expect(`${htmlInput?.value}`).toBe(`${newValue}`);
    });
  });

  describe('events', () => {
    it('odsValueChange', async () => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number } });
      expect(instance.odsValueChange).toBeTruthy();
    });

    it('odsInputBlur', async () => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number } });
      expect(instance.odsInputBlur).toBeTruthy();
    });

    it('odsInputFocus', async () => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number } });
      expect(instance.odsInputFocus).toBeTruthy();
    });
  });

  describe('controller', () => {
    describe('lifecycle', () => {
      it('should call beforeInit', async () => {
        await setup({});
        expect(controller.beforeInit).toHaveBeenCalledTimes(1);
        expect(controller.beforeInit).toHaveBeenCalledWith();
      });
    });

    describe('events', () => {
      it('should call onBlur on blur', async () => {
        await setup({});
        instance?.onBlur();
        expect(controller.onBlur).toHaveBeenCalledTimes(1);
        expect(controller.onBlur).toHaveBeenCalledWith();
      });

      it('should call onFocus on focus', async () => {
        await setup({});
        instance?.onFocus();
        expect(controller.onFocus).toHaveBeenCalledTimes(1);
        expect(controller.onFocus).toHaveBeenCalledWith();
      });

      it('should call onInput on input', async () => {
        const event = new Event('');
        await setup({});
        instance?.onInput(event);
        expect(controller.onInput).toHaveBeenCalledTimes(1);
        expect(controller.onInput).toHaveBeenCalledWith(event);
      });

      it('should call onChange on change', async () => {
        await setup({});
        instance?.onChange();
        expect(controller.onChange).toHaveBeenCalledTimes(1);
        expect(controller.onChange).toHaveBeenCalledWith();
      });
    });

    describe('methods', () => {
      it('should call getInputValidity from getValidity method', async () => {
        await setup({});
        await instance.getValidity();

        expect(controller.getInputValidity).toHaveBeenCalledTimes(1);
      });

      it('should call clear from clear method', async () => {
        await setup({});
        await instance.clear();

        expect(controller.clear).toHaveBeenCalledTimes(1);
        expect(controller.clear).toHaveBeenCalledWith();
      });

      it('should call clear from clear method but should not change the value if disabled', async () => {
        await setup({ attributes: { type: ODS_INPUT_TYPE.password, value: 'Just ODS being ahead', masked: false, disabled: true } });
        await instance.clear();

        expect(controller.clear).toHaveBeenCalledTimes(1);
        expect(controller.clear).toHaveBeenCalledWith();

        const value = instance.value;
        expect(value).toBe('Just ODS being ahead');
      });

      it('should call hide from hide method', async () => {
        await setup({});
        await instance.hide();

        expect(controller.hide).toHaveBeenCalledTimes(1);
        expect(controller.hide).toHaveBeenCalledWith();
      });

      it('should call hide from hide method but should not display the value if disabled', async () => {
        await setup({ attributes: { type: ODS_INPUT_TYPE.password, value: 'Just ODS being ahead', masked: true, disabled: true } });
        await instance.hide();

        expect(controller.hide).toHaveBeenCalledTimes(1);
        expect(controller.hide).toHaveBeenCalledWith();

        const type = instance.type;
        expect(type).toBe(ODS_INPUT_TYPE.password);
      });

      it('should call reset from reset method', async () => {
        await setup({});
        await instance.reset();

        expect(controller.reset).toHaveBeenCalledTimes(1);
        expect(controller.reset).toHaveBeenCalledWith();
      });

      it('should call stepUp from stepUp method', async () => {
        await setup({});
        await instance.stepUp();

        expect(controller.stepUp).toHaveBeenCalledTimes(1);
        expect(controller.stepUp).toHaveBeenCalledWith();
      });

      it('should call stepDown from stepDown method', async () => {
        await setup({});
        await instance.stepDown();

        expect(controller.stepDown).toHaveBeenCalledTimes(1);
        expect(controller.stepDown).toHaveBeenCalledWith();
      });

      it('should call setInputTabindex from setInputTabindex method', async () => {
        const tabIndex = 1;
        await setup({});
        await instance.setInputTabindex(tabIndex);

        expect(controller.setInputTabindex).toHaveBeenCalledTimes(1);
        expect(controller.setInputTabindex).toHaveBeenCalledWith(tabIndex);
      });
    });

    describe('watchers', () => {
      it('should call onFormControlChange on formControl change', async () => {
        await setup({ attributes: { formControl: undefined } });
        instance.formControl = new OdsFormControl('id');
        const formControl = instance.formControl;

        expect(controller.onFormControlChange).toHaveBeenCalledTimes(1);
        expect(controller.onFormControlChange).toHaveBeenCalledWith(formControl);
      });

      it('should call onDefaultValueChange on defaultValue change', async () => {
        const defaultValue = 'defaultValue';
        await setup({ attributes: { defaultValue: '' } });
        instance.defaultValue = defaultValue;

        expect(controller.onDefaultValueChange).toHaveBeenCalledTimes(1);
        expect(controller.onDefaultValueChange).toHaveBeenCalledWith(defaultValue);
      });

      it('should call onValueChange on value change', async () => {
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
