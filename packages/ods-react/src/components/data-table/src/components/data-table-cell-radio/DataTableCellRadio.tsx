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
  // const [isSelected, setIsSelected] = useState(row.getIsSelected());
  const { table } = useDataTable();
  // console.log(`${row.id} selected:${row.getIsSelected()}`)
  return (
    <RadioGroup
      disabled={ !row.getCanSelect() }
      onValueChange={ () => {
        // console.log(`-- onValueChange ${row.id} selected:${row.getIsSelected()} / value: ${value}`)

        table.toggleAllRowsSelected(false);
        row.toggleSelected(true);

        //const selected = row.getIsSelected();
        // const selected = value === row.id;
        // table.toggleAllRowsSelected(false); // deselect all.
        // row.toggleSelected(!selected);
        // // row.toggleSelected(value === row.id)
        // setIsSelected(selected);
      }}
      // @ts-ignore TODO
      value={ row.getIsSelected() ? row.id : null }
      // value={ isSelected ? row.id : null }
    >
      <Radio
        // checked={ row.getIsSelected() }
        // disabled={ !row.getCanSelect() }
        // onCheckedChange={ ({ checked }) => row.toggleSelected(!!checked) }
        value={ row.id }
      >
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
