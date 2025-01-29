import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-checkbox';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { ValidityStateTemplate } from '../../../src/components/validityState/validityState';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Form elements/Checkbox',
  component: 'ods-checkbox',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => {
    return html`
    <ods-checkbox
      aria-label="${arg.ariaLabel}"
      aria-labelledby="${arg.ariaLabelledby}"
      class="my-checkbox-demo"
      has-error="${arg.hasError}"
      is-disabled="${arg.isDisabled}"
      is-indeterminate="${arg.isIndeterminate}"
      is-required="${arg.isRequired}"
    ></ods-checkbox>
    ${arg.validityState ? ValidityStateTemplate('checkbox', '.my-checkbox-demo') : ''}
    <style>
      .my-checkbox-demo > input[type="checkbox"]:not(:disabled):checked {
        ${arg.customCss}
      }
    </style>`;
  },
  argTypes: orderControls({
    ariaLabel: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    ariaLabelledby: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "background-color: red; border-color: red;"',
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
    isIndeterminate: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isRequired: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    validityState: {
      table: {
        category: CONTROL_CATEGORY.validation,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
      description: 'Toggle this to see the component validityState',
    },
  }),
  args: {
    hasError: false,
    isDisabled: false,
    isIndeterminate: false,
    isRequired: false,
    validityState: false,
  },
};

export const Alignment: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
  <div style="display: inline-flex; justify-content: center; align-items: center; gap: 5px;">
    <ods-checkbox input-id="alignment" value="alignment"></ods-checkbox>
    <label for="alignment" style="font-size: 2rem;">Alignment</label>
    <ods-checkbox input-id="alignment2" value="alignment2"></ods-checkbox>
    <label for="alignment2" style="">Alignment2</label>
  </div>
 `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-checkbox class="my-checkbox"></ods-checkbox>
<style>
  .my-checkbox > input[type="checkbox"]:not(:disabled):checked {
    background-color: red;
    border-color: red;
  }
</style>
  `,
};

export const Checked: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-checkbox is-checked></ods-checkbox>
  `,
};

export const Error: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-checkbox has-error></ods-checkbox>
  `,
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
    <ods-checkbox is-checked></ods-checkbox>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-checkbox></ods-checkbox>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-checkbox is-disabled></ods-checkbox>
  `,
};

export const DisabledChecked: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-checkbox is-disabled is-checked></ods-checkbox>
  `,
};

export const DisabledIndeterminate: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-checkbox is-disabled is-indeterminate></ods-checkbox>
  `,
};

export const InputId: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
  <ods-checkbox input-id="input-id-example" name="name" value="huey"></ods-checkbox>
  <label for="input-id-example">Example</label>
 `,
};

export const Indeterminate: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-checkbox is-indeterminate></ods-checkbox>
  `,
};

export const ValidityState: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-checkbox is-required id="checkbox-validity-state-demo">
</ods-checkbox>
${ValidityStateTemplate('checkbox', '#checkbox-validity-state-demo')}
  `,
};
