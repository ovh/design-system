import { useEffect, useMemo, useState } from 'react';
import { Button } from '../../button/src';
import { Pagination } from '../../pagination/src';
import { DataTable, DataTableBody, type DataTableColumn, type DataTableColumnPinningState, DataTableHead, type DataTableRowSelectionState, type DataTableSortingState } from '.';

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

const sampleColumns: DataTableColumn<Person>[] = [
  { id: 'firstName', header: 'First Name', accessorKey: 'firstName' },
  { id: 'lastName', header: 'Last Name', accessorKey: 'lastName' },
  { id: 'age', header: 'Age', accessorKey: 'age' },
  { id: 'email', header: 'Email', accessorKey: 'email' },
  { id: 'role', header: 'Role', accessorKey: 'role' },
];

export const BulkAction = () => {
  const [selection, setSelection] = useState<DataTableRowSelectionState>({});
  const nbSelected = Object.keys(selection).length;

  // TODO uncontrolled impossible if not controlled?
  return (
    <>
      {/*<DataTable*/}
      {/*  columns={ sampleColumns }*/}
      {/*  data={ sampleData }>*/}
      {/*  <caption>Using table context</caption>*/}

      {/*  <DataTableHead />*/}

      {/*  <DataTableBody />*/}
      {/*</DataTable>*/}

      <br /><br />

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

export const Default = () => (
  <DataTable
    columns={ sampleColumns }
    data={ sampleData }>
    <DataTableHead />

    <DataTableBody />
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
        initialState={{
          columnPinning: {
            left: ['age'],
            right: ['email'],
          },
        }}
        style={{ width: '1000px' }}>
        <caption>Uncontrolled initialized Table</caption>

        <DataTableHead />

        <DataTableBody />
      </DataTable>

      <br /><br />

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
      <button onClick={() => setPinningState({right: ['firstName']})}>TEST</button>
    </>
  );
};

// TODO if uncontrolled, only way to get the selection is using the table from context (https://tanstack.com/table/latest/docs/guide/row-selection#access-row-selection-state)
export const RowSelection = () => {
  // const { table } = useDataTable();
  // console.log(table.getSelectedRowModel())
  const [selectionState, setSelectionState] = useState<DataTableRowSelectionState>({
    [sampleData[0].uuid]: true,
  });

  return (
    <>
      <DataTable
        columns={ sampleColumns }
        data={ sampleData }
        enableRowSelection={ true }>
        <caption>Uncontrolled multiple selection</caption>

        <DataTableHead />

        <DataTableBody />
      </DataTable>

      <br /><br />

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

      <br /><br />

      {/*<DataTable*/}
      {/*  columns={ sampleColumns }*/}
      {/*  data={ sampleData }*/}
      {/*  enableMultiRowSelection={ false }*/}
      {/*  enableRowSelection={ true }*/}
      {/*  // onRowSelectionChange={ (e) => console.log(e) }*/}
      {/*>*/}
      {/*  <caption>Single selection</caption>*/}

      {/*  <DataTableHead />*/}

      {/*  <DataTableBody />*/}
      {/*</DataTable>*/}

      <br /><br />

      <DataTable
        columns={ sampleColumns }
        data={ sampleData }
        enableRowSelection={ (row) => row.original.age >= 30 }>
        <caption>Custom enable selection logic</caption>

        <DataTableHead />

        <DataTableBody />
      </DataTable>
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

  const basicColumns: DataTableColumn<Person>[] = useMemo(() => [
    { id: 'firstName', header: 'First Name', accessorKey: 'firstName', enableSorting: false },
    { id: 'lastName', header: 'Last Name', accessorKey: 'lastName' },
    { id: 'age', header: 'Age', accessorKey: 'age' },
    { id: 'email', header: 'Email', accessorKey: 'email' },
    { id: 'role', header: 'Role', accessorKey: 'role' },
  ], []);

  const customSortingColumns: DataTableColumn<{ value: string }>[] = useMemo(() => [
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
        initialState={{
          sorting: [{
            id: 'role',
            desc: true,
          }],
        }}>
        <caption>Uncontrolled initiliazed Table</caption>

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

type PaginationPerson = {
  id: string;
  firstName: string;
  age: number;
};

const paginationColumns: DataTableColumn<PaginationPerson>[] = [
  { id: 'firstName', header: 'First Name', accessorKey: 'firstName' },
  { id: 'age', header: 'Age', accessorKey: 'age' },
];

const PAGE_LIMIT = 5;

async function fetchData(page: number) {
  return fetch(`https://dummyjson.com/users?limit=${PAGE_LIMIT}&skip=${PAGE_LIMIT * page}&select=firstName,age`)
    .then((res) => res.json())
    .then(({ total, users }) => ({
      total,
      users,
    }));
}
// TODO see if we want to provide a client-side ready to use pagination
//  if we do, we need to add manualPagination option + specific model (see https://tanstack.com/table/latest/docs/guide/pagination)
export const WithPaginationAPI = () => {
  const [data, setData] = useState<Person[]>([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchData(page).then(({ total, users }) => {
      setData(users);
      setTotal(total);
    });
  }, [page]);

  function refresh() {
    fetchData(page).then(({ total, users }) => {
      setData(users);
      setTotal(total);
    });
  }

  return (
    <>
      <Button onClick={ refresh }>
        Refresh
      </Button>

      <DataTable
        columns={ paginationColumns }
        data={ data }>
        <DataTableHead />

        <DataTableBody />
      </DataTable>

      <Pagination
        onPageChange={ ({ page }) => setPage(page) }
        page={ page }
        pageSize={ PAGE_LIMIT }
        totalItems={ total - PAGE_LIMIT } />
    </>
  );
};
