import changelog from '@ovhcloud/ods-components/clipboard/CHANGELOG.md';
import { defineCustomElements } from '@ovhcloud/ods-components/clipboard/loader';
import { html } from 'lit-html';

import page from './clipboard.web-component.stories.page.mdx';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
// @ts-ignore
// @ts-ignore

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  disabled: {
    category: 'General',
    defaultValue: false,
  },
  inline: {
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
      changelog,
    },
    docs: { page },
  },
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`
    <osds-clipboard ...=${getTagAttributes(args)} @keydown=${(e: KeyboardEvent) => e.stopPropagation()}>
      Clipboard
      <span slot='success-message'>Success</span>
      <span slot='error-message'>Error</span>
    </osds-clipboard>
  `;
};
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};
