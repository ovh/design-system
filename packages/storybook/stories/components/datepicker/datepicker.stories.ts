import type { Meta, StoryObj } from '@storybook/web-components';
import { ODS_DATEPICKER_LOCALE, ODS_DATEPICKER_LOCALES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-datepicker';
import { html } from 'lit-html';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Form elements/Datepicker',
  component: 'ods-datepicker',
  decorators: [(story) => html`<div style="height: 320px;">${story()}</div>`],
};

export default meta;

export const Demo: StoryObj = {
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
    daysOfWeekDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: '[]' },
        type: { summary: 'OdsDatepickerDay[]' },
      },
      control: 'array',
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
  }),
  args: {
    hasError: false,
    isClearable: false,
    isDisabled: false,
    isLoading: false,
    isReadonly: false,
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
    datepicker.datesDisabled = [new Date()];
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
