import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';
import { OdsTextAreaMock } from './ods-textarea-mock';
import { OdsTextAreaController } from './ods-textarea-controller';
import { OdsTextArea } from './ods-textarea';
import { OdsLogger } from '../../logger/ods-logger';
import { Ods } from '../../configure/ods';
import { OdsFormControl } from '../../form/control/ods-form-control';
import { OdsValidityStateUnion } from '../../form/control/ods-form-control-type';
import { OdsTextAreaValidityState } from '../../form/validation/textarea/ods-textarea-validity-state';

describe('ods-textarea-controller', () => {
  let controller: OdsTextAreaController;
  let component: OdsTextArea;
  let spyOnHandleTextAreaValue: jest.SpyInstance<void, jest.ArgsType<OdsTextAreaController['handleTextAreaValue']>>;
  let spyOnRegisterFormControl: jest.SpyInstance<void, jest.ArgsType<OdsTextAreaController['registerFormControl']>>;
  let spyOnEmitValue: jest.SpyInstance<void, jest.ArgsType<OdsTextAreaController['emitValue']>>;
  let spyOnOnDefaultValueChange: jest.SpyInstance<void, jest.ArgsType<OdsTextAreaController['onDefaultValueChange']>>;
  let spyOnEmitBlur: jest.SpyInstance<void, jest.ArgsType<OdsTextArea['emitBlur']>>;
  let spyOnEmitFocus: jest.SpyInstance<void, jest.ArgsType<OdsTextArea['emitFocus']>>;
  let spyOnEmitChange: jest.SpyInstance<void, jest.ArgsType<OdsTextArea['emitChange']>>;
  let spyOnRegister: jest.SpyInstance<void, jest.ArgsType<OdsFormControl<OdsValidityStateUnion>['register']>>;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OdsTextArea> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsTextAreaController(component);
  }

  beforeEach(() => {
    component = new OdsTextAreaMock();
    component.el = document.createElement('osds-textarea') as HTMLElement;

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsTextAreaController
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
        expect(component.value).toEqual(value);
        controller.handleTextAreaValue('');

        expect(component.value).toEqual('');
      });

      it('should not change component value if component is disabled', () => {
        const value = 'Text area';
        setup({ disabled: true, value });
        expect(component.value).toEqual(value);
        controller.handleTextAreaValue('');

        expect(component.value).toEqual(value);
      });

      it('should not change component value if component is not empty', () => {
        const value = 'Text area';
        setup({ disabled: true, value });
        expect(component.value).toEqual(value);
        controller.handleTextAreaValue('New value');

        expect(component.value).toEqual(value);
      });
    });

    describe('getTextAreaValidity', () => {
      it('should return default OdsTextAreaValidityState', () => {
        const defaultValidityState: OdsTextAreaValidityState = {
          valid: true,
          valueMissing: false,
          invalid: false,
          customError: false
        };
        setup();
        const validity = controller.getTextAreaValidity()

        expect(validity).toEqual(defaultValidityState);
      });

      it('should return textarea validity (valid case)', () => {
        const textAreaEl = document.createElement('textarea');
        setup();
        const validity = controller.getTextAreaValidity(textAreaEl)

        expect(validity).toEqual({
          valid: true,
          valueMissing: false,
          customError: false,
          invalid: false
        });
      });

      it('should return textarea validity (invalid case)', () => {
        let textAreaEl = document.createElement('textarea');
        textAreaEl = {
          ...textAreaEl,
          validity: {
            ...textAreaEl.validity,
            valid: false,
            valueMissing: false,
            customError: false,
          }
        }
        setup();
        const validity = controller.getTextAreaValidity(textAreaEl)

        expect(validity).toEqual({
          valid: false,
          valueMissing: false,
          customError: false,
          invalid: true
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

        expect(component.hasFocus).toEqual(false);
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
        const value = 'Text area'
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
        const value = 'Text area'
        setup({ value });
        controller.emitValue('New value', 'Old value');

        expect(loggerSpyReferences.methodSpies.debug).toHaveBeenCalledTimes(1);
        expect(loggerSpyReferences.methodSpies.debug).toHaveBeenCalledWith(`[textarea=Text area]`, 'value changed', { value: 'New value', oldValue: 'Old value' });
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

        expect(component.value).toEqual(value);
      });

      it('should set value to textInputEl if defined', () => {
        const value = 'Text area';
        const textInputEl = document.createElement('textarea');
        setup({ textInputEl });
        controller.setValue(value);

        expect(component.textInputEl?.value).toEqual(value);
        expect(component.value).toEqual(value);
      });
    });

    describe('hasError', () => {
      it('should return true if component.error is true', () => {
        const error = true;
        setup({ error });
        const hasError = controller.hasError();

        expect(hasError).toEqual(true);
      });

      it('should return true if OdsTextAreaValidityState.invalid is true', () => {
        setup();
        controller.getTextAreaValidity = jest.fn().mockImplementation(() => {
          return { invalid: true };
        });
        const hasError = controller.hasError();

        expect(hasError).toEqual(true);
      });

      it('should return false if component.error and OdsTextAreaValidityState.invalid are false', () => {
        const error = false;
        setup({ error });
        controller.getTextAreaValidity = jest.fn().mockImplementation(() => {
          return { invalid: false };
        });
        const hasError = controller.hasError();

        expect(hasError).toEqual(false);
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

        expect(component.value).toEqual(defaultValue);
      });

      it('should set value with empty string if value and defaultValue are undefined', () => {
        setup();
        controller.beforeInit();

        expect(component.value).toEqual('');
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
