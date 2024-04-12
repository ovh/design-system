import type { Meta, StoryObj } from '@storybook/web-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-badge';
import { ODS_ICON_NAMES, ODS_BADGE_COLOR, ODS_BADGE_COLORS, ODS_BADGE_SHAPE, ODS_BADGE_SHAPES, ODS_BADGE_SIZE, ODS_BADGE_SIZES } from '@ovhcloud/ods-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Content/Badge',
  component: 'ods-badge',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
<ods-badge class="my-badge-demo"
           color="${arg.color}"
           icon="${arg.icon}"
           label="${arg.label}"
           shape="${arg.shape}"
           size="${arg.size}">
</ods-badge>
<style>
  .my-badge-demo::part(badge) {
    ${arg.customCss}
  }
</style>
  `,
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_BADGE_COLOR.information },
        type: { summary: ODS_BADGE_COLORS }
      },
      control: { type: 'select' },
      options: ODS_BADGE_COLORS,
    },
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "background-color: #008000;"',
    },
    icon: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'string' }
      },
      control: { type: 'select' },
      options: ODS_ICON_NAMES,
      description: 'See the whole list [here](/?path=/docs/ods-components-content-icon--documentation#name)',
    },
    label: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'My badge' },
        type: { summary: 'string' }
      },
      control: 'text',
      description: 'The badge label',
    },
    shape: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_BADGE_SHAPE.round },
        type: { summary: ODS_BADGE_SHAPES }
      },
      control: { type: 'select' },
      options: ODS_BADGE_SHAPES,
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_BADGE_SIZE.md },
        type: { summary: ODS_BADGE_SIZES }
      },
      control: { type: 'select' },
      options: ODS_BADGE_SIZES,
    },
  }),
  args: {
    color: ODS_BADGE_COLOR.information,
    label: 'My badge',
    shape: ODS_BADGE_SHAPE.round,
    size: ODS_BADGE_SIZE.md,
  },
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-badge label="My badge"></ods-badge>
  `,
};

export const Color: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-badge color="${ODS_BADGE_COLOR.information}" label="Information"></ods-badge>
<ods-badge color="${ODS_BADGE_COLOR.success}" label="Success"></ods-badge>
<ods-badge color="${ODS_BADGE_COLOR.warning}" label="Warning"></ods-badge>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-badge class="my-badge" label="My badge"></ods-badge>
<style>
  .my-badge::part(badge) {
    background-color: #ff00ff;
  }
</style>
  `,
};

export const Shape: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-badge label="Round badge" shape="${ODS_BADGE_SHAPE.round}"></ods-badge>
<ods-badge label="Square badge" shape="${ODS_BADGE_SHAPE.square}"></ods-badge>
  `,
};

export const Size: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-badge label="SM badge" size="${ODS_BADGE_SIZE.sm}"></ods-badge>
<ods-badge label="MD badge" size="${ODS_BADGE_SIZE.md}"></ods-badge>
<ods-badge label="LG badge" size="${ODS_BADGE_SIZE.lg}"></ods-badge>
  `,
};
