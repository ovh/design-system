import { type ComponentPropsWithRef, type FC, type JSX } from 'react';
import { useDataTable } from '../../contexts/useDataTable';
import { DataTableRow } from '../data-table-row/DataTableRow';

interface DataTableBodyProp extends ComponentPropsWithRef<'tbody'> {}

const DataTableBody: FC<DataTableBodyProp> = ({
  className,
  ...props
}): JSX.Element => {
  const { table } = useDataTable();

  if (table.getRowCount() === 0) {
    return <></>;
  }

  return (
    <tbody
      className={ className }
      { ...props }>
      {
        table.getRowModel().rows.map((row) => (
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
