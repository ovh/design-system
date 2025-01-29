import {
  ODS_BUTTON_COLOR,
  ODS_BUTTON_COLORS,
  ODS_BUTTON_ICON_ALIGNMENT,
  ODS_BUTTON_ICON_ALIGNMENTS,
  ODS_BUTTON_SIZE,
  ODS_BUTTON_SIZES,
  ODS_BUTTON_VARIANT,
  ODS_BUTTON_VARIANTS,
  ODS_ICON_NAME,
  ODS_ICON_NAMES,
} from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-button';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Button',
  component: 'ods-button',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
<ods-button class="my-button-demo"
            color="${arg.color}"
            icon="${arg.icon}"
            icon-alignment="${arg.iconAlignment}"
            is-disabled="${arg.isDisabled}"
            is-loading="${arg.isLoading}"
            label="${arg.label}"
            size="${arg.size}"
            variant="${arg.variant}">
</ods-button>
<style>
  .my-button-demo::part(button) {
    ${arg.customCss}
  }
</style>
  `,
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_BUTTON_COLOR.primary },
        type: { summary: ODS_BUTTON_COLORS },
      },
      control: { type: 'select' },
      options: ODS_BUTTON_COLORS,
    },
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "height: 100px; color: #008000;"',
    },
    icon: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'string' }
      },
      control: { type: 'select' },
      options: ODS_ICON_NAMES,
      description: 'See the whole list [here](/?path=/docs/ods-components-icon--documentation#name)'
    },
    iconAlignment: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: ODS_BUTTON_ICON_ALIGNMENT.left },
        type: { summary: ODS_BUTTON_ICON_ALIGNMENTS }
      },
      control: { type: 'select' },
      options: ODS_BUTTON_ICON_ALIGNMENTS
    },
    isDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' }
      },
      control: 'boolean',
    },
    isLoading: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' }
      },
      control: 'boolean',
    },
    label: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'My button' },
        type: { summary: 'string' }
      },
      control: 'text',
      description: 'The button label',
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_BUTTON_SIZE.md },
        type: { summary: ODS_BUTTON_SIZES }
      },
      control: { type: 'select' },
      options: ODS_BUTTON_SIZES,
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_BUTTON_VARIANT.default },
        type: { summary: ODS_BUTTON_VARIANTS }
      },
      control: { type: 'select' },
      options: ODS_BUTTON_VARIANTS,
    },
  }),
  args: {
    color: ODS_BUTTON_COLOR.primary,
    iconAlignment: ODS_BUTTON_ICON_ALIGNMENT.left,
    isDisabled: false,
    isLoading: false,
    label: 'My button',
    size: ODS_BUTTON_SIZE.md,
    variant: ODS_BUTTON_VARIANT.default,
  },
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-button label="Button"></ods-button>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button label="My button"></ods-button>
  `,
};

export const Color: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button color="${ODS_BUTTON_COLOR.primary}" label="Primary button"></ods-button>
<ods-button color="${ODS_BUTTON_COLOR.critical}" label="Critical button"></ods-button>
<ods-button color="${ODS_BUTTON_COLOR.neutral}" label="Neutral button"></ods-button>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button class="my-button" label="My button"></ods-button>
<style>
  .my-button::part(button) {
    width: 300px;
  }
</style>
  `,
};

export const IsDisabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button is-disabled label="Disabled button"></ods-button>
  `,
};

export const IsLoading: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button is-loading label="Loading button"></ods-button>
  `,
};

export const Size: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button label="MD button" size="${ODS_BUTTON_SIZE.md}"></ods-button>
<ods-button label="SM button" size="${ODS_BUTTON_SIZE.sm}"></ods-button>
<ods-button label="XS button" size="${ODS_BUTTON_SIZE.xs}"></ods-button>
  `,
};

export const Variant: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button label="Default button" variant="${ODS_BUTTON_VARIANT.default}"></ods-button>
<ods-button label="Outline button" variant="${ODS_BUTTON_VARIANT.outline}"></ods-button>
<ods-button label="Ghost button" variant="${ODS_BUTTON_VARIANT.ghost}"></ods-button>
  `,
};

export const WithLeftIcon: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-button label="Button" icon="${ODS_ICON_NAME.home}" icon-alignment="${ODS_BUTTON_ICON_ALIGNMENT.left}"></ods-button>
  `,
};

export const WithRightIcon: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-button label="Button" icon="${ODS_ICON_NAME.home}" icon-alignment="${ODS_BUTTON_ICON_ALIGNMENT.right}"></ods-button>
  `,
};

export const IconOnly: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button icon="${ODS_ICON_NAME.filter}"></ods-button>
  `,
};
