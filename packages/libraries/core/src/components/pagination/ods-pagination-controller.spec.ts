import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';

import { OdsLogger } from '../../logger/ods-logger';
import { OdsPagination } from './ods-pagination';
import { OdsPaginationController } from './ods-pagination-controller';
import { OdsPaginationMock } from './ods-pagination-mock';

describe('spec:ods-pagination-controller', () => {
  let controller: OdsPaginationController;
  let component: OdsPagination;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  function setup(attributes: Partial<OdsPagination> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsPaginationController(component);
  }

  beforeEach(() => {
    component = new OdsPaginationMock();

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsPaginationController,
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  describe('methods', () => {
    describe('createPageList', () => {
      it('should generate the correct number of pages', async () => {
        const attributes = { disabled: false, current: 2, totalPages: 8 };
        setup(attributes);
        const pageList = controller.createPageList(component.totalPages, component.current);
        expect(pageList).toHaveLength(8);
      });

      it('should generate the correct page list', async () => {
        const attributes = { disabled: false, current: 2, totalPages: 9 };
        setup(attributes);
        const pageList = controller.createPageList(component.totalPages, component.current);

        expect(pageList).toHaveLength(9);
        expect(pageList[0].id).toEqual(1);
        expect(pageList[1].id).toEqual(2);
        expect(pageList[2].id).toEqual(3);
        expect(pageList[3].id).toEqual(4);
        expect(pageList[4].id).toEqual(5);
        expect(pageList[5].id).toEqual(6);
        expect(pageList[6].id).toEqual(7);
        expect(pageList[7].id).toEqual(8);
        expect(pageList[8].id).toEqual(9);
      });

      it('should display the correct page list following to the current page 5', async () => {
        const attributes = { disabled: false, current: 5, totalPages: 9 };
        setup(attributes);
        const pageList = controller.createPageList(component.totalPages, component.current);

        expect(pageList).toHaveLength(9);
        expect(pageList[0].active).toBeTruthy();
        expect(pageList[1].active).toBeFalsy();
        expect(pageList[2].active).toBeFalsy();
        expect(pageList[3].active).toBeTruthy();
        expect(pageList[4].active).toBeTruthy();
        expect(pageList[5].active).toBeTruthy();
        expect(pageList[6].active).toBeFalsy();
        expect(pageList[7].active).toBeFalsy();
        expect(pageList[8].active).toBeTruthy();
      });

      it('should display the correct page list following to the current page 2', async () => {
        const attributes = { disabled: false, current: 2, totalPages: 9 };
        setup(attributes);
        const pageList = controller.createPageList(component.totalPages, component.current);

        expect(pageList).toHaveLength(9);
        expect(pageList[0].active).toBeTruthy();
        expect(pageList[1].active).toBeTruthy();
        expect(pageList[2].active).toBeTruthy();
        expect(pageList[3].active).toBeTruthy();
        expect(pageList[4].active).toBeTruthy();
        expect(pageList[5].active).toBeFalsy();
        expect(pageList[6].active).toBeFalsy();
        expect(pageList[7].active).toBeFalsy();
        expect(pageList[8].active).toBeTruthy();
      });

      it('should display the correct page list following to the current page 3', async () => {
        const attributes = { disabled: false, current: 3, totalPages: 9 };
        setup(attributes);
        const pageList = controller.createPageList(component.totalPages, component.current);

        expect(pageList).toHaveLength(9);
        expect(pageList[0].active).toBeTruthy();
        expect(pageList[1].active).toBeTruthy();
        expect(pageList[2].active).toBeTruthy();
        expect(pageList[3].active).toBeTruthy();
        expect(pageList[4].active).toBeTruthy();
        expect(pageList[5].active).toBeFalsy();
        expect(pageList[6].active).toBeFalsy();
        expect(pageList[7].active).toBeFalsy();
        expect(pageList[8].active).toBeTruthy();
      });

      it('should display the correct page list following to the current page 4', async () => {
        const attributes = { disabled: false, current: 4, totalPages: 9 };
        setup(attributes);
        const pageList = controller.createPageList(component.totalPages, component.current);

        expect(pageList).toHaveLength(9);
        expect(pageList[0].active).toBeTruthy();
        expect(pageList[1].active).toBeTruthy();
        expect(pageList[2].active).toBeTruthy();
        expect(pageList[3].active).toBeTruthy();
        expect(pageList[4].active).toBeTruthy();
        expect(pageList[5].active).toBeFalsy();
        expect(pageList[6].active).toBeFalsy();
        expect(pageList[7].active).toBeFalsy();
        expect(pageList[8].active).toBeTruthy();
      });
    });
  });
});
