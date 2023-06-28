jest.mock('@ovhcloud/ods-core/src/components/input/ods-input-controller'); // keep jest.mock before any

import {
  Ods,
  OdsComponentAttributes2StringAttributes,
  OdsCreateDefaultValidityState,
  OdsFormControl,
  OdsInputAttributes,
  OdsInputController,
  OdsInputSizeList,
  OdsInputType,
  OdsLogger,
  odsInputDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsMockNativeMethod,
  OdsMockPropertyDescriptor,
  OdsStringAttributes2Str,
  OdsUnitTestAttributeType,
  odsInputBaseAttributes,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsInput } from './osds-input';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

const logger = new OdsLogger('osds-input-spec');

// mock validity property that does not exist when stencil mock HTMLInputElement
OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => OdsCreateDefaultValidityState());

describe('spec:osds-input', () => {
  logger.log('init');

  let page: SpecPage;
  let htmlInput: HTMLInputElement | null | undefined;
  let anotherInput: HTMLInputElement | null | undefined;
  let instance: OsdsInput;
  let controller: OdsInputController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsInputAttributes>, html?: string }) {
    const minimalAttributes: OdsInputAttributes = OdsCreateAttributes(attributes, odsInputBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsInputAttributes>(minimalAttributes, odsInputDefaultAttributes);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, "setCustomValidity", jest.fn());

    page = await newSpecPage({
      components: [OsdsInput],
      html: `<osds-input ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-input><input id="anotherInput"/>`,
    });

    instance = page.rootInstance;

    anotherInput = page.body?.querySelector('#anotherInput') as HTMLInputElement;

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
      page: () => page,
      instance: () => instance,
      setup
    };

    describe('clearable', () => {
      odsUnitTestAttribute<OdsInputAttributes, 'clearable'>({
        ...getAttributeContextOptions<OdsInputAttributes, OsdsInput, 'clearable'>({
          name: 'clearable',
          list: [false, true],
          defaultValue: odsInputDefaultAttributes.clearable,
          ...config
        })
      });
    });

    describe('color', () => {
      odsUnitTestAttribute<OdsInputAttributes, 'color'>({
        ...getAttributeContextOptions<OdsInputAttributes, OsdsInput, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsInputDefaultAttributes.color,
          ...config
        })
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsInputAttributes, 'contrasted'>({
        ...getAttributeContextOptions<OdsInputAttributes, OsdsInput, 'contrasted'>({
          name: 'contrasted',
          list: [false, true],
          defaultValue: odsInputDefaultAttributes.contrasted,
          ...config
        })
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsInputAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsInputAttributes, OsdsInput, 'disabled'>({
          name: 'disabled',
          list: [false, true],
          defaultValue: odsInputDefaultAttributes.disabled,
          ...config
        })
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsInputAttributes, 'inline'>({
        ...getAttributeContextOptions<OdsInputAttributes, OsdsInput, 'inline'>({
          name: 'inline',
          list: [false, true],
          defaultValue: odsInputDefaultAttributes.inline,
          ...config
        })
      });
    });

    describe('loading', () => {
      odsUnitTestAttribute<OdsInputAttributes, 'loading'>({
        ...getAttributeContextOptions<OdsInputAttributes, OsdsInput, 'loading'>({
          name: 'loading',
          list: [false, true],
          defaultValue: odsInputDefaultAttributes.loading,
          ...config
        })
      });
    });

    describe('masked', () => {
      odsUnitTestAttribute<OdsInputAttributes, 'masked'>({
        ...getAttributeContextOptions<OdsInputAttributes, OsdsInput, 'masked'>({
          name: 'masked',
          list: [false, true],
          defaultValue: odsInputDefaultAttributes.masked,
          ...config
        }),
        include: [OdsUnitTestAttributeType.MUTABLE]
      });
    });

    describe('max', () => {
      odsUnitTestAttribute<OdsInputAttributes, 'max'>({
        ...getAttributeContextOptions<OdsInputAttributes, OsdsInput, 'max'>({
          name: 'max',
          list: [3, 12],
          defaultValue: odsInputDefaultAttributes.max,
          ...config
        })
      });
    });

    describe('min', () => {
      odsUnitTestAttribute<OdsInputAttributes, 'min'>({
        ...getAttributeContextOptions<OdsInputAttributes, OsdsInput, 'min'>({
          name: 'min',
          list: [3, 12],
          defaultValue: odsInputDefaultAttributes.min,
          ...config
        })
      });
    });

    describe('placeholder', () => {
      odsUnitTestAttribute<OdsInputAttributes, 'placeholder'>({
        ...getAttributeContextOptions<OdsInputAttributes, OsdsInput, 'placeholder'>({
          name: 'placeholder',
          list: ['oles', 'ipsum'],
          defaultValue: odsInputDefaultAttributes.placeholder,
          ...config
        })
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsInputAttributes, 'size'>({
        ...getAttributeContextOptions<OdsInputAttributes, OsdsInput, 'size'>({
          name: 'size',
          list: OdsInputSizeList,
          defaultValue: odsInputDefaultAttributes.size,
          ...config
        })
      });
    });

    describe('step', () => {
      odsUnitTestAttribute<OdsInputAttributes, 'step'>({
        ...getAttributeContextOptions<OdsInputAttributes, OsdsInput, 'step'>({
          name: 'step',
          list: [1, 2],
          defaultValue: odsInputDefaultAttributes.step,
          ...config
        })
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsInputAttributes, 'value'>({
        ...getAttributeContextOptions<OdsInputAttributes, OsdsInput, 'value'>({
          name: 'value',
          list: [3, 4],
          defaultValue: odsInputDefaultAttributes.value,
          ...config
        }),
        include: [OdsUnitTestAttributeType.MUTABLE]
      });
    });

  });

  describe('value changes', () => {
    it('input value should change if component value changed', async () => {
      const newValue = 2;
      await setup({ attributes: { type: OdsInputType.number, value: 2 } });
      instance.value = newValue;
      await page.waitForChanges();
      expect(`${htmlInput?.value}`).toBe(`${newValue}`);
    });
  });

  describe('events', () => {
    it('odsValueChange', async () => {
      await setup({ attributes: { type: OdsInputType.number } });
      expect(instance.odsValueChange).toBeTruthy();
    });

    it('odsInputBlur', async () => {
      await setup({ attributes: { type: OdsInputType.number } });
      expect(instance.odsInputBlur).toBeTruthy();
    });

    it('odsInputFocus', async () => {
      await setup({ attributes: { type: OdsInputType.number } });
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

      it('should call hide from hide method', async () => {
        await setup({});
        await instance.hide();

        expect(controller.hide).toHaveBeenCalledTimes(1);
        expect(controller.hide).toHaveBeenCalledWith();
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
