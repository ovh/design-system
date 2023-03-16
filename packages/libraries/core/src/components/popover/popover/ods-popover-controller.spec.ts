import {
  OdsClearLoggerSpy,
  OdsInitializeLoggerSpy,
  OdsLoggerSpyReferences
} from '@ovhcloud/ods-testing/src';

import { Ods } from '../../../configure/ods';
import { OdsLogger } from '../../../logger/ods-logger';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OdsPopover } from './ods-popover';
import { OdsPopoverController } from './ods-popover-controller';
import { OdsPopoverMock } from './ods-popover-mock';


describe('spec:ods-menu-controller', () => {
  let controller: OdsPopoverController;
  let component: OdsPopover;
  let loggerSpyReferences: OdsLoggerSpyReferences;


  Ods.instance().logging(false);
  const logger = new OdsLogger('spec:ods-popover-controller');

  function setup(attributes: Partial<OdsPopover> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsPopoverController(component);
  }

  beforeEach(() => {
    component = new OdsPopoverMock();
    component.el = document.createElement('osds-popover') as HTMLStencilElement;

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsPopoverController
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
});
