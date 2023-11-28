import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-clipboard';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Default story parameters  */
const storyParams = {
  value: {
    category: 'General',
    defaultValue: '',
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  inline: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'ODS Components/User feedback/Clipboard [atom]/Demo',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDemo = (args:any) => {
  return html`
    <osds-clipboard ...=${getTagAttributes(args)} @keydown=${(e: KeyboardEvent) => e.stopPropagation()}>
      Clipboard
      <span slot='success-message'>Success</span>
      <span slot='error-message'>Error</span>
    </osds-clipboard>
  `;
};
export const Demo = TemplateDemo.bind({});
// @ts-ignore
Demo.args = {
  ...extractStoryParams(storyParams),
};
