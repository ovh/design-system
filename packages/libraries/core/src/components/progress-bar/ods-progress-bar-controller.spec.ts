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
          min: 0,
          progress: 50,
        });
      });

      it('should not call console.warn', () => {
        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(0);
      });

      it.each([-5, 1929])('should call console.warn with wrong min', (min) => {
        component.min = min;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith('min must be between 0 and 100');
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });

      it.each([-5, 1929])('should call console.warn with wrong max', (max) => {
        component.max = max;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith('max must be between 0 and 100');
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });

      it.each([-5, 1929])('should call console.warn with wrong progress', (progress) => {
        component.progress = progress;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith('progress must be between 0 and 100');
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });

      it('should call console.warn when max is lower than min', () => {
        component.max = 10;
        component.min = 20;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith('min must be lower than max');
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      })
    });
    describe('methods:defineProgressCssValue', () => {
      beforeEach(() => {
        setup({
          max: 100,
          min: 0,
          progress: 50,
        });

        controller.defineProgressCssValue(50);
      });

      it('should set --progress to 60 if progress is 60', () => {
        expect(component.el.style.getPropertyValue('--progress')).toBe('50%');
      })

      it.each([undefined, null, -10])('should not set --progress if progress is undefined, null or negative', () => {
        controller.defineProgressCssValue(undefined);

        expect(component.el.style.getPropertyValue('--progress')).toBe('50%');
      })

      it('should set progress to 0', () => {
        controller.defineProgressCssValue(0);

        expect(component.el.style.getPropertyValue('--progress')).toBe('0%');
      })

      it('should not set progress if progress is greater than max', () => {
        setup({
          max: 80,
          min: 20,
          progress: 50,
        });
        controller.defineProgressCssValue(50);
        controller.defineProgressCssValue(82);

        expect(component.el.style.getPropertyValue('--progress')).toBe('50%');
      })

      it('should not set progress if progress is lower than min', () => {
        setup({
          max: 100,
          min: 20,
          progress: 50,
        });
        controller.defineProgressCssValue(50);
        controller.defineProgressCssValue(10);

        expect(component.el.style.getPropertyValue('--progress')).toBe('50%');
      })
    })
  });
});
