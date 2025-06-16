import { type Meta, type StoryObj } from '@storybook/react';
import React, { type ReactElement } from 'react';
import { TABLE_SIZES, TABLE_VARIANTS, Table, type TableProp } from '../../../../ods-react/src/components/table/src';
import { Text } from '../../../../ods-react/src/components/text/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<TableProp>;

const meta: Meta<TableProp> = {
  component: Table,
  title: 'React Components/Table',
};

export default meta;

function renderExampleTable(props?: TableProp, customCaption?: () => ReactElement): ReactElement {
  return (
    <Table { ...props }>
      <caption>
        { customCaption ? customCaption() : 'Front-end web developer course 2021' }
      </caption>
      <thead>
      <tr>
        <th scope="col">Person</th>
        <th scope="col">Most interest in</th>
        <th scope="col">Age</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">Chris</th>
        <td>HTML tables</td>
        <td>22</td>
      </tr>
      <tr>
        <th scope="row">Dennis</th>
        <td>Web accessibility</td>
        <td>45</td>
      </tr>
      <tr>
        <th scope="row">Sarah</th>
        <td>JavaScript frameworks</td>
        <td>29</td>
      </tr>
      <tr>
        <th scope="row">Karen</th>
        <td>Web performance</td>
        <td>36</td>
      </tr>
      </tbody>
    </Table>
  );
}

export const Demo: Story = {
  render: ({ size, variant }) => renderExampleTable({ size, variant }),
  argTypes: orderControls({
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: { summary: 'TABLE_SIZE' }
      },
      control: { type: 'select' },
      options: TABLE_SIZES,
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: { summary: 'TABLE_VARIANT' }
      },
      control: { type: 'select' },
      options: TABLE_VARIANTS,
    },
  }),
};

export const CustomCaption: Story = {
  tags: ['!dev'],
  render: ({}) => renderExampleTable({}, () => <Text preset="caption">Front-end web developer course 2021</Text>),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => renderExampleTable(),
};

export const Overview: Story = {
  parameters: {
    layout: 'centered',
  },
  tags: ['!dev'],
  render: ({}) => renderExampleTable(),
}

export const Size: Story = {
  decorators: [(story) => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: '16px',
    }}>
      { story() }
    </div>
  )],
  tags: ['!dev'],
  render: ({}) => (
    <>
      { renderExampleTable({ size: 'sm' }) }
      { renderExampleTable({ size: 'md' }) }
      { renderExampleTable({ size: 'lg' }) }
    </>
  ),
};

export const Variant: Story = {
  decorators: [(story) => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: '16px',
    }}>
      { story() }
    </div>
  )],
  tags: ['!dev'],
  render: ({}) => (
    <>
      { renderExampleTable({ variant: 'default' }) }
      { renderExampleTable({ variant: 'striped' }) }
    </>
  ),
};
