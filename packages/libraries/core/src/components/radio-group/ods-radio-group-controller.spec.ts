import { OdsRadioMock } from './../radio/ods-radio-mock';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';
import { Ods } from '../../configure/ods';
import { OdsLogger } from '../../logger/ods-logger';
import { OdsRadioGroup } from './ods-radio-group';
import { OdsRadioGroupController } from './ods-radio-group-controller';
import { OdsRadioGroupMock } from './ods-radio-group-mock';
import { OdsRadio } from '../radio/ods-radio';

describe('spec:ods-radio-controller', () => {
  let controller: OdsRadioGroupController;
  let component: OdsRadioGroup;
  let spyOnEmitDisabled: jest.SpyInstance<void, jest.ArgsType<OdsRadioGroup['emitDisabled']>>;
  let spyOnEmitChange: jest.SpyInstance<void, jest.ArgsType<OdsRadioGroup['emitChange']>>;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OdsRadioGroup> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsRadioGroupController(component);
  }

  beforeEach(() => {
    component = new OdsRadioGroupMock();

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsRadioGroupController
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  describe('methods', () => {
    describe('methods:updateState', () => {
      it('should use logger', async () => {
        const inputId = 'input-id';
        const checked = true;
        const checking = true;
        setup({ inputId });
        await controller.updateState({ newValue: '', checked, checking });

        expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio-group=${inputId}]`, 'updateState', { checked, checking });
      });

      describe('pessimistic update', () => {
        const save = jest.fn();

        it('should use logger', async () => {
          const inputId = 'input-id';
          setup({ inputId, save });
          await controller.updateState({ newValue: '', checked: false, checking: false });

          expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio-group=${inputId}]`, 'pessimistic update');
        });

        describe('calling save', () => {
          const save = jest.fn();
          const beforeSave = jest.fn();

          it('should call beforeSave', async () => {
            const value = 'value';
            setup({ value, save, beforeSave });
            await controller.updateState({ newValue: '', checked: false, checking: false });

            expect(beforeSave).toHaveBeenCalledTimes(1);
            expect(beforeSave).toHaveBeenCalledWith({ value })
          });

          it('should call save', async () => {
            const value = 'value';
            setup({ value, save, beforeSave });
            await controller.updateState({ newValue: '', checked: false, checking: false });

            expect(save).toHaveBeenCalledTimes(1);
            expect(save).toHaveBeenCalledWith({ value })
          });

          it('should change value', async () => {
            const value = 'value';
            const newValue = 'newValue';
            setup({ value, save, beforeSave });
            await controller.updateState({ newValue, checked: false, checking: false });

            expect(component.value).toBe(newValue);
          });
        });

        describe('calling save failed', () => {
          it('should use logger', async () => {
            const inputId = 'input-id';
            setup({ save, inputId });
            component.beforeSave = jest.fn().mockRejectedValue(null);
            await controller.updateState({ newValue: '', checked: false, checking: false });

            expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio-group=${inputId}]`, 'calling save failed');
          });
        });

        describe('after save', () => {
          const save = jest.fn();
          const afterSave = jest.fn();

          it('should updateRadioStates', async () => {
            const radios: (HTMLElement & OdsRadio)[] = [];
            const n = 1 + Math.round(Math.random() * 5);
            for (let i = 0; i < n; i++) {
              const radio = new OdsRadioMock() as unknown as (HTMLElement & OdsRadio);
              radio.updateState = jest.fn();
              radios.push(radio);
            }
            setup({ radios, save, afterSave });
            await controller.updateState({ newValue: '', checked: false, checking: false });

            radios.forEach(radio => {
              // called twice (before save + after save)
              expect(radio.updateState).toHaveBeenCalledTimes(2);
              expect(radio.updateState).toHaveBeenCalledWith(false);
            });
          });

          it('should call afterSave', async () => {
            const value = 'value';
            setup({ value, save, afterSave });
            await controller.updateState({ newValue: value, checked: false, checking: false });

            expect(afterSave).toHaveBeenCalledTimes(1);
            expect(afterSave).toHaveBeenCalledWith({ value });
          });
        });
      });

      describe('optimistic update', () => {
        it('should use logger', async () => {
          const inputId = 'input-id';
          setup({ inputId });
          await controller.updateState({ newValue: '', checked: false, checking: false });

          expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio-group=${inputId}]`, 'optimistic update');
        });

        it('should change value', async () => {
          const value = 'value';
          const newValue = 'newValue';
          setup({ value });
          await controller.updateState({ newValue, checked: false, checking: false });

          expect(component.value).toBe(newValue);
        });

        it('should call emitChange', async () => {
          const value = 'value';
          const newValue = 'newValue';
          setup({ value });
          spyOnEmitChange = jest.spyOn(component, 'emitChange');
          await controller.updateState({ newValue, checked: false, checking: false });

          expect(spyOnEmitChange).toHaveBeenCalledTimes(1);
          expect(spyOnEmitChange).toHaveBeenCalledWith(newValue, value);
        });
      });
    });

    describe('methods:registerRadio', () => {
      const radios: (HTMLElement & OdsRadio)[] = [];
      const radio = new OdsRadioMock() as unknown as (HTMLElement & OdsRadio);
      radio.addEventListener = jest.fn();
      const name = 'radioGroup';

      beforeEach(() => {
        setup({ name, radios });
      });

      it('should push radio to component.radios', () => {
        controller.registerRadio(radio);
        expect(component.radios?.length).toBe(1);
        expect(component.radios[0]).toEqual(radio);
      });

      it('should set radio name from component name', () => {
        controller.registerRadio(radio);
        expect(radio.name).toEqual(name);
      });

      it('should remove disabledChange event', () => {
        controller.registerRadio(radio);
        expect(radio?.addEventListener).toHaveBeenCalledWith('odsCheckedChange', expect.any(Function));
      });

      it('should remove disabledChange event', () => {
        controller.registerRadio(radio);
        expect(radio?.addEventListener).toHaveBeenCalledWith('odsCheckingChange', expect.any(Function));
      });

    });

    describe('methods:unregisterRadio', () => {
      const radio1 = new OdsRadioMock() as unknown as (HTMLElement & OdsRadio);
      const radio2 = new OdsRadioMock() as unknown as (HTMLElement & OdsRadio);
      radio1.removeEventListener = jest.fn();
      radio1.value = 'value';
      radio1.id = 'radio1';
      radio2.id = 'radio2';
      const radios: (HTMLElement & OdsRadio)[] = [radio1, radio2];

      it('should removeEventListener from radio', () => {
        setup({ radios });
        controller.unregisterRadio(radio1);

        expect(radio1.removeEventListener).toHaveBeenCalledWith('odsCheckedChange', expect.any(Function));
        expect(radio1.removeEventListener).toHaveBeenCalledWith('odsCheckingChange', expect.any(Function));
      });

      it('should remove radio from radios', () => {
        setup({ radios });
        controller.unregisterRadio(radio1);

        expect(component.radios).toEqual([radio2]);
      });

      it('should reset value', () => {
        const value = 'value';
        setup({ radios, value });
        controller.unregisterRadio(radio1);

        expect(component.value).toBe('');
      });

      it('should call emitChange', () => {
        const value = 'value';
        setup({ radios, value });
        spyOnEmitChange = jest.spyOn(component, 'emitChange');
        controller.unregisterRadio(radio1);

        expect(spyOnEmitChange).toHaveBeenCalledTimes(1);
        expect(spyOnEmitChange).toHaveBeenCalledWith('', value);
      });

      it('should not call emitChange', () => {
        const value = 'radio-group-value';
        setup({ radios, value });
        spyOnEmitChange = jest.spyOn(component, 'emitChange');
        controller.unregisterRadio(radio1);

        expect(spyOnEmitChange).not.toHaveBeenCalled();
      });

    });

    describe('methods:clearRadios', () => {
      const radios: (HTMLElement & OdsRadio)[] = [];

      beforeEach(() => {
        const n = 1 + Math.round(Math.random() * 5);
        for (let i = 0; i < n; i++) {
          const radio = new OdsRadioMock() as unknown as (HTMLElement & OdsRadio);
          radio.removeEventListener = jest.fn();
          radios.push(radio);
        }
        setup({ radios });
      });

      it('should removeEventListener for all radios', () => {
        controller.clearRadios();

        radios.forEach(radio => {
          expect(radio.removeEventListener).toHaveBeenCalledWith('odsCheckedChange', expect.any(Function));
          expect(radio.removeEventListener).toHaveBeenCalledWith('odsCheckingChange', expect.any(Function));
        });
      });

      it('should reset radios array', () => {
        controller.clearRadios();
        expect(component.radios).toEqual([]);
      });
    });

    describe('methods:handleLabelClick', () => {
      it('should log event', () => {
        const value = 'value';
        const event = {} as PointerEvent;
        setup({ value });
        controller.handleLabelClick(event);

        expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledTimes(1);
        expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio-group=${component.value}]`, 'click', event);
      });
    });

    describe('methods:onValueChange', () => {
      it('should call updateState for all radios', () => {
        const n = 1 + Math.round(Math.random() * 5);
        const radios = [];
        for (let i = 0; i < n; i++) {
          const radio = new OdsRadioMock() as unknown as (HTMLElement & OdsRadio);
          radios.push(radio);
        }
        setup({radios});
        controller.onValueChange('', '');

        radios.forEach(radio => {
          expect(radio.updateState).toHaveBeenCalled();
        });
      });
    });

    describe('methods:onDisabledChange', () => {
      it('should call component.emitDisabled', () => {
        const disabled = true;
        setup();
        spyOnEmitDisabled = jest.spyOn(component, 'emitDisabled');
        controller.onDisabledChange(disabled);

        expect(spyOnEmitDisabled).toHaveBeenCalledTimes(1);
        expect(spyOnEmitDisabled).toHaveBeenCalledWith(disabled);
      });
    });
  });
});
