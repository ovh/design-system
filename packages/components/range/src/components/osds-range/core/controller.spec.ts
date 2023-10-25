import type { OdsFormForbiddenValues, OdsValidityState } from '@ovhcloud/ods-common-core';
import { OdsFormControl, OdsLogger } from '@ovhcloud/ods-common-core';
import type { OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

import { OdsRangeController } from './controller';
import type { OdsRangeValue } from '../interfaces/value';
import { OsdsRange } from '../osds-range';

class OdsRangeMock extends OsdsRange {
  constructor(attribute: Partial<OsdsRange>) {
    super();
    Object.assign(this, attribute);
  }

  controller: OdsRangeController = jest.fn() as unknown as OdsRangeController;
  getValidity = jest.fn();
  beforeInit = jest.fn();
  beforeRender = jest.fn();
  afterRender = jest.fn();
  onInput = jest.fn();
  onKeyup = jest.fn();
  emitChange = jest.fn();
}

describe('spec:ods-range-controller', () => {
  let controller: OdsRangeController;
  let component: OsdsRange;
  let spyOnOnFormControlChange: jest.SpyInstance<void, jest.ArgsType<OdsRangeController['onFormControlChange']>>;
  let spyOnOnValueChange: jest.SpyInstance<void, jest.ArgsType<OdsRangeController['onValueChange']>>;
  let spyOnValidateValue: jest.SpyInstance<void, jest.ArgsType<OdsRangeController['validateValue']>>;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  function setup(attributes: Partial<OsdsRange> = {}) {
    component = new OdsRangeMock(attributes);
    controller = new OdsRangeController(component);
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsRangeController,
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  describe('methods', () => {
    describe('methods:getRangeValidity', () => {
      describe('without input', () => {
        it('should return valid state (number case)', () => {
          const forbiddenValues: OdsFormForbiddenValues<number> = [];
          const expected = {
            valid: true,
            valueMissing: false,
            stepMismatch: false,
            invalid: false,
            customError: false,
            forbiddenValue: false,
          };
          setup({ forbiddenValues });
          const validity = controller.getRangeValidity();

          expect(validity).toEqual(expected);
        });

        describe('type of forbidden value is number', () => {
          const forbiddenValues: OdsFormForbiddenValues<number> = [2];
          const expected = {
            valid: false,
            valueMissing: false,
            stepMismatch: false,
            invalid: true,
            customError: true,
            forbiddenValue: true,
          };

          it('should return invalid state simple range', () => {
            const value = 2;
            setup({ value, forbiddenValues });
            const validity = controller.getRangeValidity();

            expect(validity).toEqual(expected);
          });

          it('should return invalid state dual range', () => {
            const value: OdsRangeValue = [2, 3];
            setup({ value, forbiddenValues });
            const validity = controller.getRangeValidity();

            expect(validity).toEqual(expected);
          });
        });

        describe('type of forbidden value is array', () => {
          const min = 2;
          const max = 3;
          const forbiddenValues: OdsFormForbiddenValues<number> = [{ min, max }];
          const expected = {
            valid: false,
            valueMissing: false,
            stepMismatch: false,
            invalid: true,
            customError: true,
            forbiddenValue: true,
          };

          it('should return invalid state simple range (min case)', () => {
            const value = 2;
            setup({ value, forbiddenValues });
            const validity = controller.getRangeValidity();

            expect(validity).toEqual(expected);
          });

          it('should return invalid state simple range (max case)', () => {
            const value = 3;
            setup({ value, forbiddenValues });
            const validity = controller.getRangeValidity();

            expect(validity).toEqual(expected);
          });

          it('should return invalid state dual range (min case)', () => {
            const value: OdsRangeValue = [2, 4];
            setup({ value, forbiddenValues });
            const validity = controller.getRangeValidity();

            expect(validity).toEqual(expected);
          });

          it('should return invalid state dual range (min case)', () => {
            const value: OdsRangeValue = [1, 3];
            setup({ value, forbiddenValues });
            const validity = controller.getRangeValidity();

            expect(validity).toEqual(expected);
          });
        });
      });

      describe('with input', () => {
        it('should return valid state', () => {
          const inputEl = {
            ...document.createElement('input'),
            validity: {
              valid: true,
              stepMismatch: false,
              valueMissing: false,
              customError: false,
            },
          } as HTMLInputElement;
          const expected = {
            ...inputEl.validity,
            invalid: false,
            forbiddenValue: false,
          };
          setup();
          const validity = controller.getRangeValidity(inputEl);

          expect(validity).toEqual(expected);
        });

        it('should return invalid state', () => {
          const inputEl = {
            ...document.createElement('input'),
            validity: {
              valid: false,
              stepMismatch: false,
              valueMissing: false,
              customError: false,
            },
          } as HTMLInputElement;
          const expected = {
            ...inputEl.validity,
            invalid: true,
            forbiddenValue: false,
          };
          setup();
          const validity = controller.getRangeValidity(inputEl);

          expect(validity).toEqual(expected);
        });
      });
    });

    describe('methods:isDualRange', () => {
      it('should return false if value is not an array', () => {
        const value = 5;
        setup({ value });
        const isDualRange = controller.isDualRange();

        expect(isDualRange).toEqual(false);
      });

      it('should return false if value is an array with less than 2 items', () => {
        const value = [1];
        setup({ value: value as OdsRangeValue });
        const isDualRange = controller.isDualRange();

        expect(isDualRange).toEqual(false);
      });

      it('should return false if value is an array with more than 2 items', () => {
        const value = [1, 2, 3];
        setup({ value: value as OdsRangeValue });
        const isDualRange = controller.isDualRange();

        expect(isDualRange).toEqual(false);
      });

      it('should return true if value is an array of 2 items', () => {
        const value: OdsRangeValue = [1, 2];
        setup({ value });
        const isDualRange = controller.isDualRange();

        expect(isDualRange).toEqual(true);
      });
    });

    describe('methods:asDualValues', () => {
      it('should return dual value type', () => {
        const value: OdsRangeValue = [1, 2];
        setup({ value });
        const typedValue = controller.asDualValues();

        expect(typedValue instanceof Array).toBe(true);
        expect(typedValue.length).toBe(2);
      });
    });

    describe('methods:validateAttributes', () => {
      it('should not call console.warn', () => {
        setup({ color: ODS_THEME_COLOR_INTENT.default });
        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(0);
      });

      it('should call console.warn with wrong color', () => {
        const expected = 'The color attribute must have a value from [accent, default, error, info, primary, promotion, success, text, warning]';
        const color = 'color' as ODS_THEME_COLOR_INTENT;
        setup({ color });
        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });
    });

    describe('methods:onFormControlChange', () => {
      it('should call formControl.register', () => {
        const formControl = new OdsFormControl<OdsValidityState>('id');
        formControl.register = jest.fn();
        setup();
        controller.onFormControlChange(formControl);

        expect(formControl.register).toHaveBeenCalledTimes(1);
        expect(formControl.register).toHaveBeenCalledWith(component);
      });
    });

    describe('methods:beforeInit', () => {
      it('should call onFormControlChange', () => {
        const formControl = new OdsFormControl<OdsValidityState>('id');
        setup({ formControl });
        spyOnOnFormControlChange = jest.spyOn(controller, 'onFormControlChange');
        controller.beforeInit();

        expect(spyOnOnFormControlChange).toHaveBeenCalledTimes(1);
        expect(spyOnOnFormControlChange).toHaveBeenCalledWith(formControl);
      });

      it('should call onValueChange', () => {
        const value = '4';
        setup({ value });
        spyOnOnValueChange = jest.spyOn(controller, 'onValueChange');
        controller.beforeInit();

        expect(spyOnOnValueChange).toHaveBeenCalledTimes(1);
        expect(spyOnOnValueChange).toHaveBeenCalledWith(value);
      });
    });

    describe('methods:onValueChange', () => {
      it('should call validateValue', () => {
        const value = 2;
        setup();
        spyOnValidateValue = jest.spyOn(controller, 'validateValue');
        controller.onValueChange(value);

        expect(spyOnValidateValue).toHaveBeenCalledTimes(1);
        expect(spyOnValidateValue).toHaveBeenCalledWith(value);
      });

      it('should set empty custom validity', () => {
        const inputEl = {
          ...document.createElement('input'),
          setCustomValidity: jest.fn(),
        };
        setup({ inputEl });
        controller.onValueChange(2);

        expect(inputEl.setCustomValidity).toHaveBeenCalledTimes(1);
        expect(inputEl.setCustomValidity).toHaveBeenCalledWith('');
      });

      it('should set forbiddenValue custom validity', () => {
        const forbiddenValues = [2];
        const inputEl = {
          ...document.createElement('input'),
          setCustomValidity: jest.fn(),
        };
        const value = 2;
        setup({ value, inputEl, forbiddenValues });
        controller.onValueChange(value);

        expect(inputEl.setCustomValidity).toHaveBeenCalledTimes(1);
        expect(inputEl.setCustomValidity).toHaveBeenCalledWith('forbiddenValue');
      });

      it('should emit change', () => {
        const newValue = 2;
        const oldValue = 1;
        setup();
        controller.onValueChange(newValue, oldValue);

        expect(component.emitChange).toHaveBeenCalledTimes(1);
        expect(component.emitChange).toHaveBeenCalledWith(newValue, oldValue);
      });
    });

    describe('methods:initValue', () => {
      it('should not change component.value', () => {
        const value = 2;
        const inputEl = document.createElement('input');
        inputEl.value = `${value}`;
        setup({ value, inputEl });
        controller.initValue();

        expect(component.value).toBe(value);
      });

      it('should init value with input value', () => {
        const value = 2;
        const inputValue = '3';
        const inputEl = document.createElement('input');
        inputEl.value = inputValue;
        setup({ value, inputEl });
        controller.initValue();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(`Value ${value} is not valid. New value has been set to ${inputValue}`);
        expect(component.value).toBe(inputValue);
      });

      it('should init dual value with input value (first case)', () => {
        const value: OdsRangeValue = [1, 3];
        const inputValue = '2';
        const dualInputValue = '3';
        const inputEl = document.createElement('input');
        inputEl.value = inputValue;
        const dualInputEl = document.createElement('input');
        dualInputEl.value = dualInputValue;
        setup({ value, inputEl, dualInputEl });
        controller.initValue();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(`Value [${value}] is not valid. New value has been set to [${inputValue},${dualInputValue}]`);
        expect(component.value).toEqual([Number(inputValue), Number(dualInputValue)]);
      });

      it('should init dual value with input value (second case)', () => {
        const value: OdsRangeValue = [1, 3];
        const inputValue = '1';
        const dualInputValue = '4';
        const inputEl = document.createElement('input');
        inputEl.value = inputValue;
        const dualInputEl = document.createElement('input');
        dualInputEl.value = dualInputValue;
        setup({ value, inputEl, dualInputEl });
        controller.initValue();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(`Value [${value}] is not valid. New value has been set to [${inputValue},${dualInputValue}]`);
        expect(component.value).toEqual([Number(inputValue), Number(dualInputValue)]);
      });
    });

    describe('methods:validateValue', () => {
      it('should warn if value is not a number', () => {
        setup();
        controller.validateValue('value');

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith('[OsdsRange] The value attribute must a correct number or a tuple [1, 2]');
      });

      it('should warn if value is not a dual range', () => {
        setup({ value: [] as unknown as OdsRangeValue });
        controller.validateValue('value');

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith('[OsdsRange] The value attribute must a correct number or a tuple [1, 2]');
      });

      it('should not warn if value is a number', () => {
        setup();
        controller.validateValue(2);

        expect(loggerSpyReferences.methodSpies.warn).not.toHaveBeenCalled();
      });

      it('should not warn if value is a dual range', () => {
        setup({ value: [1, 2] });
        controller.validateValue();

        expect(loggerSpyReferences.methodSpies.warn).not.toHaveBeenCalled();
      });

      it('should warn if value is out of min/max bounds (min case)', () => {
        const min = 5;
        const max = 10;
        const value = 3;
        setup({ min, max, step: 1 });
        controller.validateValue(value);

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(`The value attribute must be in bounds of [${[min, max].join(', ')}]`);
      });

      it('should warn if value is out of min/max bounds (max case)', () => {
        const min = 5;
        const max = 10;
        const value = 12;
        setup({ min, max, step: 1 });
        controller.validateValue(value);

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(`The value attribute must be in bounds of [${[min, max].join(', ')}]`);
      });
    });

    describe('methods:onInput', () => {
      it('should set simple value', () => {
        const inputValue = 3;
        const inputEl = {
          ...document.createElement('input'),
          value: inputValue,
        } as unknown as HTMLInputElement;
        setup({ value: 2, disabled: false });
        controller.onInput(new Event(''), inputEl);

        expect(component.value).toBe(inputValue);
      });

      it('should set dual first value', () => {
        const inputValue = 3;
        const inputEl = {
          ...document.createElement('input'),
          value: inputValue,
        } as unknown as HTMLInputElement;
        setup({ value: [1, 4], disabled: false });
        controller.onInput(new Event(''), inputEl);

        expect(component.value).toEqual([inputValue, 4]);
      });

      it('should set dual second value', () => {
        const inputValue = 3;
        const inputEl = {
          ...document.createElement('input'),
          value: inputValue,
        } as unknown as HTMLInputElement;
        setup({ value: [1, 2], disabled: false });
        controller.onInput(new Event(''), inputEl, true);

        expect(component.value).toEqual([1, inputValue]);
      });
    });

    describe('methods:onKeyup', () => {
      it('should set simple value', () => {
        const inputValue = 3;
        const inputEl = {
          ...document.createElement('input'),
          value: inputValue,
        } as unknown as HTMLInputElement;
        setup({ value: 2, disabled: false });
        controller.onKeyup(new KeyboardEvent(''), inputEl);

        expect(component.value).toBe(inputValue);
      });

      it('should set dual first value', () => {
        const inputValue = 3;
        const inputEl = {
          ...document.createElement('input'),
          value: inputValue,
        } as unknown as HTMLInputElement;
        setup({ value: [1, 4], disabled: false });
        controller.onKeyup(new KeyboardEvent(''), inputEl);

        expect(component.value).toEqual([inputValue, 4]);
      });

      it('should set dual second value', () => {
        const inputValue = 3;
        const inputEl = {
          ...document.createElement('input'),
          value: inputValue,
        } as unknown as HTMLInputElement;
        setup({ value: [1, 2], disabled: false });
        controller.onKeyup(new KeyboardEvent(''), inputEl, true);

        expect(component.value).toEqual([1, inputValue]);
      });

      it('should call inputEl.stepUp on + pressed', () => {
        const inputEl = {
          ...document.createElement('input'),
          stepUp: jest.fn(),
        };
        const event = new KeyboardEvent('keyUp', { key: '+' });
        setup();
        controller.onKeyup(event, inputEl);

        expect(inputEl.stepUp).toHaveBeenCalledTimes(1);
        expect(inputEl.stepUp).toHaveBeenCalledWith();
      });

      it('should call inputEl.stepDown on - pressed', () => {
        const inputEl = {
          ...document.createElement('input'),
          stepDown: jest.fn(),
        };
        const event = new KeyboardEvent('keyDown', { key: '-' });
        setup();
        controller.onKeyup(event, inputEl);

        expect(inputEl.stepDown).toHaveBeenCalledTimes(1);
        expect(inputEl.stepDown).toHaveBeenCalledWith();
      });
    });

    describe('methods:handleClick', () => {
      it('should use logger', () => {
        setup();
        controller.handleClick();

        expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledTimes(1);
        expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith('[range]', 'clicked');
      });
    });

    describe('methods:hasError', () => {
      it('should return false', () => {
        setup({ error: false });
        controller.getRangeValidity = jest.fn().mockImplementation(() => {
          return { invalid: false };
        });
        const hasError = controller.hasError();
        expect(hasError).toEqual(false);
      });

      it('should return true if component.error', () => {
        setup({ error: true });
        const hasError = controller.hasError();
        expect(hasError).toEqual(true);
      });

      it('should return true if getRangeValidity.invalid', () => {
        setup({ error: false });
        controller.getRangeValidity = jest.fn().mockImplementation(() => {
          return { invalid: true };
        });
        const hasError = controller.hasError();
        expect(hasError).toEqual(true);
      });
    });
  });
});
