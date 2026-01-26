import { type Meta, type StoryObj } from '@storybook/react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { DataTable, DataTableBody, type DataTableColumnDef, DataTableEmpty, DataTableHead, type DataTableProp, type DataTableSortingState } from '../../../../ods-react/src/components/data-table/src';
import { PAGINATION_PER_PAGE, Pagination } from '../../../../ods-react/src/components/pagination/src';
import { TEXT_PRESET, Text } from '../../../../ods-react/src/components/text/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<DataTableProp<Person>>;

const meta: Meta<DataTableProp<Person>> = {
  argTypes: excludeFromDemoControls(['columns', 'data', 'initialState', 'getRowId', 'manualSorting', 'onColumnPinningChange', 'onColumnVisibilityChange', 'onRowSelectionChange', 'onSortingChange', 'state', 'stickyHeader']),
  component: DataTable,
  subcomponents: { DataTableBody, DataTableEmpty, DataTableHead },
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

const sampleColumns: DataTableColumnDef<Person>[] = [
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
    loading: {
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

    const sampleColumns: DataTableColumnDef<Person>[] = useMemo(() => [
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

export const Empty: Story = {
  globals: {
    imports: `import { DataTable, DataTableBody, DataTableEmpty, DataTableHead } from '@ovhcloud/ods-react';
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

    const sampleData: Person[] = useMemo(() => [], []);

    const sampleColumns: DataTableColumnDef<Person>[] = useMemo(() => [
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

        <DataTableEmpty>
          Empty table data
        </DataTableEmpty>
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

export const PaginationExample: Story = {
  globals: {
    imports: `import { DataTable, DataTableBody, DataTableHead, PAGINATION_PER_PAGE, Pagination, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { useCallback, useEffect, useMemo, useState } from 'react';`,
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
    }
    const PAGE_LIMIT = PAGINATION_PER_PAGE.option_10;

    const sampleColumns: DataTableColumnDef<Person>[] = useMemo(() => [
      { id: 'firstName', header: 'First Name', accessorKey: 'firstName' },
      { id: 'lastName', header: 'Last Name', accessorKey: 'lastName' },
      { id: 'age', header: 'Age', accessorKey: 'age' },
      { id: 'email', header: 'Email', accessorKey: 'email' },
      { id: 'role', header: 'Role', accessorKey: 'role' },
    ], []);

    const [data, setData] = useState<Person[]>(Array(PAGE_LIMIT).fill({}));
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);

    const fetchData = useCallback(async (page: number) => {
      return fetch(`https://dummyjson.com/users?limit=${PAGE_LIMIT}&skip=${PAGE_LIMIT * (page - 1)}&select=firstName,lastName,age,email,role`)
        .then((res) => res.json())
        .then(({ total, users }) => ({
          total,
          users,
        }));
    }, []);

    useEffect(() => {
      fetchData(page).then(({ total, users }) => {
        setData(users);
        setTotal(total);
      });
    }, [page]);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '16px', alignItems: 'center', justifyContent: 'center' }}>
        <DataTable
          columns={ sampleColumns }
          data={ data }>
          <Text preset={ TEXT_PRESET.caption } as="caption">Paginated Table</Text>

          <DataTableHead />

          <DataTableBody />
        </DataTable>

        <Pagination
          onPageChange={ ({ page }) => setPage(page) }
          page={ page }
          pageSize={ PAGE_LIMIT }
          totalItems={ total } />
      </div>
    );
  },
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

    const sampleColumns: DataTableColumnDef<Person>[] = useMemo(() => [
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

    const sampleColumns: DataTableColumnDef<Person>[] = useMemo(() => [
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

    const sampleColumns: DataTableColumnDef<Person>[] = useMemo(() => [
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

export const SortingControlled: Story = {
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

    const sampleColumns: DataTableColumnDef<Person>[] = useMemo(() => [
      { id: 'firstName', header: 'First Name', accessorKey: 'firstName' },
      { id: 'lastName', header: 'Last Name', accessorKey: 'lastName' },
      { id: 'age', header: 'Age', accessorKey: 'age' },
      { id: 'email', header: 'Email', accessorKey: 'email' },
      { id: 'role', header: 'Role', accessorKey: 'role' },
    ], []);

    const [sortingState, setSortingState] = useState<DataTableSortingState>([{
      id: 'role',
      desc: true,
    }, {
      id: 'lastName',
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
        <Text preset={ TEXT_PRESET.caption } as="caption">Controlled sorting</Text>

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

export const VisibilityExample: Story = {
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

    const sampleColumns: DataTableColumnDef<Person>[] = useMemo(() => [
      { id: 'firstName', header: 'First Name', accessorKey: 'firstName' },
      { id: 'lastName', header: 'Last Name', accessorKey: 'lastName' },
      { id: 'age', header: 'Age', accessorKey: 'age' },
      { id: 'email', header: 'Email', accessorKey: 'email' },
      { id: 'role', header: 'Role', accessorKey: 'role' },
    ], []);
    const visibileColumn= useMemo(() => ({ age: false }), []);

    return (
      <DataTable
        columns={ sampleColumns }
        data={ sampleData }
        state={{
          columnVisibility: visibileColumn,
        }}>
        <Text preset={ TEXT_PRESET.caption } as="caption">Age column hidden</Text>

        <DataTableHead />

        <DataTableBody />
      </DataTable>
    );
  },
};
