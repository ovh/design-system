import { OdsRadioGroupMock } from './../radio-group/ods-radio-group-mock';
import { OdsRadioMock } from './ods-radio-mock';
import { OdsClearLoggerSpy, OdsLoggerSpyReferences, OdsInitializeLoggerSpy } from '@ovhcloud/ods-testing/src';
import { Ods } from '../../configure/ods';
import { OdsLogger } from '../../logger/ods-logger';
import { OdsRadio } from './ods-radio';
import { OdsRadioController } from './ods-radio-controller';
import { OdsRadioizable } from '../../utils/radio/ods-radioizable';
import { OdsRadioGroup } from '../radio-group/ods-radio-group';

describe('spec:ods-radio-controller', () => {
  let controller: OdsRadioController;
  let component: OdsRadio;
  let spyOnEmitFocus: jest.SpyInstance<void, jest.ArgsType<OdsRadio['emitFocus']>>;
  let spyOnEmitBlur: jest.SpyInstance<void, jest.ArgsType<OdsRadio['emitBlur']>>;
  let spyOnEmitChecked: jest.SpyInstance<void, jest.ArgsType<OdsRadio['emitChecked']>>;
  let spyOnEmitChecking: jest.SpyInstance<void, jest.ArgsType<OdsRadio['emitChecking']>>;
  let spyOnUpdateCheckOnChild: jest.SpyInstance<void, jest.ArgsType<OdsRadioController['updateCheckOnChild']>>;
  let spyOnUpdateDisabledOnChild: jest.SpyInstance<void, jest.ArgsType<OdsRadioController['updateDisabledOnChild']>>;
  let spyOnUpdateState: jest.SpyInstance<void, jest.ArgsType<OdsRadioController['updateState']>>;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OdsRadio> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsRadioController(component);
  }

  function createChild(config: OdsRadioizable) {
    return {
      ...document.createElement('input'),
      ...config,
      setAttribute: jest.fn(),
      removeAttribute: jest.fn()
    };
  }

  beforeEach(() => {
    component = new OdsRadioMock();

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsRadioController
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  describe('methods', () => {
    describe('methods:onFocus', () => {
      it('should call emitFocus', () => {
        setup();
        spyOnEmitFocus = jest.spyOn(component, 'emitFocus');
        controller.onFocus();
        expect(spyOnEmitFocus).toHaveBeenCalledTimes(1);
        expect(spyOnEmitFocus).toHaveBeenCalledWith();
      });
    });

    describe('methods:onBlur', () => {
      it('should call emitBlur', () => {
        setup();
        spyOnEmitBlur = jest.spyOn(component, 'emitBlur');
        controller.onBlur();
        expect(spyOnEmitBlur).toHaveBeenCalledTimes(1);
        expect(spyOnEmitBlur).toHaveBeenCalledWith();
      });
    });

    describe('methods:setButtonTabindex', () => {
      it('should set buttonTabindex value', () => {
        const n = 1 + Math.round(Math.random() * 5);
        setup({ buttonTabindex: 0 });
        expect(component.buttonTabindex).toBe(0);
        controller.setButtonTabindex(n);
        expect(component.buttonTabindex).toBe(n);
      });
    });

    describe('methods:updateDisabledOnChild', () => {
      it('should set disabled attribute on child', () => {
        const radioizedComponent = createChild({
          checked: false,
          checking: false,
          disabled: false
        });
        setup({ radioizedComponent });
        controller.updateDisabledOnChild(true);

        expect(component.radioizedComponent?.setAttribute).toHaveBeenCalledTimes(1);
        expect(component.radioizedComponent?.setAttribute).toHaveBeenCalledWith('disabled', '');
      });

      it('should remove disabled attribute on child', () => {
        const radioizedComponent = createChild({
          checked: false,
          checking: false,
          disabled: true
        });
        setup({ radioizedComponent });
        controller.updateDisabledOnChild(false);

        expect(component.radioizedComponent?.removeAttribute).toHaveBeenCalledTimes(1);
        expect(component.radioizedComponent?.removeAttribute).toHaveBeenCalledWith('disabled');
      });
    });

    describe('methods:updateCheckingOnChild', () => {
      it('should set disabled attribute on child', () => {
        const radioizedComponent = createChild({
          checked: false,
          checking: false,
          disabled: false
        });
        setup({ radioizedComponent });
        controller.updateCheckingOnChild(true);

        expect(component.radioizedComponent?.setAttribute).toHaveBeenCalledTimes(1);
        expect(component.radioizedComponent?.setAttribute).toHaveBeenCalledWith('checking', '');
      });

      it('should remove disabled attribute on child', () => {
        const radioizedComponent = createChild({
          checked: false,
          checking: false,
          disabled: true
        });
        setup({ radioizedComponent });
        controller.updateCheckingOnChild(false);

        expect(component.radioizedComponent?.removeAttribute).toHaveBeenCalledTimes(1);
        expect(component.radioizedComponent?.removeAttribute).toHaveBeenCalledWith('checking');
      });
    });

    describe('methods:updateCheckOnChild', () => {
      it('should set disabled attribute on child', () => {
        const radioizedComponent = createChild({
          checked: false,
          checking: false,
          disabled: false
        });
        setup({ radioizedComponent });
        controller.updateCheckOnChild(true);

        expect(component.radioizedComponent?.setAttribute).toHaveBeenCalledTimes(1);
        expect(component.radioizedComponent?.setAttribute).toHaveBeenCalledWith('checked', '');
      });

      it('should remove disabled attribute on child', () => {
        const radioizedComponent = createChild({
          checked: false,
          checking: false,
          disabled: true
        });
        setup({ radioizedComponent });
        controller.updateCheckOnChild(false);

        expect(component.radioizedComponent?.removeAttribute).toHaveBeenCalledTimes(1);
        expect(component.radioizedComponent?.removeAttribute).toHaveBeenCalledWith('checked');
      });
    });

    describe('methods:watchValue', () => {
      it('should log event', () => {
        const value = 'value';
        const watchedValue = 'watchedValue';
        setup({ value });
        controller.watchValue(watchedValue);

        expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledTimes(1);
        expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio=${value}]`, 'value changed', { value: watchedValue });
      });
    });

    describe('methods:beforeInit', () => {
      const radioGroup = new OdsRadioGroupMock() as unknown as (HTMLElement & OdsRadioGroup);
      const el = document.createElement('osds-radio');

      beforeEach(() => {
        radioGroup.addEventListener = jest.fn();
        el.closest = jest.fn(() => radioGroup);
      });

      it('should call updateCheckOnChild with component checked attribute', () => {
        const checked = true;
        setup({ el, checked });
        spyOnUpdateCheckOnChild = jest.spyOn(controller, 'updateCheckOnChild');
        controller.beforeInit();

        expect(spyOnUpdateCheckOnChild).toHaveBeenCalledTimes(1);
        expect(spyOnUpdateCheckOnChild).toHaveBeenCalledWith(checked);
      });

      it('should call updateDisabledOnChild with component disabled attribute', () => {
        const disabled = true;
        setup({ el, disabled });
        spyOnUpdateDisabledOnChild = jest.spyOn(controller, 'updateDisabledOnChild');
        controller.beforeInit();

        expect(spyOnUpdateDisabledOnChild).toHaveBeenCalledTimes(1);
        expect(spyOnUpdateDisabledOnChild).toHaveBeenCalledWith(disabled);
      });

      it('should call radioGroup.registerRadio', () => {
        setup({ el });
        controller.beforeInit();

        expect(radioGroup.registerRadio).toHaveBeenCalledTimes(1);
        expect(radioGroup.registerRadio).toHaveBeenCalledWith(el);
      });

      it('should call radioGroup.addEventListener with odsDisabledChange', () => {
        setup({ el });
        controller.beforeInit();
        expect(radioGroup.addEventListener).toHaveBeenCalledWith('odsDisabledChange', expect.any(Function));
      });

      it('should call radioGroup.addEventListener with odsValueChange', () => {
        setup({ el });
        controller.beforeInit();
        expect(radioGroup.addEventListener).toHaveBeenCalledWith('odsValueChange', expect.any(Function));
      });

      it('should call updateState', () => {
        setup({ el });
        spyOnUpdateState = jest.spyOn(controller, 'updateState');
        controller.beforeInit();

        expect(spyOnUpdateState).toHaveBeenCalledTimes(1);
        expect(spyOnUpdateState).toHaveBeenCalledWith();
      });
    });

    describe('methods:afterInit', () => {
      const el = {
        ...document.createElement('osds-radio'),
        firstElementChild: document.createElement('input')
      };

      it('should call updateCheckOnChild with component checked attribute', () => {
        const checked = true;
        setup({ el, checked });
        spyOnUpdateCheckOnChild = jest.spyOn(controller, 'updateCheckOnChild');
        controller.afterInit();

        expect(spyOnUpdateCheckOnChild).toHaveBeenCalledTimes(1);
        expect(spyOnUpdateCheckOnChild).toHaveBeenCalledWith(checked);
      });

      it('should call updateDisabledOnChild with component disabled attribute', () => {
        const disabled = true;
        setup({ el, disabled });
        spyOnUpdateDisabledOnChild = jest.spyOn(controller, 'updateDisabledOnChild');
        controller.afterInit();

        expect(spyOnUpdateDisabledOnChild).toHaveBeenCalledTimes(1);
        expect(spyOnUpdateDisabledOnChild).toHaveBeenCalledWith(disabled);
      });

      it('should warn if radioizedComponent is null', () => {
        const value = 'value';
        const newEl = {
          ...document.createElement('osds-radio'),
          firstElementChild: null
        };
        setup({ el: newEl, value });
        controller.afterInit();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(`[radio=${value}]`, 'you must place a radioizable element inside the radio component');
      });
    });

    describe('methods:onDestroy', () => {
      const el = document.createElement('osds-radio');
      const radioGroup = new OdsRadioGroupMock() as unknown as (HTMLElement & OdsRadioGroup);
      radioGroup.removeEventListener = jest.fn();

      beforeEach(() => {
        setup({ el, radioGroup });
      });

      it('should unregister current radio', () => {
        jest.spyOn(radioGroup, 'unregisterRadio');
        controller.onDestroy();
        expect(radioGroup?.unregisterRadio).toHaveBeenCalledTimes(1);
        expect(radioGroup?.unregisterRadio).toHaveBeenCalledWith(el);
      });

      it('should remove disabledChange event', () => {
        controller.onDestroy();
        expect(radioGroup?.removeEventListener).toHaveBeenCalledWith('odsDisabledChange', expect.any(Function));
      });

      it('should remove valueChange event', () => {
        controller.onDestroy();
        expect(radioGroup?.removeEventListener).toHaveBeenCalledWith('odsValueChange', expect.any(Function));
      });

      it('should set radioGroup to null', () => {
        controller.onDestroy();
        expect(component.radioGroup).toBeNull();
      });
    });

    describe('methods:updateState', () => {
      it('should set checked value (undefined radioGroup.value)', () => {
        const value = 'value';
        const radioGroup = new OdsRadioGroupMock() as unknown as (HTMLElement & OdsRadioGroup);
        const checked = true;
        radioGroup.value = undefined as unknown as string;
        setup({ value, radioGroup, checked });
        controller.updateState();

        expect(component.checked).toBe(false);
      });

      it('should set checked value (undefined value)', () => {
        const value = undefined;
        const radioGroup = new OdsRadioGroupMock() as unknown as (HTMLElement & OdsRadioGroup);
        const checked = true;
        radioGroup.value = 'value';
        setup({ value, radioGroup, checked });
        controller.updateState();

        expect(component.checked).toBe(false);
      });

      it('should set checked value (radioGroup.value !== value)', () => {
        const value = 'value';
        const radioGroup = new OdsRadioGroupMock() as unknown as (HTMLElement & OdsRadioGroup);
        const checked = true;
        radioGroup.value = 'radioValue';
        setup({ value, radioGroup, checked });
        controller.updateState();

        expect(component.checked).toBe(false);
      });

      it('should set checked value (radioGroup.value === value)', () => {
        const value = 'value';
        const radioGroup = new OdsRadioGroupMock() as unknown as (HTMLElement & OdsRadioGroup);
        const checked = false;
        radioGroup.value = 'value';
        setup({ value, radioGroup, checked });
        controller.updateState();

        expect(component.checked).toBe(true);
      });

      it('should set checking to false if checked is true', () => {
        const value = 'value';
        const radioGroup = new OdsRadioGroupMock() as unknown as (HTMLElement & OdsRadioGroup);
        const checked = false;
        const checking = true;
        radioGroup.value = 'value';
        setup({ value, radioGroup, checked, checking });
        controller.updateState();

        expect(component.checking).toBe(false);
      });

      it('should set checking from params', () => {
        const radioGroup = new OdsRadioGroupMock() as unknown as (HTMLElement & OdsRadioGroup);
        const checking = false;
        setup({ checking, radioGroup });
        controller.updateState(true);

        expect(component.checking).toBe(true);
      });

      it('should set disabled from radioGroup disabled attribute', () => {
        const radioGroup = new OdsRadioGroupMock() as unknown as (HTMLElement & OdsRadioGroup);
        const disabled = false;
        radioGroup.disabled = true;
        setup({ disabled, radioGroup });
        controller.updateState();

        expect(component.disabled).toBe(true);
      });
    });

    describe('methods:handleLabelClick', () => {
      describe('no update', () => {
        it('should not call emitChecked if disabled is true', async () => {
          const disabled = true;
          setup({ disabled });
          spyOnEmitChecked = jest.spyOn(component, 'emitChecked');
          await controller.handleLabelClick(new MouseEvent(''));

          expect(spyOnEmitChecked).not.toHaveBeenCalled();
        });

        it('should not call emitChecked if checked is true', async () => {
          const checked = true;
          setup({ checked });
          spyOnEmitChecked = jest.spyOn(component, 'emitChecked');
          await controller.handleLabelClick(new MouseEvent(''));

          expect(spyOnEmitChecked).not.toHaveBeenCalled();
        });
      });

      describe('pessimistic update', () => {
        const save = jest.fn();

        it('should use logger', async () => {
          const value = 'value';
          setup({ value, save });
          await controller.handleLabelClick(new MouseEvent(''));

          expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio=${value}]`, 'pessimistic update');
        });

        describe('calling save', () => {
          const save = jest.fn();
          const beforeSave = jest.fn();

          it('should use logger', async () => {
            const value = 'value';
            setup({ value, save });
            await controller.handleLabelClick(new MouseEvent(''));

            expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio=${value}]`, 'calling save');
          });

          it('should call beforeSave', async () => {
            const checked = false;
            const value = 'value';
            setup({ save, beforeSave, checked, value });
            await controller.handleLabelClick(new MouseEvent(''));

            expect(beforeSave).toHaveBeenCalledTimes(1);
            expect(beforeSave).toHaveBeenCalledWith({ checked, value });
          });

          it('should call save', async () => {
            const checked = false;
            const value = 'value';
            setup({ save, beforeSave, checked, value });
            await controller.handleLabelClick(new MouseEvent(''));

            expect(save).toHaveBeenCalledTimes(1);
            expect(save).toHaveBeenCalledWith({ checked, value });
          });

          it('should set checked to true', async () => {
            const checked = false;
            setup({ save, checked, beforeSave });
            await controller.handleLabelClick(new MouseEvent(''));

            expect(component.checked).toBe(true);
          });
        });

        describe('calling save failed', () => {
          it('should use logger', async () => {
            const value = 'value';
            setup({ value, save });
            component.beforeSave = jest.fn().mockRejectedValue(null);
            await controller.handleLabelClick(new MouseEvent(''));

            expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio=${value}]`, 'calling save failed');
          });

          it('should reset checked to false', async () => {
            setup({ save });
            component.beforeSave = jest.fn().mockRejectedValue(null);
            await controller.handleLabelClick(new MouseEvent(''));

            expect(component.checked).toBe(false);
          });
        });

        describe('calling save done', () => {
          const save = jest.fn();
          const beforeSave = jest.fn();
          const afterSave = jest.fn();

          it('should use logger', async () => {
            const value = 'value';
            setup({ value, save, beforeSave });
            await controller.handleLabelClick(new MouseEvent(''));

            expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio=${value}]`, 'calling save done');
          });

          it('should set checking to false', async () => {
            setup({ save, beforeSave });
            await controller.handleLabelClick(new MouseEvent(''));

            expect(component.checking).toBe(false);
          });

          it('should call emitChecking twice', async () => {
            setup({ save, beforeSave });
            spyOnEmitChecking = jest.spyOn(component, 'emitChecking');
            await controller.handleLabelClick(new MouseEvent(''));

            expect(spyOnEmitChecking).toHaveBeenCalledTimes(2);
            expect(spyOnEmitChecking).toHaveBeenCalledWith();
          });

          it('should call afterSave', async () => {
            const value = 'value';
            setup({ value, save, beforeSave, afterSave });
            // spyOnEmitChecking = jest.spyOn(component, 'emitChecking');
            await controller.handleLabelClick(new MouseEvent(''));

            expect(afterSave).toHaveBeenCalledTimes(1);
            expect(afterSave).toHaveBeenCalledWith({ checked: true, value });
          });
        });
      });

      describe('pessimistic update led by radio-group', () => {
        const radioGroup = new OdsRadioGroupMock() as unknown as (HTMLElement & OdsRadioGroup);
        radioGroup.save = jest.fn();

        it('should use logger', async () => {
          const value = 'value';
          setup({ value, radioGroup });
          await controller.handleLabelClick(new MouseEvent(''));

          expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio=${value}]`, 'pessimistic update led by radio-group');
        });

        it('should set checking to true', async () => {
          const checking = false;
          setup({ checking, radioGroup });
          await controller.handleLabelClick(new MouseEvent(''));

          expect(component.checking).toBe(true);
        });

        it('should call emitChecking', async () => {
          setup({ radioGroup });
          spyOnEmitChecking = jest.spyOn(component, 'emitChecking');
          await controller.handleLabelClick(new MouseEvent(''));

          expect(spyOnEmitChecking).toHaveBeenCalledTimes(1);
          expect(spyOnEmitChecking).toHaveBeenCalledWith();
        });
      });

      describe('optimistic update', () => {
        it('should use logger', async () => {
          const value = 'value';
          setup({ value });
          await controller.handleLabelClick(new MouseEvent(''));

          expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio=${value}]`, 'optimistic update');
        });

        it('should set checked to true', async () => {
          const checked = false;
          setup({ checked });
          await controller.handleLabelClick(new MouseEvent(''));

          expect(component.checked).toBe(true);
        });
      });
    });

    describe('methods:handleLabelKeyEvent', () => {
      it('should not call emitChecked', async () => {
        const disabled = false;
        const checked = false;
        setup({ disabled, checked });
        spyOnEmitChecked = jest.spyOn(component, 'emitChecked');
        await controller.handleLabelKeyEvent(new KeyboardEvent(''));

        expect(spyOnEmitChecked).not.toHaveBeenCalled();
      });

      it('should call emitChecked (Space case)', async () => {
        const disabled = false;
        const checked = false;
        setup({ disabled, checked });
        spyOnEmitChecked = jest.spyOn(component, 'emitChecked');
        await controller.handleLabelKeyEvent(new KeyboardEvent('', { code: 'Space' }));

        expect(spyOnEmitChecked).toHaveBeenCalledTimes(1);
        expect(spyOnEmitChecked).toHaveBeenCalledWith();
      });

      it('should call emitChecked (Enter case)', async () => {
        const disabled = false;
        const checked = false;
        setup({ disabled, checked });
        spyOnEmitChecked = jest.spyOn(component, 'emitChecked');
        await controller.handleLabelKeyEvent(new KeyboardEvent('', { code: 'Enter' }));

        expect(spyOnEmitChecked).toHaveBeenCalledTimes(1);
        expect(spyOnEmitChecked).toHaveBeenCalledWith();
      });
    });
  });
});
