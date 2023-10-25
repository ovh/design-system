import type { OdsRadioizable } from '@ovhcloud/ods-common-core';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import type { HTMLStencilElement } from '@stencil/core/internal';

import { OdsRadioController } from './controller';
import { OsdsRadioGroup } from '../../osds-radio-group/osds-radio-group';
import { OsdsRadio } from '../osds-radio';

class OdsRadioMock extends OsdsRadio {
  constructor(attribute: Partial<OsdsRadio>) {
    super();
    Object.assign(this, attribute);
  }

  emitBlur = jest.fn();
  emitChecked = jest.fn();
  emitFocus = jest.fn();
  emitChecking = jest.fn();
}

class OdsRadioGroupMock extends OsdsRadioGroup {
  constructor(attribute?: Partial<OsdsRadioGroup>) {
    super();
    Object.assign(this, attribute);
  }

  emitChange = jest.fn();
  emitDisabled = jest.fn();
}

describe('spec:ods-radio-controller', () => {
  let controller: OdsRadioController;
  let component: OsdsRadio;
  let spyOnEmitFocus: jest.SpyInstance<void, jest.ArgsType<OsdsRadio['emitFocus']>>;
  let spyOnEmitBlur: jest.SpyInstance<void, jest.ArgsType<OsdsRadio['emitBlur']>>;
  let spyOnEmitChecked: jest.SpyInstance<void, jest.ArgsType<OsdsRadio['emitChecked']>>;
  let spyOnEmitChecking: jest.SpyInstance<void, jest.ArgsType<OsdsRadio['emitChecking']>>;
  let spyOnUpdateCheckOnChild: jest.SpyInstance<void, jest.ArgsType<OdsRadioController['updateCheckOnChild']>>;
  let spyOnUpdateDisabledOnChild: jest.SpyInstance<void, jest.ArgsType<OdsRadioController['updateDisabledOnChild']>>;
  let spyOnUpdateState: jest.SpyInstance<void, jest.ArgsType<OdsRadioController['updateState']>>;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  function setup(attributes: Partial<OsdsRadio> = {}) {
    component = new OdsRadioMock(attributes);
    controller = new OdsRadioController(component);
    controller.closestPassShadow = jest.fn();
    controller.getFirstElementChild = jest.fn();
  }

  function createChild(config: OdsRadioizable) {
    return {
      ...document.createElement('input'),
      ...config,
      componentOnReady: jest.fn(),
      removeAttribute: jest.fn(),
      setAttribute: jest.fn(),
    };
  }

  function createRadioGroup(attribute?: Partial<OsdsRadioGroup>) {
    const radioGroup = new OdsRadioGroupMock(attribute);
    radioGroup.el.addEventListener = jest.fn();
    radioGroup.el.removeEventListener = jest.fn();
    return radioGroup;
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsRadioController,
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

      it('should set buttonTabindex value to minus one if disabled', () => {
        const n = 1 + Math.round(Math.random() * 5);
        setup({ buttonTabindex: 0, disabled: true });
        controller.setButtonTabindex(n);
        expect(component.buttonTabindex).toBe(-1);
      });
    });

    describe('methods:updateDisabledOnChild', () => {
      it('should set disabled attribute on child', () => {
        const radioizedComponent = createChild({
          checked: false,
          checking: false,
          disabled: false,
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
          disabled: true,
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
          disabled: false,
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
          disabled: true,
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
          disabled: false,
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
          disabled: true,
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
      it('should call updateCheckOnChild with component checked attribute', () => {
        const checked = true;
        setup({ checked });
        spyOnUpdateCheckOnChild = jest.spyOn(controller, 'updateCheckOnChild');

        controller.beforeInit();

        expect(spyOnUpdateCheckOnChild).toHaveBeenCalledTimes(1);
        expect(spyOnUpdateCheckOnChild).toHaveBeenCalledWith(checked);
      });

      it('should call updateDisabledOnChild with component disabled attribute', () => {
        const disabled = true;
        setup({ disabled });
        createRadioGroup();
        spyOnUpdateDisabledOnChild = jest.spyOn(controller, 'updateDisabledOnChild');
        controller.beforeInit();

        expect(spyOnUpdateDisabledOnChild).toHaveBeenCalledTimes(1);
        expect(spyOnUpdateDisabledOnChild).toHaveBeenCalledWith(disabled);
      });

      it('should call radioGroup.registerRadio', () => {
        setup({ });
        const radioGroup = createRadioGroup();
        const spy = jest.spyOn(radioGroup, 'registerRadio');
        jest.spyOn(controller, 'closestPassShadow').mockReturnValue(radioGroup as unknown as HTMLStencilElement & OsdsRadioGroup);

        controller.beforeInit();

        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should call radioGroup.addEventListener with odsDisabledChange', () => {
        setup({ });
        const radioGroup = createRadioGroup();
        const spy = jest.spyOn(radioGroup.el, 'addEventListener');
        jest.spyOn(controller, 'closestPassShadow').mockReturnValue(radioGroup as unknown as HTMLStencilElement & OsdsRadioGroup);
        controller.beforeInit();
        expect(spy).toHaveBeenCalledWith('odsDisabledChange', expect.any(Function));
      });

      it('should call radioGroup.addEventListener with odsValueChange', () => {
        setup({ });
        const radioGroup = createRadioGroup();
        const spy = jest.spyOn(radioGroup.el, 'addEventListener');
        jest.spyOn(controller, 'closestPassShadow').mockReturnValue(radioGroup as unknown as HTMLStencilElement & OsdsRadioGroup);
        controller.beforeInit();
        expect(spy).toHaveBeenCalledWith('odsValueChange', expect.any(Function));
      });

      it('should call updateState', () => {
        setup({ });
        const radioGroup = createRadioGroup();
        spyOnUpdateState = jest.spyOn(controller, 'updateState');
        jest.spyOn(controller, 'closestPassShadow').mockReturnValue(radioGroup as unknown as HTMLStencilElement & OsdsRadioGroup);
        controller.beforeInit();

        expect(spyOnUpdateState).toHaveBeenCalledTimes(1);
        expect(spyOnUpdateState).toHaveBeenCalledWith();
      });
    });

    describe('methods:afterInit', () => {
      it('should call updateCheckOnChild with component checked attribute', () => {
        const checked = true;
        setup({ checked });
        controller.getFirstElementChild = jest.fn().mockReturnValue(createChild({}));
        spyOnUpdateCheckOnChild = jest.spyOn(controller, 'updateCheckOnChild');
        controller.afterInit();

        expect(spyOnUpdateCheckOnChild).toHaveBeenCalledTimes(1);
        expect(spyOnUpdateCheckOnChild).toHaveBeenCalledWith(checked);
      });

      it('should call updateDisabledOnChild with component disabled attribute', () => {
        const disabled = true;
        setup({ disabled });
        controller.getFirstElementChild = jest.fn().mockReturnValue(createChild({}));
        spyOnUpdateDisabledOnChild = jest.spyOn(controller, 'updateDisabledOnChild');
        controller.afterInit();

        expect(spyOnUpdateDisabledOnChild).toHaveBeenCalledTimes(1);
        expect(spyOnUpdateDisabledOnChild).toHaveBeenCalledWith(disabled);
      });

      it('should warn if radioizedComponent is null', () => {
        const value = 'value';
        setup({ value });
        controller.afterInit();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(`[radio=${value}]`, 'you must place a radioizable element inside the radio component');
      });
    });

    describe('methods:onDestroy', () => {

      beforeEach(() => {
      });

      it('should unregister current radio', () => {
        const radioGroup = createRadioGroup();
        setup({ radioGroup });
        const spy = jest.spyOn(radioGroup, 'unregisterRadio');
        controller.onDestroy();
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should remove disabledChange event', () => {
        const radioGroup = createRadioGroup();
        setup({ radioGroup });
        const spy = jest.spyOn(radioGroup.el, 'removeEventListener');
        controller.onDestroy();
        expect(spy).toHaveBeenCalledWith('odsDisabledChange', expect.any(Function));
      });

      it('should remove valueChange event', () => {
        const radioGroup = createRadioGroup();
        setup({ radioGroup });
        const spy = jest.spyOn(radioGroup.el, 'removeEventListener');
        controller.onDestroy();
        expect(spy).toHaveBeenCalledWith('odsValueChange', expect.any(Function));
      });

      it('should set radioGroup to null', () => {
        setup({ });
        controller.onDestroy();
        expect(component.radioGroup).toBeNull();
      });
    });

    describe('methods:updateState', () => {
      it('should set checked value (undefined radioGroup.value)', () => {
        const value = 'value';
        const radioGroup = new OdsRadioGroupMock();
        const checked = true;
        radioGroup.value = undefined as unknown as string;
        setup({ value, radioGroup, checked });
        controller.updateState();

        expect(component.checked).toBe(false);
      });

      it('should set checked value (undefined value)', () => {
        const value = undefined;
        const radioGroup = new OdsRadioGroupMock();
        const checked = true;
        radioGroup.value = 'value';
        setup({ value, radioGroup, checked });
        controller.updateState();

        expect(component.checked).toBe(false);
      });

      it('should set checked value (radioGroup.value !== value)', () => {
        const value = 'value';
        const radioGroup = new OdsRadioGroupMock();
        const checked = true;
        radioGroup.value = 'radioValue';
        setup({ value, radioGroup, checked });
        controller.updateState();

        expect(component.checked).toBe(false);
      });

      it('should set checked value (radioGroup.value === value)', () => {
        const value = 'value';
        const radioGroup = new OdsRadioGroupMock();
        const checked = false;
        radioGroup.value = 'value';
        setup({ value, radioGroup, checked });
        controller.updateState();

        expect(component.checked).toBe(true);
      });

      it('should set checking to false if checked is true', () => {
        const value = 'value';
        const radioGroup = new OdsRadioGroupMock();
        const checked = false;
        const checking = true;
        radioGroup.value = 'value';
        setup({ value, radioGroup, checked, checking });
        controller.updateState();

        expect(component.checking).toBe(false);
      });

      it('should set checking from params', () => {
        const radioGroup = new OdsRadioGroupMock();
        const checking = false;
        setup({ checking, radioGroup });
        controller.updateState(true);

        expect(component.checking).toBe(true);
      });

      it('should set disabled from radioGroup disabled attribute', () => {
        const radioGroup = new OdsRadioGroupMock();
        const disabled = false;
        radioGroup.disabled = true;
        setup({ disabled, radioGroup });
        controller.updateState();

        expect(component.disabled).toBe(true);
      });
    });

    describe('methods:handleLabelClick', () => {
      describe('no update', () => {
        it('should not call emitChecked if disabled is true', async() => {
          const disabled = true;
          setup({ disabled });
          spyOnEmitChecked = jest.spyOn(component, 'emitChecked');
          await controller.handleLabelClick(new MouseEvent(''));

          expect(spyOnEmitChecked).not.toHaveBeenCalled();
        });

        it('should not call emitChecked if checked is true', async() => {
          const checked = true;
          setup({ checked });
          spyOnEmitChecked = jest.spyOn(component, 'emitChecked');
          await controller.handleLabelClick(new MouseEvent(''));

          expect(spyOnEmitChecked).not.toHaveBeenCalled();
        });
      });

      describe('pessimistic update', () => {
        const save = jest.fn();

        it('should use logger', async() => {
          const value = 'value';
          setup({ value, save });
          await controller.handleLabelClick(new MouseEvent(''));

          expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio=${value}]`, 'pessimistic update');
        });

        describe('calling save', () => {
          const save = jest.fn();
          const beforeSave = jest.fn();

          it('should use logger', async() => {
            const value = 'value';
            setup({ value, save });
            await controller.handleLabelClick(new MouseEvent(''));

            expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio=${value}]`, 'calling save');
          });

          it('should call beforeSave', async() => {
            const checked = false;
            const value = 'value';
            setup({ save, beforeSave, checked, value });
            await controller.handleLabelClick(new MouseEvent(''));

            expect(beforeSave).toHaveBeenCalledTimes(1);
            expect(beforeSave).toHaveBeenCalledWith({ checked, value });
          });

          it('should call save', async() => {
            const checked = false;
            const value = 'value';
            setup({ save, beforeSave, checked, value });
            await controller.handleLabelClick(new MouseEvent(''));

            expect(save).toHaveBeenCalledTimes(1);
            expect(save).toHaveBeenCalledWith({ checked, value });
          });

          it('should set checked to true', async() => {
            const checked = false;
            setup({ save, checked, beforeSave });
            await controller.handleLabelClick(new MouseEvent(''));

            expect(component.checked).toBe(true);
          });
        });

        describe('calling save failed', () => {
          it('should use logger', async() => {
            const value = 'value';
            setup({ value, save });
            component.beforeSave = jest.fn().mockRejectedValue(null);
            await controller.handleLabelClick(new MouseEvent(''));

            expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio=${value}]`, 'calling save failed');
          });

          it('should reset checked to false', async() => {
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

          it('should use logger', async() => {
            const value = 'value';
            setup({ value, save, beforeSave });
            await controller.handleLabelClick(new MouseEvent(''));

            expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio=${value}]`, 'calling save done');
          });

          it('should set checking to false', async() => {
            setup({ save, beforeSave });
            await controller.handleLabelClick(new MouseEvent(''));

            expect(component.checking).toBe(false);
          });

          it('should call emitChecking twice', async() => {
            setup({ save, beforeSave });
            spyOnEmitChecking = jest.spyOn(component, 'emitChecking');
            await controller.handleLabelClick(new MouseEvent(''));

            expect(spyOnEmitChecking).toHaveBeenCalledTimes(2);
            expect(spyOnEmitChecking).toHaveBeenCalledWith();
          });

          it('should call afterSave', async() => {
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
        const radioGroup = new OdsRadioGroupMock({});
        radioGroup.save = jest.fn();

        it('should use logger', async() => {
          const value = 'value';
          setup({ value, radioGroup });
          await controller.handleLabelClick(new MouseEvent(''));

          expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio=${value}]`, 'pessimistic update led by radio-group');
        });

        it('should set checking to true', async() => {
          const checking = false;
          setup({ checking, radioGroup });
          await controller.handleLabelClick(new MouseEvent(''));

          expect(component.checking).toBe(true);
        });

        it('should call emitChecking', async() => {
          setup({ radioGroup });
          spyOnEmitChecking = jest.spyOn(component, 'emitChecking');
          await controller.handleLabelClick(new MouseEvent(''));

          expect(spyOnEmitChecking).toHaveBeenCalledTimes(1);
          expect(spyOnEmitChecking).toHaveBeenCalledWith();
        });
      });

      describe('optimistic update', () => {
        it('should use logger', async() => {
          const value = 'value';
          setup({ value });
          await controller.handleLabelClick(new MouseEvent(''));

          expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio=${value}]`, 'optimistic update');
        });

        it('should set checked to true', async() => {
          const checked = false;
          setup({ checked });
          await controller.handleLabelClick(new MouseEvent(''));

          expect(component.checked).toBe(true);
        });
      });
    });

    describe('methods:handleLabelKeyEvent', () => {
      it('should not call emitChecked', async() => {
        const disabled = false;
        const checked = false;
        setup({ disabled, checked });
        spyOnEmitChecked = jest.spyOn(component, 'emitChecked');
        await controller.handleLabelKeyEvent(new KeyboardEvent(''));

        expect(spyOnEmitChecked).not.toHaveBeenCalled();
      });

      it('should call emitChecked (Space case)', async() => {
        const disabled = false;
        const checked = false;
        setup({ disabled, checked });
        spyOnEmitChecked = jest.spyOn(component, 'emitChecked');
        await controller.handleLabelKeyEvent(new KeyboardEvent('', { code: 'Space' }));

        expect(spyOnEmitChecked).toHaveBeenCalledTimes(1);
        expect(spyOnEmitChecked).toHaveBeenCalledWith();
      });

      it('should call emitChecked (Enter case)', async() => {
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
