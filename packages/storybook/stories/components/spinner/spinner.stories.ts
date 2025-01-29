import { ODS_SPINNER_COLOR, ODS_SPINNER_COLORS, ODS_SPINNER_SIZE, ODS_SPINNER_SIZES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-spinner';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Spinner',
  component: 'ods-spinner',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
<ods-spinner class="my-spinner-demo"
             color="${arg.color}"
             size="${arg.size}">
</ods-spinner>
<style>
  .my-spinner-demo::part(spinner) {
    ${arg.customCss}
  }
</style>
  `,
  argTypes: orderControls ({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_SPINNER_COLOR.primary },
        type: { summary: `Type string: ${ODS_SPINNER_COLORS}` }
      },
      // todo when options are defined, type select should be automatically inferred but not working?
      control: { type: 'select' },
      options: ODS_SPINNER_COLORS,
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_SPINNER_SIZE.md },
        type: { summary: `Type string from: ${ODS_SPINNER_SIZES}` }
      },
      control: { type: 'select' },
      options: ODS_SPINNER_SIZES,
    },
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "height: 100px; color: #008000;"',
    }
  }),
  args: {
    color: ODS_SPINNER_COLOR.primary,
    size: ODS_SPINNER_SIZE.md,
  },
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-spinner></ods-spinner>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-spinner></ods-spinner>
  `,
};

export const Color: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-spinner color="neutral"></ods-spinner>
<ods-spinner color="primary"></ods-spinner>
<ods-spinner style="background-color: #262626;" color="white"></ods-spinner>
  `,
};

export const Size: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-spinner size="xs"></ods-spinner>
<ods-spinner size="sm"></ods-spinner>
<ods-spinner size="md"></ods-spinner>
<ods-spinner size="lg"></ods-spinner>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-spinner class="my-spinner"></ods-spinner>
<style>
  .my-spinner::part(spinner) {
    height: 100px;
  }
</style>
  `,
};
