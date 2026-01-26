import { useEffect, useMemo, useRef, useState } from 'react';
import { DataTable, DataTableBody, type DataTableColumnDef, type DataTableColumnPinningState, type DataTableColumnVisibilityState, DataTableEmpty, DataTableHead, type DataTableRowSelectionState, type DataTableSortingState } from '.';
import { Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput } from '../../editable/src';
import { ICON_NAME, Icon } from '../../icon/src';
import { Quantity, QuantityControl, QuantityInput } from '../../quantity/src';
import { Pagination } from '../../pagination/src';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../tooltip/src';

export default {
  component: DataTable,
  title: 'DataTable dev',
};

type Person = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  role: string;
  uuid: string;
};

const sampleData: Person[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john.doe@example.com',
    role: 'Admin',
    uuid: '5ae49b94-9ceb-4612-a087-4079a812bb0b',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
    email: 'jane.smith@example.com',
    role: 'User',
    uuid: 'fb1c391c-bd88-4b96-ba39-8ab2a95d50bd',
  },
  {
    id: '3',
    firstName: 'Bob',
    lastName: 'Johnson',
    age: 35,
    email: 'bob.johnson@example.com',
    role: 'Manager',
    uuid: 'a83a58a6-a007-47f0-b04b-83989e502171',
  },
];

const sampleColumns: DataTableColumnDef<Person>[] = [
  { id: 'firstName', header: 'First Name', accessorKey: 'firstName' },
  { id: 'lastName', header: 'Last Name', accessorKey: 'lastName' },
  { id: 'age', header: 'Age', accessorKey: 'age' },
  { id: 'email', header: 'Email', accessorKey: 'email' },
  { id: 'role', header: 'Role', accessorKey: 'role' },
];

export const BulkAction = () => {
  const [selection, setSelection] = useState<DataTableRowSelectionState>({});
  const nbSelected = Object.keys(selection).length;

  return (
    <>
      <button
        disabled={ nbSelected < 1 }
        onClick={ () => alert(`Deleting row ids: ${Object.keys(selection).join(', ')}`) }
        type="button">
        Delete { nbSelected } row{ nbSelected !== 1 ? '(s)' : '' }
      </button>

      <DataTable
        columns={ sampleColumns }
        data={ sampleData }
        enableRowSelection={ true }
        getRowId={ (row) => row.id }
        onRowSelectionChange={ setSelection }
        state={{
          rowSelection: selection,
        }}>
        <caption>Using controlled state</caption>

        <DataTableHead />

        <DataTableBody />
      </DataTable>
    </>
  );
};

export const CustomRender = () => {
  const [data, setData] = useState(sampleData);
  const columns: DataTableColumnDef<Person>[] = useMemo(() => [
    { id: 'firstName', header: 'First Name', accessorKey: 'firstName' },
    { id: 'lastName', header: 'Last Name', accessorKey: 'lastName' },
    {
      id: 'age',
      cell: ({ cell }) => {
        const value = cell.getValue<number>();
        const bufferValue = useRef(value);

        return (
          <Editable
            onCancel={ () => bufferValue.current = value }
            onSubmit={ () => {
              setData((d) => {
                d[cell.row.index].age = bufferValue.current;
                return [...d];
              });
            }}>
            <EditableDisplay>
              { value || <EditableDisplayEmpty>No value</EditableDisplayEmpty> }
            </EditableDisplay>

            <EditableInput>
              <Quantity
                defaultValue={ value.toString() }
                onValueChange={ ({ valueAsNumber }) => bufferValue.current = valueAsNumber }>
                <QuantityControl>
                  <QuantityInput />
                </QuantityControl>
              </Quantity>
            </EditableInput>

            <EditableActions />
          </Editable>
        )
      },
      header: () => (
        <div>
          Age&nbsp;
          <Tooltip>
            <TooltipTrigger asChild>
              <Icon name={ ICON_NAME.circleQuestion } />
            </TooltipTrigger>

            <TooltipContent>
              Some info about the column
            </TooltipContent>
          </Tooltip>
        </div>
      ),
      accessorKey: 'age',
    },
    { id: 'email', header: 'Email', accessorKey: 'email' },
    { id: 'role', header: 'Role', accessorKey: 'role' },
  ], []);

  return (
    <DataTable
      columns={ columns }
      data={ data }>
      <DataTableHead />

      <DataTableBody />

      <DataTableEmpty>
        Aucun résultat
      </DataTableEmpty>
    </DataTable>
  );
};

