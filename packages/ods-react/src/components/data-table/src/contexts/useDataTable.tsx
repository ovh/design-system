import { type ColumnDef, type Table, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { type ComponentPropsWithRef, type JSX, type ReactNode, createContext, useId, useMemo } from 'react';
import { useContext } from '../../../../utils/context';
import { DataTableCellCheckbox } from '../components/data-table-cell-checkbox/DataTableCellCheckbox';
import { DataTableCellRadio } from '../components/data-table-cell-radio/DataTableCellRadio';
import { DataTableHeaderCellCheckbox } from '../components/data-table-header-cell-checkbox/DataTableHeaderCellCheckbox';

// TODO add doc about initialState vs state
//  and the need to not set handlers if uncontrolled (https://github.com/TanStack/table/issues/209)

// TODO expose table object? table state?
// TODO expose resetSorting function?

// TODO see if we keep it like that (copy of tanstack)
type Updater<T> = T | ((old: T) => T)
type OnChangeFn<T> = (updaterOrValue: Updater<T>) => void

type DataTableColumnPinningState = {
  left?: string[];
  right?: string[];
}

type DataTableRowSelectionState = Record<string, boolean>;

type DataTableSortingState = {
  desc: boolean;
  id: string;
}[];

// TODO
type DataTableColumn<T> = Pick<ColumnDef<T>,
  'cell' |
  'enableSorting' |
  'header' |
  // 'invertSorting' |
  // 'sortDescFirst' |
  // 'sortUndefined' |
  'sortingFn'> & {
  accessorKey?: string;
  id: string;
}

// TODO
// type DataTableRow<T> = Pick<Row<T>, 'original'>;
type DataTableRow<T> = {
  getValue: <TValue>(columnId: string) => TValue;
  original: T;
};

type DataTableRootProp<T> = ComponentPropsWithRef<'table'> & {
  /**
   * TODO
   */
  columns: DataTableColumn<T>[];
  /**
   * TODO
   */
  data: T[];
  /**
   * TODO
   */
  enableMultiRowSelection?: boolean;
  /**
   * TODO
   */
  enableRowSelection?: boolean | ((row: DataTableRow<T>) => boolean);
  /**
   * TODO
   */
  enableSorting?: boolean;
  /**
   * TODO
   */
  initialState?: {
    columnPinning?: DataTableColumnPinningState,
    sorting?: DataTableSortingState;
  };
  /**
   * TODO
   */
  getRowId?: (originalRow: T, index: number, parent?: DataTableRow<T>) => string
  /**
   * TODO + actual test
   */
  manualSorting?: boolean;
  /**
   * TODO
   */
  onColumnPinningChange?: OnChangeFn<DataTableColumnPinningState>;
  /**
   * TODO
   */
  onRowSelectionChange?: OnChangeFn<DataTableRowSelectionState>;
  /**
   * TODO
   */
  onSortingChange?: OnChangeFn<DataTableSortingState>;
  /**
   * TODO
   */
  state?: {
    columnPinning?: DataTableColumnPinningState,
    rowSelection?: DataTableRowSelectionState,
    sorting?: DataTableSortingState;
  };
}

interface DataTableProviderProp<T> extends DataTableRootProp<T> {//extends Pick<DataTableRootProp<T>, 'columns' | 'data'> {
  children: ReactNode;
}

interface DataTableContextType<T> {//= Omit<DataTableProviderProp<T>, 'children'> & {
  table: Table<T>;
}

//
const DataTableContext = createContext<DataTableContextType<any> | undefined>(undefined); // eslint-disable-line @typescript-eslint/no-explicit-any

function DataTableProvider<T>({
  children,
  columns,
  data,
  enableMultiRowSelection,
  enableRowSelection,
  enableSorting,
  getRowId,
  initialState,
  manualSorting,
  onColumnPinningChange,
  onRowSelectionChange,
  onSortingChange,
  state,
}: DataTableProviderProp<T>): JSX.Element {
  // TODO
  //  if we use initialState.sorting, we should remove here the onSortingChange attribute
  //  but what if we use both initialState and state for different features?
  //  https://github.com/TanStack/table/issues/209 => yes remove all onXxxChange if set in initialState
  // const { computedInitialState, computedState, stateHandlers } = useMemo(() => {
  //   return {
  //     computedInitialState: {},
  //     computedState: {},
  //     stateHandlers: {},
  //   }
  // }, [initialState, onColumnPinningChange, onSortingChange, state]);
  // TODO memoize all the conditional attributes

  const selectColumnId = useId();
  const actualColumns = useMemo(() => {
    if (enableRowSelection) {
      return [
        {
          cell: enableMultiRowSelection ? DataTableCellCheckbox : DataTableCellRadio,
          id: selectColumnId,
          ...(enableMultiRowSelection ? { header: DataTableHeaderCellCheckbox } : {}),
        },
        ...columns,
      ];
    }
    return columns;
  }, [columns, enableMultiRowSelection, enableRowSelection, selectColumnId]);

  const table = useReactTable<T>({
    columns: actualColumns,
    data,
    enableColumnPinning: true,
    enableMultiRowSelection,
    enableRowSelection,
    enableSorting,
    getCoreRowModel: getCoreRowModel(),
    getRowId,
    initialState,
    manualSorting,
    state,
    ...(enableSorting && { getSortedRowModel: getSortedRowModel() }),
    ...(onColumnPinningChange ? { onColumnPinningChange } : {}), // TODO useless?
    ...(onRowSelectionChange ? { onRowSelectionChange } : {}),
    ...(onSortingChange ? { onSortingChange } : {}),
  });

  return (
    <DataTableContext.Provider value={{ table }}>
      { children }
    </DataTableContext.Provider>
  );
}

function useDataTable<T>(): DataTableContextType<T> {
  return useContext(DataTableContext);
}

export {
  type DataTableColumn,
  type DataTableColumnPinningState,
  DataTableProvider,
  type DataTableRootProp,
  type DataTableRow,
  type DataTableRowSelectionState,
  type DataTableSortingState,
  useDataTable,
};
