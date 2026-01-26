import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useDataTable } from '../../contexts/useDataTable';
import { DataTableHeaderRow } from '../data-table-header-row/DataTableHeaderRow';

interface DataTableHeadProp extends ComponentPropsWithRef<'thead'> {}

const DataTableHead: FC<DataTableHeadProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  const { table } = useDataTable();

  return (
    <thead
      className={ className }
      data-ods="data-table-head"
      ref={ ref }
      { ...props }>
      {
        table.getHeaderGroups().map((headerGroup) => (
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