export const Default = () => (
  <DataTable
    columns={ sampleColumns }
    data={ sampleData }>
    <DataTableHead />

    <DataTableBody />

    <DataTableEmpty>
      Aucun résultat
    </DataTableEmpty>
  </DataTable>
);

export const Empty = () => (
  <DataTable
    columns={ sampleColumns }
    data={ [] }>
    <DataTableHead />

    <DataTableBody />

    <DataTableEmpty>
      Aucun résultat
    </DataTableEmpty>
  </DataTable>
);

export const Pinning = () => {
  const [pinningState, setPinningState] = useState<DataTableColumnPinningState>({
    left: ['age'],
    right: ['email'],
  });

  return (
    <>
      <DataTable
        columns={ sampleColumns }
        data={ sampleData }
        state={{
          columnPinning: pinningState,
        }}
        style={{ width: '1000px' }}>
        <caption>Controlled pinning state Table</caption>

        <DataTableHead />

        <DataTableBody />
      </DataTable>

      <button onClick={() => setPinningState({right: ['firstName']})}>UPDATE</button>
    </>
  );
};

export const RowSelection = () => {
  const [selectionState, setSelectionState] = useState<DataTableRowSelectionState>({
    [sampleData[0].uuid]: true,
  });
  const [singleSelectionState, setSingleSelectionState] = useState<DataTableRowSelectionState>({});

  return (
    <>
      <DataTable
        columns={ sampleColumns }
        data={ sampleData }
        enableRowSelection={ true }
        getRowId={ (row) => row.uuid }
        onRowSelectionChange={ setSelectionState }
        state={{
          rowSelection: selectionState,
        }}>
        <caption>Controlled multiple selection</caption>

        <DataTableHead />

        <DataTableBody />
      </DataTable>
      <p>Selected: {JSON.stringify(selectionState)}</p>

      <br /><br />

      <DataTable
        columns={ sampleColumns }
        data={ sampleData }
        enableRowSelection={ (row) => row.original.age >= 30 }>
        <caption>Custom enable selection logic</caption>

        <DataTableHead />

        <DataTableBody />
      </DataTable>

      <br /><br />

      <DataTable
        columns={ sampleColumns }
        data={ sampleData }
        enableMultiRowSelection={ false }
        enableRowSelection={ true }
        getRowId={ (row) => row.uuid }
        onRowSelectionChange={ setSingleSelectionState }
        state={{
          rowSelection: singleSelectionState,
        }}>
        <caption>Controlled single selection</caption>

        <DataTableHead />

        <DataTableBody />
      </DataTable>
      <p>Selected: {JSON.stringify(singleSelectionState)}</p>
    </>
  );
};

