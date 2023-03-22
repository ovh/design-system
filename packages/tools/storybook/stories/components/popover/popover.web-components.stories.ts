import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';

import { defineCustomElements } from '@ovhcloud/ods-stencil-popover/loader';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-popover/CHANGELOG.md';
import page from './popover.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {

};

export default {
  title: 'UI Components/Popover [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-popover/modules/index.html'),
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`
    <osds-popover ...=${getTagAttributes(args)}>
      Popover
    </osds-popover>
  `;
}
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
