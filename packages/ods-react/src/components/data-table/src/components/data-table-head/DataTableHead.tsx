import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type ReactNode, forwardRef } from 'react';
import { useDataTable } from '../../contexts/useDataTable';
import { DataTableHeaderRow } from '../data-table-header-row/DataTableHeaderRow';
import style from './dataTableHead.module.scss';

interface DataTableHeadProp extends ComponentPropsWithRef<'thead'> {
  /**
   * Custom render for header rows. If not provided, default header rows will be rendered.
   */
  children?: ReactNode;
}

const DataTableHead: FC<DataTableHeadProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const { table } = useDataTable();

  return (
    <thead
      className={ classNames(style['data-table-head'], className) }
      data-ods="data-table-head"
      ref={ ref }
      { ...props }>
      {
        children ?? table.getHeaderGroups().map((headerGroup) => (
          <DataTableHeaderRow
            headerGroup={ headerGroup }
            key={ headerGroup.id } />
        ))
      }
    </thead>
  );
});

DataTableHead.displayName = 'DataTableHead';

export {
  DataTableHead,
  type DataTableHeadProp,
};
