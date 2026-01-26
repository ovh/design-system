import { type HeaderGroup } from '@tanstack/react-table';
import { type ComponentPropsWithRef, type JSX } from 'react';
import { DataTableHeaderCell } from '../data-table-header-cell/DataTableHeaderCell';

interface DataTableHeaderRowProp<T> extends ComponentPropsWithRef<'tr'> {
  headerGroup?: HeaderGroup<T>;
}

const DataTableHeaderRow = <T,>({
  children,
  className,
  headerGroup,
  ...props
}: DataTableHeaderRowProp<T>): JSX.Element => {
  return (
    <tr
      className={ className }
      { ...props }>
      {
        headerGroup?.headers.map((header) => (
          <DataTableHeaderCell
            header={ header }
            key={ header.id } />
        ))
      }
    </tr>
  );
};

DataTableHeaderRow.displayName = 'DataTableHeaderRow';

export {
  DataTableHeaderRow,
  type DataTableHeaderRowProp,
};

