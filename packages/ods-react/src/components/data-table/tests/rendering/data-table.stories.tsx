import { DataTable, DataTableBody, type DataTableColumn, DataTableHead } from '../../src';

export default {
  component: DataTable,
  title: 'Tests rendering',
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

export const render = () => (
  <DataTable
    columns={ sampleColumns }
    data={ sampleData }>
    <DataTableHead />

    <DataTableBody />
  </DataTable>
);
