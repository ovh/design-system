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
  render: (arg) => html`
<ods-clipboard class="my-clipboard"
  is-disabled="${arg.isDisabled}"
  label-copy="${arg.labelCopy}"
  label-copy-success="${arg.labelCopySuccess}"
  value="${arg.value}">
</ods-clipboard>
<style>
  .my-clipboard::part(tooltip) {
    ${arg.customTooltipCss}
  }
</style>
  `,
  argTypes: orderControls({
    customTooltipCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style to the tooltip. Example: "width: 200px;"',
    },
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
        defaultValue: { summary: 'Copy to clipboard' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    labelCopySuccess: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'Copied!' },
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
    labelCopy: 'Copy to clipboard',
    labelCopySuccess: 'Copied!',
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

export const CustomTooltipCSS = {
  tags: ['isHidden'],
  render: () => html`
<ods-clipboard class="my-custom-clipboard"
               label-copy="Copier le contenu"
               label-copy-success="Copié !"
               value="Copy me">
</ods-clipboard>
<style>
  .my-custom-clipboard::part(tooltip) {
    width: 200px;
  }
</style>
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
