import type { OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy } from '@ovhcloud/ods-common-testing';
import { Ods, OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OsdsToggle } from '../osds-toggle';
import { OdsToggleController } from './controller';

class OdsToggleMock extends OsdsToggle {
  constructor(attribute: Partial<OsdsToggle>) {
    super();
    Object.assign(this, attribute)
  }

  controller: OdsToggleController = jest.fn() as unknown as OdsToggleController;
  beforeRender = jest.fn();
}

describe('spec:ods-toggle-controller', () => {
  let controller: OdsToggleController;
  let component: OsdsToggle;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OsdsToggle> = {}) {
    component = new OdsToggleMock(attributes)
    controller = new OdsToggleController(component);
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsToggleController
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
  });

  describe('methods', () => {
    beforeEach(() => {
      setup({
        color: OdsThemeColorIntent.default
      });
    });

    describe('methods:validateAttributes', () => {
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
    });
  });
});
