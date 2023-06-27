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
      <span slot="popover-trigger">
            <osds-button variant='ghost' size='sm'><osds-icon name='home' size='xs'></osds-icon></osds-button>
          </span>
      <osds-popover-content>
        <span slot="popover-header">My popover title</span>
        <osds-text color='text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</osds-text>
        <span slot="popover-footer">
          <osds-button color='primary' variant='ghost'>Dismiss</osds-button>
          <osds-button color='primary'>Action</osds-button>
        </span>
      </osds-popover-content>
    </osds-popover>
  `;
}
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
