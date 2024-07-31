import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY, orderControls } from '../../control';

const meta: Meta = {
  component: 'ods-range',
  title: 'ODS Components/Form elements/Range',
  decorators: [(story) => html`<div style="padding-top: 50px; display: inline-flex; align-items: center;">${story()}</div>`],

};

export default meta;

export const Demo: StoryObj = {
  render: (args) => html`
    <ods-range
      class="my-range-demo"
      has-error="${args.hasError}"
      is-disabled="${args.isDisabled}"
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

export const DefaultDual: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-range id="range-dual-default"></ods-range>
<script>
(() => {
  const rangeDualDefault = document.querySelector('#range-dual-default');
  rangeDualDefault.value = [30, 70];
})()
</script>`,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-range is-disabled value="40"></ods-range>
  `,
};

export const DisabledDual: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-range is-disabled value="40" id="range-dual-disabled"></ods-range>
<script>
(() => {
  const rangeDualDisabled = document.querySelector('#range-dual-disabled');
  rangeDualDisabled.value = [30, 70];
})()
</script>`,
};

export const Error: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-range has-error value="40"></ods-range>
  `,
};

export const ErrorDual: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-range has-error value="40" id="range-dual-error"></ods-range>
<script>
(() => {
  const rangeDualError = document.querySelector('#range-dual-error');
  rangeDualError.value = [30, 70];
})()
</script>`,
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
  parameters: {
    layout: 'centered',
  },
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

export const StepDual: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-range step="10" id="range-dual-step"></ods-range>
<script>
(() => {
  const rangeDualStep = document.querySelector('#range-dual-step');
  rangeDualStep.value = [30, 70];
})()
</script>
  `,
};
