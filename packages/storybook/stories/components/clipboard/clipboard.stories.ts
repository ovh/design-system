import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

const meta: Meta = {
  title: 'ODS Components/Form elements/Clipboard',
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
  .my-custom-clipboard {
    width: 100%;
  }

  .my-custom-clipboard::part(tooltip) {
    width: 200px;
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
    <ods-clipboard value="Clipboard"></ods-clipboard>
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
