import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-phone-number';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { ODS_COUNTRY_ISO_CODES, ODS_LOCALE } from '@ovhcloud/ods-common-core';
import { ODS_ICON_NAMES } from '@ovhcloud/ods-components';
import { CONTROL_CATEGORY, orderControls } from '../../controls';

defineCustomElement();

/* Default story parameters  */
const storyParams = orderControls({
  value: {
    category: CONTROL_CATEGORY.general,
    control: { type: 'text' },
  },
  clearable: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  disabled: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  error: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  isoCode: {
    category: CONTROL_CATEGORY.general,
    control: {
      type: 'select',
      options: ODS_COUNTRY_ISO_CODES,
    },
    defaultValue: 'fr',
  },
  placeholder: {
    category: CONTROL_CATEGORY.general,
    control: { type: 'text' },
  },
  defaultValue: {
    category: CONTROL_CATEGORY.general,
    control: { type: 'text' },
  },
  prefixValue: {
    category: CONTROL_CATEGORY.general,
    control: { type: 'text' },
  },
  icon: {
    category: CONTROL_CATEGORY.general,
    defaultValue: '',
    options: ODS_ICON_NAMES,
    control: { type: 'select' },
  },
  loading: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  name: {
    category: CONTROL_CATEGORY.general,
    defaultValue: 'myPhoneNumber',
  },
  readonly: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  required: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  forbiddenValues: {
    category: CONTROL_CATEGORY.general,
    defaultValue: [],
    control: { type: 'array' },
  },
});

const countriesParams = {
  countries: {
    category: CONTROL_CATEGORY.general,
    defaultValue: 'all',
  },
  locale: {
    category: CONTROL_CATEGORY.general,
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
  ...extractStoryParams(orderControls({ ...countriesParams, ...storyParams })),
};
// @ts-ignore
CountryIndicator.argTypes = extractArgTypes(countriesParams);
