import type { Meta, StoryObj } from '@storybook/web-components';
import { ODS_TIMEZONES, ODS_TIMEZONES_PRESETS } from '@ovhcloud/ods-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY, orderControls } from '../../control';

const meta: Meta = {
  component: 'ods-timepicker',
  title: 'ODS Components/Form elements/Timepicker',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
  <ods-timepicker class="my-timepicker-demo"
    aria-label="${arg.ariaLabel}"
    aria-labelledby="${arg.ariaLabelledby}"
    has-error="${arg.hasError}"
    is-disabled="${arg.isDisabled}"
    is-readonly="${arg.isReadonly}"
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
    withSeconds: false,
  },
};

export const TimeZones: StoryObj = {
  render: (arg) => html`
  <ods-timepicker class="my-timepicker-demo-timezones"
    aria-label="${arg.ariaLabel}"
    aria-labelledby="${arg.ariaLabelledby}"
    current-timezone="${arg.currentTimezone}"
    has-error="${arg.hasError}"
    is-disabled="${arg.isDisabled}"
    is-readonly="${arg.isReadonly}"
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
        defaultValue: { summary: 'ø' },
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
    timezones: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
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
    timezones: 'all',
    withSeconds: false,
  },
};

export const CustomCSS: StoryObj = {
  decorators: [(story) => html`<div style="padding-bottom: 200px; display: inline-flex; align-items: center;">${story()}</div>`],
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

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-timepicker value="12:00" timezones="all" current-timezone="UTC+2"></ods-timepicker>
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
  decorators: [(story) => html`<div style="padding-bottom: 200px; display: inline-flex; align-items: center;">${story()}</div>`],
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
