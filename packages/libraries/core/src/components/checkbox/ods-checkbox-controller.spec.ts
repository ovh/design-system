import { OdsCheckboxMock } from './ods-checkbox.mock';
import { OdsCheckboxController } from './ods-checkbox-controller';
import { OdsCheckbox } from './ods-checkbox';
import { OdsLogger } from '../../logger/ods-logger';
import { Ods } from '../../configure/ods';
import { OdsCheckboxable } from '../../utils/checkbox/ods-checkboxable';
import {
  OdsClearLoggerSpy,
  odsGetSimulatedPromise,
  OdsInitializeLoggerSpy,
  OdsLoggerSpyReferences
} from '@ovhcloud/ods-testing/src';

describe('spec:ods-checkbox-controller', () => {
  let controller: OdsCheckboxController;
  let component: OdsCheckbox;
  let spyInputElFocus: jest.SpyInstance<void>;
  let spyOnEmitChecked: jest.SpyInstance<void, jest.ArgsType<OdsCheckbox['emitChecked']>>;
  let spyOnToggleCheck: jest.SpyInstance<Promise<void>, jest.ArgsType<OdsCheckboxController['toggleCheck']>>;
  let spyOnBeforeSave: jest.SpyInstance<Promise<void>, jest.ArgsType<OdsCheckbox['beforeSave']>>;
  let spyOnSave: jest.SpyInstance<Promise<void>, jest.ArgsType<OdsCheckbox['save']>>;
  let spyOnAfterSave: jest.SpyInstance<Promise<void>, jest.ArgsType<OdsCheckbox['afterSave']>>;
  let spyOnPropagateCheckedToChild: jest.SpyInstance<void, jest.ArgsType<OdsCheckbox['propagateCheckedToChild']>>;
  let spyOnPropagateDisabledToChild: jest.SpyInstance<void, jest.ArgsType<OdsCheckbox['propagateDisabledToChild']>>;
  let spyOnEmitFocus: jest.SpyInstance<void, jest.ArgsType<OdsCheckbox['emitFocus']>>;
  let checkboxableComponent: HTMLElement & OdsCheckboxable;
  let loggerSpyReferences: OdsLoggerSpyReferences;
  let inputEl: HTMLInputElement;

  Ods.instance().logging(false);
  const logger = new OdsLogger('spec:ods-checkbox-controller');

  beforeEach(() => {
    component = new OdsCheckboxMock() as OdsCheckbox;
    component.disabled = false;
    component.checked = false;
    spyOnEmitChecked = jest.spyOn(component, 'emitChecked');
    spyOnEmitFocus = jest.spyOn(component, 'emitFocus');

    checkboxableComponent = document.createElement('div') as unknown as (HTMLElement & OdsCheckboxable);
    component.checkboxableComponent = checkboxableComponent;

    inputEl = document.createElement('input')
    component.inputEl = inputEl;
    spyInputElFocus = jest.spyOn(component.inputEl, 'focus');

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsCheckboxController
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  function getSaveCbk(withError: boolean) {
    const cbk: OdsCheckbox['save'] = ({ checked, value }) => {
      return odsGetSimulatedPromise(withError, () => {
        logger.log(`getSaveFct. checked=${checked}, value=${value}`);
      });
    };
    return cbk;
  }

  function getBeforeSaveCbk(withError: boolean) {
    const cbk: OdsCheckbox['beforeSave'] = ({ checked, value }) => {
      return odsGetSimulatedPromise(withError, () => {
        logger.log(`getSaveFct. checked=${checked}, value=${value}`);
      });
    };
    return cbk;
  }

  function getAfterSaveCbk(withError: boolean) {
    const cbk: OdsCheckbox['afterSave'] = ({ checked, value }) => {
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

  function setup(componentToCreate: OdsCheckbox) {
    controller = new OdsCheckboxController(componentToCreate);
  }

  it('should initialize', () => {
    setup(component);
    expect(controller).toBeTruthy();
  });

  describe('methods', () => {

    describe('afterInit', () => {
      it('should call propagateCheckedToChild and propagateDisabledToChild methods', async () => {
        spyOnPropagateCheckedToChild = jest.spyOn(component, 'propagateCheckedToChild').mockImplementation((checked) => {
          logger.log(`resolving propagateCheckedToChild`, checked);
        });
        spyOnPropagateDisabledToChild = jest.spyOn(component, 'propagateDisabledToChild').mockImplementation((disabled) => {
          logger.log(`resolving propagateDisabledToChild`, disabled);
        });
        setup(component);
        controller.afterInit();
        expect(spyOnPropagateCheckedToChild).toHaveBeenCalled();
        expect(spyOnPropagateDisabledToChild).toHaveBeenCalled();
      });

      it('should disable focus management on child', async () => {
        setup(component);
        controller.afterInit();
        expect(checkboxableComponent.getAttribute('tabindex')).toEqual('-1');
      });

      it('should warn user if no checkboxable element found', async () => {
        const expected = `you must place a checkboxable element inside the checkbox component.
          (html input checkbox or any html component that accepts checked attribute)`;
        component.checkboxableComponent = null;
        setup(component);
        controller.afterInit();
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
      });
    });

    describe('getTabIndex', () => {
      it('should get the tab index', () => {
        component.tabindex = 42;
        setup(component);
        const index = controller.getTabIndex();
        expect(index).toEqual(component.tabindex);
      });
      it('should get no tab index if disabled', () => {
        component.tabindex = 42;
        component.disabled = true;
        setup(component);
        const index = controller.getTabIndex();
        expect(index).toEqual(-1);
      });
    });

    describe('handleToggleByClick', () => {
      it('should call toggleCheck method on click', async () => {
        setup(component);
        spyOnToggleCheck = jest.spyOn(controller, 'toggleCheck');
        const event = new MouseEvent('click');
        await controller.handleToggleByClick(event);
        expect(spyOnToggleCheck).toHaveBeenCalled();
        expect(component.checked).toEqual(true);
      });
    });

    describe('handleToggleByKeyEvent', () => {
      it('should call toggleCheck method on key event', async () => {
        spyOnEmitChecked = jest.spyOn(component, 'emitChecked').mockImplementation(() => {
          logger.log(`emitChecked`);
        });
        setup(component);
        spyOnToggleCheck = jest.spyOn(controller, 'toggleCheck');
        const event = new KeyboardEvent('keyDown', { code: 'Space', keyCode: 32, bubbles: true });
        await controller.handleToggleByKeyEvent(event);
        expect(spyOnToggleCheck).toHaveBeenCalled();
        expect(component.checked).toEqual(true);
      });
    });

    describe('onBlur', () => {
      it('should update blur state', () => {
        component.hasFocus = true;
        setup(component);
        jest.spyOn(component, 'emitBlur');
        controller.onBlur();
        expect(component.hasFocus).toEqual(false);
        expect(component.emitBlur).toHaveBeenCalledWith();
      });
      it('should do nothing if disabled', () => {
        component.disabled = true;
        setup(component);
        jest.spyOn(component, 'emitBlur');
        controller.onBlur();
        expect(component.hasFocus).toEqual(false);
        expect(component.emitBlur).not.toHaveBeenCalledWith();
      });
    });

    describe('onFocus', () => {
      it('should call setFocus', () => {
        setup(component);
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
        component.disabled = true;
        component.inputEl = inputEl;
        setup(component);
        controller.setFocus();
        expect(component.hasFocus).toEqual(false);
        expect(spyInputElFocus).not.toHaveBeenCalledWith();
        expect(spyOnEmitFocus).not.toHaveBeenCalledWith();
      });

      it('should do nothing if no inputEl', () => {
        component.inputEl = undefined;
        component.disabled = false;
        setup(component);
        controller.setFocus();
        expect(component.hasFocus).toEqual(false);
        expect(spyInputElFocus).not.toHaveBeenCalledWith();
        expect(spyOnEmitFocus).not.toHaveBeenCalledWith();
      });

      it('should update focus state', () => {
        component.disabled = false;
        component.inputEl = inputEl;
        setup(component);
        controller.setFocus();
        expect(component.hasFocus).toEqual(true);
        expect(spyInputElFocus).toHaveBeenCalledWith();
        expect(spyOnEmitFocus).toHaveBeenCalledWith();
      });
    });

    describe('setTabindex', () => {
      it('should set the index', () => {
        component.tabindex = 1;
        setup(component);
        controller.setTabindex(42);
        expect(component.tabindex).toEqual(42);
      });
    });

    describe('toggleCheck', () => {
      it('should not toggle if disabled and not checked', async () => {
        component.disabled = true;
        component.checked = false;
        setup(component);

        await controller.toggleCheck();
        expect(component.checked).toEqual(false);
      });

      it('should not toggle if disabled and checked', async () => {
        component.disabled = true;
        component.checked = true;
        setup(component);

        await controller.toggleCheck();
        expect(component.checked).toEqual(true);
      });

      /**
       * in case of no save callback defined
       */
      describe('optimistic update', () => {
        it('should doing optimistic update', async () => {
          spyOnEmitChecked = jest.spyOn(component, 'emitChecked');
          setup(component);
          await controller.toggleCheck();
          expect(spyOnEmitChecked).toHaveBeenCalled();
          expect(component.checked).toEqual(true);
        });
      });


      /**
       * in case of save callback defined
       */
      describe('pessimistic update', () => {

        beforeEach(async () => {
          component.save = getSaveCbk(false);

          spyOnEmitChecked = jest.spyOn(component, 'emitChecked');
        });


        describe('saving process in success', () => {
          it('should call beforeSave', async () => {
            component.beforeSave = getBeforeSaveCbk(false);
            spyOnBeforeSave = jest.spyOn(component, 'beforeSave');
            spyOnSave = jest.spyOn(component, 'save');
            setup(component);
            await controller.toggleCheck();

            expect(component.checked).toEqual(true);
            expect(spyOnEmitChecked).toHaveBeenCalled();
            expect(spyOnBeforeSave).toHaveBeenCalled();
            expect(spyOnSave).toHaveBeenCalled();
          });

          it('should call save', async () => {
            spyOnSave = jest.spyOn(component, 'save');
            setup(component);
            await controller.toggleCheck();

            expect(component.checked).toEqual(true);
            expect(spyOnEmitChecked).toHaveBeenCalled();
            expect(spyOnSave).toHaveBeenCalled();
          });

          it('should call afterSave', async () => {
            component.afterSave = getAfterSaveCbk(false);
            spyOnAfterSave = jest.spyOn(component, 'afterSave');
            setup(component);
            await controller.toggleCheck();

            expect(component.checked).toEqual(true);
            expect(spyOnEmitChecked).toHaveBeenCalled();
            expect(spyOnAfterSave).toHaveBeenCalled();
          });
        });

        describe('saving catching potential errors', () => {

          it('should catch potential error of beforeSave', async () => {
            component.beforeSave = getBeforeSaveCbk(true);
            spyOnBeforeSave = jest.spyOn(component, 'beforeSave');
            spyOnSave = jest.spyOn(component, 'save');
            setup(component);
            await controller.toggleCheck();

            expect(component.checked).toEqual(false);
            expect(spyOnEmitChecked).toHaveBeenCalled();
            expect(spyOnBeforeSave).toHaveBeenCalled();
            expect(spyOnSave).not.toHaveBeenCalled();
          });

          it('should catch potential error of save', async () => {
            component.save = getSaveCbk(true);
            spyOnSave = jest.spyOn(component, 'save');
            setup(component);
            await controller.toggleCheck();

            expect(component.checked).toEqual(false);
            expect(spyOnEmitChecked).toHaveBeenCalled();
            expect(spyOnSave).toHaveBeenCalled();
          });

          it('should catch potential error of afterSave', async () => {
            component.afterSave = getAfterSaveCbk(true);
            spyOnAfterSave = jest.spyOn(component, 'afterSave');
            setup(component);
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
