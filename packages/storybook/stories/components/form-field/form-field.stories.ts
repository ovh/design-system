import type { Meta, StoryObj } from '@storybook/web-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-form-field';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Form/Form Field',
  component: 'ods-form-field',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
  <ods-form-field error="${arg.error}">
    ${unsafeHTML(arg.label)}
    ${unsafeHTML(arg.visualHint)}
    ${unsafeHTML(arg.content)}
    ${unsafeHTML(arg.helper)}
  </ods-form-field>
  <style>
    ods-text[slot="label"],
    ods-text[slot="helper"],
    ods-text[slot="visual-hint"] {
      color: #4d5592;
    }
  </style>
    `,
  argTypes: orderControls({
    error: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
    label: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
      description: 'Set a label on the top-left corner of the field.',
    },
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
    },
    helper: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
      description: 'Set a helper text on the bottom-left corner of the field.',
    },
    visualHint: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
      description: 'Set a visual hint on the bottom-right corner of the field.',
    },
  }),
  args: {
    error: '',
    label: `<ods-text slot="label" preset='label'>Description</ods-text>`,
    visualHint: `<ods-text slot="visual-hint" preset='caption'>02/11/1999</ods-text>`,
    content: `<ods-input type="text" value="Hello, ODS!" clearable></ods-input>`,
    helper: `<ods-text slot="helper" preset='span'>A little helper text</ods-text>`,
  },
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <ods-input type="text" value="Hello, ODS!" clearable></ods-input>
</ods-form-field>`,
};

export const Error: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field error="Wrong format.">
  <ods-text slot="label" preset='label'>
    Description
  </ods-text>

  <ods-input type="text" value="Hello, ODS!" clearable></ods-input>

  <ods-text slot="helper" preset='span'>
    A little helper text
  </ods-text>

  <ods-text slot="visual-hint" preset='caption'>
    02/11/1999
  </ods-text>
</ods-form-field>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" class="my-label" preset='label'>
    Description
  </ods-text>

  <ods-input type="text" value="Hello, ODS!" clearable></ods-input>
</ods-form-field>

<style>
  .my-label {
    color: #b63f81;
  }
</style>
  `,
};

export const Label: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" preset='label'>
    Description
  </ods-text>

  <ods-input type="text" value="Hello, ODS!" clearable></ods-input>
</ods-form-field>
  `,
};

export const LabelVisualHint: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" preset='label'>
    Description
  </ods-text>

  <ods-input type="text" value="Hello, ODS!" clearable></ods-input>

  <ods-text slot="visual-hint" preset='caption'>
    02/11/1999
  </ods-text>
</ods-form-field>
  `,
};

export const LabelVisualHintHelper: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" preset='label'>
    Description
  </ods-text>

  <ods-input type="text" value="Hello, ODS!" clearable></ods-input>

  <ods-text slot="helper" preset='span'>
    A little helper text
  </ods-text>

  <ods-text slot="visual-hint" preset='caption'>
    02/11/1999
  </ods-text>
</ods-form-field>
  `,
};

export const Tooltip: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" preset='label'>
    Description
  </ods-text>

  <ods-input type="text" value="Hello, ODS!" clearable></ods-input>

  <ods-icon slot="visual-hint" id="tooltip-trigger" name="help-circle"></ods-icon>

  <ods-tooltip trigger-id="tooltip-trigger">
    02/11/1999
  </ods-tooltip>
</ods-form-field>
  `,
};

export const Textarea: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" preset='label'>
    Description
  </ods-text>

  <ods-text slot="visual-hint" preset='caption'>
    02/11/1999
  </ods-text>

  <ods-textarea value="Hello, ODS!" is-resizable="true"></ods-textarea>
</ods-form-field>
  `,
};