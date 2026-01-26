import { type Row } from '@tanstack/react-table';
import { type JSX } from 'react';
import { Checkbox, CheckboxControl } from '../../../../checkbox/src';

interface DataTableCellCheckboxProp<T> {
  row: Row<T>;
}

const DataTableCellCheckbox = <T,>({
  row,
}: DataTableCellCheckboxProp<T>): JSX.Element => {
  return (
    <Checkbox
      checked={ row.getIsSelected() }
      disabled={ !row.getCanSelect() }
      onCheckedChange={ ({ checked }) => row.toggleSelected(!!checked) }>
      <CheckboxControl />
    </Checkbox>
  );
};

DataTableCellCheckbox.displayName = 'DataTableCellCheckbox';

export {
  DataTableCellCheckbox,
  type DataTableCellCheckboxProp,
};
