import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-radio';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { ValidityStateTemplate } from '../../../src/components/validityState/validityState';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  component: 'ods-radio',
  title: 'ODS Components/Form elements/Radio',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => {
    return html`
    <ods-radio
      aria-label="${arg.ariaLabel}"
      aria-labelledby="${arg.ariaLabelledby}"
      class="my-radio-demo"
      has-error="${arg.hasError}"
      is-disabled="${arg.isDisabled}"
      is-required="${arg.isRequired}"
      name="my-radio-demo">
    </ods-radio>
    ${arg.validityState ? ValidityStateTemplate('radio', '.my-radio-demo') : ''}
    <style>
      .my-radio-demo > input[type="radio"]:not(:disabled):checked {
        ${arg.customCss}
      }
    </style>
    `;
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
      description: 'Set a custom style properties. Example: "background-color: red;"',
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
    isRequired: false,
    validityState: false,
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

export const Error: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-radio has-error></ods-radio>
  `,
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
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

export const Alignment: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
  <div style="display: inline-flex; justify-content: center; align-items: center; gap: 5px;">
    <ods-radio input-id="alignment" value="alignment"></ods-radio>
    <label for="alignment" style="font-size: 2rem;">Alignment</label>

    <ods-radio input-id="alignment2" value="alignment2"></ods-radio>
    <label for="alignment2" style="">Alignment2</label>
  </div>
 `,
};

export const ValidityState: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-radio name="radio-validity-state-demo" is-required id="radio-validity-state-demo">
</ods-radio>
${ValidityStateTemplate('radio', '#radio-validity-state-demo')}
  `,
};
