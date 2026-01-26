import { type Cell, flexRender } from '@tanstack/react-table';
import { type ComponentPropsWithRef, type JSX } from 'react';
import { Skeleton } from '../../../../skeleton/src';
import { useDataTable } from '../../contexts/useDataTable';
import { getColumnStyle } from '../../controller/dataTable';
import style from './dataTableCell.module.scss';

interface DataTableCellProp<T> extends ComponentPropsWithRef<'td'> {
  cell: Cell<T, unknown>;
}

const DataTableCell = <T,>({
  cell,
  className,
  ...props
}: DataTableCellProp<T>): JSX.Element => {
  const { loading } = useDataTable();

  return (
    <td
      className={ className }
      { ...props }
      style={{
        ...props.style,
        ...getColumnStyle<T>(cell.column),
      }}>
      {
        loading
          ? <Skeleton className={ style['data-table-cell__skeleton'] } />
          : flexRender(cell.column.columnDef.cell, cell.getContext())
      }
    </td>
  );
};

DataTableCell.displayName = 'DataTableCell';

export {
  DataTableCell,
  type DataTableCellProp,
};
