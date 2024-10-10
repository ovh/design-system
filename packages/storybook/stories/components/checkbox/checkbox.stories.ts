import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

const meta: Meta = {
  title: 'ODS Components/Form elements/Checkbox',
  component: 'ods-checkbox',
};

export default meta;

export const Demo: StoryObj = {
  render: (args) => {
    const validityStateTemplate = html`<br>
    <div id="validity-state" style="display: grid; row-gap: 5px;"></div>
    <script>
      (async () => {
          const divValidityState = document.querySelector('#validity-state');
          const checkbox = document.querySelector('.my-checkbox-demo');
          await renderValidityState();
          checkbox.addEventListener('odsChange', async () => {
            await renderValidityState();
          })
          async function renderValidityState() {
            const validity = await checkbox.getValidity()
            divValidityState.innerHTML = '';
            for (let key in validity) {
              divValidityState.innerHTML += "<div>" + key + ": " + validity[key] + "</div>";
            }
          }
      })();
    </script>`;
    return html`
    <ods-checkbox
      ariaLabel="${args.ariaLabel}"
      ariaLabelledby="${args.ariaLabelledby}"
      class="my-checkbox-demo"
      is-disabled="${args.isDisabled}"
      is-indeterminate="${args.isIndeterminate}"
      is-required="${args.isRequired}"
    ></ods-checkbox>
    ${args.validityState ? validityStateTemplate : ''}
    <style>
      .my-checkbox-demo > input[type="checkbox"]:not(:disabled):checked {
        ${args.customCss}
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
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
  }),
  args: {
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
<div id="validity-state-demo"></div>
<script>
  (async() => {
      const divValidityState = document.querySelector('#validity-state-demo');
      const checkbox = document.querySelector('#checkbox-validity-state-demo');
      await renderValidityState();
      checkbox.addEventListener('odsChange', async () => {
        await renderValidityState();
      })
      async function renderValidityState() {
        const validity = await checkbox.getValidity()
        divValidityState.innerHTML = '';
        for (let key in validity) {
          divValidityState.innerHTML += "<div>" + key + ": " + validity[key] + "</div>";
        }
      }
  })();
</script>
`,
};
