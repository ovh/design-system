import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { defineCustomElements } from '@ovhcloud/ods-component-breadcrumb/loader';
// @ts-ignore
import changelog from '@ovhcloud/ods-component-breadcrumb/CHANGELOG.md';
// @ts-ignore
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
  id: 'breadcrumb',
  parameters: {
    notes: {
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
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};
