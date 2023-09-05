import type { OdsInputValidityState } from '../interfaces/attributes';
import { Ods, OdsFormControl, OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import { OdsInputController } from './controller';
import { ODS_INPUT_TYPE } from '../constants/input-type';
import { OsdsInput } from '../osds-input';

class OdsInputMock extends OsdsInput {
  constructor(attribute: Partial<OsdsInput>) {
    super();
    Object.assign(this, attribute)
  }
  emitChange = jest.fn();
  emitFocus = jest.fn();
  emitBlur = jest.fn();
}

describe('spec:ods-input-controller', () => {
  let controller: OdsInputController;
  let component: OsdsInput;
  let spyOnOnFormControlChange: jest.SpyInstance<void, jest.ArgsType<OdsInputController['onFormControlChange']>>;
  let spyOnAssertValue: jest.SpyInstance<void, jest.ArgsType<OdsInputController['assertValue']>>;
  let spyOnOnDefaultValueChange: jest.SpyInstance<void, jest.ArgsType<OdsInputController['onDefaultValueChange']>>;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OsdsInput> = {}) {
    component = new OdsInputMock(attributes);
    controller = new OdsInputController(component);
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsInputController
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  describe('methods', () => {
    describe('methods:onFormControlChange', () => {
      const formControl = new OdsFormControl<OdsInputValidityState>('id');

      beforeEach(() => {
        formControl.register = jest.fn();
      });

      it('should not call formControl.register', () => {
        setup();
        controller.onFormControlChange();

        expect(formControl.register).not.toHaveBeenCalled();
      });

      it('should call formControl.register', () => {
        setup();
        controller.onFormControlChange(formControl);

        expect(formControl.register).toHaveBeenCalledTimes(1);
        expect(formControl.register).toHaveBeenCalledWith(component);
      });
    });

    describe('methods:beforeInit', () => {
      it('should call onFormControlChange', () => {
        const formControl = new OdsFormControl<OdsInputValidityState>('id');
        setup({ formControl });
        spyOnOnFormControlChange = jest.spyOn(controller, 'onFormControlChange');
        controller.beforeInit();

        expect(spyOnOnFormControlChange).toHaveBeenCalledTimes(1);
        expect(spyOnOnFormControlChange).toHaveBeenCalledWith(formControl);
      });

      it('should call assertValue', () => {
        const value = 'value';
        setup({ value });
        spyOnAssertValue = jest.spyOn(controller, 'assertValue');
        controller.beforeInit();

        expect(spyOnAssertValue).toHaveBeenCalledTimes(1);
        expect(spyOnAssertValue).toHaveBeenCalledWith(value);
      });

      it('should call onDefaultValueChange', () => {
        const value = 'value';
        setup({ value });
        spyOnOnDefaultValueChange = jest.spyOn(controller, 'onDefaultValueChange');
        controller.beforeInit();

        expect(spyOnOnDefaultValueChange).toHaveBeenCalledTimes(1);
        expect(spyOnOnDefaultValueChange).toHaveBeenCalledWith();
      });

      it('should init value with defaultValue if value is undefined', () => {
        const defaultValue = 'defaultValue';
        setup({ defaultValue });
        controller.beforeInit();

        expect(component.value).toBe(defaultValue);
      });
    });

    describe('methods:onValueChange', () => {
      describe('validateValue', () => {
        it('should warn if value is empty string', () => {
          setup();
          controller.onValueChange('');
          expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
          expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith('[OsdsInput] The value attribute must be a correct number');
        });

        it('should warn if value is out of min/max bounds (min case)', () => {
          const min = 5;
          const max = 10;
          const value = 3;
          setup({ min, max, value, step: 1 });
          controller.onValueChange(value);

          expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
          expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(`The value attribute must be in bounds of [${[min, max].join(', ')}]`);
        });

        it('should warn if value is out of min/max bounds (max case)', () => {
          const min = 5;
          const max = 10;
          const value = 12;
          setup({ min, max, value, step: 1 });
          controller.onValueChange(value);

          expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
          expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(`The value attribute must be in bounds of [${[min, max].join(', ')}]`);
        });

        it('should warn if value is not a multiple of step', () => {
          const value = 5;
          const step = 2;
          setup({ min: 0, max: 10, value, step });
          controller.onValueChange(value);

          expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
          expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(`[OsdsInput] The value attribute must be a multiple of ${step}`);
        });
      });

      describe('updateInputCustomValidation', () => {
        const inputEl = {
          ...document.createAttribute('input'),
          setCustomValidity: jest.fn()
        } as unknown as HTMLInputElement;

        it('should reset customValidity', () => {
          setup({ inputEl });
          controller.onValueChange('');

          expect(inputEl.setCustomValidity).toHaveBeenCalledTimes(1);
          expect(inputEl.setCustomValidity).toHaveBeenCalledWith('');
        });

        it('should set forbiddenValue (flat forbiddenValues)', () => {
          const value = 5;
          const forbiddenValues = [value];
          setup({ inputEl, value, forbiddenValues });

          controller.onValueChange('');

          expect(inputEl.setCustomValidity).toHaveBeenCalledTimes(1);
          expect(inputEl.setCustomValidity).toHaveBeenCalledWith('forbiddenValue');
        });


        it('should set forbiddenValue (bounded forbiddenValues)', () => {
          const value = 4;
          const forbiddenValues = [{ min: 3, max: 5 }];
          setup({ inputEl, value, forbiddenValues });

          controller.onValueChange('');

          expect(inputEl.setCustomValidity).toHaveBeenCalledTimes(1);
          expect(inputEl.setCustomValidity).toHaveBeenCalledWith('forbiddenValue');
        });
      });

      it('should call emitChange', () => {
        const value = 2;
        const oldValue = 0;
        setup();
        controller.onValueChange(value, oldValue);

        expect(component.emitChange).toHaveBeenCalledTimes(1);
        expect(component.emitChange).toHaveBeenCalledWith(value, oldValue);
      });
    });

    describe('methods:onDefaultValueChange', () => {
      it('should use logger', () => {
        const value = 'value';
        const defaultValue = 'defaultValue';
        setup({ value });
        controller.onDefaultValueChange(defaultValue);
        expect(loggerSpyReferences.methodSpies.debug).toHaveBeenCalledTimes(1);
        expect(loggerSpyReferences.methodSpies.debug).toHaveBeenCalledWith(`[input=${value}]`, 'defaultValue', defaultValue);
      });
    });

    describe('methods:setInputTabindex', () => {
      it('should set inputTabindex value', () => {
        setup({ inputTabindex: 0 });
        controller.setInputTabindex(-1);
        expect(component.inputTabindex).toBe(-1);
      })
    });

    describe('methods:stepUp', () => {
      const inputEl = document.createElement('input');

      beforeEach(() => {
        inputEl.stepUp = jest.fn();
        inputEl.dispatchEvent = jest.fn();
        setup({ inputEl });
      });

      it('should call inputEl.stepUp method', () => {
        controller.stepUp();
        expect(inputEl.stepUp).toHaveBeenCalledTimes(1);
        expect(inputEl.stepUp).toHaveBeenCalledWith();
      });

      it('should call inputEl.dispatchEvent method', () => {
        const inputEvent = new CustomEvent('input', { bubbles: true });
        controller.stepUp();
        expect(inputEl.dispatchEvent).toHaveBeenCalledTimes(1);
        expect(inputEl.dispatchEvent).toHaveBeenCalledWith(inputEvent);
      });
    });

    describe('methods:stepDown', () => {
      const inputEl = document.createElement('input');

      beforeEach(() => {
        inputEl.stepDown = jest.fn();
        inputEl.dispatchEvent = jest.fn();
        setup({ inputEl });
      });

      it('should call inputEl.stepDown method', () => {
        controller.stepDown();
        expect(inputEl.stepDown).toHaveBeenCalledTimes(1);
        expect(inputEl.stepDown).toHaveBeenCalledWith();
      });

      it('should call inputEl.dispatchEvent method', () => {
        const inputEvent = new CustomEvent('input', { bubbles: true });
        controller.stepDown();
        expect(inputEl.dispatchEvent).toHaveBeenCalledTimes(1);
        expect(inputEl.dispatchEvent).toHaveBeenCalledWith(inputEvent);
      });
    });

    describe('methods:onFocus', () => {
      it('should set hasFocus to true', () => {
        setup({ hasFocus: false });
        controller.onFocus();
        expect(component.hasFocus).toEqual(true);
      });

      it('should call emitFocus', () => {
        setup();
        controller.onFocus();
        expect(component.emitFocus).toHaveBeenCalledTimes(1);
        expect(component.emitFocus).toHaveBeenCalledWith();
      });
    });

    describe('methods:onBlur', () => {
      it('should set hasFocus to false', () => {
        setup({ hasFocus: true });
        controller.onBlur();
        expect(component.hasFocus).toEqual(false);
      });

      it('should call emitBlur', () => {
        setup();
        controller.onBlur();
        expect(component.emitBlur).toHaveBeenCalledTimes(1);
        expect(component.emitBlur).toHaveBeenCalledWith();
      });
    });

    describe('methods:onInput', () => {
      it('should use logger', () => {
        const inputEl = document.createElement('input');
        inputEl.value = '5';
        setup({ inputEl });
        controller.onInput(new Event(''));

        expect(loggerSpyReferences.methodSpies.debug).toHaveBeenCalledTimes(1);
        expect(loggerSpyReferences.methodSpies.debug).toHaveBeenCalledWith('oninput', inputEl.value);
      });

      it('should not change component value if it is disabled', () => {
        const value = '3';
        const inputEl = document.createElement('input');
        setup({ disabled: true, value, type: ODS_INPUT_TYPE.number, inputEl });
        controller.onInput(new Event(''));

        expect(`${component.value}`).toBe(`${value}`);
      });

      it('should change the component number value', () => {
        const inputEl = document.createElement('input');
        inputEl.value = '5';
        setup({ disabled: false, value: '3', type: ODS_INPUT_TYPE.number, inputEl });
        controller.onInput(new Event(''));

        expect(`${component.value}`).toBe(`${inputEl.value}`);
      });

      it('value should be undefined if no input value', () => {
        const inputEl = document.createElement('input');
        inputEl.value = '';
        setup({ disabled: false, value: '3', type: ODS_INPUT_TYPE.number, inputEl });
        controller.onInput(new Event(''));

        expect(`${component.value}`).toBe('');
      });

      it('should change the component text value', () => {
        const inputEl = document.createElement('input');
        inputEl.value = 'ipsum';
        setup({ disabled: false, value: '3', type: 'oles' as any, inputEl });
        controller.onInput(new Event(''));

        expect(`${component.value}`).toBe(`${inputEl.value}`);
      });
    });

    describe('methods:onChange', () => {
      it('should use logger', () => {
        const value = 'value';
        setup({ inputEl: { value } as HTMLInputElement });
        controller.onChange();
        expect(loggerSpyReferences.methodSpies.debug).toHaveBeenCalledTimes(1);
        expect(loggerSpyReferences.methodSpies.debug).toHaveBeenCalledWith('onChange', value);
      });
    });

    describe('methods:hasError', () => {
      it('should return false', () => {
        setup({ error: false });
        controller.getInputValidity = jest.fn().mockImplementation(() => { return { invalid: false } });
        const hasError = controller.hasError();
        expect(hasError).toEqual(false);
      });

      it('should return true if component.error', () => {
        setup({ error: true });
        const hasError = controller.hasError();
        expect(hasError).toEqual(true);
      });

      it('should return true if getInputValidity.invalid', () => {
        setup({ error: false });
        controller.getInputValidity = jest.fn().mockImplementation(() => { return { invalid: true } });
        const hasError = controller.hasError();
        expect(hasError).toEqual(true);
      });
    });

    describe('methods:reset', () => {
      it('should clear value', () => {
        setup({ value: '5' });
        controller.reset();
        expect(component.value).toBe('');
      });

      it('should reset value with default', () => {
        setup({ value: '5', defaultValue: '10' });
        controller.reset();
        expect(component.value).toBe('10');
      });
    });

    describe('methods:clear', () => {
      it('should clear value', () => {
        setup({ value: '5' });
        controller.clear();
        expect(component.value).toBe('');
      });
    });
  });
});
