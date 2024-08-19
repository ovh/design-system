import type { Meta, StoryObj } from '@storybook/web-components';
import { ODS_TEXT_PRESETS } from '@ovhcloud/ods-components';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { CONTROL_CATEGORY, orderControls } from '../../control';

const meta: Meta = {
  title: 'ODS Components/Text',
  component: 'ods-text',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
<ods-text class="my-text-demo"
          preset="${arg.preset}">
  ${unsafeHTML(arg.content)}
</ods-text>
<style>
  .my-text-demo::part(text) {
    ${arg.customCss}
  }
</style>
  `,
  argTypes: orderControls({
    preset: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: { type: 'select' },
      options: ODS_TEXT_PRESETS,
    },
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
    },
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "color: #008000;"',
    }
  }),
  args: {
    content: 'lorem ipsum'
  },
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-text class="overview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ods-text>
<style>
  .overview-text::part(text) {
    color: var(--ods-color-text);
  }
</style>
  `,
};
export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ods-text>
  `,
};

export const Preset: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-text preset="caption">Caption</ods-text><br>
<ods-text preset="code">Code</ods-text>
<ods-text preset="paragraph">Paragraph</ods-text>
<ods-text preset="span">Span</ods-text><br>
<ods-text preset="heading-1">Heading-1</ods-text>
<ods-text preset="heading-2">Heading-2</ods-text>
<ods-text preset="heading-3">Heading-3</ods-text>
<ods-text preset="heading-4">Heading-4</ods-text>
<ods-text preset="heading-5">Heading-5</ods-text>
<ods-text preset="heading-6">Heading-6</ods-text>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-text class="my-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ods-text>
<style>
  .my-text::part(text) {
    color: #008000;
  }
</style>
  `,
};
