import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

const meta: Meta = {
  title: 'ODS Components/Meter',
  component: 'ods-meter',
};

export default meta;

export const Demo: StoryObj = {
  render: (args) => html`
    <ods-meter
      class="my-meter-demo"
      max=${args.max}
      min=${args.min}
      low=${args.low}
      high=${args.high}
      value=${args.value}
    >
    </ods-meter>
    <style>
      .my-meter-demo::part(meter) {
        ${args.CustomCss}
      }
    </style>
  `,
  argTypes: orderControls({
    max: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: '100' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
    min: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: '0' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
    low: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: '30' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
    high: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: '70' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
    value: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: '50' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
    CustomCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set custom style properties on the meter. Example: "background-color: red;"',
    },
  }),
  args: {
    max: 100,
    min: 0,
    low: 30,
    high: 70,
    value: 50,
  },
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-meter class="my-meter" value="50" max="100" min="0" low="30" high="70"></ods-meter>
    <style>
    </style>
  `,
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
    <ods-meter value="50" max="100" min="0" low="30" high="70"></ods-meter>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-meter></ods-meter>
  `,
};

export const Max: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-meter max="200" min="0" value="100" low="50" high="150"></ods-meter>
  `,
};

export const Min: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-meter min="-50" max="50" value="0" low="-25" high="25"></ods-meter>
  `,
};

export const Value: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-meter value="75" max="100" min="0" low="30" high="70"></ods-meter>
  `,
};