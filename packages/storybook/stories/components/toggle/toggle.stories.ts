import type { Meta, StoryObj } from '@storybook/web-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-toggle';
import { html } from 'lit-html';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Form/Toggle',
  component: 'ods-toggle',
};

export default meta;

export const Demo: StoryObj = {
  argTypes: orderControls({
    isDisabled: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'boolean' },
      },
    },
    isRequired: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'boolean' },
      },
    },
    withLabel: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'boolean' },
      },
    },
  }),
  args: {
    isDisabled: false,
    isRequired: false,
    withLabel: false,
  },
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-toggle></ods-toggle>
  `,
};

export const DisabledOn: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-toggle is-disabled value></ods-toggle>
  `,
};

export const DisabledOff: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-toggle is-disabled></ods-toggle>
  `,
};
export const WithLabel: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-toggle with-label></ods-toggle>
  `,
};

