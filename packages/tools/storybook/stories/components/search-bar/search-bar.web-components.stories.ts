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

};

export default {
  title: 'UI Components/SearchBar [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-search-bar/modules/index.html'),
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`
    <osds-search-bar ...=${getTagAttributes(args)}>
      SearchBar
    </osds-search-bar>
  `;
}
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
