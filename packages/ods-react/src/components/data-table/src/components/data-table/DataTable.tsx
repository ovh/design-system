import classNames from 'classnames';
import { type FC, type ForwardedRef, type JSX, forwardRef } from 'react';
import { Table } from '../../../../table/src';
import { DataTableProvider, type DataTableRootProp } from '../../contexts/useDataTable';
import style from './dataTable.module.scss';

interface DataTableProp<T> extends DataTableRootProp<T> {}

const DataTable = forwardRef(<T,>({
  className,
  columns,
  data,
  enableMultiRowSelection = true,
  enableRowSelection,
  enableSorting = true,
  getRowId,
  initialState,
  manualSorting,
  onColumnPinningChange,
  onRowSelectionChange,
  onSortingChange,
  state,
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
      initialState={ initialState }
      manualSorting={ manualSorting }
      onColumnPinningChange={ onColumnPinningChange }
      onRowSelectionChange={ onRowSelectionChange }
      onSortingChange={ onSortingChange }
      state={ state }>
      <Table
        className={ classNames(style['data-table'], className) }
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
