import { defineCustomElements } from '@ovhcloud/ods-components/breadcrumb/loader';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

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
  title: 'ODS Components/Navigation/Breadcrumb [molecule]/Demo',
  id: 'breadcrumb',
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
