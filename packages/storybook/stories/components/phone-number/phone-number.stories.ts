import type { Meta, StoryObj } from '@storybook/web-components';
import { ODS_PHONE_NUMBER_COUNTRY_ISO_CODES, ODS_PHONE_NUMBER_LOCALES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-phone-number';
import { html } from 'lit-html';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Form/Phone Number',
  component: 'ods-phone-number',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
    <ods-phone-number class="my-phone-number"
                      ariaLabel="${arg.ariaLabel}"
                      ariaLabelledby="${arg.ariaLabelledby}"
                      countries="${arg.countries ? 'all' : null}"
                      has-error="${arg.hasError}"
                      is-clearable="${arg.isClearable}"
                      is-disabled="${arg.isDisabled}"
                      is-loading="${arg.isLoading}"
                      is-readonly="${arg.isReadonly}"
                      is-required="${arg.isRequired}"
                      iso-code="${arg.isoCode}"
                      locale="${arg.locale}"
                      pattern="${arg.pattern}">
    </ods-phone-number>
    <style>
      .my-phone-number::part(input) {
        ${arg.customInputCss}
      }
      .my-phone-number::part(select) {
        ${arg.customSelectCss}
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
    countries: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'boolean',
      description: 'Toggle this to demo the "all" preset. To fine-tune the list of countries, check the prop documentation.',
    },
    customInputCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
      description: 'Set a custom style properties to apply to the input. Example: "width: 100px;"',
    },
    customSelectCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
      description: 'Set a custom style properties to apply to the select. Example: "width: 100px;"',
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
    isoCode: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: ODS_PHONE_NUMBER_COUNTRY_ISO_CODES },
      },
      control: { type: 'select' },
      options: ODS_PHONE_NUMBER_COUNTRY_ISO_CODES,
    },
    locale: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: ODS_PHONE_NUMBER_LOCALES },
      },
      control: { type: 'select' },
      options: ODS_PHONE_NUMBER_LOCALES,
    },
    pattern: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
  }),
  args: {
    countries: false,
    hasError: false,
    isClearable: false,
    isDisabled: false,
    isLoading: false,
    isReadonly: false,
    isRequired: false,
  },
};

export const Clearable: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-phone-number is-clearable></ods-phone-number>
<br /><br />
<ods-phone-number countries="all"
                  is-clearable>
</ods-phone-number>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-phone-number class="my-phone-number"></ods-phone-number>
<style>
  .my-phone-number::part(input) {
    width: 100px;
  }
  .my-phone-number::part(select) {
    width: 100px;
  }
</style>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-phone-number></ods-phone-number>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-phone-number is-disabled></ods-phone-number>
<br /><br />
<ods-phone-number countries="all"
                  is-disabled>
</ods-phone-number>
  `,
};

export const Error: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-phone-number has-error></ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      has-error>
    </ods-phone-number>
  `,
};

export const Loading: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-phone-number is-loading></ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      is-loading>
    </ods-phone-number>
  `,
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-phone-number></ods-phone-number>
<br /><br />
<ods-phone-number countries="all">
</ods-phone-number>
  `,
};

export const Locale: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-phone-number countries="all"
                      locale="fr">
    </ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      locale="en">
    </ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      locale="de">
    </ods-phone-number>
  `,
};

export const Pattern: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-phone-number pattern="\\d*">
    </ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      pattern="\\d*">
    </ods-phone-number>
    <script>
      (() => {
        document.querySelectorAll('ods-phone-number').forEach((el) => {
            el.addEventListener('odsChange', function(event) {
              this.hasError = !event.detail.validity.valid;
            });
        });
      })();
    </script>
  `,
};
