import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';

import { defineCustomElements } from '@ovhcloud/ods-stencil-tooltip/loader';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-tooltip/CHANGELOG.md';
import page from './tooltip.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {

};

export default {
  title: 'UI Components/Tooltip [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-tooltip/modules/index.html'),
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`
    <osds-tooltip ...=${getTagAttributes(args)}>
      Tooltip
    </osds-tooltip>
  `;
}
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
