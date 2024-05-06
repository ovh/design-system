import type { Meta, StoryObj } from '@storybook/web-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-clipboard';
import { html } from 'lit-html';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/User feedback/Clipboard',
  component: 'ods-clipboard',
};

export default meta;

export const Demo: StoryObj = {
  argTypes: orderControls({
    isDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    labelCopy: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    labelCopySuccess: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    value: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
  }),
  args: {
    isDisabled: false,
  },
};

export const CustomLabels: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-clipboard label-copy="Copier le contenu"
               label-copy-success="Copié !"
               value="Copy me">
</ods-clipboard>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-clipboard value="Copy me"></ods-clipboard>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-clipboard is-disabled value="Copy me"></ods-clipboard>
  `,
};
