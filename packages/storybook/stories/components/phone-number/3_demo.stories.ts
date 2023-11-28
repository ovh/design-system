import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-phone-number';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { ODS_COUNTRY_ISO_CODES, ODS_LOCALE } from '@ovhcloud/ods-common-core';

defineCustomElement();

/* Default story parameters  */
const storyParams = {
  value: {
    category: 'Misc',
    control: { type: 'text' },
  },
  clearable: {
    category: 'Misc',
    defaultValue: false,
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  error: {
    category: 'Misc',
    defaultValue: false,
  },
  isoCode: {
    category: 'Général',
    control: {
      type: 'select',
      options: ODS_COUNTRY_ISO_CODES,
    },
    defaultValue: 'fr',
  },
};

const countriesParams = {
  countries: {
    category: 'Général',
    defaultValue: 'all',
  },
  locale: {
    category: 'Général',
    control: {
      type: 'select',
      options: ODS_LOCALE,
    },
    defaultValue: 'fr',
  },
};

export default {
  title: 'ODS Components/Form/Phone Number [molecule]/Demo',
  id: 'phone-number',
  argTypes: extractArgTypes({ ...storyParams })
};

/* Default */
const OsdsPhoneNumberDefault = (args: Record<string, unknown>) => html`
  <osds-phone-number ...=${getTagAttributes(args)} @keydown=${(e: KeyboardEvent) => e.stopPropagation()}>
  </osds-phone-number>
`;
export const Default = OsdsPhoneNumberDefault.bind({});
// @ts-ignore
Default.args = {
  ...(extractStoryParams(storyParams)),
};

export const CountryIndicator = OsdsPhoneNumberDefault.bind({});
// @ts-ignore
CountryIndicator.args = {
  ...extractStoryParams({ ...countriesParams, ...storyParams }),
};
// @ts-ignore
CountryIndicator.argTypes = extractArgTypes(countriesParams);
