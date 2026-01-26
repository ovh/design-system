import { type FC, type ForwardedRef, type JSX, forwardRef } from 'react';
import { Table } from '../../../../table/src';
import { DataTableProvider, type DataTableRootProp } from '../../contexts/useDataTable';

interface DataTableProp<T> extends DataTableRootProp<T> {}

const DataTable = forwardRef(<T,>({
  className,
  columns,
  data,
  enableMultiRowSelection = true,
  enableRowSelection,
  enableSorting = true,
  getRowId,
  loading,
  manualSorting,
  onColumnPinningChange,
  onRowSelectionChange,
  onSortingChange,
  state,
  stickyHeader,
  ...props
}: DataTableProp<T>, ref: ForwardedRef<HTMLTableElement>): JSX.Element => {
  return (
    <DataTableProvider
      columns={ columns }
      data={ data }
      enableMultiRowSelection={ enableMultiRowSelection }
      enableRowSelection={ enableRowSelection }
      enableSorting={ enableSorting }
      getRowId={ getRowId }
      loading={ loading }
      manualSorting={ manualSorting }
      onColumnPinningChange={ onColumnPinningChange }
      onRowSelectionChange={ onRowSelectionChange }
      onSortingChange={ onSortingChange }
      state={ state }
      stickyHeader={ stickyHeader }>
      <Table
        className={ className }
        data-ods="data-table"
        ref={ ref }
        { ...props }>
      </Table>
    </DataTableProvider>
  );
}) as <T>(props: DataTableProp<T> & { ref?: ForwardedRef<HTMLTableElement> }) => JSX.Element;

(DataTable as FC).displayName = 'DataTable';

export {
  DataTable,
  type DataTableProp,
};
