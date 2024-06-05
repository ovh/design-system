import type { Meta, StoryObj } from '@storybook/web-components';
import { ODS_INPUT_TYPE, ODS_INPUT_TYPES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-input';
import { ifDefined } from 'lit/directives/if-defined.js';
import { html } from 'lit-html';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Form/Input',
  component: 'ods-input',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
  <ods-input class="my-input"
      ariaLabel="${arg.ariaLabel}"
      ariaLabelledby="${arg.ariaLabelledby}"
      has-error="${arg.hasError}"
      is-clearable="${arg.isClearable}"
      is-disabled="${arg.isDisabled}"
      is-loading="${arg.isLoading}"
      is-masked="${ifDefined(arg.isMasked)}"
      is-readonly="${arg.isReadonly}"
      is-required="${arg.isRequired}"
      max="${arg.max}"
      maxlength="${arg.maxlength}"
      min="${arg.min}"
      minlength="${arg.minlength}"
      pattern="${arg.pattern}"
      placeholder="${arg.placeholder}"
      step="${arg.step}"
      type="${arg.type}">
      </ods-input>
<style>
  .my-input::part(input) {
    ${arg.customCss}
  }
</style>
  `,
  argTypes: orderControls({
    ariaLabel: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    ariaLabelledby: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "border-color: red;"',
    },
    hasError: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isClearable: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isLoading: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isMasked: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: undefined },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isReadonly: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isRequired: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    max: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
    maxlength: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
    min: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
    minlength: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
    pattern: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    step: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
    type: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: ODS_INPUT_TYPE.text },
        type: { summary: ODS_INPUT_TYPES },
      },
      control: { type: 'select' },
      options: ODS_INPUT_TYPES,
    },
  }),
  args: {
    hasError: false,
    isClearable: false,
    isDisabled: false,
    isLoading: false,
    isMasked: undefined,
    isReadonly: false,
    isRequired: false,
  },
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-input></ods-input>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-input is-disabled>
</ods-input>
  `,
};

export const Error: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-input has-error>
</ods-input>
  `,
};

export const Clearable: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-input is-clearable>
</ods-input>
  `,
};

export const Loading: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-input is-loading>
</ods-input>
  `,
};

export const Masked: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-input is-masked>
</ods-input>
  `,
};

export const Readonly: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-input is-readonly value="Readonly">
</ods-input>
  `,
};

export const Placeholder: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-input placeholder="Placeholder">
</ods-input>
  `,
};

export const Pattern: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-input id="my-input-pattern" pattern="\\d*">
</ods-input>
<script>
(() => {
  const inputPattern = document.getElementById('my-input-pattern');
  inputPattern.addEventListener('odsChange', (event) => {
    inputPattern.hasError = !event.detail.validity.valid;
  });
  </script>
})();
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-input class="my-input">
</ods-input>
<style>
  .my-input::part(input) {
    width: 100px;
  }
</style>
  `,
};
