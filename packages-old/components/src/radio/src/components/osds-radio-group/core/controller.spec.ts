import { OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';

import { OdsRadioGroupController } from './controller';
import { OsdsRadio } from '../../osds-radio/osds-radio';
import { OsdsRadioGroup } from '../osds-radio-group';


class OdsRadioMock extends OsdsRadio {
  constructor(attribute?: Partial<OsdsRadio>) {
    super();
    Object.assign(this, attribute);
  }
}
class OdsRadioGroupMock extends OsdsRadioGroup {
  constructor(attribute: Partial<OsdsRadioGroup>) {
    super();
    Object.assign(this, attribute);
  }
}

describe('spec:ods-radio-group-controller', () => {
  let controller: OdsRadioGroupController;
  let component: OsdsRadioGroup;
  let spyOnEmitDisabled: jest.SpyInstance<void, jest.ArgsType<OsdsRadioGroup['emitDisabled']>>;
  let spyOnEmitChange: jest.SpyInstance<void, jest.ArgsType<OsdsRadioGroup['emitChange']>>;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  function setup(attributes: Partial<OsdsRadioGroup> = {}) {
    component = new OdsRadioGroupMock(attributes);
    component.el.addEventListener = jest.fn();
    component.el.removeEventListener = jest.fn();
    controller = new OdsRadioGroupController(component);
  }

  function createRadio() {
    const radio = new OdsRadioMock();
    radio.el.addEventListener = jest.fn();
    radio.el.removeEventListener = jest.fn();
    return radio;
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsRadioGroupController,
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  describe('methods', () => {
    describe('methods:updateState', () => {
      it('should use logger', async() => {
        const inputId = 'input-id';
        const checked = true;
        const checking = true;
        setup({ inputId });
        await controller.updateState({ newValue: '', checked, checking });

        expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio-group=${inputId}]`, 'updateState', { checked, checking });
      });

      describe('pessimistic update', () => {
        const save = jest.fn();

        it('should use logger', async() => {
          const inputId = 'input-id';
          setup({ inputId, save });
          await controller.updateState({ newValue: '', checked: false, checking: false });

          expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio-group=${inputId}]`, 'pessimistic update');
        });

        describe('calling save', () => {
          const save = jest.fn();
          const beforeSave = jest.fn();

          it('should call beforeSave', async() => {
            const value = 'value';
            setup({ value, save, beforeSave });
            await controller.updateState({ newValue: '', checked: false, checking: false });

            expect(beforeSave).toHaveBeenCalledTimes(1);
            expect(beforeSave).toHaveBeenCalledWith({ value });
          });

          it('should call save', async() => {
            const value = 'value';
            setup({ value, save, beforeSave });
            await controller.updateState({ newValue: '', checked: false, checking: false });

            expect(save).toHaveBeenCalledTimes(1);
            expect(save).toHaveBeenCalledWith({ value });
          });

          it('should change value', async() => {
            const value = 'value';
            const newValue = 'newValue';
            setup({ value, save, beforeSave });
            await controller.updateState({ newValue, checked: false, checking: false });

            expect(component.value).toBe(newValue);
          });
        });

        describe('calling save failed', () => {
          it('should use logger', async() => {
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

          it('should updateRadioStates', async() => {
            const radios: OsdsRadio[] = [];
            const n = 1 + Math.round(Math.random() * 5);
            for (let i = 0; i < n; i++) {
              const radio = new OdsRadioMock() as unknown as OsdsRadio;
              radio.updateState = jest.fn();
              radios.push(radio);
            }
            setup({ radios, save, afterSave });
            await controller.updateState({ newValue: '', checked: false, checking: false });

            radios.forEach((radio) => {
              // called twice (before save + after save)
              expect(radio.updateState).toHaveBeenCalledTimes(2);
              expect(radio.updateState).toHaveBeenCalledWith(false);
            });
          });

          it('should call afterSave', async() => {
            const value = 'value';
            setup({ value, save, afterSave });
            await controller.updateState({ newValue: value, checked: false, checking: false });

            expect(afterSave).toHaveBeenCalledTimes(1);
            expect(afterSave).toHaveBeenCalledWith({ value });
          });
        });
      });

      describe('optimistic update', () => {
        it('should use logger', async() => {
          const inputId = 'input-id';
          setup({ inputId });
          await controller.updateState({ newValue: '', checked: false, checking: false });

          expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith(`[radio-group=${inputId}]`, 'optimistic update');
        });

        it('should change value', async() => {
          const value = 'value';
          const newValue = 'newValue';
          setup({ value });
          await controller.updateState({ newValue, checked: false, checking: false });

          expect(component.value).toBe(newValue);
        });

        it('should call emitChange', async() => {
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
      const radios: OsdsRadio[] = [];
      const name = 'radioGroup';

      it('should push radio to component.radios', () => {
        setup({ name, radios });
        const radio = createRadio();
        controller.registerRadio(radio);
        expect(component.radios?.length).toBe(1);
        expect(component.radios[0]).toEqual(radio);
      });

      it('should set radio name from component name', () => {
        setup({ name, radios });
        const radio = createRadio();
        controller.registerRadio(radio);
        expect(radio.name).toEqual(name);
      });

      it('should remove disabledChange event', () => {
        setup({ name, radios });
        const radio = createRadio();
        controller.registerRadio(radio);
        expect(radio?.el.addEventListener).toHaveBeenCalledWith('odsCheckedChange', expect.any(Function));
      });

      it('should remove disabledChange event', () => {
        setup({ name, radios });
        const radio = createRadio();
        controller.registerRadio(radio);
        expect(radio?.el.addEventListener).toHaveBeenCalledWith('odsCheckingChange', expect.any(Function));
      });

    });

    describe('methods:unregisterRadio', () => {
      function createRadios() {
        const radio1 = createRadio();
        const radio2 = createRadio();
        radio1.value = 'value';
        radio1.el.id = 'radio1';
        radio2.el.id = 'radio2';
        return [radio1, radio2];
      }

      it('should removeEventListener from radio', () => {
        const radios = createRadios();
        setup({ radios });
        controller.unregisterRadio(radios[0]);

        expect(radios[0].el.removeEventListener).toHaveBeenCalledWith('odsCheckedChange', expect.any(Function));
        expect(radios[0].el.removeEventListener).toHaveBeenCalledWith('odsCheckingChange', expect.any(Function));
      });

      it('should remove radio from radios', () => {
        const radios = createRadios();
        setup({ radios });
        controller.unregisterRadio(radios[0]);

        expect(component.radios).toEqual([radios[1]]);
      });

      it('should reset value', () => {
        const radios = createRadios();
        const value = 'value';
        setup({ radios, value });
        controller.unregisterRadio(radios[0]);

        expect(component.value).toBe('');
      });

      it('should call emitChange', () => {
        const radios = createRadios();
        const value = 'value';
        setup({ radios, value });
        spyOnEmitChange = jest.spyOn(component, 'emitChange');
        controller.unregisterRadio(radios[0]);

        expect(spyOnEmitChange).toHaveBeenCalledTimes(1);
        expect(spyOnEmitChange).toHaveBeenCalledWith('', value);
      });

      it('should not call emitChange', () => {
        const radios = createRadios();
        const value = 'radio-group-value';
        setup({ radios, value });
        spyOnEmitChange = jest.spyOn(component, 'emitChange');
        controller.unregisterRadio(radios[0]);

        expect(spyOnEmitChange).not.toHaveBeenCalled();
      });

    });

    describe('methods:clearRadios', () => {
      it('should removeEventListener for all radios', () => {
        const radios = [createRadio(), createRadio(), createRadio()];
        setup({ radios });
        controller.clearRadios();

        radios.forEach((radio) => {
          expect(radio.el.removeEventListener).toHaveBeenCalledWith('odsCheckedChange', expect.any(Function));
          expect(radio.el.removeEventListener).toHaveBeenCalledWith('odsCheckingChange', expect.any(Function));
        });
      });

      it('should reset radios array', () => {
        const radios = [createRadio(), createRadio(), createRadio()];
        setup({ radios });
        controller.clearRadios();
        expect(component.radios).toEqual([]);
      });
    });

    describe('methods:onValueChange', () => {
      it('should call updateState for all radios', () => {
        const n = 1 + Math.round(Math.random() * 5);
        const radios = [];
        for (let i = 0; i < n; i++) {
          const radio = createRadio();
          radio.updateState = jest.fn();
          radios.push(radio);
        }
        setup({ radios });
        controller.onValueChange('', '');

        radios.forEach((radio) => {
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
