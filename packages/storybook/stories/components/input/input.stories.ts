import { ODS_INPUT_TYPE, ODS_INPUT_TYPES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-input';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { ifDefined } from 'lit/directives/if-defined.js';
import { html, nothing } from 'lit-html';
import { ValidityStateTemplate } from '../../../src/components/validityState/validityState';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Form elements/Input',
  component: 'ods-input',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => {
    return html`
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
      max="${arg.max || nothing}"
      maxlength="${arg.maxlength || nothing }"
      min="${arg.min || nothing }"
      minlength="${arg.minlength || nothing }"
      pattern="${arg.pattern || nothing }"
      placeholder="${arg.placeholder|| nothing }"
      step="${arg.step || nothing }"
      type="${arg.type || nothing }">
    </ods-input>
    ${arg.validityState ? ValidityStateTemplate('input', '.my-input') : ''}
    <style>
      .my-input::part(input) {
        ${arg.customCss}
      }
    </style>
  `;
  },
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
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
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
    validityState: {
      table: {
        category: CONTROL_CATEGORY.validation,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
      description: 'Toggle this to see the component validityState',
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
    validityState: false,
  },
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-input placeholder="Input"></ods-input>
  `,
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
<ods-input is-clearable value="value">
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

export const Search: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-input type="search" value="search type">
</ods-input>
  `,
};

export const StepAny: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-input type="number" step="any" value="9.99">
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
})();
</script>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-input class="my-input">
</ods-input>
<style>
  .my-input {
    width: 100%;
  }

  .my-input::part(input) {
    background-color: #ceffce;
  }
</style>
  `,
};

export const Datalist: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-input list="my-list">
  <datalist slot="list">
    <option value="Chocolate"></option>
    <option value="Coconut"></option>
    <option value="Mint"></option>
    <option value="Strawberry"></option>
    <option value="Vanilla"></option>
  </datalist>
</ods-input>
  `,
};

export const ValidityState: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-input is-required id="input-validity-state-demo">
</ods-input>
${ValidityStateTemplate('input', '#input-validity-state-demo')}
  `,
};
