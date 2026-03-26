import { type DataTableProp, DataTable as DataTableRoot } from './components/data-table/DataTable';
import { DataTableBody, type DataTableBodyProp } from './components/data-table-body/DataTableBody';
import { DataTableEmpty, type DataTableEmptyProp } from './components/data-table-empty/DataTableEmpty';
import { DataTableHead, type DataTableHeadProp } from './components/data-table-head/DataTableHead';

const DataTable = Object.assign(DataTableRoot, {
  Body: DataTableBody,
  Empty: DataTableEmpty,
  Head: DataTableHead,
});

export { DataTable };
export { DataTableBody, DataTableEmpty, DataTableHead };
export type { DataTableProp, DataTableBodyProp, DataTableEmptyProp, DataTableHeadProp };
export {
  type DataTableCell,
  type DataTableCellContext,
  type DataTableColumn,
  type DataTableColumnDef,
  type DataTableColumnPinningState,
  type DataTableColumnVisibilityState,
  type DataTableHeader,
  type DataTableHeaderContext,
  type DataTableRow,
  type DataTableRowSelectionState,
  type DataTableSortingState,
  type DataTableState,
  type DataTableTable,
} from './contexts/useDataTable';
