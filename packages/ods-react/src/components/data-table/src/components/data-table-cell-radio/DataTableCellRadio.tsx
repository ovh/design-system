import { type Row } from '@tanstack/react-table';
import { type JSX } from 'react';
import { Radio, RadioControl, RadioGroup } from '../../../../radio-group/src';
import { useDataTable } from '../../contexts/useDataTable';

interface DataTableCellRadioProp<T> {
  row: Row<T>;
}

const DataTableCellRadio = <T,>({
  row,
}: DataTableCellRadioProp<T>): JSX.Element => {
  const { table } = useDataTable();

  return (
    <RadioGroup
      disabled={ !row.getCanSelect() }
      onValueChange={ () => {
        table.toggleAllRowsSelected(false);
        row.toggleSelected(true);
      }}
      // @ts-ignore TODO
      value={ row.getIsSelected() ? row.id : null }>
      <Radio value={ row.id }>
        <RadioControl />
      </Radio>
    </RadioGroup>
  );
};

DataTableCellRadio.displayName = 'DataTableCellRadio';

export {
  DataTableCellRadio,
  type DataTableCellRadioProp,
};
