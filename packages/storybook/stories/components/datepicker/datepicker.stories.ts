import { ODS_DATEPICKER_LOCALE, ODS_DATEPICKER_LOCALES, formatDate } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-datepicker';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit-html';
import { ValidityStateTemplate } from '../../../src/components/validityState/validityState';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Form elements/Datepicker',
  component: 'ods-datepicker',
  decorators: [(story) => html`<div style="height: 320px;">${story()}</div>`],
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => {
    return html`
    <ods-datepicker class="my-datepicker"
      aria-label="${arg.ariaLabel}"
      aria-labelledby="${arg.ariaLabelledby}"
      format="${arg.format || nothing}"
      has-error="${arg.hasError}"
      is-clearable="${arg.isClearable}"
      is-disabled="${arg.isDisabled}"
      is-loading="${arg.isLoading}"
      is-readonly="${arg.isReadonly}"
      is-required="${arg.isRequired}"
      locale="${arg.locale || nothing}"
      max="${arg.max ? formatDate(arg.max, arg.format || 'dd/mm/yyyy') : nothing}"
      min="${arg.min ? formatDate(arg.min, arg.format || 'dd/mm/yyyy') : nothing}"
      placeholder="${arg.placeholder}">
    </ods-datepicker>
    ${arg.validityState ? ValidityStateTemplate('datepicker', '.my-datepicker') : ''}
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
    format: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'dd/mm/yyyy' },
        type: { summary: 'string' },
      },
      control: 'text',
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
    locale: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: ODS_DATEPICKER_LOCALE.en },
        type: { summary: 'OdsDatepickerLocale' },
      },
      control: { type: 'select' },
      options: ODS_DATEPICKER_LOCALES,
    },
    max: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'Date' },
      },
      control: 'date',
    },
    min: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'Date' },
      },
      control: 'date',
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
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
    isReadonly: false,
    isRequired: false,
    validityState: false,
  },
};

export const Clearable: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-datepicker is-clearable>
</ods-datepicker>
  `,
};

export const DatesDisabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-datepicker id="datepicker-dates-disabled"></ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-dates-disabled');
    datepicker.datesDisabled = [new Date(Date.now() - 86400000)];
  })();
</script>
  `,
};

export const DaysOfWeekDisabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-datepicker id="datepicker-days-disabled"></ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-days-disabled');
    datepicker.daysOfWeekDisabled = [1, 2];
  })();
</script>
  `,
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-datepicker id="datepicker-overview"></ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-overview');
    datepicker.value = new Date();
  })();
</script>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-datepicker></ods-datepicker>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-datepicker is-disabled>
</ods-datepicker>
  `,
};

export const Error: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-datepicker has-error>
</ods-datepicker>
  `,
};

export const Format: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-datepicker id="datepicker-format"
                format="yyyy-mm-dd">
</ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-format');
    datepicker.value = new Date();
  })();
</script>
  `,
};

export const FixedContext: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button id="modal-button"
            label="Open Modal">
</ods-button>
<ods-modal id="modal-tooltip">
  <ods-datepicker strategy="fixed">
  </ods-datepicker>
</ods-modal>

<script>
  (() => {
    const modalButton = document.querySelector('#modal-button');
    const modalElement = document.querySelector('#modal-tooltip');

    modalButton.addEventListener('click', () => {
      modalElement.open();
    });
  })();
</script>
  `,
};

export const Loading: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-datepicker is-loading>
</ods-datepicker>
  `,
};

export const Locale: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-datepicker locale="de">
</ods-datepicker>
  `,
};

export const Placeholder: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-datepicker placeholder="Placeholder">
</ods-datepicker>
  `,
};

export const Readonly: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-datepicker id="datepicker-readonly"
                is-readonly>
</ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-readonly');
    datepicker.value = new Date();
  })();
</script>
  `,
};

export const ValidityState: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-datepicker is-required id="datepicker-validity-state-demo">
</ods-datepicker>
${ValidityStateTemplate('datepicker', '#datepicker-validity-state-demo')}
  `,
};
