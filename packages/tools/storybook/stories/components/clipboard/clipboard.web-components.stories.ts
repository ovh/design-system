import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';

import { defineCustomElements } from '@ovhcloud/ods-stencil-clipboard/loader';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-clipboard/CHANGELOG.md';
import page from './clipboard.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  flex: {
    category: 'General',
    defaultValue: false,
  },
  disabled: {
    category: 'General',
    defaultValue: false,
  },
  value: {
    category: 'General',
    defaultValue: '',
  },
};

export default {
  title: 'UI Components/Clipboard [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-clipboard/modules/index.html'),
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`
    <osds-clipboard ...=${getTagAttributes(args)}>
      Clipboard
    </osds-clipboard>
  `;
}
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
