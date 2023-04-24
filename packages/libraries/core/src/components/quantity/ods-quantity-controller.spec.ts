import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';

import { Ods } from '../../configure/ods';
import { OdsLogger } from '../../logger/ods-logger';
import { OdsQuantity } from './ods-quantity';
import { OdsQuantityController } from './ods-quantity-controller';
import { OdsQuantityMock } from './ods-quantity-mock';
import { HTMLOdsInputElement, OdsInputType } from '../input/ods-input-type';

describe('spec:ods-quantity-controller', () => {
  let controller: OdsQuantityController;
  let component: OdsQuantity;
  let spyInputAddEventListener: jest.SpyInstance<void>;
  let spyInputRemoveEventListener: jest.SpyInstance<void>;
  let spyInputStepUp: jest.SpyInstance<void>;
  let spyInputStepDown: jest.SpyInstance<void>;
  let spyOnProcessInputValueChange: jest.SpyInstance<void, jest.ArgsType<OdsQuantityController['processInputValueChange']>>;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OdsQuantity> = {}) {
    component = { ...component, ...attributes };
    document.body.appendChild(component.el);
    controller = new OdsQuantityController(component);
  }

  beforeEach(() => {
    component = new OdsQuantityMock();
    component.el = document.createElement('osds-quantity') as HTMLElement;

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsQuantityController
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
        const input = document.createElement('osds-input') as HTMLElement;
        input.setAttribute('type', 'number');
        component.el.appendChild(input);

        setup();

        controller.initInput();

        expect(component.input).toBe(input);
      });

      it('should init input with vanilla input with number type', () => {
        const input = document.createElement('input') as HTMLElement;
        input.setAttribute('type', 'number');
        component.el.appendChild(input);

        setup();

        controller.initInput();

        expect(component.input).toBe(input);
      });

      it('should add change & blur event listeners on input with vanilla input with number type', () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'number');
        component.el.appendChild(input);

        setup();
        component.input = input;
        spyInputAddEventListener = jest.spyOn(component.input, 'addEventListener')

        controller.initInput();

        expect(spyInputAddEventListener).toHaveBeenCalledWith('change', expect.any(Function));
        expect(spyInputAddEventListener).toHaveBeenCalledWith('blur', expect.any(Function));
        expect(spyInputAddEventListener).toHaveBeenCalledTimes(2);
      });

      describe('methods:initInput onBlur', () => {
        it('should change value of input if inferior to min on Blur', () => {
          const input = document.createElement('input');
          input.setAttribute('type', 'number');
          input.setAttribute('value', '-1');
          input.setAttribute('min', '2');
          component.el.appendChild(input);

          setup();
          component.el.appendChild(input);

          controller.initInput();
          input.focus();
          input.blur();

          expect(input.value).toEqual(input.min);
        })

        it('should change value of input if superior to max on Blur',  () => {
          const input = document.createElement('input');
          input.setAttribute('type', 'number');
          input.setAttribute('value', '11');
          input.setAttribute('max', '10');

          setup();
          component.el.appendChild(input);

          controller.initInput();
          input.focus();
          input.blur();

          expect(input.value).toEqual(input.max);
        })

        it('should change value of osds-input if inferior to min on Blur',  () => {
          const input = document.createElement('osds-input') as HTMLOdsInputElement;
          input.type = OdsInputType.number;
          input.setAttribute('type', 'number');
          input.tabIndex = 0;
          input.setAttribute('tabindex', '0');
          input.value = "-2";
          input.setAttribute('value', '-2');
          input.min = 2;
          input.setAttribute('min', '2');

          setup();
          component.el.appendChild(input);

          controller.initInput();
          input.focus();
          input.blur();
          input.dispatchEvent(new CustomEvent('odsInputBlur'));

          expect(input.value).toEqual(input.min);
        })

        it('should change value of osds-input if superior to max on Blur',  () => {
          const input = document.createElement('osds-input') as HTMLOdsInputElement;
          input.type = OdsInputType.number;
          input.setAttribute('type', 'number');
          input.tabIndex = 0;
          input.setAttribute('tabindex', '0');
          input.value = "11";
          input.setAttribute('value', '11');
          input.max = 10;
          input.setAttribute('max', '10');

          setup();
          component.el.appendChild(input);

          controller.initInput();
          input.focus();
          input.blur();
          input.dispatchEvent(new CustomEvent('odsInputBlur'));

          expect(input.value).toEqual(input.max);
        })
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
          const input = document.createElement('osds-input') as HTMLElement;
          component.el.appendChild(input);

          setup();

          controller.initInput();

          expect(component.input).toBe(null);
          expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(warnExpected);
          expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
        });

        it('should not init input if vanilla input type is not number', () => {
          const input = document.createElement('input') as HTMLElement;
          component.el.appendChild(input);

          setup();

          controller.initInput();

          expect(component.input).toBe(null);
          expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(warnExpected);
          expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe('methods:processInputValueChange', () => {

      beforeEach(() => {
        component.input = document.createElement('input');
        component.minus = document.createElement('osds-button') as HTMLSlotElement;
        component.plus = document.createElement('osds-button') as HTMLSlotElement;

        component.input.setAttribute('type', 'number');
        component.input.value = '5';
      });

      it('should remove input and slots disabled attribute', () => {
        component.input = (component.input as HTMLInputElement)
        component.input.min = '1';
        component.input.max = '10';

        [component.input, (component.minus as HTMLSlotElement), (component.plus as HTMLSlotElement)].forEach(e => e.setAttribute('disabled', ''));
        setup();

        controller.processInputValueChange();

        expect(component.input.getAttribute('disabled')).toBe('');
        expect((component.minus as HTMLSlotElement).getAttribute('disabled')).toBe(null);
        expect((component.plus as HTMLSlotElement).getAttribute('disabled')).toBe(null);
      });

      it('should set disable to minus slot', () => {
        component.input = (component.input as HTMLInputElement)
        component.input.min = '5';
        component.input.max = '10';

        setup();

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

        setup();

        controller.processInputValueChange();

        expect(component.input.getAttribute('disabled')).toBe(null);
        expect((component.minus as HTMLSlotElement).getAttribute('disabled')).toBe('');
        expect((component.plus as HTMLSlotElement).getAttribute('disabled')).toBe(null);
      });

      it('should set disable to plus slot', () => {
        component.input = (component.input as HTMLInputElement)
        component.input.min = '1';
        component.input.max = '5';

        setup();

        controller.processInputValueChange();

        expect(component.input.getAttribute('disabled')).toBe(null);
        expect((component.minus as HTMLSlotElement).getAttribute('disabled')).toBe(null);
        expect((component.plus as HTMLSlotElement).getAttribute('disabled')).toBe('');
      });
    });

    describe('methods:setDisabledOnChildren', () => {
      it('should set input and slots disabled', () => {
        component.input = document.createElement('input');
        component.minus = document.createElement('osds-button') as HTMLSlotElement;
        component.plus = document.createElement('osds-button') as HTMLSlotElement;

        setup();
        controller.setDisabledOnChildren(true);

        expect(component.input.getAttribute('disabled')).toBe('');
        expect(component.minus.getAttribute('disabled')).toBe('');
        expect(component.plus.getAttribute('disabled')).toBe('');
      });

      it('should remove input and slots disabled attribute', () => {
        component.input = document.createElement('input');
        component.minus = document.createElement('osds-button') as HTMLSlotElement;
        component.plus = document.createElement('osds-button') as HTMLSlotElement;

        [component.input, component.minus, component.plus].forEach(e => e.setAttribute('disabled', ''));
        setup();
        controller.setDisabledOnChildren(false);

        expect(component.input.getAttribute('disabled')).toBe(null);
        expect(component.minus.getAttribute('disabled')).toBe(null);
        expect(component.plus.getAttribute('disabled')).toBe(null);
      });

      it('should call controller.processInputValueChange when disabled is false', () => {
        component.input = document.createElement('input');
        component.minus = document.createElement('osds-button') as HTMLSlotElement;
        component.plus = document.createElement('osds-button') as HTMLSlotElement;

        setup();
        spyOnProcessInputValueChange = jest.spyOn(controller, 'processInputValueChange');
        controller.setDisabledOnChildren(false);

        expect(spyOnProcessInputValueChange).toHaveBeenCalledWith();
        expect(spyOnProcessInputValueChange).toHaveBeenCalledTimes(1);
      });
    });

    describe('methods:clearEventListeners', () => {
      it('should remove input event listener', () => {
        component.input = document.createElement('input');

        setup();
        spyInputRemoveEventListener = jest.spyOn(component.input, 'removeEventListener')

        controller.clearEventListeners();

        expect(spyInputRemoveEventListener).toHaveBeenCalledWith('change', expect.any(Function));
        expect(spyInputRemoveEventListener).toHaveBeenCalledWith('blur', expect.any(Function));
        expect(spyInputRemoveEventListener).toHaveBeenCalledWith('odsInputBlur', expect.any(Function));
        expect(spyInputRemoveEventListener).toHaveBeenCalledTimes(3);
      });
    });

    describe('methods:minusClickHandler', () => {
      it('should call input.stepDown', () => {
        component.input = document.createElement('input');
        component.input.setAttribute('type', 'number');

        setup();
        spyInputStepDown = jest.spyOn(component.input, 'stepDown');

        controller.minusClickHandler();

        expect(spyInputStepDown).toHaveBeenCalledWith();
        expect(spyInputStepDown).toHaveBeenCalledTimes(1);
      });

      it('should call controller.processInputValueChange', () => {
        component.input = document.createElement('input');
        component.input.setAttribute('type', 'number');

        setup();
        spyOnProcessInputValueChange = jest.spyOn(controller, 'processInputValueChange');
        controller.minusClickHandler();

        expect(spyOnProcessInputValueChange).toHaveBeenCalledWith();
        expect(spyOnProcessInputValueChange).toHaveBeenCalledTimes(1);
      });

      it('should not call functions without input', () => {
        setup();
        spyOnProcessInputValueChange = jest.spyOn(controller, 'processInputValueChange');
        controller.minusClickHandler();

        expect(spyOnProcessInputValueChange).not.toHaveBeenCalled();
      });
    });

    describe('methods:plusClickHandler', () => {
      it('should call input.stepUp', () => {
        component.input = document.createElement('input');
        component.input.setAttribute('type', 'number');

        setup();
        spyInputStepUp = jest.spyOn(component.input, 'stepUp');

        controller.plusClickHandler();

        expect(spyInputStepUp).toHaveBeenCalledWith();
        expect(spyInputStepUp).toHaveBeenCalledTimes(1);
      });

      it('should call controller.processInputValueChange', () => {
        component.input = document.createElement('input');
        component.input.setAttribute('type', 'number');

        setup();
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
        const minus = document.createElement('osds-button') as HTMLElement;
        const plus = document.createElement('osds-button') as HTMLElement;
        minus.setAttribute('slot', 'minus');
        plus.setAttribute('slot', 'plus');
        component.el.appendChild(minus);
        component.el.appendChild(plus);

        setup();

        controller.initSlots();

        expect(component.minus).toBe(minus);
        expect(component.plus).toBe(plus);
      });

      it('should not init component.minus if slot is not set', () => {
        const plus = document.createElement('osds-button') as HTMLElement;
        plus.setAttribute('slot', 'plus');
        component.el.appendChild(plus);

        setup();

        controller.initSlots();

        expect(component.minus).toBe(null);
        expect(component.plus).toBe(null);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(warnExpected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });

      it('should not init component.plus if slot is not set', () => {
        const minus = document.createElement('osds-button') as HTMLElement;
        minus.setAttribute('slot', 'minus');
        component.el.appendChild(minus);

        setup();

        controller.initSlots();

        expect(component.minus).toBe(null);
        expect(component.plus).toBe(null);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(warnExpected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });
    });
  });
});
