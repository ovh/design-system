import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-code';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit-html';
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
<ods-code class="my-code"
          can-copy="${arg.canCopy}"
          label-copy="${arg.labelCopy || nothing}"
          label-copy-success="${arg.labelCopySuccess || nothing}">${arg.content}</ods-code>
<style>
  .my-code::part(tooltip) {
    ${arg.customTooltipCss}
  }
</style>
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
    customTooltipCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style to the tooltip. Example: "width: 200px;"',
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
  }),
  args: {
    canCopy: false,
    content: 'import { OdsText } from \'@ovhcloud/ods-components/react\';',
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
<ods-code class="my-code" can-copy>import { OdsText } from '@ovhcloud/ods-components/react';</ods-code>
<style>
  .my-code {
    display: flex;
    color: #00ffff;
  }

  .my-code::part(tooltip) {
    background-color: #eee;
    color: #111;
  }
</style>
  `,
};

export const CustomLabels: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-code can-copy label-copy="Copier le contenu" label-copy-success="Copié !">import { OdsText } from '@ovhcloud/ods-components/react';</ods-code>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-code>import { OdsText } from '@ovhcloud/ods-components/react';</ods-code>
  `,
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
    <ods-code can-copy>import { OdsText } from '@ovhcloud/ods-components/react';</ods-code>
  `,
};

export const Multiline: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-code>function isTargetInElement(event, element) {
  if (!element) {
    return false;
  }

    return element.contains(event.target) || event.composedPath().includes(element);
  }</ods-code>
  `,
};
