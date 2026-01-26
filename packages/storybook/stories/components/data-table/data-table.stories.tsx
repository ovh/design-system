import { type Meta, type StoryObj } from '@storybook/react';
import React, { useMemo, useState } from 'react';
import { DataTable, DataTableBody, type DataTableColumn, DataTableHead, type DataTableProp } from '../../../../ods-react/src/components/data-table/src';
import { TEXT_PRESET, Text } from '../../../../ods-react/src/components/text/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<DataTableProp<Person>>;

const meta: Meta<DataTableProp<Person>> = {
  argTypes: excludeFromDemoControls(['columns', 'data', 'initialState', 'getRowId', 'manualSorting', 'onColumnPinningChange', 'onRowSelectionChange', 'onSortingChange', 'state']),
  component: DataTable,
  subcomponents: { DataTableBody, DataTableHead },
  tags: ['new'],
  title: 'React Components/Data Table',
};

export default meta;

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  role: string;
  uuid: string;
}

const sampleData: Person[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john.doe@example.com',
    role: 'Admin',
    uuid: '5ae49b94-9ceb-4612-a087-4079a812bb0b',
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
    email: 'jane.smith@example.com',
    role: 'User',
    uuid: 'fb1c391c-bd88-4b96-ba39-8ab2a95d50bd',
  },
  {
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

export const Demo: Story = {
  argTypes: orderControls({
    enableMultiRowSelection: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    enableRowSelection: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    enableSorting: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
  }),
  render: (arg) => (
    <DataTable
      { ...arg }
      columns={ sampleColumns }
      data={ sampleData }>
      <DataTableHead />

      <DataTableBody />
    </DataTable>
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { DataTable, DataTableBody, DataTableHead } from '@ovhcloud/ods-react';
import { useMemo } from 'react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => {
    type Person = {
      firstName: string;
      lastName: string;
      age: number;
      email: string;
      role: string;
      uuid: string;
    }

    const sampleData: Person[] = useMemo(() => [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        email: 'john.doe@example.com',
        role: 'Admin',
        uuid: '5ae49b94-9ceb-4612-a087-4079a812bb0b',
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        age: 25,
        email: 'jane.smith@example.com',
        role: 'User',
        uuid: 'fb1c391c-bd88-4b96-ba39-8ab2a95d50bd',
      },
      {
        firstName: 'Bob',
        lastName: 'Johnson',
        age: 35,
        email: 'bob.johnson@example.com',
        role: 'Manager',
        uuid: 'a83a58a6-a007-47f0-b04b-83989e502171',
      },
    ], []);

    const sampleColumns: DataTableColumn<Person>[] = useMemo(() => [
      { id: 'firstName', header: 'First Name', accessorKey: 'firstName' },
      { id: 'lastName', header: 'Last Name', accessorKey: 'lastName' },
      { id: 'age', header: 'Age', accessorKey: 'age' },
      { id: 'email', header: 'Email', accessorKey: 'email' },
      { id: 'role', header: 'Role', accessorKey: 'role' },
    ], []);

    return (
      <DataTable
        columns={ sampleColumns }
        data={ sampleData }>
        <DataTableHead />

        <DataTableBody />
      </DataTable>
    );
  },
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <DataTable
      columns={ sampleColumns }
      data={ sampleData }>
      <DataTableHead />

      <DataTableBody />
    </DataTable>
  ),
};

export const StateControlled: Story = {
  globals: {
    imports: `import { DataTable, DataTableBody, DataTableHead, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { useMemo, useState } from 'react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => {
    type Person = {
      firstName: string;
      lastName: string;
      age: number;
      email: string;
      role: string;
      uuid: string;
    }

    const sampleData: Person[] = useMemo(() => [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        email: 'john.doe@domain2.com',
        role: 'Admin',
        uuid: '5ae49b94-9ceb-4612-a087-4079a812bb0b',
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        age: 25,
        email: 'jane.smith@domain1.com',
        role: 'User',
        uuid: 'fb1c391c-bd88-4b96-ba39-8ab2a95d50bd',
      },
      {
        firstName: 'Bob',
        lastName: 'Johnson',
        age: 35,
        email: 'bob.johnson@domain3.com',
        role: 'Manager',
        uuid: 'a83a58a6-a007-47f0-b04b-83989e502171',
      },
    ], []);

    const sampleColumns: DataTableColumn<Person>[] = useMemo(() => [
      { id: 'firstName', header: 'First Name', accessorKey: 'firstName' },
      { id: 'lastName', header: 'Last Name', accessorKey: 'lastName' },
      { id: 'age', header: 'Age', accessorKey: 'age' },
      { id: 'email', header: 'Email', accessorKey: 'email' },
      { id: 'role', header: 'Role', accessorKey: 'role' },
    ], []);

    const [sortingState, setSortingState] = useState([{
      id: 'role',
      desc: true,
    }]);

    return (
      <DataTable
        columns={ sampleColumns }
        data={ sampleData }
        onSortingChange={ setSortingState }
        state={{
          sorting: sortingState,
        }}>
        <Text preset={ TEXT_PRESET.caption } as="caption">Controlled sorted table</Text>

        <DataTableHead />

        <DataTableBody />
      </DataTable>
    );
  },
};

export const StateUncontrolled: Story = {
  globals: {
    imports: `import { DataTable, DataTableBody, DataTableHead, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { useMemo } from 'react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => {
    type Person = {
      firstName: string;
      lastName: string;
      age: number;
      email: string;
      role: string;
      uuid: string;
    }

    const sampleData: Person[] = useMemo(() => [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        email: 'john.doe@domain2.com',
        role: 'Admin',
        uuid: '5ae49b94-9ceb-4612-a087-4079a812bb0b',
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        age: 25,
        email: 'jane.smith@domain1.com',
        role: 'User',
        uuid: 'fb1c391c-bd88-4b96-ba39-8ab2a95d50bd',
      },
      {
        firstName: 'Bob',
        lastName: 'Johnson',
        age: 35,
        email: 'bob.johnson@domain3.com',
        role: 'Manager',
        uuid: 'a83a58a6-a007-47f0-b04b-83989e502171',
      },
    ], []);

    const sampleColumns: DataTableColumn<Person>[] = useMemo(() => [
      { id: 'firstName', header: 'First Name', accessorKey: 'firstName' },
      { id: 'lastName', header: 'Last Name', accessorKey: 'lastName' },
      { id: 'age', header: 'Age', accessorKey: 'age' },
      { id: 'email', header: 'Email', accessorKey: 'email' },
      { id: 'role', header: 'Role', accessorKey: 'role' },
    ], []);

    return (
      <DataTable
        columns={ sampleColumns }
        data={ sampleData }
        initialState={{
          sorting: [{
            id: 'role',
            desc: true,
          }],
        }}>
        <Text preset={ TEXT_PRESET.caption } as="caption">Uncontrolled pre-sorted table</Text>

        <DataTableHead />

        <DataTableBody />
      </DataTable>
    );
  },
};

