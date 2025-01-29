import {
  ODS_MESSAGE_COLOR,
  ODS_MESSAGE_COLORS,
  ODS_MESSAGE_VARIANT,
  ODS_MESSAGE_VARIANTS,
} from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-message';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Message',
  component: 'ods-message',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
<ods-message class="my-message-demo"
         color="${arg.color}"
         is-dismissible="${arg.isDismissible}"
         variant="${arg.variant}">
  ${unsafeHTML(arg.content)}
</ods-message>
<style>
  .my-message-demo::part(message) {
    ${arg.customCss}
  }
</style>
  `,
  argTypes: orderControls({
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
    },
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_MESSAGE_COLOR.information },
        type: { summary: `Type string: ${ODS_MESSAGE_COLORS}` }
      },
      control: { type: 'select' },
      options: ODS_MESSAGE_COLORS,
    },
    isDismissible: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: true },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_MESSAGE_VARIANT.default },
        type: { summary: `Type string: ${ODS_MESSAGE_VARIANTS}` }
      },
      control: { type: 'select' },
      options: ODS_MESSAGE_VARIANTS,
    },
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "background-color: #ffff00;"',
    }
  }),
  args: {
    content: 'Some Message content',
    color: ODS_MESSAGE_COLOR.information,
    isDismissible: true,
    variant: ODS_MESSAGE_VARIANT.default,
  },
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-message>Message</ods-message>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-message>Default Message</ods-message>
  `,
};

export const Color: StoryObj = {
  tags: ['isHidden'],
  decorators: [(story) => html`<div style="display: flex; flex-direction: column; gap: 8px;">${story()}</div>`],
  render: () => html`
<ods-message color="critical">Critical Message</ods-message>
<ods-message color="danger">Danger Message</ods-message>
<ods-message color="information">Information Message</ods-message>
<ods-message color="success">Success Message</ods-message>
<ods-message color="warning">Warning Message</ods-message>
  `,
};

export const NotDismissible: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-message is-dismissible="false">Default Message</ods-message>
  `,
};

export const Variant: StoryObj = {
  tags: ['isHidden'],
  decorators: [(story) => html`<div style="display: flex; flex-direction: column; gap: 8px;">${story()}</div>`],
  render: () => html`
<ods-message variant="default">Default variant Message</ods-message>
<ods-message variant="light">Light variant Message</ods-message>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-message class="my-message">Custom CSS Message</ods-message>
<style>
  .my-message::part(message) {
    background-color: #ac246f;
  }
</style>
  `,
};

export const Multiline: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<div class="multiline">
  <ods-message >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus, libero et pharetra mattis, ipsum velit semper risus, non ultrices lacus massa sed arcu. Nulla sed tellus.
  </ods-message>
</div>
<style>
  .multiline {
    width: 400px;
  }
</style>
  `,
};
