import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-toggle';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { ValidityStateTemplate } from '../../../src/components/validityState/validityState';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Form elements/Toggle',
  component: 'ods-toggle',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => {
    return html`
    <ods-toggle class="my-toggle-demo"
      has-error=${arg.hasError}
      is-disabled=${arg.isDisabled}
      is-required=${arg.isRequired}
      with-label=${arg.withLabel}>
    </ods-toggle>
    ${arg.validityState ? ValidityStateTemplate('toggle', '.my-toggle-demo') : ''}
    <style>
      .my-toggle-demo::part(slider) {
        ${arg.CustomCssSlider}
      }

      .my-toggle-demo::part(slider)::before {
        ${arg.CustomCssSlider}
      }

      .my-toggle-demo::part(label) {
        ${arg.CustomCssLabel}
      }

      .my-toggle-demo::part(slider checked) {
        ${arg.CustomCssSliderChecked}
      }

      .my-toggle-demo::part(slider checked)::before {
        ${arg.CustomCssSliderChecked}
      }

      .my-toggle-demo::part(label checked) {
        ${arg.CustomCssLabelChecked}
      }
    </style>
    `;
  },
  argTypes: orderControls({
    CustomCssLabel: {
      control: 'text',
      description: 'Set a custom style properties for the label. Example: "color: green;"',
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
    },
    CustomCssLabelChecked: {
      control: 'text',
      description: 'Set a custom style properties for the label when the input is checked. Example: "color: black;"',
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
    },
    CustomCssSlider: {
      control: 'text',
      description: 'Set a custom style properties for the slider. Example: "background-color: red;"',
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
    },
    CustomCssSliderChecked: {
      control: 'text',
      description: 'Set a custom style properties for the slider when the input is checked. Example: "background-color: blueviolet;"',
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
    },
    CustomCssSliderCircle: {
      control: 'text',
      description: 'Set a custom style properties for the circle of the slider. Example: "background-color: blue;"',
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
    },
    CustomCssSliderCircleChecked: {
      control: 'text',
      description: 'Set a custom style properties for the circle of the slider when the input is checked. Example: "background-color: black;"',
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
    },
    hasError: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'boolean' },
      },
    },
    isRequired: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
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
    withLabel: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'boolean' },
      },
    },
  }),
  args: {
    hasError: false,
    isDisabled: false,
    isRequired: false,
    validityState: false,
    withLabel: false,
  },
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-toggle class="my-toggle" with-label>
</ods-toggle>
<style>
  .my-toggle::part(slider) {
    background-color: red;
  }

  .my-toggle::part(slider)::before {
    background-color: blue;
  }

  .my-toggle::part(label) {
    color: green;
  }

  .my-toggle::part(slider checked) {
    background-color: blueviolet;
  }

  .my-toggle::part(slider checked)::before {
    background-color: black;
  }

  .my-toggle::part(label checked) {
    color: black;
  }
</style>
  `,
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-toggle with-label value="true"></ods-toggle>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-toggle></ods-toggle>
  `,
};

export const DisabledOn: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-toggle is-disabled value></ods-toggle>
  `,
};

export const DisabledOff: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-toggle is-disabled></ods-toggle>
  `,
};

export const Error: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-toggle has-error></ods-toggle>
  `,
};

export const WithLabel: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-toggle with-label></ods-toggle>
  `,
};

export const ValidityState: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-toggle is-required id="toggle-validity-state-demo">
</ods-toggle>
${ValidityStateTemplate('toggle', '#toggle-validity-state-demo')}
  `,
};