export const Sorting = () => {
  const [sortingState, setSortingState] = useState<DataTableSortingState>([{
    id: 'role',
    desc: true,
  }, {
    id: 'lastName',
    desc: true,
  }]);

  const basicColumns: DataTableColumnDef<Person>[] = useMemo(() => [
    { id: 'firstName', header: 'First Name', accessorKey: 'firstName', enableSorting: false },
    { id: 'lastName', header: 'Last Name', accessorKey: 'lastName' },
    { id: 'age', header: 'Age', accessorKey: 'age' },
    { id: 'email', header: 'Email', accessorKey: 'email' },
    { id: 'role', header: 'Role', accessorKey: 'role' },
  ], []);

  const customSortingColumns: DataTableColumnDef<{ value: string }>[] = useMemo(() => [
    {
      id: 'value',
      accessorKey: 'value',
      sortingFn: (rowA, rowB, columnId) => {
        const valueA = rowA.getValue<string>(columnId).split('-')[1];
        const valueB = rowB.getValue<string>(columnId).split('-')[1];

        return Number(valueA) - Number(valueB);
      }},
  ], []);

  const customSortingData = useMemo(() => [
    { value: 'eee-4-eee' },
    { value: 'xxx-1-xxx' },
    { value: 'aaa-3-aaa' },
    { value: 'zzz-2-zzz' },
    { value: 'bbb-5-bbb' },
  ], []);

  return (
    <>
      <DataTable
        columns={ basicColumns }
        data={ sampleData }
        enableSorting={ true }>
        <caption>Basic Table</caption>

        <DataTableHead />

        <DataTableBody />
      </DataTable>

      <br /><br />

      <DataTable
        columns={ basicColumns }
        data={ sampleData }
        enableSorting={ true }
        onSortingChange={ setSortingState }
        state={{
          sorting: sortingState,
        }}>
        <caption>Controlled sorting state Table</caption>

        <DataTableHead />

        <DataTableBody />
      </DataTable>

      <br /><br />

      <DataTable
        columns={ customSortingColumns }
        data={ customSortingData }
        enableSorting={ true }>
        <caption>Custom sorting function</caption>

        <DataTableHead />

        <DataTableBody />
      </DataTable>
    </>
  );
};

export const StickyHeader = () => {
  const data = useMemo(() => {
    const dummyData: Person[] = [];

    for (let i = 0; i < 100; i++) {
      dummyData.push({
        id: (i+1).toString(),
        firstName: `John-${i}`,
        lastName: `Doe-${i}`,
        age: Math.floor(Math.random() * (70 - 20 + 1) + 20),
        email: `john.doe${i}@example.com`,
        role: 'Admin',
        uuid: Date.now().toString(),
      });
    }

    return dummyData;
  }, [])

  return (
    <DataTable
      columns={ sampleColumns }
      data={ data }
      stickyHeader>
      <DataTableHead />

      <DataTableBody />

      <DataTableEmpty>
        Aucun résultat
      </DataTableEmpty>
    </DataTable>
  );
}

export const Visibility = () => {
  const [columnVisibility, setColumnVisibility] = useState<DataTableColumnVisibilityState>({
    age: false,
    role: false,
  });

  return (
    <DataTable
      columns={ sampleColumns }
      data={ sampleData }
      onColumnVisibilityChange={ setColumnVisibility }
      state={{
        columnVisibility,
      }}>
      <DataTableHead />

      <DataTableBody />

      <DataTableEmpty>
        Aucun résultat
      </DataTableEmpty>
    </DataTable>
  );
}

type PaginationPerson = {
  id: string;
  firstName: string;
  age: number;
};

const paginationColumns: DataTableColumnDef<PaginationPerson>[] = [
  { id: 'firstName', header: 'First Name', accessorKey: 'firstName' },
  { id: 'age', header: 'Age', accessorKey: 'age' },
];

const PAGE_LIMIT = 5;

async function fetchData(page: number) {
  return fetch(`https://dummyjson.com/users?limit=${PAGE_LIMIT}&skip=${PAGE_LIMIT * (page - 1)}&select=firstName,age`)
    .then((res) => res.json())
    .then(({ total, users }) => ({
      total,
      users,
    }));
}

export const WithPaginationAPI = () => {
  const [data, setData] = useState<Person[]>(Array(PAGE_LIMIT).fill({}));
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchData(page).then(({ total, users }) => {
        setData(users);
        setTotal(total);
        setLoading(false);
      });
    }, 3000);
  }, [page]);

  return (
    <>
      <DataTable
        columns={ paginationColumns }
        data={ data }
        loading={ loading }>
        <DataTableHead />

        <DataTableBody />
      </DataTable>

      <Pagination
        onPageChange={ ({ page }) => setPage(page) }
        page={ page }
        pageSize={ PAGE_LIMIT }
        totalItems={ total } />
    </>
  );
};
