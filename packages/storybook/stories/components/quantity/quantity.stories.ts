import type { Meta, StoryObj } from '@storybook/web-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-quantity';
import { html } from 'lit-html';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Form/Quantity',
  component: 'ods-quantity',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
  <ods-quantity class="my-quantity"
      ariaLabel="${arg.ariaLabel}"
      ariaLabelledby="${arg.ariaLabelledby}"
      has-error="${arg.hasError}"
      is-clearable="${arg.isClearable}"
      is-disabled="${arg.isDisabled}"
      is-readonly="${arg.isReadonly}"
      is-required="${arg.isRequired}"
      max="${arg.max}"
      min="${arg.min}"
      placeholder="${arg.placeholder}"
      step="${arg.step}">
      </ods-quantity>
<style>
  .my-quantity::part(input) {
    ${arg.customCssInput}
  }
  .my-quantity::part(button_minus) {
    ${arg.customCssButtonMinus}
  }
  .my-quantity::part(button_add) {
    ${arg.customCssButtonAdd}
  }
</style>
  `,
  argTypes: orderControls({
    ariaLabel: {
      control: 'text',
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
    },
    ariaLabelledby: {
      control: 'text',
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
    },
    customCssButtonAdd: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "color: red;"',
    },
    customCssButtonMinus: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "color: red;"',
    },
    customCssInput: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "width: 100px;"',
    },
    hasError: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    isDisabled: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    isReadonly: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    isRequired: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    max: {
      control: 'number',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'number' },
      },
    },
    min: {
      control: 'number',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'number' },
      },
    },
    step: {
      control: 'number',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'number' },
      },
    },
  }),
  args: {
    hasError: false,
    isDisabled: false,
    isReadonly: false,
    isRequired: false,
  },
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-quantity></ods-quantity>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-quantity is-disabled></ods-quantity>
  `,
};

export const Error: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-quantity has-error></ods-quantity>
  `,
};

export const Readonly: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-quantity is-readonly default-value="0"></ods-quantity>
  `,
};

export const Min: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-quantity min="0" value="0"></ods-quantity>
  `,
};

export const Max: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-quantity max="10" value="10"></ods-quantity>
  `,
};

export const Step: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-quantity step="10"></ods-quantity>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-quantity class="my-quantity"></ods-quantity>
<style>
    .my-quantity::part(input) {
      width: 200px;
    }

    .my-quantity::part(button_minus) {
      color: green;
      border-color: green;
    }

    .my-quantity::part(button_add) {
      color: red;
      border-color: red;
    }
  </style>
  `,
};
