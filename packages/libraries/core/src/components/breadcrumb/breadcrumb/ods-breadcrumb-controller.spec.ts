import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';
import { OdsLogger } from '../../../logger/ods-logger';
import { OdsBreadcrumb } from './ods-breadcrumb';
import { OdsBreadcrumbController } from './ods-breadcrumb-controller';
import { OdsBreadcrumbMock } from './ods-breadcrumb-mock';

describe('spec:ods-breadcrumb-controller', () => {
  let controller: OdsBreadcrumbController;
  let component: OdsBreadcrumb;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  function setup(attributes: Partial<OdsBreadcrumb> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsBreadcrumbController(component);
  }

  beforeEach(() => {
    component = new OdsBreadcrumbMock();

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsBreadcrumbController,
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  describe('methods', () => {
    describe('getBreadcrumbItems', () => {
      beforeEach(() => {
        setup();
      });

      it('should return an empty array if there are no items', () => {
        expect(controller.getBreadcrumbItems([], true)).toEqual([]);
      });

      it('should return all items non collapsed with last set', () => {
        const dummyItems = [
          { href: 'dummy href 1'},
          { href: 'dummy href 2'},
        ];

        expect(controller.getBreadcrumbItems(dummyItems, true)).toEqual([
          {
            ...dummyItems[0],
            isCollapsed: false,
            isExpandableItem: false,
            isLast: false,
          },
          {
            ...dummyItems[1],
            isCollapsed: false,
            isExpandableItem: false,
            isLast: true,
          },
        ]);
      });

      it('should return all middle items collapsed with last set', () => {
        const dummyItems = [
          { href: 'dummy href 1'},
          { href: 'dummy href 2'},
          { href: 'dummy href 3'},
          { href: 'dummy href 4'},
          { href: 'dummy href 5'},
          { href: 'dummy href 6'},
        ];

        expect(controller.getBreadcrumbItems(dummyItems, true)).toEqual([
          {
            ...dummyItems[0],
            isCollapsed: false,
            isExpandableItem: false,
            isLast: false,
          },
          {
            ...dummyItems[1],
            isCollapsed: true,
            isExpandableItem: true,
            isLast: false,
          },
          {
            ...dummyItems[2],
            isCollapsed: true,
            isExpandableItem: false,
            isLast: false,
          },
          {
            ...dummyItems[3],
            isCollapsed: true,
            isExpandableItem: false,
            isLast: false,
          },
          {
            ...dummyItems[4],
            isCollapsed: true,
            isExpandableItem: false,
            isLast: false,
          },
          {
            ...dummyItems[5],
            isCollapsed: false,
            isExpandableItem: false,
            isLast: true,
          },
        ]);
      });

      it('should return all items non collapsed if component is no more collapsed with last set', () => {
        const dummyItems = [
          { href: 'dummy href 1'},
          { href: 'dummy href 2'},
          { href: 'dummy href 3'},
          { href: 'dummy href 4'},
          { href: 'dummy href 5'},
          { href: 'dummy href 6'},
        ];

        expect(controller.getBreadcrumbItems(dummyItems, false)).toEqual([
          {
            ...dummyItems[0],
            isCollapsed: false,
            isExpandableItem: false,
            isLast: false,
          },
          {
            ...dummyItems[1],
            isCollapsed: false,
            isExpandableItem: false,
            isLast: false,
          },
          {
            ...dummyItems[2],
            isCollapsed: false,
            isExpandableItem: false,
            isLast: false,
          },
          {
            ...dummyItems[3],
            isCollapsed: false,
            isExpandableItem: false,
            isLast: false,
          },
          {
            ...dummyItems[4],
            isCollapsed: false,
            isExpandableItem: false,
            isLast: false,
          },
          {
            ...dummyItems[5],
            isCollapsed: false,
            isExpandableItem: false,
            isLast: true,
          },
        ]);
      });
    });
  });
});
