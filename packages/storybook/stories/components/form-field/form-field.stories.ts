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
    ${unsafeHTML(arg.mainSlot)}
    ${unsafeHTML(arg.helper)}
  </ods-form-field>
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
    visualHint: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
      description: 'Set a visual hint on the top-right corner of the field.',
    },
    mainSlot: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
      description: 'Set the main field.',
    },
    helper: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
      description: 'Set a helper text under the field.',
    },
  }),
  args: {
    error: '',
    label: `<ods-text slot="label" preset='label'>Description</ods-text>`,
    visualHint: `<ods-text slot="visual-hint" preset='caption'>02/11/1999</ods-text>`,
    mainSlot: `<ods-input type="text" value="Hello, ODS!" clearable></ods-input>`,
    helper: `<ods-text slot="helper" preset='span'>A little helper text</ods-text>`,
  },
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" preset='label'>
    Description
  </ods-text>

  <ods-text slot="visual-hint" preset='caption'>
    02/11/1999
  </ods-text>

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

  <ods-text slot="visual-hint" preset='caption'>
    02/11/1999
  </ods-text>

  <ods-input type="text" value="Hello, ODS!" clearable></ods-input>

  <ods-text slot="helper" preset='span'>
    A little helper text
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

  <ods-text slot="visual-hint" preset='caption'>
    02/11/1999
  </ods-text>

  <ods-input type="text" class="my-input" value="Hello, ODS!" clearable></ods-input>
</ods-form-field>

<style>
  .my-label {
    transform: skew(50deg, -10deg);
  }
  .my-label::part(text) {
    background: yellow;
    color: red;
  }
  .my-input::part(input) {
    width: 500px;
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

  <ods-text slot="visual-hint" preset='caption'>
    02/11/1999
  </ods-text>

  <ods-input type="text" value="Hello, ODS!" clearable></ods-input>
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

  <ods-text slot="visual-hint" preset='caption'>
    02/11/1999
  </ods-text>

  <ods-text slot="helper" preset='span'>
    A little helper text
  </ods-text>

  <ods-input type="text" value="Hello, ODS!" clearable></ods-input>
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

  <ods-text slot="visual-hint" id="tooltip-trigger" preset='caption'>
    (???)
  </ods-text>

  <ods-tooltip trigger-id="tooltip-trigger">
    02/11/1999
  </ods-tooltip>

  <ods-input type="text" value="Hello, ODS!" clearable></ods-input>
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