import type { OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import { Ods, OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy } from '@ovhcloud/ods-common-testing';
import { OdsTableController } from './controller';
import { ODS_TABLE_SIZES } from '../constants/table-size';
import { ODS_TABLE_VARIANTS } from '../constants/table-variant';
import { OsdsTable } from '../osds-table';

class OdsTableMock extends OsdsTable {
  constructor(attribute: Partial<OsdsTable>) {
    super();
    Object.assign(this, attribute);
  }

  beforeInit = jest.fn();
}

describe('spec:ods-table-controller', () => {
  let controller: OdsTableController;
  let component: OsdsTable;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OsdsTable> = {}): void {
    component = new OdsTableMock(attributes);
    controller = new OdsTableController(component);
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsTableController,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    OdsClearLoggerSpy(loggerSpyReferences);
  });

  it('should initialize', () => {
    setup();
    expect(controller).toBeTruthy();
  });

  describe('methods', () => {
    describe('methods:validateSize', () => {
      it('should be set at component creation', () => {
        setup();
        controller.validateSize();
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalled();
      });

      it('should throw a console.warn when size is not set', () => {
        setup();
        controller.validateSize('');

        const expected = 'The size attribute must be set';
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
      });

      it('should throw a console.warn when size is wrongly set', () => {
        setup();
        controller.validateSize('xs');
        const expected = `The size attribute must be one the following: ${Object.values(ODS_TABLE_SIZES).join(',')}`;
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
      });
    });

    describe('methods:validateVariant', () => {
      it('should be unset at component creation', () => {
        setup();
        controller.validateVariant();
        expect(loggerSpyReferences.methodSpies.warn).not.toHaveBeenCalled();
      });

      it('should throw a console.warn when variant is wrongly set', () => {
        setup();
        controller.validateVariant('contrasted');
        const expected = `The variant attribute must be one the following: ${Object.values(ODS_TABLE_VARIANTS).join(',')}`;
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
      });
    });
  });
});
