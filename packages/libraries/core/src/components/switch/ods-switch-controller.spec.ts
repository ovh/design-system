
import { OdsLogger } from '../../logger/ods-logger';
import { Ods } from '../../configure/ods';
import {
  OdsClearLoggerSpy,
  OdsInitializeLoggerSpy,
  OdsLoggerSpyReferences
} from '@ovhcloud/ods-testing/src';
import { OdsSwitchController, OdsSwitch } from './public-api';

describe('spec:ods-switch-controller', () => {
  let controller: OdsSwitchController;
  let component: OdsSwitch;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OdsSwitch> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsSwitchController(component);
  }

  beforeEach(() => {
    component = new OdsSwitchMock() as OdsSwitch;

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsSwitchController
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  it('should initialize', () => {
    setup(component);
    expect(controller).toBeTruthy();
  });
});
