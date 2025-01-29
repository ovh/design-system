import { ODS_TABLE_SIZE, ODS_TABLE_SIZES, ODS_TABLE_VARIANT, ODS_TABLE_VARIANTS } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-table';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Table',
  component: 'ods-table',
};

const exampleTable = `<table>
  <caption>
    Front-end web developer course 2021
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
</table>`

const odsTextCaptionTable = `<table>
  <caption>
    <ods-text preset="caption">Front-end web developer course 2021</ods-text>
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
</table>`

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
<ods-table size="${arg.size}"
           variant="${arg.variant}">
  ${unsafeHTML(arg.content)}
</ods-table>
  `,
  argTypes: orderControls({
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
    },
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
    content: exampleTable,
    size: ODS_TABLE_SIZE.md,
    variant: ODS_TABLE_VARIANT.default,
  },
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-table>
${unsafeHTML(exampleTable)}
</ods-table>
  `,
};
export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-table>
${unsafeHTML(exampleTable)}
</ods-table>
  `,
};

export const Size: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-table size="${ODS_TABLE_SIZE.sm}">
${unsafeHTML(exampleTable)}
</ods-table>

<ods-table size="${ODS_TABLE_SIZE.md}">
${unsafeHTML(exampleTable)}
</ods-table>

<ods-table size="${ODS_TABLE_SIZE.lg}">
${unsafeHTML(exampleTable)}
</ods-table>
  `,
};

export const Variant: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-table variant="${ODS_TABLE_VARIANT.default}">
${unsafeHTML(exampleTable)}
</ods-table>

<ods-table variant="${ODS_TABLE_VARIANT.striped}">
${unsafeHTML(exampleTable)}
</ods-table>
  `,
};

export const Caption: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-table>
${unsafeHTML(odsTextCaptionTable)}
</ods-table>
  `,
};
