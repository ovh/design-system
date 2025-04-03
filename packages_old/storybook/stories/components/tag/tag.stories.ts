import { ODS_ICON_NAMES, ODS_TAG_COLOR, ODS_TAG_COLORS, ODS_TAG_SIZE, ODS_TAG_SIZES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-tag';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Tag',
  component: 'ods-tag',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
<ods-tag class="my-tag-demo"
         color="${arg.color}"
         icon="${arg.icon}"
         is-disabled="${arg.isDisabled}"
         label="${arg.label}"
         size="${arg.size}">
</ods-tag>
<style>
  .my-tag-demo::part(tag) {
    ${arg.customCss}
  }
</style>
  `,
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_TAG_COLOR.information },
        type: { summary: ODS_TAG_COLORS },
      },
      control: { type: 'select' },
      options: ODS_TAG_COLORS,
    },
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "background-color: #008000;"',
    },
    icon: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'string' },
      },
      control: { type: 'select' },
      options: ODS_ICON_NAMES,
      description: 'See the whole list [here](/?path=/docs/ods-components-icon--documentation#name)'
    },
    isDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    label: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'My tag' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'The tag label',
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_TAG_SIZE.md },
        type: { summary: ODS_TAG_SIZES },
      },
      control: { type: 'select' },
      options: ODS_TAG_SIZES,
    },
  }),
  args: {
    color: ODS_TAG_COLOR.information,
    isDisabled: false,
    label: 'My tag',
    size: ODS_TAG_SIZE.md,
  },
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-tag label="Tag"></ods-tag>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-tag label="My tag"></ods-tag>
  `,
};

export const Color: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-tag color="${ODS_TAG_COLOR.critical}" label="Critical"></ods-tag>
<ods-tag color="${ODS_TAG_COLOR.information}" label="Information"></ods-tag>
<ods-tag color="${ODS_TAG_COLOR.neutral}" label="Neutral"></ods-tag>
<ods-tag color="${ODS_TAG_COLOR.success}" label="Success"></ods-tag>
<ods-tag color="${ODS_TAG_COLOR.warning}" label="Warning"></ods-tag>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-tag class="my-tag" label="My tag"></ods-tag>
<style>
  .my-tag::part(tag) {
    background-color: #ff00ff;
  }
</style>
  `,
};

export const IsDisabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-tag is-disabled label="Disabled tag"></ods-tag>
  `,
};

export const Size: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-tag label="MD tag" size="${ODS_TAG_SIZE.md}"></ods-tag>
<ods-tag label="LG tag" size="${ODS_TAG_SIZE.lg}"></ods-tag>
  `,
};
