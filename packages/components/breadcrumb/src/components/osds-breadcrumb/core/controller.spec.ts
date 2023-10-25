import type { OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';

import { OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy } from '@ovhcloud/ods-common-testing';

import { OdsBreadcrumbController } from './controller';

describe('ods-breadcrumb-controller', () => {
  let controller: OdsBreadcrumbController;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  beforeEach(() => {
    controller = new OdsBreadcrumbController();

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
      it('should return an empty array if there are no items', () => {
        expect(controller.getBreadcrumbItems([], true)).toEqual([]);
      });

      it('should return all items non collapsed with last set', () => {
        const dummyItems = [
          { href: 'dummy href 1' },
          { href: 'dummy href 2' },
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
          { href: 'dummy href 1' },
          { href: 'dummy href 2' },
          { href: 'dummy href 3' },
          { href: 'dummy href 4' },
          { href: 'dummy href 5' },
          { href: 'dummy href 6' },
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
          { href: 'dummy href 1' },
          { href: 'dummy href 2' },
          { href: 'dummy href 3' },
          { href: 'dummy href 4' },
          { href: 'dummy href 5' },
          { href: 'dummy href 6' },
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
