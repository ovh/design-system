jest.mock('./core/controller'); // keep jest.mock before any

import type { OdsRangeAttribute } from './interfaces/attributes';
import type { OdsRangeValueChangeEventDetail } from './interfaces/events';
import type { SpecPage } from '@stencil/core/testing';

import { OdsCreateDefaultValidityState, OdsFormControl } from '@ovhcloud/ods-common-core';
import {
  OdsMockNativeMethod,
  OdsMockPropertyDescriptor,
  OdsUnitTestAttributeType,
  odsComponentAttributes2StringAttributes,
  odsStringAttributes2Str,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { newSpecPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsRangeController } from './core/controller';
import { OsdsRange } from './osds-range';


// mock validity property that does not exist when stencil mock HTMLInputElement
OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => OdsCreateDefaultValidityState());

describe('spec:osds-range', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsRange;
  let controller: OdsRangeController;
  const baseAttribute = {
    color: ODS_THEME_COLOR_INTENT.default,
    disabled: false,
    error: undefined,
    errorStateControl: undefined,
    inline: false,
    max: 100,
    min: 0,
    step: 1,
    value: '',
    forbiddenValues: [],
    formControl: undefined,
  };


  async function setup({ attributes = {} }: { attributes?: Partial<OdsRangeAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsRangeAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, 'setCustomValidity', jest.fn());

    page = await newSpecPage({
      components: [OsdsRange],
      html: `<osds-range ${odsStringAttributes2Str(stringAttributes)}></osds-range>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsRangeController as unknown as jest.SpyInstance<OdsRangeController, unknown[]>).mock.instances[0];
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async() => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsRangeAttribute, 'color'>({
        name: 'color',
        defaultValue: DEFAULT_ATTRIBUTE.color,
        newValue: ODS_THEME_COLOR_INTENT.primary,
        value: ODS_THEME_COLOR_INTENT.default,
        setup: (value) => setup({ attributes: { ['color']: value } }),
        ...config,
      });

      it('should set a color if attribute is added', async() => {
        const randomColor = ODS_THEME_COLOR_INTENTS[Math.floor(Math.random() * ODS_THEME_COLOR_INTENTS.length)];
        await setup({ attributes: { color: randomColor } });
        expect(page.root?.color).toBe(randomColor);
      });
    });
    describe('disabled', () => {
      odsUnitTestAttribute<OdsRangeAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        ...config,
      });
    });
    describe('inline', () => {
      odsUnitTestAttribute<OdsRangeAttribute, 'inline'>({
        name: 'inline',
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        ...config,
      });
    });
    describe('max', () => {
      odsUnitTestAttribute<OdsRangeAttribute, 'max'>({
        name: 'max',
        defaultValue: DEFAULT_ATTRIBUTE.max,
        newValue: 50,
        value: 100,
        setup: (value) => setup({ attributes: { ['max']: value } }),
        ...config,
      });
    });

    describe('min', () => {
      odsUnitTestAttribute<OdsRangeAttribute, 'min'>({
        name: 'min',
        defaultValue: DEFAULT_ATTRIBUTE.min,
        newValue: 0,
        value: 5,
        setup: (value) => setup({ attributes: { ['min']: value } }),
        ...config,
      });
    });

    describe('step', () => {
      odsUnitTestAttribute<OdsRangeAttribute, 'step'>({
        name: 'step',
        defaultValue: DEFAULT_ATTRIBUTE.step,
        newValue: 1,
        value: 2,
        setup: (value) => setup({ attributes: { ['step']: value } }),
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsRangeAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        newValue: 4,
        value: 5,
        setup: (value) => setup({ attributes: { ['value']: value } }),
        include: [OdsUnitTestAttributeType.MUTABLE],
        ...config,
      });
    });

    describe('value (dual case)', () => {
      odsUnitTestAttribute<OdsRangeAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        newValue: [1,2],
        value: [3,4],
        setup: (value) => setup({ attributes: { ['value']: value } }),
        exclude: [OdsUnitTestAttributeType.DEFAULT, OdsUnitTestAttributeType.MUTABLE, OdsUnitTestAttributeType.PROPERTY, OdsUnitTestAttributeType.REFLECTED],
        ...config,
      });
    });
  });
  describe('events', () => {
    it('odsValueChange', async() => {
      await setup({ attributes: {} });
      expect(instance.odsValueChange).toBeTruthy();
    });
  });

  describe('controller', () => {
    describe('lifecycle', () => {
      it('should call beforeInit on init', async() => {
        await setup({});
        expect(controller.beforeInit).toHaveBeenCalledTimes(1);
        expect(controller.beforeInit).toHaveBeenCalledWith();
      });

      it('should call validateAttributes before render', async() => {
        await setup({});
        expect(controller.validateAttributes).toHaveBeenCalledTimes(1);
        expect(controller.validateAttributes).toHaveBeenCalledWith();
      });

      it('should call initValue after render', async() => {
        await setup({});
        expect(controller.initValue).toHaveBeenCalledTimes(1);
        expect(controller.initValue).toHaveBeenCalledWith();
      });
    });

    describe('events', () => {
      it('should call onInput on input', async() => {
        const event = new Event('');
        const inputEl = document.createElement('input');
        await setup({});
        instance?.onInput(event, inputEl, false);

        expect(controller.onInput).toHaveBeenCalledTimes(1);
        expect(controller.onInput).toHaveBeenCalledWith(event, inputEl, false);
      });

      it('should call onKeyup on keyup', async() => {
        const event = new KeyboardEvent('');
        const inputEl = document.createElement('input');
        await setup({});
        instance?.onKeyup(event, inputEl, false);

        expect(controller.onKeyup).toHaveBeenCalledTimes(1);
        expect(controller.onKeyup).toHaveBeenCalledWith(event, inputEl, false);
      });

      it('should call handleClick on click', async() => {
        await setup({});
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
          validity: undefined,
        };
        setup({});
        const spy = jest.spyOn(instance?.odsValueChange, 'emit');
        instance?.emitChange(newValue, oldValue);

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(expected);
      });
    });

    describe('methods', () => {
      it('should call getRangeValidity from getValidity method', async() => {
        await setup({});
        await instance.getValidity();

        expect(controller.getRangeValidity).toHaveBeenCalledTimes(1);
        expect(controller.getRangeValidity).toHaveBeenCalledWith();
      });

      it('should call hasError from hasError method', async() => {
        await setup({});
        instance?.hasError();

        // Called twice (on init + on test)
        expect(controller.hasError).toHaveBeenCalledTimes(2);
        expect(controller.hasError).toHaveBeenCalledWith();
      });

    });

    describe('watchers', () => {
      it('should call onFormControlChange on formControl change', async() => {
        const formControl = new OdsFormControl('id');
        await setup({ attributes: { formControl: null } });
        instance.formControl = formControl;

        expect(controller.onFormControlChange).toHaveBeenCalledTimes(1);
        expect(controller.onFormControlChange).toHaveBeenCalledWith(formControl);
      });

      it('should call onValueChange on value change', async() => {
        const oldValue = 3;
        const newValue = 2;
        await setup({ attributes: { value: oldValue } });
        instance.value = newValue;

        expect(controller.onValueChange).toHaveBeenCalledTimes(1);
        expect(controller.onValueChange).toHaveBeenCalledWith(newValue, `${oldValue}`);
      });
    });
  });
});
