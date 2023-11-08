import type { OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import type { OsdsInput } from '@ovhcloud/ods-component-input';

import { Ods, OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy } from '@ovhcloud/ods-common-testing';
import { ODS_INPUT_TYPE } from '@ovhcloud/ods-component-input';

import { OdsQuantityController } from './controller';
import { OsdsQuantity } from '../osds-quantity';

class OdsQuantityMock extends OsdsQuantity {
  constructor(attribute: Partial<OsdsQuantity>) {
    super();
    Object.assign(this, attribute);
  }
}

describe('spec:ods-quantity-controller', () => {
  let controller: OdsQuantityController;
  let component: OsdsQuantity;
  let spyInputAddEventListener: jest.SpyInstance<void>;
  let spyInputRemoveEventListener: jest.SpyInstance<void>;
  let spyOnProcessInputValueChange: jest.SpyInstance<void, jest.ArgsType<OdsQuantityController['processInputValueChange']>>;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OsdsQuantity> = {}) {
    component = new OdsQuantityMock(attributes);
    document.body.appendChild(component.el);
    controller = new OdsQuantityController(component);
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsQuantityController,
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  it('should initialize', () => {
    setup();
    expect(controller).toBeTruthy();
  });

  describe('methods', () => {
    describe('methods:initInput', () => {
      it('should init input with osds-input with number type', () => {
        setup();
        const input = document.createElement('osds-input') as HTMLElement;
        input.setAttribute('type', 'number');
        component.el.appendChild(input);

        controller.initInput();

        expect(component.input).toBe(input);
      });

      it('should init input with vanilla input with number type', () => {
        setup();
        const input = document.createElement('input') as HTMLElement;
        input.setAttribute('type', 'number');
        component.el.appendChild(input);

        controller.initInput();

        expect(component.input).toBe(input);
      });

      it('should add change & blur event listeners on input with vanilla input with number type', () => {
        setup();
        const input = document.createElement('input');
        input.setAttribute('type', 'number');

        component.el.appendChild(input);
        component.input = input;
        spyInputAddEventListener = jest.spyOn(component.input, 'addEventListener');

        controller.initInput();

        expect(spyInputAddEventListener).toHaveBeenCalledWith('change', expect.any(Function));
        expect(spyInputAddEventListener).toHaveBeenCalledWith('blur', expect.any(Function));
        expect(spyInputAddEventListener).toHaveBeenCalledTimes(2);
      });

      describe('methods:initInput onBlur', () => {
        it('should change value of input if inferior to min on Blur', () => {
          setup();
          const input = document.createElement('input');
          input.setAttribute('type', 'number');
          input.setAttribute('value', '-1');
          input.setAttribute('min', '2');

          component.el.appendChild(input);
          component.el.appendChild(input);

          controller.initInput();
          input.focus();
          input.blur();

          expect(input.value).toBe(input.min);
        });

        it('should change value of input if superior to max on Blur', () => {
          setup();
          const input = document.createElement('input');
          input.setAttribute('type', 'number');
          input.setAttribute('value', '11');

          input.setAttribute('max', '10');
          component.el.appendChild(input);

          controller.initInput();
          input.focus();
          input.blur();

          expect(input.value).toBe(input.max);
        });

        it('should change value of input if not in a valid step', () => {
          setup();
          let validInput = "1";
          const input = document.createElement('input');
          input.setAttribute('type', 'number');
          input.setAttribute('value', '1.5');
          input.setAttribute('min', '0');
          input.setAttribute('step', '1');

          component.el.appendChild(input);

          controller.initInput();
          input.focus();
          input.blur();

          expect(input.value).toBe(validInput);
        });

        it('should change value of osds-input if inferior to min on Blur', () => {
          setup();
          const input = document.createElement('osds-input') as (OsdsInput & HTMLElement);
          input.type = ODS_INPUT_TYPE.number;
          input.setAttribute('type', 'number');
          input.tabIndex = 0;
          input.setAttribute('tabindex', '0');
          input.value = '-2';
          input.setAttribute('value', '-2');
          input.min = 2;

          input.setAttribute('min', '2');
          component.el.appendChild(input);

          controller.initInput();
          input.focus();
          input.blur();
          input.dispatchEvent(new CustomEvent('odsInputBlur'));

          expect(input.value).toBe(input.min);
        });

        it('should change value of osds-input if superior to max on Blur', () => {
          setup();
          const input = document.createElement('osds-input') as (OsdsInput & HTMLElement);
          input.type = ODS_INPUT_TYPE.number;
          input.setAttribute('type', 'number');
          input.tabIndex = 0;
          input.setAttribute('tabindex', '0');
          input.value = '11';
          input.setAttribute('value', '11');
          input.max = 10;

          input.setAttribute('max', '10');
          component.el.appendChild(input);

          controller.initInput();
          input.focus();
          input.blur();
          input.dispatchEvent(new CustomEvent('odsInputBlur'));

          expect(input.value).toBe(input.max);
        });
      });

      describe('methods:initInput validation', () => {
        const warnExpected = 'An input of type number is mandatory.';

        it('should not init input if empty', () => {
          setup();

          controller.initInput();

          expect(component.input).toBe(null);
          expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(warnExpected);
          expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
        });

        it('should not init input if osds-input type is not number', () => {
          setup();
          const input = document.createElement('osds-input') as HTMLElement;

          component.el.appendChild(input);

          controller.initInput();

          expect(component.input).toBe(null);
          expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(warnExpected);
          expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
        });

        it('should not init input if vanilla input type is not number', () => {
          setup();
          const input = document.createElement('input') as HTMLElement;

          component.el.appendChild(input);

          controller.initInput();

          expect(component.input).toBe(null);
          expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(warnExpected);
          expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe('methods:processInputValueChange', () => {

      beforeEach(() => {
        setup();
        component.input = document.createElement('input');
        component.minus = document.createElement('osds-button') as HTMLSlotElement;
        component.plus = document.createElement('osds-button') as HTMLSlotElement;

        component.input.setAttribute('type', 'number');
        component.input.value = '5';
      });

      it('should remove input and slots disabled attribute', () => {
        component.input = (component.input as HTMLInputElement);
        component.input.min = '1';
        component.input.max = '10';

        [component.input, (component.minus as HTMLSlotElement), (component.plus as HTMLSlotElement)].forEach((e) => e.setAttribute('disabled', ''));

        controller.processInputValueChange();

        expect(component.input.getAttribute('disabled')).toBe('');
        expect((component.minus as HTMLSlotElement).getAttribute('disabled')).toBe(null);
        expect((component.plus as HTMLSlotElement).getAttribute('disabled')).toBe(null);
      });

      it('should set disable to minus slot', () => {
        component.input = (component.input as HTMLInputElement);
        component.input.min = '5';
        component.input.max = '10';

        controller.processInputValueChange();

        expect(component.input.getAttribute('disabled')).toBe(null);
        expect((component.minus as HTMLSlotElement).getAttribute('disabled')).toBe('');
        expect((component.plus as HTMLSlotElement).getAttribute('disabled')).toBe(null);
      });

      it('should set disable to minus slot when value and min are 0', () => {
        component.input = (component.input as HTMLInputElement);
        component.input.value = '0';
        component.input.min = '0';
        component.input.max = '10';

        controller.processInputValueChange();

        expect(component.input.getAttribute('disabled')).toBe(null);
        expect((component.minus as HTMLSlotElement).getAttribute('disabled')).toBe('');
        expect((component.plus as HTMLSlotElement).getAttribute('disabled')).toBe(null);
      });

      it('should set disable to plus slot', () => {
        component.input = (component.input as HTMLInputElement);
        component.input.min = '1';
        component.input.max = '5';

        controller.processInputValueChange();

        expect(component.input.getAttribute('disabled')).toBe(null);
        expect((component.minus as HTMLSlotElement).getAttribute('disabled')).toBe(null);
        expect((component.plus as HTMLSlotElement).getAttribute('disabled')).toBe('');
      });
    });

    describe('methods:setDisabledOnChildren', () => {
      it('should set input and slots disabled', () => {
        setup();
        component.input = document.createElement('input');
        component.minus = document.createElement('osds-button') as HTMLSlotElement;

        component.plus = document.createElement('osds-button') as HTMLSlotElement;
        controller.setDisabledOnChildren(true);

        expect(component.input.getAttribute('disabled')).toBe('');
        expect(component.minus.getAttribute('disabled')).toBe('');
        expect(component.plus.getAttribute('disabled')).toBe('');
      });

      it('should remove input and slots disabled attribute', () => {
        setup();
        component.input = document.createElement('input');
        component.minus = document.createElement('osds-button') as HTMLSlotElement;

        component.plus = document.createElement('osds-button') as HTMLSlotElement;
        [component.input, component.minus, component.plus].forEach((e) => e.setAttribute('disabled', ''));
        controller.setDisabledOnChildren(false);

        expect(component.input.getAttribute('disabled')).toBe(null);
        expect(component.minus.getAttribute('disabled')).toBe(null);
        expect(component.plus.getAttribute('disabled')).toBe(null);
      });

      it('should call controller.processInputValueChange when disabled is false', () => {
        setup();
        component.input = document.createElement('input');
        component.minus = document.createElement('osds-button') as HTMLSlotElement;

        component.plus = document.createElement('osds-button') as HTMLSlotElement;
        spyOnProcessInputValueChange = jest.spyOn(controller, 'processInputValueChange');
        controller.setDisabledOnChildren(false);

        expect(spyOnProcessInputValueChange).toHaveBeenCalledWith();
        expect(spyOnProcessInputValueChange).toHaveBeenCalledTimes(1);
      });
    });

    describe('methods:clearEventListeners', () => {
      it('should remove input event listener', () => {
        setup();

        component.input = document.createElement('input');
        spyInputRemoveEventListener = jest.spyOn(component.input, 'removeEventListener');

        controller.clearEventListeners();

        expect(spyInputRemoveEventListener).toHaveBeenCalledWith('change', expect.any(Function));
        expect(spyInputRemoveEventListener).toHaveBeenCalledWith('blur', expect.any(Function));
        expect(spyInputRemoveEventListener).toHaveBeenCalledWith('odsInputBlur', expect.any(Function));
        expect(spyInputRemoveEventListener).toHaveBeenCalledTimes(3);
      });
    });

    describe('methods:minusClickHandler', () => {
      beforeEach(() => {
        setup();
        component.input = {
          stepDown: jest.fn(),
        } as any;
      });

      it('should call input.stepDown', () => {
        controller.minusClickHandler();

        expect(component.input?.stepDown).toHaveBeenCalledWith();
        expect(component.input?.stepDown).toHaveBeenCalledTimes(1);
      });

      it('should call controller.processInputValueChange', () => {
        spyOnProcessInputValueChange = jest.spyOn(controller, 'processInputValueChange');
        controller.minusClickHandler();

        expect(spyOnProcessInputValueChange).toHaveBeenCalledWith();
        expect(spyOnProcessInputValueChange).toHaveBeenCalledTimes(1);
      });
    });

    describe('methods:plusClickHandler', () => {
      beforeEach(() => {
        setup();
        component.input = {
          stepUp: jest.fn(),
        } as any;
      });

      it('should call input.stepUp', () => {
        controller.plusClickHandler();

        expect(component.input?.stepUp).toHaveBeenCalledWith();
        expect(component.input?.stepUp).toHaveBeenCalledTimes(1);
      });

      it('should call controller.processInputValueChange', () => {
        spyOnProcessInputValueChange = jest.spyOn(controller, 'processInputValueChange');
        controller.plusClickHandler();

        expect(spyOnProcessInputValueChange).toHaveBeenCalledWith();
        expect(spyOnProcessInputValueChange).toHaveBeenCalledTimes(1);
      });

      it('should not call functions without input', () => {
        setup();
        spyOnProcessInputValueChange = jest.spyOn(controller, 'processInputValueChange');
        controller.plusClickHandler();

        expect(spyOnProcessInputValueChange).not.toHaveBeenCalled();
      });
    });

    describe('methods:initSlots', () => {
      const warnExpected = 'Minus and plus control are mandatory.';

      it('should init slots', () => {
        setup();
        const minus = document.createElement('osds-button') as HTMLElement;
        const plus = document.createElement('osds-button') as HTMLElement;
        minus.setAttribute('slot', 'minus');
        plus.setAttribute('slot', 'plus');
        component.el.appendChild(minus);

        component.el.appendChild(plus);

        controller.initSlots();

        expect(component.minus).toBe(minus);
        expect(component.plus).toBe(plus);
      });

      it('should not init component.minus if slot is not set', () => {
        setup();
        const plus = document.createElement('osds-button') as HTMLElement;
        plus.setAttribute('slot', 'plus');

        component.el.appendChild(plus);

        controller.initSlots();

        expect(component.minus).toBe(null);
        expect(component.plus).toBe(null);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(warnExpected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });

      it('should not init component.plus if slot is not set', () => {
        setup();
        const minus = document.createElement('osds-button') as HTMLElement;
        minus.setAttribute('slot', 'minus');

        component.el.appendChild(minus);

        controller.initSlots();

        expect(component.minus).toBe(null);
        expect(component.plus).toBe(null);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(warnExpected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });
    });
  });
});
