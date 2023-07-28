import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';

import { defineCustomElements } from '@ovhcloud/ods-stencil-search-bar/loader';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-search-bar/CHANGELOG.md';
import page from './search-bar.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  placeholder: {
    category: 'Général',
    defaultValue: ''
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false
  },
  disabled: {
    category: 'Misc',
    defaultValue: false
  },
  loading: {
    category: 'Misc',
    defaultValue: false
  },
};

const selectParams = {
  options: {
    category: 'Général',
    defaultValue: [
      { label: 'option1', value: '1' },
      { label: 'option2', value: '2' },
      { label: 'option3', value: '3' }
    ]
  },
}

export default {
  title: 'UI Components/Search Bar [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-search-bar/modules/index.html'),
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes({ ...storyParams, ...selectParams })
};


const TemplateDefault = (args:any) => {
  return html`
    <osds-search-bar ...=${getTagAttributes(args)} @keydown=${(e: KeyboardEvent) => e.stopPropagation()}>
      SearchBar
    </osds-search-bar>
  `;
}
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};


const SelectTemplate = (args:any) => {
  return html`
    <osds-search-bar ...=${getTagAttributes(args)} @keydown=${(e: KeyboardEvent) => e.stopPropagation()}>
      SearchBar
    </osds-search-bar>
  `;
}
export const Select = SelectTemplate.bind({});
Select.args = {
  ...extractStoryParams({ ...storyParams, ...selectParams }),
};
