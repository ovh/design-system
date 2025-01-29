import { ODS_PHONE_NUMBER_COUNTRY_ISO_CODES, ODS_PHONE_NUMBER_LOCALES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-phone-number';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit-html';
import { ValidityStateTemplate } from '../../../src/components/validityState/validityState';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Form elements/Phone Number',
  component: 'ods-phone-number',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => {
    return html`
    <ods-phone-number class="my-phone-number"
                      aria-label="${arg.ariaLabel}"
                      aria-labelledby="${arg.ariaLabelledby}"
                      countries="${arg.countries ? 'all' : null}"
                      has-error="${arg.hasError}"
                      is-clearable="${arg.isClearable}"
                      is-disabled="${arg.isDisabled}"
                      is-loading="${arg.isLoading}"
                      is-readonly="${arg.isReadonly}"
                      is-required="${arg.isRequired}"
                      iso-code="${arg.isoCode}"
                      locale="${arg.locale}"
                      pattern="${arg.pattern || nothing}">
    </ods-phone-number>
    ${arg.validityState ? ValidityStateTemplate('phone-number', '.my-phone-number') : ''}
    <style>
      .my-phone-number::part(input) {
        ${arg.customInputCss}
      }
      .my-phone-number::part(select) {
        ${arg.customSelectCss}
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
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
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
    countries: false,
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
<ods-phone-number is-clearable value="0123456789"></ods-phone-number>
<br /><br />
<ods-phone-number countries="all"
                  is-clearable
                  value="0123456789">
</ods-phone-number>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-phone-number class="my-phone-number"></ods-phone-number>
<style>
  .my-phone-number {
    width: 100%;
  }

  .my-phone-number::part(input) {
    background-color: #ceffce;
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
<ods-phone-number countries="all"></ods-phone-number>
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

export const ISOCode: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-phone-number countries="all"
                      iso-code="br">
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

export const Readonly: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-phone-number is-readonly>
    </ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      is-readonly>
    </ods-phone-number>
  `,
};

export const ValidityState: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-phone-number is-required id="phone-number-validity-state-demo">
</ods-phone-number>
${ValidityStateTemplate('phone-number', '#phone-number-validity-state-demo')}
  `,
};
