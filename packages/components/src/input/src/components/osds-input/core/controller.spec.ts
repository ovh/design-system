import { OdsInputController } from './controller';
import { ODS_INPUT_TYPE } from '../constants/input-type';
import { OsdsInput } from '../osds-input';

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
    setFormValue: jest.fn(),
  };

  masked = false;
  name = '';
  odsHide = { emit: jest.fn() };
  type = ODS_INPUT_TYPE.text;
  value = null;
}

describe('spec:ods-input-controller', () => {
  let controller: OdsInputController<OsdsInput>;
  let component: OsdsInput;
  let spyOnAssertValue: jest.SpyInstance<void, jest.ArgsType<OdsInputController<OsdsInput>['assertValue']>>;

  function setup(attributes: Partial<OsdsInput> = {}) {
    component = new OdsInputMock(attributes) as unknown as OsdsInput;
    controller = new OdsInputController(component);
  }

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
        beforeEach(() => {
          jest.spyOn(console, 'warn');
        })

        it('should warn if value is empty string', () => {
          setup({ type: ODS_INPUT_TYPE.number });
          controller.onValueChange('');
          expect(console.warn).toHaveBeenCalledTimes(1);
          expect(console.warn).toHaveBeenCalledWith('[OsdsInput] The value attribute must be a correct number');
        });

        it('should warn if value is out of min/max bounds (min case)', () => {
          const min = 5;
          const max = 10;
          const value = 3;
          setup({ max, min, step: 1, type: ODS_INPUT_TYPE.number, value });
          controller.onValueChange(value);

          expect(console.warn).toHaveBeenCalledTimes(1);
          expect(console.warn).toHaveBeenCalledWith(`The value attribute must be in bounds of [${[min, max].join(', ')}]`);
        });

        it('should warn if value is out of min/max bounds (max case)', () => {
          const min = 5;
          const max = 10;
          const value = 12;
          setup({ max, min, step: 1, type: ODS_INPUT_TYPE.number, value });
          controller.onValueChange(value);

          expect(console.warn).toHaveBeenCalledTimes(1);
          expect(console.warn).toHaveBeenCalledWith(`The value attribute must be in bounds of [${[min, max].join(', ')}]`);
        });

        it('should warn if value is not a multiple of step', () => {
          const value = 5;
          const step = 2;
          setup({ max: 10, min: 0, step, type: ODS_INPUT_TYPE.number, value });
          controller.onValueChange(value);

          expect(console.warn).toHaveBeenCalledTimes(1);
          expect(console.warn).toHaveBeenCalledWith(`[OsdsInput] The value attribute must be a multiple of ${step}`);
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
          setup({ forbiddenValues, inputEl, value });

          controller.onValueChange('');

          expect(inputEl.setCustomValidity).toHaveBeenCalledTimes(1);
        });

        it('should set forbiddenValue (bounded forbiddenValues)', () => {
          const value = 4;
          const forbiddenValues = ['5'];
          setup({ inputEl, value, forbiddenValues });

          controller.onValueChange('5');

          expect(inputEl.setCustomValidity).toHaveBeenCalledTimes(1);
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
        setup({ disabled: true, inputEl, type: ODS_INPUT_TYPE.number, value });
        controller.onInput(new Event(''));

        expect(`${component.value}`).toBe(`${value}`);
      });

      it('should change the component number value', () => {
        const inputEl = document.createElement('input');
        inputEl.value = '5';
        setup({ disabled: false, inputEl, type: ODS_INPUT_TYPE.number, value: '3' });
        controller.onInput(new Event(''));

        expect(`${component.value}`).toBe(`${inputEl.value}`);
      });

      it('value should be undefined if no input value', () => {
        const inputEl = document.createElement('input');
        inputEl.value = '';
        setup({ disabled: false, inputEl, type: ODS_INPUT_TYPE.number, value: '3' });
        controller.onInput(new Event(''));

        expect(`${component.value}`).toBe('');
      });

      it('should change the component text value', () => {
        const inputEl = document.createElement('input');
        inputEl.value = 'ipsum';
        setup({ disabled: false, inputEl, type: 'oles' as unknown as ODS_INPUT_TYPE, value: '3' });
        controller.onInput(new Event(''));

        expect(`${component.value}`).toBe(`${inputEl.value}`);
      });
    });

    describe('methods:hasError', () => {
      it('should return false', () => {
        setup({ error: false });
        controller.getValidity = jest.fn().mockImplementation(() => {
          return { valid: true };
        });
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
        controller.getValidity = jest.fn().mockImplementation(() => {
          return { valid: false };
        });
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
