import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useDataTable } from '../../contexts/useDataTable';
import style from './dataTableEmpty.module.scss';

interface DataTableEmptyProp extends ComponentPropsWithRef<'tbody'> {}

const DataTableEmpty: FC<DataTableEmptyProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const { table } = useDataTable();

  if (table.getRowCount() > 0) {
    return <></>;
  }

  return (
    <tbody
      className={ classNames(style['data-table-empty'], className) }
      data-ods="data-table-empty"
      ref={ ref }
      { ...props }>
      <tr>
        <td colSpan={ table.getAllColumns().length }>
          { children }
        </td>
      </tr>
    </tbody>
  );
});

DataTableEmpty.displayName = 'DataTableEmpty';

export {
  DataTableEmpty,
  type DataTableEmptyProp,
};
