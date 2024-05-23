import type { Meta, StoryObj } from '@storybook/web-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-radio';
import { html } from 'lit-html';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();

const meta: Meta = {
  component: 'ods-radio',
  title: 'ODS Components/Form/Radio',
};

export default meta;

export const Demo: StoryObj = {
  render: (args) => html`
    <ods-radio
      ariaLabel="${args.ariaLabel}"
      ariaLabelledby="${args.ariaLabelledby}"
      class="my-radio-demo"
      is-disabled="${args.isDisabled}"
      is-required="${args.isRequired}"
    ></ods-radio>
    <style>
      .my-radio-demo > input[type="radio"]:not(:disabled):checked {
        ${args.customCss}
      }
    </style>`,
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
      description: 'Set a custom style properties. Example: "background-color: red;"',
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
  }),
  args: {
    isDisabled: false,
    isRequired: false,
  },
};

export const DemoGroup: StoryObj = {
  render: (args) => html`
    <ods-radio input-id="html" name="fav_language" value="HTML" is-checked="${args.isCheckedHTML}" is-disabled="${args.isDisabledHTML}"></ods-radio>
    <label for="html">HTML</label>

    <ods-radio input-id="css" name="fav_language" value="CSS" is-checked="${args.isCheckedCSS}" is-disabled="${args.isDisabledCSS}"></ods-radio>
    <label for="css">CSS</label>

    <ods-radio input-id="js" name="fav_language" value="JS" is-checked="${args.isCheckedJS}" is-disabled="${args.isDisabledJS}"></ods-radio>
    <label for="js">JS</label>
`,
  argTypes: orderControls({
    isCheckedHTML: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
      description: 'Make the HTML radio checked by default',
    },
    isCheckedCSS: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
      description: 'Make the CSS radio checked by default',

    },
    isCheckedJS: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
      description: 'Make the JS radio checked by default',

    },
    isDisabledHTML: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
      description: 'Make the HTML radio disabled',
    },
    isDisabledCSS: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
      description: 'Make the CSS radio disabled',
    },
    isDisabledJS: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
      description: 'Make the JS radio disabled',
    },
  }),
  args: {
    isCheckedCSS: false,
    isCheckedHTML: false,
    isCheckedJS: false,
    isDisabledCSS: false,
    isDisabledHTML: false,
    isDisabledJS: false,
  },
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-radio class="my-radio"></ods-radio>
<style>
  .my-radio > input[type="radio"]:not(:disabled):checked {
    background-color: red;
    border-color: red;
  }
</style>
  `,
};

export const Checked: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-radio is-checked></ods-radio>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-radio></ods-radio>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-radio is-disabled></ods-radio>
  `,
};

export const DisabledChecked: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-radio is-disabled is-checked></ods-radio>
  `,
};

export const Group: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
  <ods-radio input-id="huey" name="drone" value="huey"></ods-radio>
  <label for="huey">Huey</label>

  <ods-radio input-id="dewey" name="drone" value="dewey"></ods-radio>
  <label for="dewey">Dewey</label>

  <ods-radio input-id="louie" name="drone" value="louie"></ods-radio>
  <label for="louie">Louie</label>
`,
};

export const GroupIsChecked: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
  <ods-radio input-id="html" name="fav_language" value="HTML" is-checked></ods-radio>
  <label for="html">HTML</label>

  <ods-radio input-id="css" name="fav_language" value="CSS"></ods-radio>
  <label for="css">CSS</label>

  <ods-radio input-id="js" name="fav_language" value="JS"></ods-radio>
  <label for="js">JS</label>
`,
};

export const InputId: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
  <ods-radio input-id="input-id-example" name="name" value="huey"></ods-radio>
  <label for="input-id-example">Example</label>
 `,
};
