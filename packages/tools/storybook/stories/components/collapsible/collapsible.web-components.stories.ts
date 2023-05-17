import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';

import { defineCustomElements } from '@ovhcloud/ods-stencil-collapsible/loader';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-collapsible/CHANGELOG.md';
import page from './collapsible.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  opened: {
    category: 'Général',
    defaultValue: false,
  },
};

export default {
  title: 'UI Components/Collapsible [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-collapsible/modules/index.html'),
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`
    <osds-collapsible ...=${getTagAttributes(args)}>
      Collapsible
    </osds-collapsible>
  `;
}
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
