import { OdsSkeletonMock } from './ods-skeleton.mock';
import { OdsSkeletonController } from './ods-skeleton-controller';
import { OdsSkeleton } from './ods-skeleton';
import { OdsLogger } from '../../logger/ods-logger';
import { Ods } from '../../configure/ods';
import {
  OdsClearLoggerSpy,
  OdsInitializeLoggerSpy,
  OdsLoggerSpyReferences
} from '@ovhcloud/ods-testing/src';

describe('spec:ods-skeleton-controller', () => {
  let controller: OdsSkeletonController;
  let component: OdsSkeleton;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  beforeEach(() => {
    component = new OdsSkeletonMock() as OdsSkeleton;

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsSkeletonController
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  function setup(componentToCreate: OdsSkeleton) {
    controller = new OdsSkeletonController(componentToCreate);
  }

  it('should initialize', () => {
    setup(component);
    expect(controller).toBeTruthy();
  });
});
