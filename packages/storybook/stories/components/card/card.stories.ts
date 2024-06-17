import type { Meta, StoryObj } from '@storybook/web-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-card';
import { ODS_CARD_COLOR, ODS_CARD_COLORS } from '@ovhcloud/ods-components';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Layout/Card',
  component: 'ods-card',
};

export default meta;

export const Demo: StoryObj = {
  render: (args) => html`
<ods-card class="demo-card" color="${args.color}">
  ${unsafeHTML(args.content)}
</ods-card>

<style>
  ${unsafeHTML(args.customCss)}
</style>
  `,
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_CARD_COLOR.primary },
        type: { summary: ODS_CARD_COLORS },
      },
      control: { type: 'select' },
      options: ODS_CARD_COLORS,
    },
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
    },
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
      description: 'Set a custom style properties. Example: ".demo-card { border: 1px red solid; }"',
    },
  }),
  args: {
    color: ODS_CARD_COLOR.primary,
    content: '<ods-text preset="heading-6">Hello, world!</ods-text>',
    customCss: '.demo-card { padding: 0 24px; }',
  },
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-card></ods-card>
  `,
};


export const Overview: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-card class="overview-card">
  <ods-text preset="heading-6">Hello, world!</ods-text>
</ods-card>

<style>
  .overview-card {
    padding: 0 24px;
  }
</style>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-card class="my-card">
  <ods-text preset="heading-6">Hello, world!</ods-text>
</ods-card>

<style>
  .my-card {
    width: 500px;
    display: flex;
    justify-content: center;
    border: 3px solid green;
  }
</style>
  `,
};

export const Color: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-card color="neutral">
  <ods-text preset="heading-6">Hello, world!</ods-text>
</ods-card>
  `,
};