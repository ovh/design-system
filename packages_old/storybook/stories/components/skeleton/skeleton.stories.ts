import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-skeleton';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Skeleton',
  component: 'ods-skeleton',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
<ods-skeleton class="my-skeleton-demo">
</ods-skeleton>
<style>
  .my-skeleton-demo::part(skeleton) {
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

export const Overview: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-skeleton></ods-skeleton>
  `,
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
