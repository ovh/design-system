import { ODS_DIVIDER_COLOR, ODS_DIVIDER_COLORS, ODS_DIVIDER_SPACING, ODS_DIVIDER_SPACINGS } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-divider';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Divider',
  component: 'ods-divider',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
<ods-divider class="my-divider-demo"
             color="${arg.color}"
             spacing="${arg.spacing}">
</ods-divider>
<style>
  .my-divider-demo::part(divider) {
    ${arg.customCss}
  }
</style>
  `,
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_DIVIDER_COLOR.light },
        type: { summary: `Type string: ${ODS_DIVIDER_COLORS}` }
      },
      // todo when options are defined, type select should be automatically inferred but not working?
      control: { type: 'select' },
      options: ODS_DIVIDER_COLORS,
    },
    spacing: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_DIVIDER_SPACING._2 },
        type: { summary: `Type string from: ${ODS_DIVIDER_SPACINGS}` }
      },
      control: { type: 'select' },
      options: ODS_DIVIDER_SPACINGS,
    },
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "height: 100px; background-color: #008000;"',
    }
  }),
  args: {
    color: ODS_DIVIDER_COLOR.light,
    spacing: ODS_DIVIDER_SPACING._2,
  },
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <ods-divider></ods-divider>
    Interdum et malesuada fames ac ante ipsum primis in faucibus.
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-divider></ods-divider>
  `,
};

export const Color: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-divider color="light" spacing="16"></ods-divider>
<ods-divider color="dark" spacing="16"></ods-divider>
  `,
};
export const Spacing: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-divider spacing="0"></ods-divider>
<ods-divider spacing="2"></ods-divider>
<ods-divider spacing="4"></ods-divider>
<ods-divider spacing="8"></ods-divider>
<ods-divider spacing="12"></ods-divider>
<ods-divider spacing="16"></ods-divider>
<ods-divider spacing="24"></ods-divider>
<ods-divider spacing="32"></ods-divider>
<ods-divider spacing="40"></ods-divider>
<ods-divider spacing="48"></ods-divider>
<ods-divider spacing="64"></ods-divider>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-divider class="my-divider"></ods-divider>
<style>
  .my-divider::part(divider) {
    background-color: red;
  }
</style>
  `,
};
