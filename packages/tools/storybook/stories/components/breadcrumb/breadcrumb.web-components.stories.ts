import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';

import { defineCustomElements } from '@ovhcloud/ods-stencil-breadcrumb/loader';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-breadcrumb/CHANGELOG.md';
import page from './breadcrumb.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  items: {
    category: 'General',
    defaultValue: [
      { href: "#home", label: "Home" },
      { href: "#services", label: "Services" },
      { href: "#products", label: "Products" },
      { href: "#web", label: "Web" },
    ],
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false
  },
};

export default {
  title: 'UI Components/Breadcrumb [molecule]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-breadcrumb/modules/index.html'),
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`
    <osds-breadcrumb ...=${getTagAttributes(args)}></osds-breadcrumb>
  `;
}
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
