import {
  OdsClearLoggerSpy,
  OdsInitializeLoggerSpy,
  OdsLoggerSpyReferences
} from '@ovhcloud/ods-testing/src';

import { Ods } from '../../../configure/ods';
import { OdsLogger } from '../../../logger/ods-logger';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OdsMenu } from './ods-menu';
import { OdsMenuController } from './ods-menu-controller';
import { OdsMenuMock } from './ods-menu-mock';


describe('spec:ods-menu-controller', () => {
  let controller: OdsMenuController;
  let component: OdsMenu;
  let loggerSpyReferences: OdsLoggerSpyReferences;
  let spyOnPropagateDisabledToChild: jest.SpyInstance<void, jest.ArgsType<OdsMenu['propagateDisabledToChild']>>;


  Ods.instance().logging(false);
  const logger = new OdsLogger('spec:ods-menu-controller');

  function setup(attributes: Partial<OdsMenu> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsMenuController(component);
  }

  beforeEach(() => {
    component = new OdsMenuMock();
    component.el = document.createElement('osds-menu') as HTMLStencilElement;

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsMenuController
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  it('should initialize', () => {
    setup();
    expect(controller).toBeTruthy();
  });

  describe('methods', () => {
    describe('afterInit', () => {
      it('should call propagateDisabledToChild method', async () => {
        spyOnPropagateDisabledToChild = jest.spyOn(component, 'propagateDisabledToChild').mockImplementation((disabled: boolean | undefined) => {
          logger.log(`resolving propagateDisabledToChild`, disabled);
        });
        setup(component);
        controller.afterInit();
        expect(spyOnPropagateDisabledToChild).toHaveBeenCalled();
      });
    });
  });
});
