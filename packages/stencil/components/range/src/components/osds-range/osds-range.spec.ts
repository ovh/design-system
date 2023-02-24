jest.mock('@ovhcloud/ods-core/src/components/range/ods-range-controller'); // keep jest.mock before any

import { OdsComponentAttributes2StringAttributes, OdsCreateDefaultValidityState, OdsFormControl, OdsRangeAttributes, OdsRangeController, OdsRangeValueChangeEventDetail, odsRangeDefaultAttributes } from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsMockNativeMethod,
  OdsMockPropertyDescriptor,
  OdsStringAttributes2Str,
  OdsUnitTestAttributeType,
  odsRangeBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsRange } from './osds-range';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

// mock validity property that does not exist when stencil mock HTMLInputElement
OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => OdsCreateDefaultValidityState());

describe('spec:osds-range', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsRange;
  let htmlInput: HTMLInputElement | null | undefined;
  let controller: OdsRangeController;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsRangeAttributes> } = {}) {
    const minimalAttributes: OdsRangeAttributes = OdsCreateAttributes(attributes, odsRangeBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsRangeAttributes>(minimalAttributes, odsRangeDefaultAttributes);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, "setCustomValidity", jest.fn());

    page = await newSpecPage({
      components: [OsdsRange],
      html: `<osds-range ${OdsStringAttributes2Str(stringAttributes)}></osds-range>`,
    });

    root = page.root;
    instance = page.rootInstance;

    htmlInput = page.root?.shadowRoot?.querySelector('.range-input');
    controller = (OdsRangeController as unknown as jest.SpyInstance<OdsRangeController, unknown[]>).mock.instances[0];
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async () => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      setup
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsRangeAttributes, 'color'>({
        ...getAttributeContextOptions<OdsRangeAttributes, OsdsRange, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsRangeDefaultAttributes.color,
          ...config
        })
      });
      it('should set a color if attribute is added', async () => {
        const randomColor = OdsThemeColorIntentList[Math.floor(Math.random() * OdsThemeColorIntentList.length)];
        await setup({ attributes: { color: randomColor } });
        expect(page.root?.color).toBe(randomColor);
      });
    });
    describe('disabled', () => {
      odsUnitTestAttribute<OdsRangeAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsRangeAttributes, OsdsRange, 'disabled'>({
          name: 'disabled',
          list: [false, true],
          defaultValue: odsRangeDefaultAttributes.disabled,
          ...config
        })
      });
    });
    describe('flex', () => {
      odsUnitTestAttribute<OdsRangeAttributes, 'flex'>({
        ...getAttributeContextOptions<OdsRangeAttributes, OsdsRange, 'flex'>({
          name: 'flex',
          list: [false, true],
          defaultValue: odsRangeDefaultAttributes.flex,
          ...config
        })
      });
    });
    describe('max', () => {
      odsUnitTestAttribute<OdsRangeAttributes, 'max'>({
        ...getAttributeContextOptions<OdsRangeAttributes, OsdsRange, 'max'>({
          name: 'max',
          list: [3, 12],
          defaultValue: odsRangeDefaultAttributes.max,
          ...config
        })
      });
    });

    describe('min', () => {
      odsUnitTestAttribute<OdsRangeAttributes, 'min'>({
        ...getAttributeContextOptions<OdsRangeAttributes, OsdsRange, 'min'>({
          name: 'min',
          list: [3, 12],
          defaultValue: odsRangeDefaultAttributes.min,
          ...config
        })
      });
    });

    describe('step', () => {
      odsUnitTestAttribute<OdsRangeAttributes, 'step'>({
        ...getAttributeContextOptions<OdsRangeAttributes, OsdsRange, 'step'>({
          name: 'step',
          list: [1, 2],
          defaultValue: odsRangeDefaultAttributes.step,
          ...config
        })
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsRangeAttributes, 'value'>({
        ...getAttributeContextOptions<OdsRangeAttributes, OsdsRange, 'value'>({
          name: 'value',
          list: [3, 4],
          defaultValue: odsRangeDefaultAttributes.value,
          ...config
        }),
        include: [OdsUnitTestAttributeType.MUTABLE]
      });
    });

    describe('value (dual case)', () => {
      odsUnitTestAttribute<OdsRangeAttributes, 'value'>({
        ...getAttributeContextOptions<OdsRangeAttributes, OsdsRange, 'value'>({
          name: 'value',
          list: [[1, 2], [3, 4]],
          defaultValue: odsRangeDefaultAttributes.value,
          ...config
        }),
        exclude: [OdsUnitTestAttributeType.DEFAULT, OdsUnitTestAttributeType.MUTABLE, OdsUnitTestAttributeType.PROPERTY, OdsUnitTestAttributeType.REFLECTED]
      });
    });
  });
  describe('events', () => {
    it('odsValueChange', async () => {
      await setup({ attributes: {} });
      expect(instance.odsValueChange).toBeTruthy();
    });
  });

  describe('controller', () => {
    describe('lifecycle', () => {
      it('should call beforeInit on init', async () => {
        await setup();
        expect(controller.beforeInit).toHaveBeenCalledTimes(1);
        expect(controller.beforeInit).toHaveBeenCalledWith();
      });

      it('should call validateAttributes before render', async () => {
        await setup();
        expect(controller.validateAttributes).toHaveBeenCalledTimes(1);
        expect(controller.validateAttributes).toHaveBeenCalledWith();
      });

      it('should call initValue after render', async () => {
        await setup();
        expect(controller.initValue).toHaveBeenCalledTimes(1);
        expect(controller.initValue).toHaveBeenCalledWith();
      });
    });

    describe('events', () => {
      it('should call onInput on input', async () => {
        const event = new Event('');
        const inputEl = document.createElement('input');
        await setup({});
        instance?.onInput(event, inputEl, false);

        expect(controller.onInput).toHaveBeenCalledTimes(1);
        expect(controller.onInput).toHaveBeenCalledWith(event, inputEl, false);
      });

      it('should call onKeyup on keyup', async () => {
        const event = new KeyboardEvent('');
        const inputEl = document.createElement('input');
        await setup({});
        instance?.onKeyup(event, inputEl, false);

        expect(controller.onKeyup).toHaveBeenCalledTimes(1);
        expect(controller.onKeyup).toHaveBeenCalledWith(event, inputEl, false);
      });

      it('should call handleClick on click', async () => {
        await setup();
        instance?.handleClick();

        expect(controller.handleClick).toHaveBeenCalledTimes(1);
        expect(controller.handleClick).toHaveBeenCalledWith();
      });

      it('should emit change', () => {
        const newValue = 2;
        const oldValue = 3;
        const expected: OdsRangeValueChangeEventDetail = {
          value: newValue,
          oldValue,
          validity: undefined
        };
        setup();
        const spy = jest.spyOn(instance?.odsValueChange, 'emit');
        instance?.emitChange(newValue, oldValue);

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(expected);
      });
    });

    describe('methods', () => {
      it('should call getRangeValidity from getValidity method', async () => {
        await setup();
        await instance.getValidity();

        expect(controller.getRangeValidity).toHaveBeenCalledTimes(1);
        expect(controller.getRangeValidity).toHaveBeenCalledWith();
      });

      it('should call hasError from hasError method', async () => {
        await setup();
        instance?.hasError();

        // Called twice (on init + on test)
        expect(controller.hasError).toHaveBeenCalledTimes(2);
        expect(controller.hasError).toHaveBeenCalledWith();
      });

    });

    describe('watchers', () => {
      it('should call onFormControlChange on formControl change', async () => {
        const formControl = new OdsFormControl('id');
        await setup({ attributes: { formControl: null } });
        instance.formControl = formControl;

        expect(controller.onFormControlChange).toHaveBeenCalledTimes(1);
        expect(controller.onFormControlChange).toHaveBeenCalledWith(formControl);
      });

      it('should call onValueChange on value change', async () => {
        const oldValue = 3;
        const newValue = 2;
        await setup({ attributes: { value: oldValue }});
        instance.value = newValue;

        expect(controller.onValueChange).toHaveBeenCalledTimes(1);
        expect(controller.onValueChange).toHaveBeenCalledWith(newValue, `${oldValue}`);
      });
    });
  });
});
