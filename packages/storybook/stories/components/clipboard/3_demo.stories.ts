import { defineCustomElements } from '@ovhcloud/ods-components/clipboard/loader';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

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
  title: 'ODS Components/User feedback/Clipboard [atom]/Demo',
  argTypes: extractArgTypes(storyParams)
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
