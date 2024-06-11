import type { Meta, StoryObj } from '@storybook/web-components';
import { ODS_SWITCH_SIZE, ODS_SWITCH_SIZES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-switch';
import { html } from 'lit-html';
import { CONTROL_CATEGORY, orderControls } from '../../control';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

defineCustomElement();

const meta: Meta = {
  component: 'ods-switch',
  title: 'ODS Components/Form/Switch',
};

export default meta;

export const Demo: StoryObj = {
  render: (args) => html`
    <ods-switch
                is-disabled="${args.isDisabled}"
                is-required="${args.isRequired}"
                size="${args.size}">
      ${unsafeHTML(args.content)}
    </ods-switch>
  `,
  argTypes: orderControls({
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
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
        defaultValue: { summary: 'ø' },
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
  }),
  args: {
    content: `<ods-switch-item name="demo" input-id="demo1" value="1">label1</ods-switch-item>
    <ods-switch-item name="demo" input-id="demo2" value="2">label2</ods-switch-item>
    <ods-switch-item name="demo" input-id="demo3" value="3">label3</ods-switch-item>`,
    isDisabled: false,
    isRequired: false,
    size: 'md',
  },
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-switch>
  <ods-switch-item name="default" input-id="label1" value="1">label1</ods-switch-item>
  <ods-switch-item name="default" input-id="label2" value="2">label2</ods-switch-item>
  <ods-switch-item name="default" input-id="label3" value="3">label3</ods-switch-item>
</ods-switch>
  `,
};

export const Checked: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-switch>
  <ods-switch-item is-checked name="checked" input-id="label1" value="1">label1</ods-switch-item>
  <ods-switch-item name="checked" input-id="label2" value="2">label2</ods-switch-item>
  <ods-switch-item name="checked" input-id="label3" value="3">label3</ods-switch-item>
</ods-switch>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-switch is-disabled>
  <ods-switch-item name="disabled" input-id="label1" value="1">label1</ods-switch-item>
  <ods-switch-item name="disabled" input-id="label2" value="2">label2</ods-switch-item>
  <ods-switch-item name="disabled" input-id="label3" value="3">label3</ods-switch-item>
</ods-switch>
  `,
};

export const Size: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-switch size="md">
  <ods-switch-item name="size-md" input-id="label1" value="1">label1</ods-switch-item>
  <ods-switch-item name="size-md" input-id="label2" value="2">label2</ods-switch-item>
  <ods-switch-item name="size-md" input-id="label3" value="3">label3</ods-switch-item>
</ods-switch>

<ods-switch size="sm">
  <ods-switch-item name="size-sm" input-id="label1" value="1">label1</ods-switch-item>
  <ods-switch-item name="size-sm" input-id="label2" value="2">label2</ods-switch-item>
  <ods-switch-item name="size-sm" input-id="label3" value="3">label3</ods-switch-item>
</ods-switch>
  `,
};
