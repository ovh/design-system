import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { OdsTable, type OdsTableProp } from '../../../../ods-react/src/components/table/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';
import { ODS_TABLE_SIZE, ODS_TABLE_SIZES } from '../../../../ods-react/src/components/table/src/constants/table-size';
import { ODS_TABLE_VARIANT, ODS_TABLE_VARIANTS } from '../../../../ods-react/src/components/table/src/constants/table-variant';
import { OdsText } from '@ovhcloud/ods-react';

type Story = StoryObj<OdsTableProp>;

const meta: Meta<OdsTableProp> = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  component: OdsTable,
  title: 'ODS Components/Table',
};

const exampleTable = [
<caption>
    Front-end web developer course 2021
  </caption>,
  <thead>
  <tr>
    <th scope="col">Person</th>
    <th scope="col">Most interest in</th>
    <th scope="col">Age</th>
  </tr>
  </thead>,
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
]

const odsTextCaptionTable = [
  <caption>
    <OdsText preset="caption">Front-end web developer course 2021</OdsText>
  </caption>,
  <thead>
  <tr>
    <th scope="col">Person</th>
    <th scope="col">Most interest in</th>
    <th scope="col">Age</th>
  </tr>
  </thead>,
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
]

export default meta;

export const Demo: Story = {
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
  args: {
    children: exampleTable,
    size: ODS_TABLE_SIZE.md,
    variant: ODS_TABLE_VARIANT.default,
  },
};

export const Overview: Story = {
    parameters: {
    layout: 'centered',
  },
    tags: ['!dev'],
  render: ({}) => (
    <OdsTable>
      {exampleTable}
    </OdsTable>
  ),
}

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsTable>
      {exampleTable}
    </OdsTable>
  ),
};

export const Size: Story = {
  decorators: [(story) => (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      { story() }
    </div>
  )],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <OdsTable size='sm'>
        {exampleTable}
      </OdsTable>
      <OdsTable size='md'>
        {exampleTable}
      </OdsTable>
      <OdsTable size='lg'>
        {exampleTable}
      </OdsTable>
    </>
  ),
};

export const Variant: Story = {
    decorators: [(story) => (
    <div style={{
      width: '100%',
    }}>
      { story() }
    </div>
  )],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <OdsTable variant="default">
        {exampleTable}
      </OdsTable>
      <OdsTable variant="striped">
        {exampleTable}
      </OdsTable>
    </>
  ),
};

export const Caption: Story = {
  tags: ['!dev'],
  render: ({ size, variant }) => (  
    <OdsTable size={size} variant={variant}>
      { odsTextCaptionTable }
      </OdsTable>
  ),
}