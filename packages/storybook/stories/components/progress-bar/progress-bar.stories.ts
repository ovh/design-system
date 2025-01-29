import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-progress-bar';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Progress Bar',
  component: 'ods-progress-bar',
};

export default meta;

export const Demo: StoryObj = {
  render: (args) => html`
    <ods-progress-bar
     class="my-progress-bar-demo"
     max=${args.max}
     value=${args.value}
      >
    </ods-progress-bar>
    <style>
      .my-progress-bar-demo::part(progress) {
        ${args.CustomCss}
      }
    </style>`,
  argTypes: orderControls({
    max: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: '100' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
    value: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: '0' },
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
      description: 'Set a custom style properties on the progress bar. Example: "width: 100px;"',

    },
  }),
  args: {
    max: 100,
    value: 50,
  },
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-progress-bar class="my-progress" value="50"></ods-progress-bar>
<style>
  .my-progress::part(progress) {
    width: 100px;
  }
</style>
`,
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-progress-bar value="50"></ods-progress-bar>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-progress-bar></ods-progress-bar>
  `,
};

export const Max: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-progress-bar max="500" value="50"></ods-progress-bar>
  `,
};

export const Value: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-progress-bar value="50"></ods-progress-bar>
  `,
};
