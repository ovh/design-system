import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-accordion';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Accordion',
  component: 'ods-accordion',
};

export default meta;

export const Demo: StoryObj = {
  render: (args) => html`
<ods-accordion is-open="${args.isOpen}" is-disabled="${args.isDisabled}">
  ${unsafeHTML(args.summary)}
  ${unsafeHTML(args.content)}
</ods-accordion>

<style>
  ${unsafeHTML(args.customCss)}
</style>
  `,
  argTypes: orderControls({
    isDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: false,
        type: { summary: 'boolean' }
      },
      control: 'boolean',
    },
    isOpen: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: false,
        type: { summary: 'boolean' }
      },
      control: 'boolean',
    },
    summary: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
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
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "ods-accordion::part(accordion) { border: 1px red solid; }"',
    },
  }),
  args: {
    isDisabled: false,
    isOpen: false,
    summary: '<ods-text slot="summary" preset="span">Hello, world!</ods-text>',
    content: '<ods-text preset="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</ods-text>',
    customCss: '',
  },
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-accordion>
  <ods-text slot="summary" preset="span">Hello, world!</ods-text>

  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
  </ods-text>
</ods-accordion>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-accordion></ods-accordion>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-accordion class="my-accordion">
  <ods-text slot="summary" preset="span">Hello, world!</ods-text>

  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
  </ods-text>
</ods-accordion>

<style>
  .my-accordion::part(accordion) {
    border: 3px red solid;
  }

  .my-accordion::part(summary) {
    border: 3px green solid;
  }

  .my-accordion::part(content) {
    border: 3px blue solid;
  }
</style>
  `,
};

export const Open: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-accordion is-open>
  <ods-text slot="summary" preset="span">Hello, world!</ods-text>

  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
  </ods-text>
</ods-accordion>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-accordion is-disabled>
  <ods-text slot="summary" preset="span">Hello, world!</ods-text>

  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
  </ods-text>
</ods-accordion>
  `,
};
