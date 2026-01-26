import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type ReactNode } from 'react';
import { useDataTable } from '../../contexts/useDataTable';
import { DataTableRow } from '../data-table-row/DataTableRow';
import style from './dataTableBody.module.scss';

interface DataTableBodyProp extends ComponentPropsWithRef<'tbody'> {
  children?: ReactNode;
}

const DataTableBody: FC<DataTableBodyProp> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  const { table } = useDataTable();

  return (
    <tbody
      className={ classNames(style['data-table-body'], className) }
      { ...props }>
      {
        children ?? table.getRowModel().rows.map((row) => (
          <DataTableRow
            key={ row.id }
            row={ row } />
        ))
      }
    </tbody>
  );
};

DataTableBody.displayName = 'DataTableBody';

export {
  DataTableBody,
  type DataTableBodyProp,
};
