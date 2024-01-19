import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-clipboard';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Default story parameters  */
const storyParams = {
  value: {
    category: 'General',
    defaultValue: '',
  },
  successMessage: {
    category: 'Slot',
    defaultValue: 'Success',
  },
  errorMessage: {
    category: 'Slot',
    defaultValue: 'Error',
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
      <span slot='success-message'>${unsafeHTML(args.successMessage)}</span>
      <span slot='error-message'>${unsafeHTML(args.successMessage)}</span>
    </osds-clipboard>
  `;
};
export const Demo = TemplateDemo.bind({});
// @ts-ignore
Demo.args = {
  ...extractStoryParams(storyParams),
};
