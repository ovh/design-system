import { type Cell, flexRender } from '@tanstack/react-table';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type JSX, type ReactNode } from 'react';
import { getPinnedColumnStyle } from '../../controller/dataTable';
import style from './dataTableCell.module.scss';

interface DataTableCellProp<T> extends ComponentPropsWithRef<'td'> {
  cell: Cell<T, unknown>;
  children?: ReactNode;
}

const DataTableCell = <T,>({
  cell,
  children,
  className,
  ...props
}: DataTableCellProp<T>): JSX.Element => {
  const content = children ?? (
    cell ? flexRender(cell.column.columnDef.cell, cell.getContext()) : null
  );

  return (
    <td
      className={ classNames(style['data-table-cell'], className) }
      // style={{ width: cell?.column.getSize() !== 150 ? cell?.column.getSize() : undefined }}
      { ...props }
      style={{
        ...props.style,
        ...getPinnedColumnStyle<T>(cell.column),
      }}>
      { content }
    </td>
  );
};

DataTableCell.displayName = 'DataTableCell';

export {
  DataTableCell,
  type DataTableCellProp,
};
