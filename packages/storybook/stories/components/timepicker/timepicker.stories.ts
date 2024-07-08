import type { Meta, StoryObj } from '@storybook/web-components';
import { ODS_TIMEZONE, ODS_TIMEZONES, ODS_TIMEZONES_PRESET, ODS_TIMEZONES_PRESETS } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-timepicker';
import { html } from 'lit-html';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();

const meta: Meta = {
  component: 'ods-timepicker',
  title: 'ODS Components/Form/Time picker',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
  <ods-timepicker class="my-timepicker-demo"
    ariaLabel="${arg.ariaLabel}"
    ariaLabelledby="${arg.ariaLabelledby}"
    has-error="${arg.hasError}"
    is-disabled="${arg.isDisabled}"
    is-readonly="${arg.isReadonly}"
    is-required="${arg.isRequired}"
    with-seconds="${arg.withSeconds}">
  </ods-timepicker>
  <style>
    .my-timepicker-demo::part(input) {
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
      description: 'Set a custom style properties. Example: "width: 300px;"',
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
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
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
    withSeconds: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
  }),
  args: {
    hasError: false,
    isDisabled: false,
    isReadonly: false,
    isRequired: false,
    withSeconds: false,
  },
};

export const DemoTimeZones: StoryObj = {
  render: (arg) => html`
  <ods-timepicker class="my-timepicker-demo-timezones"
    ariaLabel="${arg.ariaLabel}"
    ariaLabelledby="${arg.ariaLabelledby}"
    current-timezone="${arg.currentTimezone}"
    has-error="${arg.hasError}"
    is-disabled="${arg.isDisabled}"
    is-readonly="${arg.isReadonly}"
    is-required="${arg.isRequired}"
    timezones="${arg.timezones}"
    with-seconds="${arg.withSeconds}">
  </ods-timepicker>
  <style>
    .my-timepicker-demo-timezones::part(input) {
      ${arg.customCssInput}
    }
    .my-timepicker-demo-timezones::part(select) {
      ${arg.customCssSelect}
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
    currentTimezone: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: ODS_TIMEZONE.UTC },
        type: { summary: ODS_TIMEZONES },
      },
      control: { type: 'select' },
      options: ODS_TIMEZONES,
    },
    customCssInput: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "width: 300px;"',
    },
    customCssSelect: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "width: 300px;"',
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
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
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
    timezones: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: ODS_TIMEZONES_PRESET.All },
        type: { summary: [...ODS_TIMEZONES, ...ODS_TIMEZONES_PRESETS] },
      },
      control: { type: 'select' },
      options: [...ODS_TIMEZONES, ...ODS_TIMEZONES_PRESETS],
    },
    withSeconds: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
  }),
  args: {
    hasError: false,
    isDisabled: false,
    isReadonly: false,
    isRequired: false,
    timezones: 'all',
    withSeconds: false,
  },
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
  <ods-timepicker timezones="all" class="my-timepicker-custom-css"></ods-timepicker>
  <style>
    .my-timepicker-custom-css::part(input) {
      width: 300px;
    }

    .my-timepicker-custom-css::part(select) {
      width: 300px;
    }
  </style>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-timepicker></ods-timepicker>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-timepicker is-disabled></ods-timepicker>
  `,
};

export const Error: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-timepicker has-error></ods-timepicker>
  `,
};

export const Readonly: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-timepicker is-readonly></ods-timepicker>
  `,
};

export const Timezones: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-timepicker timezones="all"></ods-timepicker>
  `,
};

export const WithSeconds: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-timepicker with-seconds></ods-timepicker>
  `,
};
