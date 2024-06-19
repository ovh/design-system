import type { Meta, StoryObj } from '@storybook/web-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-range';
import { html } from 'lit-html';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();

const meta: Meta = {
  component: 'ods-range',
  title: 'ODS Components/Form/Range',
};

export default meta;

export const Demo: StoryObj = {
  render: (args) => html`
    <ods-range
      class="my-range-demo"
      has-error="${args.hasError}"
      is-disabled="${args.isDisabled}"
      is-required="${args.isRequired}"
      max="${args.max}"
      min="${args.min}"
      step="${args.step}"
    ></ods-range>
    <style>
      .my-range-demo::part(range) {
        ${args.customCss}
      }
    </style>`,
  argTypes: orderControls({
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "width: 100px;"',
    },
    hasError: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isRequired: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    max: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: '100' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
    min: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: '0' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
    step: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: '1' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
  }),
  args: {
    hasError: false,
    isDisabled: false,
    isRequired: false,
    max: 100,
    min: 0,
    step: 1,
  },
};

export const DemoDual: StoryObj = {
  render: (args) => html`
    <ods-range
      class="my-range-dual-demo"
      has-error="${args.hasError}"
      is-disabled="${args.isDisabled}"
      is-required="${args.isRequired}"
      max="${args.max}"
      min="${args.min}"
      step="${args.step}"
    ></ods-range>
    <script>
    (() => {
      const rangeDual = document.querySelector('.my-range-dual-demo');
      rangeDual.value = [30, 70];
    })()
    </script>
    <style>
      .my-range-dual-demo::part(range) {
        ${args.customCss}
      }

      .my-range-dual-demo::part(range-dual) {
        ${args.customCss}
      }
    </style>`,
  argTypes: orderControls({
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "width: 100px;"',
    },
    hasError: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isRequired: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    max: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: '100' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
    min: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: '0' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
    step: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: '1' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
  }),
  args: {
    hasError: false,
    isDisabled: false,
    isRequired: false,
    max: 100,
    min: 0,
    step: 1,
  },
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-range class="my-range" value="70"></ods-range>
<style>
  .my-range::part(range) {
    width: 100px
  }
</style>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-range></ods-range>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-range is-disabled value="40"></ods-range>
  `,
};

export const Error: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-range has-error value="40"></ods-range>
  `,
};

export const Max: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-range max="1000" value="40"></ods-range>
  `,
};

export const Min: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-range min="50" value="70"></ods-range>
  `,
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-range value="50"></ods-range>
  `,
};

export const Step: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-range step="10" value="70"></ods-range>
  `,
};
