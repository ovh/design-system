import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';
import { OdsLogger } from '../../logger/ods-logger';
import { Ods } from '../../configure/ods';
import { OdsProgressBar } from './ods-progress-bar';
import { OdsProgressBarController } from './ods-progress-bar-controller';

describe('spec:ods-progress-bar-controller', () => {
  let controller: OdsProgressBarController;
  let component: OdsProgressBar;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OdsProgressBar> = {}) {
    component = { ...component, ...attributes };
    component.el = document.createElement('osds-progress-bar') as HTMLElement;

    document.body.appendChild(component.el);
    controller = new OdsProgressBarController(component);
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsProgressBarController
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
  });

  describe('methods', () => {
    describe('methods:validateAttributes', () => {
      beforeEach(() => {
        setup({
          max: 100,
          value: 50,
        });
      });

      it('should not call console.warn', () => {
        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(0);
      });

      it.each([-5, 1929])('should call console.warn with wrong max', (max) => {
        component.max = max;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith('max must be between 0 and 100');
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });

      it.each([-5, 1929])('should call console.warn with wrong value', (value) => {
        component.value = value;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith('progress must be between 0 and 100');
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });
    });
  });
});
