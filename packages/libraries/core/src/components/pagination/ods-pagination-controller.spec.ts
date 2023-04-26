import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';
import { OdsPaginationPageList } from './ods-pagination-page-list';
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
        const attributes = { disabled: false, current: 2, total: 8 };
        setup(attributes);
        const pageList = controller.createPageList(component.total, component.current);
        expect(pageList).toHaveLength(8);
      });

      it('should generate the correct page list', async () => {
        const attributes = { disabled: false, current: 2, total: 9 };
        setup(attributes);
        const pageList: OdsPaginationPageList = controller.createPageList(component.total, component.current);

        expect(pageList).toHaveLength(9);
      });

      it('should display the correct page list following to the current page 5', async () => {
        const attributes = { disabled: false, current: 5, total: 12 };
        setup(attributes);
        const pageList: OdsPaginationPageList = controller.createPageList(component.total, component.current);

        expect(pageList).toHaveLength(12);
        expect(pageList[0].active).toBeTruthy();
        expect(pageList[1].active).toBeFalsy();
        expect(pageList[2].active).toBeFalsy();
        expect(pageList[3].active).toBeTruthy();
        expect(pageList[4].active).toBeTruthy();
        expect(pageList[5].active).toBeTruthy();
        expect(pageList[6].active).toBeFalsy();
        expect(pageList[7].active).toBeFalsy();
        expect(pageList[8].active).toBeFalsy();
        expect(pageList[9].active).toBeFalsy();
        expect(pageList[10].active).toBeFalsy();
        expect(pageList[11].active).toBeTruthy();
      });

      it('should display the correct page list following to the current page 2', async () => {
        const attributes = { disabled: false, current: 2, total: 9 };
        setup(attributes);
        const pageList: OdsPaginationPageList = controller.createPageList(component.total, component.current);

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
        const attributes = { disabled: false, current: 3, total: 9 };
        setup(attributes);
        const pageList: OdsPaginationPageList = controller.createPageList(component.total, component.current);

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
        const attributes = { disabled: false, current: 4, total: 9 };
        setup(attributes);
        const pageList: OdsPaginationPageList = controller.createPageList(component.total, component.current);

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

      it('all pages should be active if there are 5 pages', async () => {
        const attributes = { disabled: false, current: 4, total: 5 };
        setup(attributes);
        const pageList: OdsPaginationPageList = controller.createPageList(component.total, component.current);

        expect(pageList).toHaveLength(5);
        expect(pageList[0].active).toBeTruthy();
        expect(pageList[1].active).toBeTruthy();
        expect(pageList[2].active).toBeTruthy();
        expect(pageList[3].active).toBeTruthy();
        expect(pageList[4].active).toBeTruthy();
      });

      it('should display the last 5 pages if page 9 on 9 is selected', async () => {
        const attributes = { disabled: false, current: 9, total: 9 };
        setup(attributes);
        const pageList: OdsPaginationPageList = controller.createPageList(component.total, component.current);

        expect(pageList).toHaveLength(9);
        expect(pageList[0].active).toBeTruthy();
        expect(pageList[1].active).toBeFalsy();
        expect(pageList[2].active).toBeFalsy();
        expect(pageList[3].active).toBeFalsy();
        expect(pageList[4].active).toBeTruthy();
        expect(pageList[5].active).toBeTruthy();
        expect(pageList[6].active).toBeTruthy();
        expect(pageList[7].active).toBeTruthy();
        expect(pageList[8].active).toBeTruthy();
      });

      it('set page to 5 with setPageIndex', async () => {
        const attributes = { disabled: false, current: 10, total: 12 };
        setup(attributes);

        expect(component.current).toBe(10);
        controller.setPageIndex(5);
        expect(component.current).toBe(5);
      });

      it('handlePreviousKeyDown', async () => {
        const attributes = { disabled: false, current: 10, total: 12 };
        setup(attributes);

        expect(component.current).toBe(10);
        const event = new KeyboardEvent('keyDown', { code: 'Space', keyCode: 32, bubbles: true });
        controller.handlePreviousKeyDown(event, component.current);
        expect(component.current).toBe(9);
      });

      it('handlePageKeyDown', async () => {
        const attributes = { disabled: false, current: 10, total: 12 };
        setup(attributes);
        const pageList: OdsPaginationPageList = controller.createPageList(component.total, component.current);

        expect(component.current).toBe(10);
        const event = new KeyboardEvent('keyDown', { code: 'Space', keyCode: 32, bubbles: true });
        controller.handleNextKeyDown(event, component.current, pageList);
        expect(component.current).toBe(11);
      });

      it('handlePageKeyDown on page 5', async () => {
        const attributes = { disabled: false, current: 10, total: 12 };
        setup(attributes);

        expect(component.current).toBe(10);
        const event = new KeyboardEvent('keyDown', { code: 'Space', keyCode: 32, bubbles: true });
        controller.handlePageKeyDown(event, 6);
        expect(component.current).toBe(6);
        controller.handlePageKeyDown(event, 7);
        expect(component.current).toBe(7);
        controller.handlePageKeyDown(event, 8);
        expect(component.current).toBe(8);
        controller.handlePageKeyDown(event, 9);
        expect(component.current).toBe(9);
        controller.handlePageKeyDown(event, 10);
        expect(component.current).toBe(10);
        controller.handlePageKeyDown(event, 11);
        expect(component.current).toBe(11);
        controller.handlePageKeyDown(event, 12);
        expect(component.current).toBe(12);
      });

      it('handlePreviousClick', async () => {
        const attributes = { disabled: false, current: 10, total: 12 };
        setup(attributes);

        expect(component.current).toBe(10);
        controller.handlePreviousClick(component.current);
        expect(component.current).toBe(9);
        controller.handlePreviousClick(component.current);
        expect(component.current).toBe(8);
      });

      it('handleNextClick', async () => {
        const attributes = { disabled: false, current: 10, total: 12 };
        setup(attributes);

        expect(component.current).toBe(10);
        controller.handleNextClick(component.current);
        expect(component.current).toBe(11);
        controller.handleNextClick(component.current);
        expect(component.current).toBe(12);
      });

      it('handlePageClick', async () => {
        const attributes = { disabled: false, current: 10, total: 12 };
        setup(attributes);

        expect(component.current).toBe(10);
        controller.handlePageClick(1);
        expect(component.current).toBe(1);
        controller.handlePageClick(3);
        expect(component.current).toBe(3);
      });
    });
  });
});
