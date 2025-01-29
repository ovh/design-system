import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-code';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Code',
  component: 'ods-code',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
<ods-code can-copy="${arg.canCopy}">${arg.content}</ods-code>
  `,
  argTypes: orderControls({
    canCopy: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
    },
  }),
  args: {
    canCopy: false,
    content: 'import { OdsText } from \'@ovhcloud/ods-components/react\';'
  },
};

export const CanCopy: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-code can-copy>import { OdsText } from '@ovhcloud/ods-components/react';
</ods-code>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-code class="my-code">import { OdsText } from '@ovhcloud/ods-components/react';
</ods-code>
<style>
  .my-code {
    display: flex;
    color: cyan;
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
    <ods-code can-copy>import { OdsText } from '@ovhcloud/ods-components/react';
    </ods-code>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-code>import { OdsText } from '@ovhcloud/ods-components/react';
</ods-code>
  `,
};
