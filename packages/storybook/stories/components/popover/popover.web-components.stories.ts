import changelog from '@ovhcloud/ods-components/popover/CHANGELOG.md';
import { defineCustomElements } from '@ovhcloud/ods-components/popover/loader';
import { html } from 'lit-html';

import page from './popover.web-component.stories.page.mdx';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
// @ts-ignore
// @ts-ignore

defineCustomElements();

/* Default story parameters  */
const storyParams = {

};

export default {
  title: 'UI Components/Popover [atom]/Web Component',
  id: 'popover',
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
    <osds-popover ...=${getTagAttributes(args)}>
      <span slot="popover-trigger">
            <osds-button variant='ghost' size='sm'><osds-icon name='home' size='xs'></osds-icon></osds-button>
          </span>
      <osds-popover-content>
        <span slot="popover-header">My popover title</span>
        <osds-text color='text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</osds-text>
        <span slot="popover-footer">
          <osds-button color='primary' variant='ghost' inline>Dismiss</osds-button>
          <osds-button color='primary' inline>Action</osds-button>
        </span>
      </osds-popover-content>
    </osds-popover>
  `;
};
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};
