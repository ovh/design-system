import { ODS_SWITCH_SIZE, ODS_SWITCH_SIZES } from '@ovhcloud/ods-components';
import { defineCustomElement as defineSwitch } from '@ovhcloud/ods-components/dist/components/ods-switch';
import { defineCustomElement as defineSwitchItem } from '@ovhcloud/ods-components/dist/components/ods-switch-item';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { ValidityStateTemplate } from '../../../src/components/validityState/validityState';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineSwitch();
defineSwitchItem();

const meta: Meta = {
  component: 'ods-switch',
  title: 'ODS Components/Form elements/Switch',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => {
    return html`
    <ods-switch id="my-switch"
                name="demo"
                has-error="${arg.hasError}"
                is-disabled="${arg.isDisabled}"
                is-required="${arg.isRequired}"
                size="${arg.size}">
      <ods-switch-item value="1">label1</ods-switch-item>
      <ods-switch-item value="2">label2</ods-switch-item>
      <ods-switch-item value="3">label3</ods-switch-item>
    </ods-switch>
    ${arg.validityState ? ValidityStateTemplate('switch', '#my-switch') : ''}
  `;
  },
  argTypes: orderControls({
    hasError: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
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

export const Error: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-switch has-error name="error">
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
${ValidityStateTemplate('switch', '#switch-validity-state-demo')}
  `,
};
