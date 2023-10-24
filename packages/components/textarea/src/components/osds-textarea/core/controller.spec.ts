import type { OdsTextAreaValidityState, OdsValidityStateUnion } from '@ovhcloud/ods-common-core';
import type { OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import { OdsTextAreaController } from './controller';
import { OsdsTextArea } from '../osds-textarea';
import { Ods, OdsFormControl, OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy } from '@ovhcloud/ods-common-testing';

class OdsTextAreaMock extends OsdsTextArea {
  constructor(attribute: Partial<OsdsTextArea>) {
    super();
    Object.assign(this, attribute);
  }

  controller: OdsTextAreaController = jest.fn() as unknown as OdsTextAreaController;
  beforeInit = jest.fn();
  clear = jest.fn();
  emitBlur = jest.fn();
  emitChange = jest.fn();
  emitFocus = jest.fn();
  getValidity = jest.fn();
  onBlur = jest.fn();
  onChange = jest.fn();
  onFocus = jest.fn();
  onInput = jest.fn();
  reset = jest.fn();
  setFocus = jest.fn();
  setTextAreaTabindex = jest.fn();
}

describe('ods-textarea-controller', () => {
  let controller: OdsTextAreaController;
  let component: OsdsTextArea;
  let spyOnHandleTextAreaValue: jest.SpyInstance<void, jest.ArgsType<OdsTextAreaController['handleTextAreaValue']>>;
  let spyOnRegisterFormControl: jest.SpyInstance<void, jest.ArgsType<OdsTextAreaController['registerFormControl']>>;
  let spyOnEmitValue: jest.SpyInstance<void, jest.ArgsType<OdsTextAreaController['emitValue']>>;
  let spyOnOnDefaultValueChange: jest.SpyInstance<void, jest.ArgsType<OdsTextAreaController['onDefaultValueChange']>>;
  let spyOnEmitBlur: jest.SpyInstance<void, jest.ArgsType<OsdsTextArea['emitBlur']>>;
  let spyOnEmitFocus: jest.SpyInstance<void, jest.ArgsType<OsdsTextArea['emitFocus']>>;
  let spyOnEmitChange: jest.SpyInstance<void, jest.ArgsType<OsdsTextArea['emitChange']>>;
  let spyOnRegister: jest.SpyInstance<void, jest.ArgsType<OdsFormControl<OdsValidityStateUnion>['register']>>;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OsdsTextArea> = {}) {
    component = new OdsTextAreaMock(attributes);
    controller = new OdsTextAreaController(component);
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsTextAreaController,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    OdsClearLoggerSpy(loggerSpyReferences);
  });

  describe('methods', () => {
    describe('handleTextareaValue', () => {
      it('should reset component value if new value is empty', () => {
        const value = 'Text area';
        setup({ value });
        expect(component.value).toBe(value);
        controller.handleTextAreaValue('');

        expect(component.value).toBe('');
      });

      it('should not change component value if component is disabled', () => {
        const value = 'Text area';
        setup({ disabled: true, value });
        expect(component.value).toBe(value);
        controller.handleTextAreaValue('');

        expect(component.value).toBe(value);
      });

      it('should not change component value if component is not empty', () => {
        const value = 'Text area';
        setup({ disabled: true, value });
        expect(component.value).toBe(value);
        controller.handleTextAreaValue('New value');

        expect(component.value).toBe(value);
      });
    });

    describe('getTextAreaValidity', () => {
      it('should return default OdsTextAreaValidityState', () => {
        const defaultValidityState: OdsTextAreaValidityState = {
          valid: true,
          valueMissing: false,
          invalid: false,
          customError: false,
        };
        setup();
        const validity = controller.getTextAreaValidity();

        expect(validity).toEqual(defaultValidityState);
      });

      it('should return textarea validity (valid case)', () => {
        const textAreaEl = { validity: { valid: true } } as HTMLTextAreaElement;
        setup();
        const validity = controller.getTextAreaValidity(textAreaEl);

        expect(validity).toEqual({
          valid: true,
          valueMissing: undefined,
          customError: undefined,
          invalid: false,
        });
      });

      it('should return textarea validity (invalid case)', () => {
        const textAreaEl = { validity: { valid: false } } as HTMLTextAreaElement;
        setup();
        const validity = controller.getTextAreaValidity(textAreaEl);

        expect(validity).toEqual({
          valid: false,
          valueMissing: undefined,
          customError: undefined,
          invalid: true,
        });
      });
    });

    describe('onInput', () => {
      it('should log value', () => {
        const textInputEl = document.createElement('textarea');
        textInputEl.value = 'Text area';
        setup({ textInputEl });
        controller.onInput(new Event(''));

        expect(loggerSpyReferences.methodSpies.debug).toHaveBeenCalledTimes(1);
        expect(loggerSpyReferences.methodSpies.debug).toHaveBeenCalledWith('oninput', 'Text area');
      });

      it('should call handleTextAreaValue', () => {
        const textInputEl = document.createElement('textarea');
        textInputEl.value = 'Text area';
        setup({ textInputEl });
        spyOnHandleTextAreaValue = jest.spyOn(controller, 'handleTextAreaValue');
        controller.onInput(new Event(''));

        expect(spyOnHandleTextAreaValue).toHaveBeenCalledTimes(1);
        expect(spyOnHandleTextAreaValue).toHaveBeenCalledWith('Text area');
      });

      it('should not call handleTextAreaValue if textInputEl is undefined', () => {
        setup();
        controller.onInput(new Event(''));

        expect(spyOnHandleTextAreaValue).not.toHaveBeenCalled();
      });
    });

    describe('onBlur', () => {
      it('should call emitBlur', () => {
        setup();
        spyOnEmitBlur = jest.spyOn(component, 'emitBlur');
        controller.onBlur();

        expect(spyOnEmitBlur).toHaveBeenCalledTimes(1);
        expect(spyOnEmitBlur).toHaveBeenCalledWith();
      });

      it('should have hasFocus to false', () => {
        setup({ hasFocus: true });
        controller.onBlur();

        expect(component.hasFocus).toBe(false);
      });
    });

    describe('onFocus', () => {
      it('should call emitFocus', () => {
        setup();
        spyOnEmitFocus = jest.spyOn(component, 'emitFocus');
        controller.onFocus();

        expect(spyOnEmitFocus).toHaveBeenCalledTimes(1);
        expect(spyOnEmitFocus).toHaveBeenCalledWith();
      });
    });

    describe('onChange', () => {
      it('should log value', () => {
        const textInputEl = document.createElement('textarea');
        textInputEl.value = 'Text area';
        setup({ textInputEl });
        controller.onChange();

        expect(loggerSpyReferences.methodSpies.debug).toHaveBeenCalledTimes(1);
        expect(loggerSpyReferences.methodSpies.debug).toHaveBeenCalledWith('onChange', 'Text area');
      });
    });

    describe('registerFormControl', () => {
      it('should log value, form control and form control id', () => {
        const formControl = new OdsFormControl('id');
        const value = 'Text area';
        setup({ value });
        controller.registerFormControl(formControl);

        expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledTimes(1);
        expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith('[textarea=Text area]', 'onFormControlChange', formControl, 'id');
      });

      it('should call formControl.register', () => {
        const formControl = new OdsFormControl('id');
        setup();
        spyOnRegister = jest.spyOn(formControl, 'register');
        controller.registerFormControl(formControl);

        expect(spyOnRegister).toHaveBeenCalledTimes(1);
        expect(spyOnRegister).toHaveBeenCalledWith(component);
      });
    });

    describe('emitValue', () => {
      it('should log value', () => {
        const value = 'Text area';
        setup({ value });
        controller.emitValue('New value', 'Old value');

        expect(loggerSpyReferences.methodSpies.debug).toHaveBeenCalledTimes(1);
        expect(loggerSpyReferences.methodSpies.debug).toHaveBeenCalledWith('[textarea=Text area]', 'value changed', { value: 'New value', oldValue: 'Old value' });
      });

      it('should call formControl.register', () => {
        setup();
        spyOnEmitChange = jest.spyOn(component, 'emitChange');
        controller.emitValue('New value', 'Old value');

        expect(spyOnEmitChange).toHaveBeenCalledTimes(1);
        expect(spyOnEmitChange).toHaveBeenCalledWith('New value', 'Old value');
      });
    });

    describe('onDefaultValueChange', () => {
      it('should log default value change', () => {
        setup({ value: 'Text area' });
        controller.onDefaultValueChange('default');

        expect(loggerSpyReferences.methodSpies.debug).toHaveBeenCalledTimes(1);
        expect(loggerSpyReferences.methodSpies.debug).toHaveBeenCalledWith('[textarea=Text area]', 'defaultValue', 'default');
      });
    });

    describe('setValue', () => {
      it('should set value', () => {
        const value = 'Text area';
        setup();
        controller.setValue(value);

        expect(component.value).toBe(value);
      });

      it('should set value to textInputEl if defined', () => {
        const value = 'Text area';
        const textInputEl = document.createElement('textarea');
        setup({ textInputEl });
        controller.setValue(value);

        expect(component.textInputEl?.value).toBe(value);
        expect(component.value).toBe(value);
      });
    });

    describe('hasError', () => {
      it('should return true if component.error is true', () => {
        const error = true;
        setup({ error });
        const hasError = controller.hasError();

        expect(hasError).toBe(true);
      });

      it('should return true if OdsTextAreaValidityState.invalid is true', () => {
        setup();
        controller.getTextAreaValidity = jest.fn().mockImplementation(() => {
          return { invalid: true };
        });
        const hasError = controller.hasError();

        expect(hasError).toBe(true);
      });

      it('should return false if component.error and OdsTextAreaValidityState.invalid are false', () => {
        const error = false;
        setup({ error });
        controller.getTextAreaValidity = jest.fn().mockImplementation(() => {
          return { invalid: false };
        });
        const hasError = controller.hasError();

        expect(hasError).toBe(false);
      });
    });

    describe('beforeInit', () => {
      it('should call registerFormControl', () => {
        const formControl = new OdsFormControl('id');
        setup({ formControl });
        spyOnRegisterFormControl = jest.spyOn(controller, 'registerFormControl');
        controller.beforeInit();

        expect(spyOnRegisterFormControl).toHaveBeenCalledTimes(1);
        expect(spyOnRegisterFormControl).toHaveBeenCalledWith(formControl);
      });

      it('should call emitValue', () => {
        const value = 'Text area';
        setup({ value });
        spyOnEmitValue = jest.spyOn(controller, 'emitValue');
        controller.beforeInit();

        expect(spyOnEmitValue).toHaveBeenCalledTimes(1);
        expect(spyOnEmitValue).toHaveBeenCalledWith(value);
      });

      it('should call onDefaultValueChange', () => {
        const defaultValue = 'default';
        setup({ defaultValue });
        spyOnOnDefaultValueChange = jest.spyOn(controller, 'onDefaultValueChange');
        controller.beforeInit();

        expect(spyOnOnDefaultValueChange).toHaveBeenCalledTimes(1);
        expect(spyOnOnDefaultValueChange).toHaveBeenCalledWith(defaultValue);
      });

      it('should set value with defaultValue if value is undefined', () => {
        const defaultValue = 'default';
        setup({ defaultValue });
        controller.beforeInit();

        expect(component.value).toBe(defaultValue);
      });

      it('should set value with empty string if value and defaultValue are undefined', () => {
        setup();
        controller.beforeInit();

        expect(component.value).toBe('');
      });
    });

    describe('setTextAreaTabindex', () => {
      it('should set textInputTabIndex value', () => {
        const n = 1 + Math.round(Math.random() * 5);
        setup();
        controller.setTextAreaTabindex(n);

        expect(component.textInputTabIndex).toBe(n);
      });
    });
  });
});
