import { type HeaderGroup } from '@tanstack/react-table';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type JSX, type ReactNode } from 'react';
import { DataTableHeaderCell } from '../data-table-header-cell/DataTableHeaderCell';
import style from './dataTableHeaderRow.module.scss';

interface DataTableHeaderRowProp<T> extends ComponentPropsWithRef<'tr'> {
  children?: ReactNode;
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
      className={ classNames(style['data-table-header-row'], className) }
      { ...props }>
      {
        children ?? headerGroup?.headers.map((header) => (
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

