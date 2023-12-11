import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-phone-number';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

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
  locale: {
    category: 'Général',
    control: { type: 'text' },
    defaultValue: 'fr',
  },
  isoCode: {
    category: 'Général',
    control: { type: 'text' },
    defaultValue: 'fr',
  },
};

const countriesParams = {
  countries: {
    category: 'Général',
    defaultValue: [
      'fr', 'pt', 'gb',
    ],
  },
};

const allCountriesParams = {
  countries: {
    category: 'Général',
    defaultValue: 'all',
  },
};

export default {
  title: 'ODS Components/Form/Phone Number [molecule]/Demo',
  id: 'phone-number',
  argTypes: extractArgTypes({...storyParams, ...countriesParams })
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

export const Countries = OsdsPhoneNumberDefault.bind({});
// @ts-ignore
Countries.args = {
  ...extractStoryParams({ ...storyParams, ...countriesParams }),
};

export const AllCountries = OsdsPhoneNumberDefault.bind({});
// @ts-ignore
AllCountries.args = {
  ...extractStoryParams({ ...storyParams, ...allCountriesParams }),
};
