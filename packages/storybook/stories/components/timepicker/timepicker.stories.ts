import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

const meta: Meta = {
  component: 'ods-timepicker',
  title: 'ODS Components/Form elements/Timepicker',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => {
    const validityStateTemplate = html`<br>
    <div id="validity-state" style="display: grid; row-gap: 5px;"></div>
    <script>
      (async () => {
          const divValidityState = document.querySelector('#validity-state');
          const timepicker = document.querySelector('.my-timepicker-demo');
          await customElements.whenDefined('ods-textarea');
          await renderValidityState();
          timepicker.addEventListener('odsChange', async () => {
            await renderValidityState();
          })
          async function renderValidityState() {
            const validity = await timepicker.getValidity();
            divValidityState.innerHTML = '';
            for (let key in validity) {
              divValidityState.innerHTML += "<div>" + key + ": " + validity[key] + "</div>";
            }
          }
      })();
    </script>`;
    return html`
  <ods-timepicker class="my-timepicker-demo"
                  aria-label="${arg.ariaLabel}"
                  aria-labelledby="${arg.ariaLabelledby}"
                  has-error="${arg.hasError}"
                  is-disabled="${arg.isDisabled}"
                  is-readonly="${arg.isReadonly}"
                  is-required="${arg.isRequired}"
                  timezones="${arg.timezones ? 'all' : null}"
                  with-seconds="${arg.withSeconds}">
  </ods-timepicker>
  ${ arg.validityState ? validityStateTemplate : '' }
  <style>
    .my-timepicker-demo::part(input) {
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
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    timezones: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: { type: 'boolean' },
      description: 'Toggle this to demo the "all" preset. To fine-tune the list of timezones, check the prop documentation.',
    },
    validityState: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
      description: 'Toggle this to see the component validityState',
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
    timezones: false,
    validityState: false,
    withSeconds: false,
  },
};

export const CustomCSS: StoryObj = {
  decorators: [(story) => html`<div style="height: 230px;">${story()}</div>`],
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
  decorators: [(story) => html`<div style="height: 230px;">${story()}</div>`],
  tags: ['isHidden'],
  render: () => html`
<ods-timepicker timezones="all"></ods-timepicker>
  `,
};

export const TimezonesCustom: StoryObj = {
  decorators: [(story) => html`<div style="height: 150px;">${story()}</div>`],
  tags: ['isHidden'],
  render: () => html`
<ods-timepicker timezones='["utc-4", "utc-2", "utc+2", "utc+4"]'></ods-timepicker>
  `,
};

export const WithSeconds: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-timepicker with-seconds></ods-timepicker>
  `,
};

export const ValidityState: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-timepicker is-required id="timepicker-validity-state-demo">
</ods-timepicker>
<div id="validity-state-demo"></div>
<script>
  (() => {
      const divValidityState = document.querySelector('#validity-state-demo');
      const timepicker = document.querySelector('#timepicker-validity-state-demo');
      timepicker.addEventListener('odsChange', async () => {
        setTimeout(async() => { await renderValidityState() }, 0)
      })
      async function renderValidityState() {
        const validity = await timepicker.getValidity()
        divValidityState.innerHTML = '';
        for (let key in validity) {
          divValidityState.innerHTML += "<div>" + key + ": " + validity[key] + "</div>";
        }
      }
  })();
</script>
`,
};