export const SortingCustomFunction: Story = {
  globals: {
    imports: `import { DataTable, DataTableBody, DataTableHead, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { useMemo } from 'react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => {
    type Person = {
      firstName: string;
      lastName: string;
      age: number;
      email: string;
      role: string;
      uuid: string;
    }

    const sampleData: Person[] = useMemo(() => [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        email: 'john.doe@domain2.com',
        role: 'Admin',
        uuid: '5ae49b94-9ceb-4612-a087-4079a812bb0b',
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        age: 25,
        email: 'jane.smith@domain1.com',
        role: 'User',
        uuid: 'fb1c391c-bd88-4b96-ba39-8ab2a95d50bd',
      },
      {
        firstName: 'Bob',
        lastName: 'Johnson',
        age: 35,
        email: 'bob.johnson@domain3.com',
        role: 'Manager',
        uuid: 'a83a58a6-a007-47f0-b04b-83989e502171',
      },
    ], []);

    const sampleColumns: DataTableColumn<Person>[] = useMemo(() => [
      { id: 'firstName', header: 'First Name', accessorKey: 'firstName' },
      { id: 'lastName', header: 'Last Name', accessorKey: 'lastName' },
      { id: 'age', header: 'Age', accessorKey: 'age' },
      {
        id: 'email',
        header: 'Email',
        accessorKey: 'email',
        sortingFn: (rowA, rowB, columnId) => {
          const valueA = rowA.getValue<string>(columnId).split('@')[1].split('.')[0];
          const valueB = rowB.getValue<string>(columnId).split('@')[1].split('.')[0];

          return valueA.localeCompare(valueB);
        },
      },
      { id: 'role', header: 'Role', accessorKey: 'role' },
    ], []);

    return (
      <DataTable
        columns={ sampleColumns }
        data={ sampleData }>
        <Text preset={ TEXT_PRESET.caption } as="caption">Email sorted by domain</Text>

        <DataTableHead />

        <DataTableBody />
      </DataTable>
    );
  },
};

export const SortingDisabledColumns: Story = {
  globals: {
    imports: `import { DataTable, DataTableBody, DataTableHead, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { useMemo } from 'react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => {
    type Person = {
      firstName: string;
      lastName: string;
      age: number;
      email: string;
      role: string;
      uuid: string;
    }

    const sampleData: Person[] = useMemo(() => [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        email: 'john.doe@domain2.com',
        role: 'Admin',
        uuid: '5ae49b94-9ceb-4612-a087-4079a812bb0b',
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        age: 25,
        email: 'jane.smith@domain1.com',
        role: 'User',
        uuid: 'fb1c391c-bd88-4b96-ba39-8ab2a95d50bd',
      },
      {
        firstName: 'Bob',
        lastName: 'Johnson',
        age: 35,
        email: 'bob.johnson@domain3.com',
        role: 'Manager',
        uuid: 'a83a58a6-a007-47f0-b04b-83989e502171',
      },
    ], []);

    const sampleColumns: DataTableColumn<Person>[] = useMemo(() => [
      { id: 'firstName', header: 'First Name', accessorKey: 'firstName', enableSorting: false },
      { id: 'lastName', header: 'Last Name', accessorKey: 'lastName' },
      { id: 'age', header: 'Age', accessorKey: 'age' },
      { id: 'email', header: 'Email', accessorKey: 'email' },
      { id: 'role', header: 'Role', accessorKey: 'role', enableSorting: false },
    ], []);

    return (
      <DataTable
        columns={ sampleColumns }
        data={ sampleData }>
        <Text preset={ TEXT_PRESET.caption } as="caption">Sort disabled on some columns</Text>

        <DataTableHead />

        <DataTableBody />
      </DataTable>
    );
  },
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <DataTable
      columns={ sampleColumns }
      data={ sampleData }>
      <DataTableHead />

      <DataTableBody />
    </DataTable>
  ),
};
