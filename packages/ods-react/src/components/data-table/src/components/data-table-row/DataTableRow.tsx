import { type Row } from '@tanstack/react-table';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type JSX, type ReactNode } from 'react';
import { useDataTable } from '../../contexts/useDataTable';
import { DataTableCell } from '../data-table-cell/DataTableCell';
import style from './dataTableRow.module.scss';

interface DataTableRowProp<T> extends ComponentPropsWithRef<'tr'> {
  children?: ReactNode;
  row?: Row<T>;
}

const DataTableRow = <T,>({
  children,
  className,
  onClick,
  row,
  ...props
}: DataTableRowProp<T>): JSX.Element => {
  const { table } = useDataTable();
  const isSelectable = table.options.enableRowSelection;
  const isSelected = row?.getIsSelected() ?? false;

  return (
    <tr
      aria-selected={ isSelectable && row ? isSelected : undefined }
      className={ classNames(
        style['data-table-row'],
        { [style['data-table-row--selectable']]: isSelectable && row },
        { [style['data-table-row--selected']]: isSelected },
        className,
      )}
      { ...props }>
      {
        children ?? row?.getVisibleCells().map((cell) => (
          <DataTableCell
            cell={ cell }
            key={ cell.id } />
        ))
      }
    </tr>
  );
};

DataTableRow.displayName = 'DataTableRow';

export {
  DataTableRow,
  type DataTableRowProp,
};
