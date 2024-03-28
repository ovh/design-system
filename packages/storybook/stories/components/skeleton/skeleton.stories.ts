import type { Meta, StoryObj } from '@storybook/web-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-skeleton';
import { html } from 'lit-html';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Content/Skeleton',
  component: 'ods-skeleton',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
<ods-skeleton class="my-skeleton">
</ods-skeleton>
<style>
  .my-skeleton::part(skeleton) {
    ${arg.customCss}
  }
</style>
  `,
  argTypes: orderControls({
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "height: 50px; width: 500px;"',
    }
  }),
  args: {},
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-skeleton></ods-skeleton>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-skeleton class="my-skeleton">
    </ods-skeleton>
    <style>
      .my-skeleton::part(skeleton) {
        width: 50%;
      }
    </style>
  `,
};