import { type Table, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { type ComponentPropsWithRef, type JSX, type ReactNode, createContext, useId, useMemo } from 'react';
import { useContext } from '../../../../utils/context';
import { DataTableCellCheckbox } from '../components/data-table-cell-checkbox/DataTableCellCheckbox';
import { DataTableCellRadio } from '../components/data-table-cell-radio/DataTableCellRadio';
import { DataTableHeaderCellCheckbox } from '../components/data-table-header-cell-checkbox/DataTableHeaderCellCheckbox';

type OnChangeFn<T> = (updaterOrValue: T | ((old: T) => T)) => void;

type DataTableCell<T> = {
  column: DataTableColumn<T>;
  getValue: <TValue>() => TValue;
  id: string;
  row: DataTableRow<T>
};

type DataTableCellContext<T> = {
  cell: DataTableCell<T>;
  column: DataTableColumn<T>;
  table: DataTableTable<T>;
}

type DataTableColumn<T> = {
  clearSorting: () => void;
  columnDef: Omit<DataTableColumnDef<T>, 'accessorKey'>;
  getCanSort: () => boolean;
  getIsPinned: () => false | 'left' | 'right';
  getIsSorted: () => false | 'asc' | 'desc';
  getIsVisible: () => boolean;
  getPinnedIndex: () => number;
  id: string;
}

type DataTableColumnDef<T> = {
  accessorKey?: string | keyof T;
  cell?: string | ((cellContext: DataTableCellContext<T>) => ReactNode);
  enableSorting?: boolean;
  header?: string | ((headerContext: DataTableHeaderContext<T>) => ReactNode);
  id: string;
  sortingFn?: (rowA: DataTableRow<T>, rowB: DataTableRow<T>, columnId: string) => number;
  size?: number;
}

type DataTableColumnPinningState = {
  left?: string[];
  right?: string[];
}

type DataTableColumnVisibilityState = Record<string, boolean>;

type DataTableHeader<T> = {
  column: DataTableColumn<T>;
  id: string;
}

type DataTableHeaderContext<T> = {
  column: DataTableColumn<T>;
  header: DataTableHeader<T>;
  table: DataTableTable<T>;
}

type DataTableRow<T> = {
  getValue: <TValue>(columnId: string) => TValue;
  index: number;
  original: T;
};

type DataTableRowSelectionState = Record<string, boolean>;

type DataTableSortingState = {
  desc: boolean;
  id: string;
}[];

type DataTableState = {
  columnPinning?: DataTableColumnPinningState;
  columnVisibility?: DataTableColumnVisibilityState;
  rowSelection?: DataTableRowSelectionState;
  sorting?: DataTableSortingState;
};

type DataTableTable<T> = {
  getAllColumns: () => DataTableColumn<T>[];
  getColumn: (columnId: string) => DataTableColumn<T> | undefined;
  getRow: (id: string) => DataTableRow<T>;
}

type DataTableRootProp<T> = ComponentPropsWithRef<'table'> & {
  /**
   * The columns definitions.
   */
  columns: DataTableColumnDef<T>[];
  /**
   * The table data to display.
   */
  data: T[];
  /**
   * Whether the multi row selection is enabled.
   */
  enableMultiRowSelection?: boolean;
  /**
   * Whether the row selection is enabled.
   */
  enableRowSelection?: boolean | ((row: DataTableRow<T>) => boolean);
  /**
   * Whether the column sorting is enabled.
   */
  enableSorting?: boolean;
  /**
   * By default, the component will look for an id attribute in a data item to identify each row.
   * Using this function, you can define another attribute to use instead (like uuid).
   */
  getRowId?: (originalRow: T, index: number, parent?: DataTableRow<T>) => string
  /**
   * Whether the table data are in a loading state. This will replace each cell with a Skeleton.
   */
  loading?: boolean;
  /**
   * Whether the sorting is handled outside of the table. Use this is the sorting is managed on server-side.
   */
  manualSorting?: boolean;
  /**
   * Callback fired when the pinned columns changes.
   */
  onColumnPinningChange?: OnChangeFn<DataTableColumnPinningState>;
  /**
   * Callback fired when the column visibility changes.
   */
  onColumnVisibilityChange?: OnChangeFn<DataTableColumnVisibilityState>;
  /**
   * Callback fired when the selected rows changes.
   */
  onRowSelectionChange?: OnChangeFn<DataTableRowSelectionState>;
  /**
   * Callback fired when the columns sorting changes.
   */
  onSortingChange?: OnChangeFn<DataTableSortingState>;
  /**
   * @type=DataTableState
   * The controlled table values.
   */
  state?: DataTableState;
  /**
   * Whether the header should be sticky.
   */
  stickyHeader?: boolean;
}

interface DataTableProviderProp<T> extends DataTableRootProp<T> {
  children: ReactNode;
}

interface DataTableContextType<T> extends Pick<DataTableProviderProp<T>, 'loading' | 'stickyHeader'> {
  table: Table<T>;
}

const FALLBACK_DATA = [] as const;

const DataTableContext = createContext<DataTableContextType<any> | undefined>(undefined); // eslint-disable-line @typescript-eslint/no-explicit-any

function DataTableProvider<T>({
  children,
  columns,
  data,
  enableMultiRowSelection,
  enableRowSelection,
  enableSorting,
  getRowId,
  loading,
  manualSorting,
  onColumnPinningChange,
  onColumnVisibilityChange,
  onRowSelectionChange,
  onSortingChange,
  state,
  stickyHeader,
}: DataTableProviderProp<T>): JSX.Element {
  const selectColumnId = useId();
  const actualColumns = useMemo(() => {
    if (enableRowSelection) {
      return [
        {
          cell: enableMultiRowSelection ? DataTableCellCheckbox : DataTableCellRadio,
          id: selectColumnId,
          size: 30,
          ...(enableMultiRowSelection ? { header: DataTableHeaderCellCheckbox } : {}),
        },
        ...columns,
      ];
    }
    return columns;
  }, [columns, enableMultiRowSelection, enableRowSelection, selectColumnId]);

  const table = useReactTable<T>({
    // @ts-ignore TODO
    columns: actualColumns,
    data: data ?? FALLBACK_DATA,
    enableColumnPinning: true,
    enableMultiRowSelection,
    enableRowSelection,
    enableSorting,
    getCoreRowModel: getCoreRowModel(),
    getRowId,
    manualPagination: true,
    manualSorting,
    state,
    ...(enableSorting && { getSortedRowModel: getSortedRowModel() }),
    ...(onColumnPinningChange ? { onColumnPinningChange } : {}),
    ...(onColumnVisibilityChange ? { onColumnVisibilityChange } : {}),
    ...(onRowSelectionChange ? { onRowSelectionChange } : {}),
    ...(onSortingChange ? { onSortingChange } : {}),
  });

  return (
    <DataTableContext.Provider value={{
      loading,
      stickyHeader,
      table,
    }}>
      { children }
    </DataTableContext.Provider>
  );
}

function useDataTable<T>(): DataTableContextType<T> {
  return useContext(DataTableContext);
}

export {
  type DataTableCell,
  type DataTableCellContext,
  type DataTableColumn,
  type DataTableColumnDef,
  type DataTableColumnPinningState,
  type DataTableColumnVisibilityState,
  type DataTableHeader,
  type DataTableHeaderContext,
  DataTableProvider,
  type DataTableRootProp,
  type DataTableRow,
  type DataTableRowSelectionState,
  type DataTableSortingState,
  type DataTableState,
  type DataTableTable,
  useDataTable,
};
