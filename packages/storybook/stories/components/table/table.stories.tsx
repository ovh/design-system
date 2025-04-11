import { type Meta, type StoryObj } from '@storybook/react';
import React, { type ReactElement } from 'react';
import { ODS_TABLE_SIZE, ODS_TABLE_SIZES, ODS_TABLE_VARIANT, ODS_TABLE_VARIANTS, OdsTable, type OdsTableProp } from '../../../../ods-react/src/components/table/src';
import { OdsText } from '../../../../ods-react/src/components/text/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsTableProp>;

const meta: Meta<OdsTableProp> = {
  component: OdsTable,
  title: 'ODS Components/Table',
};

export default meta;

function renderExampleTable(props?: OdsTableProp, customCaption?: () => ReactElement): ReactElement {
  return (
    <OdsTable { ...props }>
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
    </OdsTable>
  );
}

export const Demo: Story = {
  render: ({ size, variant }) => renderExampleTable({ size, variant }),
  argTypes: orderControls({
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_TABLE_SIZE.md },
        type: { summary: ODS_TABLE_SIZES }
      },
      control: { type: 'select' },
      options: ODS_TABLE_SIZES,
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_TABLE_VARIANT.default },
        type: { summary: ODS_TABLE_VARIANTS }
      },
      control: { type: 'select' },
      options: ODS_TABLE_VARIANTS,
    },
  }),
};

export const CustomCaption: Story = {
  tags: ['!dev'],
  render: ({}) => renderExampleTable({}, () => <OdsText preset="caption">Front-end web developer course 2021</OdsText>),
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
