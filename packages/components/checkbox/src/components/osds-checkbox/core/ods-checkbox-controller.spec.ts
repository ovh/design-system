import type {HTMLStencilElement} from '@stencil/core/internal';
import {OdsCheckboxController} from './ods-checkbox-controller';
import {OsdsCheckbox} from '../osds-checkbox';
import {
  OdsClearLoggerSpy,
  OdsInitializeLoggerSpy,
  OdsLoggerSpyReferences,
  odsGetSimulatedPromise,
} from '@ovhcloud/ods-common-testing';
import {Ods, OdsCheckboxable, OdsLogger} from '@ovhcloud/ods-common-core';

class OdsCheckboxMock extends OsdsCheckbox {
  constructor(attribute: Partial<OsdsCheckbox>) {
    super();
    Object.assign(this, attribute);
  }

  inputEl = document.createElement('input');
  checkboxableComponent = document.createElement('div') as unknown as (HTMLStencilElement & OdsCheckboxable);
}

describe('spec:ods-checkbox-controller', () => {
  let controller: OdsCheckboxController;
  let component: OsdsCheckbox;
  let spyInputElFocus: jest.SpyInstance<void>;
  let spyOnEmitChecked: jest.SpyInstance<void, jest.ArgsType<OsdsCheckbox['emitChecked']>>;
  let spyOnEmitFocus: jest.SpyInstance<void, jest.ArgsType<OsdsCheckbox['emitFocus']>>;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);
  const logger = new OdsLogger('spec:ods-checkbox-controller');

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsCheckboxController,
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  function getSaveCbk(withError: boolean) {
    const cbk: OsdsCheckbox['save'] = ({checked, value}) => {
      return odsGetSimulatedPromise(withError, () => {
        logger.log(`getSaveFct. checked=${checked}, value=${value}`);
      });
    };
    return cbk;
  }

  function getBeforeSaveCbk(withError: boolean) {
    const cbk: OsdsCheckbox['beforeSave'] = ({checked, value}) => {
      return odsGetSimulatedPromise(withError, () => {
        logger.log(`getSaveFct. checked=${checked}, value=${value}`);
      });
    };
    return cbk;
  }

  function getAfterSaveCbk(withError: boolean) {
    const cbk: OsdsCheckbox['afterSave'] = ({checked, value}) => {
      return odsGetSimulatedPromise(withError, () => {
        logger.log(`getSaveFct. checked=${checked}, value=${value}`);
      });
    };
    return cbk;
  }

  function testPropagateAttributeToChild(name: 'checked' | 'has-focus' | 'disabled', cbk: (value: boolean) => void) {
    setup(component);
    cbk(false);
    expect(component.checkboxableComponent?.getAttribute(name)).toEqual(null);
    cbk(true);
    expect(component.checkboxableComponent?.getAttribute(name)).toEqual('');
  }

  function setup(attributes: Partial<OsdsCheckbox> = {}) {
    component = new OdsCheckboxMock(attributes);
    controller = new OdsCheckboxController(component);
    spyOnEmitChecked = jest.spyOn(component, 'emitChecked');
    spyOnEmitFocus = jest.spyOn(component, 'emitFocus');
    if (component.inputEl) {
      spyInputElFocus = jest.spyOn(component.inputEl, 'focus');
    }
  }

  it('should initialize', () => {
    setup();
    expect(controller).toBeTruthy();
  });

  describe('methods', () => {

    describe('afterInit', () => {
      it('should call propagateCheckedToChild and propagateDisabledToChild methods', async() => {
        setup();
        const spyOnPropagateCheckedToChild = jest.spyOn(component, 'propagateCheckedToChild').mockImplementation((checked) => {
          logger.log('resolving propagateCheckedToChild', checked);
        });
        const spyOnPropagateDisabledToChild = jest.spyOn(component, 'propagateDisabledToChild').mockImplementation((disabled) => {
          logger.log('resolving propagateDisabledToChild', disabled);
        });
        controller.afterInit();
        expect(spyOnPropagateCheckedToChild).toHaveBeenCalled();
        expect(spyOnPropagateDisabledToChild).toHaveBeenCalled();
      });

      it('should disable focus management on child', async() => {
        setup();
        controller.afterInit();
        expect(component.checkboxableComponent.getAttribute('tabindex')).toEqual('-1');
      });

      it('should warn user if no checkboxable element found', async() => {
        const expected = `you must place a checkboxable element inside the checkbox component.
          (html input checkbox or any html component that accepts checked attribute)`;
        setup({
          checkboxableComponent: null,
        });
        controller.afterInit();
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
      });
    });

    describe('getTabIndex', () => {
      it('should get the tab index', () => {
        setup({
          tabindex: 42,
        });
        const index = controller.getTabIndex();
        expect(index).toEqual(component.tabindex);
      });
      it('should get no tab index if disabled', () => {
        setup({
          tabindex: 42,
          disabled: true,
        });
        const index = controller.getTabIndex();
        expect(index).toEqual(-1);
      });
    });

    describe('handleToggleByClick', () => {
      it('should call toggleCheck method on click', async() => {
        setup();
        const spyOnToggleCheck = jest.spyOn(controller, 'toggleCheck');
        const event = new MouseEvent('click');
        await controller.handleToggleByClick(event);
        expect(spyOnToggleCheck).toHaveBeenCalled();
        expect(component.checked).toEqual(true);
      });
    });

    describe('handleToggleByKeyEvent', () => {
      it('should call toggleCheck method on key event', async() => {
        setup();
        const spyOnEmitChecked = jest.spyOn(component, 'emitChecked').mockImplementation(() => {
          logger.log('emitChecked');
        });
        const spyOnToggleCheck = jest.spyOn(controller, 'toggleCheck');
        const event = new KeyboardEvent('keyDown', {code: 'Space', keyCode: 32, bubbles: true});
        await controller.handleToggleByKeyEvent(event);
        expect(spyOnToggleCheck).toHaveBeenCalled();
        expect(component.checked).toEqual(true);
      });
    });

    describe('onBlur', () => {
      it('should update blur state', () => {
        setup({
          hasFocus: true,
        });
        jest.spyOn(component, 'emitBlur');
        controller.onBlur();
        expect(component.hasFocus).toEqual(false);
        expect(component.emitBlur).toHaveBeenCalledWith();
      });
      it('should do nothing if disabled', () => {
        setup({
          disabled: true,
        });
        jest.spyOn(component, 'emitBlur');
        controller.onBlur();
        expect(component.hasFocus).toEqual(false);
        expect(component.emitBlur).not.toHaveBeenCalledWith();
      });
    });

    describe('onFocus', () => {
      it('should call setFocus', () => {
        setup();
        jest.spyOn(controller, 'setFocus');
        controller.onFocus();
        expect(controller.setFocus).toHaveBeenCalledWith();
      });
    });

    describe('propagateCheckedToChild', () => {
      it('should propagate checked to child', () => {
        testPropagateAttributeToChild('checked', (value) => controller.propagateCheckedToChild(value));
      });
    });

    describe('propagateDisabledToChild', () => {
      it('should propagate disabled to child', () => {
        testPropagateAttributeToChild('disabled', (value) => controller.propagateDisabledToChild(value));
      });
    });

    describe('propagateHasFocusToChild', () => {
      it('should propagate hasFocus to child', () => {
        testPropagateAttributeToChild('has-focus', (value) => controller.propagateHasFocusToChild(value));
      });
    });

    describe('setFocus', () => {
      it('should do nothing if disabled', () => {
        setup({
          disabled: true,
        });
        controller.setFocus();
        expect(component.hasFocus).toEqual(false);
        expect(spyInputElFocus).not.toHaveBeenCalledWith();
        expect(spyOnEmitFocus).not.toHaveBeenCalledWith();
      });

      it('should do nothing if no inputEl', () => {
        setup({
          disabled: false,
          inputEl: undefined,
        });
        controller.setFocus();
        expect(component.hasFocus).toEqual(false);
        expect(spyInputElFocus).not.toHaveBeenCalledWith();
        expect(spyOnEmitFocus).not.toHaveBeenCalledWith();
      });

      it('should update focus state', () => {
        setup({
          disabled: false,
        });
        controller.setFocus();
        expect(component.hasFocus).toEqual(true);
        expect(spyInputElFocus).toHaveBeenCalledWith();
        expect(spyOnEmitFocus).toHaveBeenCalledWith();
      });
    });

    describe('setTabindex', () => {
      it('should set the index', () => {
        setup({
          tabindex: 1,
        });
        controller.setTabindex(42);
        expect(component.tabindex).toEqual(42);
      });
    });

    describe('toggleCheck', () => {
      it('should not toggle if disabled and not checked', async() => {
        setup({
          disabled: true,
          checked: false,
        });
        await controller.toggleCheck();
        expect(component.checked).toEqual(false);
      });

      it('should not toggle if disabled and checked', async() => {
        setup({
          disabled: true,
          checked: true,
        });

        await controller.toggleCheck();
        expect(component.checked).toEqual(true);
      });

      /**
       * in case of no save callback defined
       */
      describe('optimistic update', () => {
        it('should doing optimistic update', async() => {
          setup();
          const spyOnEmitChecked = jest.spyOn(component, 'emitChecked');
          await controller.toggleCheck();
          expect(spyOnEmitChecked).toHaveBeenCalled();
          expect(component.checked).toEqual(true);
        });
      });


      /**
       * in case of save callback defined
       */
      describe('pessimistic update', () => {


        describe('saving process in success', () => {
          it('should call beforeSave', async() => {
            setup({
              beforeSave: getBeforeSaveCbk(false),
              save: getSaveCbk(false),
            });
            const spyOnEmitChecked = jest.spyOn(component, 'emitChecked');
            const spyOnBeforeSave = jest.spyOn(component, 'beforeSave');
            const spyOnSave = jest.spyOn(component, 'save');
            await controller.toggleCheck();

            expect(component.checked).toEqual(true);
            expect(spyOnEmitChecked).toHaveBeenCalled();
            expect(spyOnBeforeSave).toHaveBeenCalled();
            expect(spyOnSave).toHaveBeenCalled();
          });

          it('should call save', async() => {
            setup({
              save: getSaveCbk(false),
            });
            const spyOnEmitChecked = jest.spyOn(component, 'emitChecked');
            const spyOnSave = jest.spyOn(component, 'save');
            await controller.toggleCheck();

            expect(component.checked).toEqual(true);
            expect(spyOnEmitChecked).toHaveBeenCalled();
            expect(spyOnSave).toHaveBeenCalled();
          });

          it('should call afterSave', async() => {
            setup({
              afterSave: getAfterSaveCbk(false),
              save: getSaveCbk(false),
            });
            const spyOnEmitChecked = jest.spyOn(component, 'emitChecked');
            const spyOnAfterSave = jest.spyOn(component, 'afterSave');
            await controller.toggleCheck();

            expect(component.checked).toEqual(true);
            expect(spyOnEmitChecked).toHaveBeenCalled();
            expect(spyOnAfterSave).toHaveBeenCalled();
          });
        });

        describe('saving catching potential errors', () => {

          it('should catch potential error of beforeSave', async() => {
            setup({
              beforeSave: getBeforeSaveCbk(true),
              save: getSaveCbk(false),
            });
            const spyOnEmitChecked = jest.spyOn(component, 'emitChecked');
            const spyOnBeforeSave = jest.spyOn(component, 'beforeSave');
            const spyOnSave = jest.spyOn(component, 'save');
            await controller.toggleCheck();

            expect(component.checked).toEqual(false);
            expect(spyOnEmitChecked).toHaveBeenCalled();
            expect(spyOnBeforeSave).toHaveBeenCalled();
            expect(spyOnSave).not.toHaveBeenCalled();
          });

          it('should catch potential error of save', async() => {
            setup({
              save: getSaveCbk(true),
            });
            const spyOnEmitChecked = jest.spyOn(component, 'emitChecked');
            const spyOnSave = jest.spyOn(component, 'save');
            await controller.toggleCheck();

            expect(component.checked).toEqual(false);
            expect(spyOnEmitChecked).toHaveBeenCalled();
            expect(spyOnSave).toHaveBeenCalled();
          });

          it('should catch potential error of afterSave', async() => {
            setup({
              afterSave: getAfterSaveCbk(true),
              save: getSaveCbk(false),
            });
            const spyOnEmitChecked = jest.spyOn(component, 'emitChecked');
            const spyOnAfterSave = jest.spyOn(component, 'afterSave');
            await controller.toggleCheck();

            expect(component.checked).toEqual(true);
            expect(spyOnEmitChecked).toHaveBeenCalled();
            expect(spyOnAfterSave).toHaveBeenCalled();
          });
        });
      });
    });
  });
});
