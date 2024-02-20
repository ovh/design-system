import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-search-bar';
import { html } from 'lit-html';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Default story parameters  */
const storyParams = {
  placeholder: {
    category: 'General',
    defaultValue: 'placeholder',
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  loading: {
    category: 'Misc',
    defaultValue: false,
  },
  pattern: {
    category: 'General',
    control: { type: 'text' },
  },
};

const selectParams = {
  options: {
    category: 'General',
    defaultValue: [
      { label: 'option1', value: '1' },
      { label: 'option2', value: '2' },
      { label: 'option3', value: '3' },
    ],
  },
};

export default {
  title: 'ODS Components/Navigation/Search Bar [atom]/Demo',
  argTypes: extractArgTypes({ ...storyParams, ...selectParams })
};


const TemplateDefault = (args:any) => {
  return html`
    <osds-search-bar ...=${getTagAttributes(args)} @keydown=${(e: KeyboardEvent) => e.stopPropagation()}>
      SearchBar
    </osds-search-bar>
  `;
};
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};


const SelectTemplate = (args:any) => {
  return html`
    <osds-search-bar ...=${getTagAttributes(args)} @keydown=${(e: KeyboardEvent) => e.stopPropagation()}>
      SearchBar
    </osds-search-bar>
  `;
};
export const WithCategory = SelectTemplate.bind({});
// @ts-ignore
WithCategory.args = {
  ...extractStoryParams({ ...storyParams, ...selectParams }),
};
