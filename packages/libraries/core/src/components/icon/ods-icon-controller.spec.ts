import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';
import { OdsIcon } from './ods-icon';
import { OdsIconController } from './ods-icon-controller';
import { OdsIconMock } from './ods-icon-mock';
import { OdsIconSize } from './ods-icon-size';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsLogger } from '../../logger/ods-logger';
import { Ods } from '../../configure/ods';

describe('spec:ods-icon-controller', () => {
  let controller: OdsIconController;
  let component: OdsIcon;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OdsIcon> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsIconController(component);
  }

  beforeEach(() => {
    component = new OdsIconMock();

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsIconController
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
  });

  describe('methods', () => {
    describe('methods:validateAttributes', () => {
      beforeEach(() => {
        setup({
          color: OdsThemeColorIntent.default,
          size: OdsIconSize.md
        });
      });

      it('should not call console.warn', () => {
        controller.validateAttributes();
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(0);
      });

      it('should call console.warn with wrong color', () => {
        const expected = 'The color attribute must have a value from [default, primary, text, accent, error, warning, success, info, promotion]';
        component.color = 'color' as OdsThemeColorIntent;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });

      it('should call console.warn with wrong size', () => {
        const expected = 'The size attribute must have a value from [xxs, xs, sm, md, lg, xl]';
        component.size = 'size' as OdsIconSize;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });
    });

    describe('methods:validateAriaName', () => {
      beforeEach(() => {
        setup();
      });

      it('should not call console.warn', () => {
        controller.validateAriaName('ariaName');
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(0);
      });

      it('should call console.warn with empty ariaName', () => {
        const expected = 'The aria-name attribute must have a value';

        controller.validateAriaName('');

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });
    });
  });
});
