import {
  OdsClearLoggerSpy,
  OdsInitializeLoggerSpy,
  OdsLoggerSpyReferences
} from '@ovhcloud/ods-testing/src';

import { Ods } from '../../../configure/ods';
import { OdsLogger } from '../../../logger/ods-logger';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OdsPopoverContent } from './ods-popover-content';
import { OdsPopoverContentController } from './ods-popover-content-controller';
import { OdsPopoverContentMock } from './ods-popover-content-mock';


describe('spec:ods-menu-controller', () => {
  let controller: OdsPopoverContentController;
  let component: OdsPopoverContent;
  let loggerSpyReferences: OdsLoggerSpyReferences;


  Ods.instance().logging(false);
  const logger = new OdsLogger('spec:ods-popover-content-controller');

  function setup(attributes: Partial<OdsPopoverContent> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsPopoverContentController(component);
  }

  beforeEach(() => {
    component = new OdsPopoverContentMock();
    component.el = document.createElement('osds-popover-content') as HTMLStencilElement;

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsPopoverContentController
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
