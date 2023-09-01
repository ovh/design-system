import { html } from 'lit-html';
import { defineCustomElements } from '@ovhcloud/ods-component-phone-number/loader';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
// @ts-ignore
import changelog from '@ovhcloud/ods-component-phone-number/CHANGELOG.md';
// @ts-ignore
import page from './phone-number.web-component.stories.page.mdx';

defineCustomElements();

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
  }
};

const countriesParams = {
  countries: {
    category: 'Général',
    defaultValue: [
      'fr', 'pt', 'gb'
    ]
  },
}

<<<<<<<< HEAD:packages/storybook/stories/components/phone-number/phone-number.web-components.stories.ts
const allCountriesParams = {
  countries: {
    category: 'Général',
    defaultValue: 'all'
  },
}

========
>>>>>>>> 01c53f47 (feat(phone-number): add countries in component):packages-new/storybook/stories/components/phone-number/phone-number.web-components.stories.ts
export default {
  title: 'UI Components/Phone Number [molecule]/Web Component',
  id: 'phone-number',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page }
  },
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

<<<<<<<< HEAD:packages/storybook/stories/components/phone-number/phone-number.web-components.stories.ts
export const Countries = OsdsPhoneNumberDefault.bind({});
========
const OsdsPhoneNumberCountriesTemplate = (args: Record<string, unknown>) => {
  return html`
    <osds-phone-number ...=${getTagAttributes(args)} @keydown=${(e: KeyboardEvent) => e.stopPropagation()}>
    </osds-phone-number>
  `;
}
export const Countries = OsdsPhoneNumberCountriesTemplate.bind({});
>>>>>>>> 01c53f47 (feat(phone-number): add countries in component):packages-new/storybook/stories/components/phone-number/phone-number.web-components.stories.ts
// @ts-ignore
Countries.args = {
  ...extractStoryParams({ ...storyParams, ...countriesParams }),
};

<<<<<<<< HEAD:packages/storybook/stories/components/phone-number/phone-number.web-components.stories.ts

export const AllCountries = OsdsPhoneNumberDefault.bind({});
// @ts-ignore
AllCountries.args = {
  ...extractStoryParams({ ...storyParams, ...allCountriesParams }),
};

========
>>>>>>>> 01c53f47 (feat(phone-number): add countries in component):packages-new/storybook/stories/components/phone-number/phone-number.web-components.stories.ts
