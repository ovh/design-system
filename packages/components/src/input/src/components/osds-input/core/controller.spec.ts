import { Ods } from '@ovhcloud/ods-common-core';
import { OdsInputController } from './controller';
import { OsdsInput } from '../osds-input';
import { ODS_INPUT_TYPE } from '../constants/input-type';

class OdsInputMock {
  constructor(attribute: Partial<OsdsInput>) {
    Object.assign(this, attribute);
  }
  ariaLabel = '';
  defaultValue = null;
  disabled = false;
  el = document.createElement('osds-input');
  emitChange = jest.fn();
  emitFocus = jest.fn();
  emitBlur = jest.fn();
  error = false;
  internals = {
    setFormValue: jest.fn()
  };
  masked = false;
  name = '';
  type = ODS_INPUT_TYPE.text;
  value = null;
}

describe('spec:ods-input-controller', () => {
  let controller: OdsInputController<OsdsInput>;
  let component: OsdsInput;
  let spyOnAssertValue: jest.SpyInstance<void, jest.ArgsType<OdsInputController<OsdsInput>['assertValue']>>;
  let consoleWarnSpy: jest.SpyInstance;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OsdsInput> = {}) {
    component = new OdsInputMock(attributes) as unknown as OsdsInput;
    controller = new OdsInputController(component);
  }

  beforeEach(() => {
    consoleWarnSpy = jest.spyOn(console, 'warn');

  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('methods', () => {
    describe('methods:beforeInit', () => {
      it('should call assertValue', () => {
        const value = 'value';
        setup({ value });
        spyOnAssertValue = jest.spyOn(controller, 'assertValue');
        controller.beforeInit();

        expect(spyOnAssertValue).toHaveBeenCalledTimes(1);
        expect(spyOnAssertValue).toHaveBeenCalledWith(value);
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
          expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
          expect(consoleWarnSpy).toHaveBeenCalledWith('[OsdsInput] The value attribute must be a correct number');
        });

        it('should warn if value is out of min/max bounds (min case)', () => {
          const min = 5;
          const max = 10;
          const value = 3;
          setup({ min, max, value, step: 1 });
          controller.onValueChange(value);

          expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
          expect(consoleWarnSpy).toHaveBeenCalledWith(`The value attribute must be in bounds of [${[min, max].join(', ')}]`);
        });

        it('should warn if value is out of min/max bounds (max case)', () => {
          const min = 5;
          const max = 10;
          const value = 12;
          setup({ min, max, value, step: 1 });
          controller.onValueChange(value);

          expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
          expect(consoleWarnSpy).toHaveBeenCalledWith(`The value attribute must be in bounds of [${[min, max].join(', ')}]`);
        });

        it('should warn if value is not a multiple of step', () => {
          const value = 5;
          const step = 2;
          setup({ min: 0, max: 10, value, step });
          controller.onValueChange(value);

          expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
          expect(consoleWarnSpy).toHaveBeenCalledWith(`[OsdsInput] The value attribute must be a multiple of ${step}`);
        });
      });

      describe('updateInputCustomValidation', () => {
        const inputEl = {
          ...document.createAttribute('input'),
          setCustomValidity: jest.fn(),
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

    describe('methods:hide', () => {
      it('should hide input', () => {
        setup({ });
        controller.hide();
        expect(component.masked).toBe(true);
        controller.hide();
        expect(component.masked).toBe(false);
      });
    
      it('should not hide input because of disable', () => {
        setup({ disabled: true });
        controller.hide();
        expect(component.masked).toBe(false);
      });
    });

    describe('methods:onInput', () => {
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
  });
});
