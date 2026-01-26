import { type Table } from '@tanstack/react-table';
import { type JSX } from 'react';
import { Checkbox, CheckboxControl } from '../../../../checkbox/src';

interface DataTableHeaderCellCheckboxProp<T> {
  table: Table<T>;
}

const DataTableHeaderCellCheckbox = <T,>({
  table,
}: DataTableHeaderCellCheckboxProp<T>): JSX.Element => {
  function getCheckedState(): boolean | 'indeterminate' {
    if (table.getIsAllRowsSelected()) {
      return true;
    }
    return table.getIsSomeRowsSelected() ? 'indeterminate' : false;
  }

  return (
    <Checkbox
      checked={ getCheckedState() }
      // TODO or toggleAllPageRowsSelected
      onCheckedChange={ ({ checked }) => table.toggleAllRowsSelected(!!checked) }>
      <CheckboxControl />
    </Checkbox>
  );
};

DataTableHeaderCellCheckbox.displayName = 'DataTableHeaderCellCheckbox';

export {
  DataTableHeaderCellCheckbox,
  type DataTableHeaderCellCheckboxProp,
};
