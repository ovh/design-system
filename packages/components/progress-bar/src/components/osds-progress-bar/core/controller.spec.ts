import type { OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';

import { Ods, OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy } from '@ovhcloud/ods-common-testing';

import { OdsProgressBarController } from './controller';
import { OsdsProgressBar } from '../osds-progress-bar';

class OdsProgressBarMock extends OsdsProgressBar {
  constructor(attribute: Partial<OsdsProgressBar>) {
    super();
    Object.assign(this, attribute);
  }

  controller: OdsProgressBarController = jest.fn() as unknown as OdsProgressBarController;
  beforeInit = jest.fn();
}

describe('ods-progress-bar-controller', () => {
  let controller: OdsProgressBarController;
  let component: OsdsProgressBar;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OsdsProgressBar> = {}) {
    component = new OdsProgressBarMock(attributes);
    controller = new OdsProgressBarController(component);
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsProgressBarController,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    OdsClearLoggerSpy(loggerSpyReferences);
  });

  describe('methods', () => {
    describe('validateAttributes', () => {
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
