import type { Meta, StoryObj } from '@storybook/web-components';
import { ODS_SWITCH_SIZE, ODS_SWITCH_SIZES } from '@ovhcloud/ods-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

const meta: Meta = {
  component: 'ods-switch',
  title: 'ODS Components/Form elements/Switch',
};

export default meta;

export const Demo: StoryObj = {
  render: (args) => {
    const validityStateTemplate = html`<br>
    <div id="validity-state-switch" style="display: grid; row-gap: 5px;"></div>
    <script>
      (async() => {
          const divValidityState = document.querySelector('#validity-state-switch');
          const switchDemo = document.querySelector('#my-switch');
          await customElements.whenDefined('ods-switch');
          setTimeout(async() => await renderValidityState(), 0);
          switchDemo.addEventListener('odsChange', async() => {
            await renderValidityState();
          });
          async function renderValidityState() {
            const validity = await switchDemo.getValidity();
            divValidityState.innerHTML = '';
            for (let key in validity) {
              divValidityState.innerHTML += "<div>" + key + ": " + validity[key] + "</div>";
            }
          }
      })();
    </script>`;
    return html`
    <ods-switch id="my-switch"
                name="demo"
                is-disabled="${args.isDisabled}"
                is-required="${args.isRequired}"
                size="${args.size}">
      <ods-switch-item value="1">label1</ods-switch-item>
      <ods-switch-item value="2">label2</ods-switch-item>
      <ods-switch-item value="3">label3</ods-switch-item>
    </ods-switch>
    ${ args.validityState ? validityStateTemplate : '' }
  `;
  },
  argTypes: orderControls({
    isDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
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
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_SWITCH_SIZE.md },
        type: { summary: ODS_SWITCH_SIZES },
      },
      control: { type: 'select' },
      options: ODS_SWITCH_SIZES,
    },
    validityState: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
      description: 'Toggle this to see the component validityState',
    },
  }),
  args: {
    isDisabled: false,
    isRequired: false,
    size: 'md',
    validityState: false,
  },
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-switch name="default">
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  `,
};

export const Checked: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-switch name="checked">
  <ods-switch-item is-checked value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-switch is-disabled name="disabled">
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  `,
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-switch name="overview">
  <ods-switch-item is-checked value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  `,
};

export const Size: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-switch size="md" name="size-md">
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>

<ods-switch size="sm" name="size-sm">
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  `,
};

export const ValidityState: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-switch id="switch-validity-state-demo" name="switch-validity-state" is-required>
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
<div id="validity-state-demo"></div>
<script>
  (async() => {
      const divValidityState = document.querySelector('#validity-state-demo');
      const switchValidityState = document.querySelector('#switch-validity-state-demo');
      await customElements.whenDefined('ods-switch-item');
      setTimeout(async() => await renderValidityState(), 100);
      switchValidityState.addEventListener('odsChange', async() => {
        await renderValidityState();
      })
      async function renderValidityState() {
        const validity = await switchValidityState.getValidity();
        divValidityState.innerHTML = '';
        for (let key in validity) {
          divValidityState.innerHTML += "<div>" + key + ": " + validity[key] + "</div>";
        }
      }
  })();
</script>
`,
};
