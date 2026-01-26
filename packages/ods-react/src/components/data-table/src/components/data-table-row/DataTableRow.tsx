import { type Row } from '@tanstack/react-table';
import { type ComponentPropsWithRef, type JSX } from 'react';
import { useDataTable } from '../../contexts/useDataTable';
import { DataTableCell } from '../data-table-cell/DataTableCell';

interface DataTableRowProp<T> extends ComponentPropsWithRef<'tr'> {
  row: Row<T>;
}

const DataTableRow = <T,>({
  className,
  row,
  ...props
}: DataTableRowProp<T>): JSX.Element => {
  const { table } = useDataTable();
  const isSelectable = table.options.enableRowSelection;
  const isSelected = row.getIsSelected() ?? false;

  return (
    <tr
      aria-selected={ isSelectable && row ? isSelected : undefined }
      className={ className }
      { ...props }>
      {
        row.getVisibleCells().map((cell) => (
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
