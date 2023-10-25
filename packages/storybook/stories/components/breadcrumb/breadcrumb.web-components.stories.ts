import changelog from '@ovhcloud/ods-components/breadcrumb/CHANGELOG.md';
import { defineCustomElements } from '@ovhcloud/ods-components/breadcrumb/loader';
import { html } from 'lit-html';

import page from './breadcrumb.web-component.stories.page.mdx';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
// @ts-ignore
// @ts-ignore

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  items: {
    category: 'General',
    defaultValue: [
      { href: '#home', label: 'Home' },
      { href: '#services', label: 'Services' },
      { href: '#products', label: 'Products' },
      { href: '#web', label: 'Web' },
    ],
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'UI Components/Breadcrumb [molecule]/Web Component',
  id: 'breadcrumb',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page },
  },
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`
    <osds-breadcrumb ...=${getTagAttributes(args)}></osds-breadcrumb>
  `;
};
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};
