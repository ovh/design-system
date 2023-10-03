import { OdsDatagridController } from './controller';
import { OcdkSurfaceMock } from '@ovhcloud/ods-cdk';
import { OsdsDatagrid } from '../osds-datagrid';

class OdsDatagridMock extends OsdsDatagrid {
  constructor(attribute: Partial<OsdsDatagrid>) {
    super();
    Object.assign(this, attribute);
  }
}

describe('spec:ods-select-controller', () => {
  let controller: OdsDatagridController;
  let component: OsdsDatagrid;

  function setup(attributes: Partial<OsdsDatagrid> = {}) {
    component = new OdsDatagridMock(attributes);
    controller = new OdsDatagridController(component);
  }

  it('should initialize', () => {
    setup();
    expect(controller).toBeDefined();
  });

  describe('Methods', () => {
    it('should parse string columns', () => {
        setup({ columns: JSON.stringify([{ title: 'Name', field: 'name' }, { title: 'Firstname', field: 'firstname' }])});
        const columns = controller.getColumns();
        expect(columns).toBeInstanceOf(Array);
        expect(columns).toHaveLength(2);
        expect(columns[0]).toEqual({ title: 'Name', field: 'name' });
        expect(columns[1]).toEqual({ title: 'Firstname', field: 'firstname' });
    });
    
    it('should parse string rows', () => {
      setup({ rows: JSON.stringify([{ name: 'Homer', firstname: 'Simpson' }])});
      const rows = controller.getRows();
      expect(rows).toBeInstanceOf(Array);
      expect(rows).toHaveLength(1);
      expect(rows[0]).toEqual({ name: 'Homer', firstname: 'Simpson' });
    });

    it('should mapped column to a Tabular column', () => {
      setup({ });
      const column = { title: 'Name', field: 'name' };
      const tabulatorColumn = controller.toTabulatorColumn(column);
      expect(tabulatorColumn.title).toBe(column.title);
      expect(tabulatorColumn.field).toBe(column.field);
      expect(tabulatorColumn.headerSort).toBe(false);
    });

    it('should mapped column to a Tabular column with isSortable', () => {
      setup({ });
      const column = { title: 'Name', field: 'name', isSortable: true };
      const tabulatorColumn = controller.toTabulatorColumn(column);
      expect(tabulatorColumn.title).toBe(column.title);
      expect(tabulatorColumn.field).toBe(column.field);
      expect(tabulatorColumn.headerSort).toBe(true);
    });

    it('should get columns with selections columns', () => {
      setup({ isSelectable: true });
      const columns = [{ title: 'Name', field: 'name' }];
      const tabulatorColumns = controller.getTabulatorColumns(columns);
      expect(tabulatorColumns[0].formatter).toBe('rowSelection');
      expect(tabulatorColumns[0].titleFormatter).toBe('rowSelection');
    });

    it('should get columns without selections columns', () => {
      setup({ isSelectable: false });
      const columns = [{ title: 'Name', field: 'name' }];
      const tabulatorColumns = controller.getTabulatorColumns(columns);
      expect(tabulatorColumns[0].title).toBe(columns[0].title);
      expect(tabulatorColumns[0].field).toBe(columns[0].field);
      expect(tabulatorColumns[0].headerSort).toBe(false);
    });
  });
});
