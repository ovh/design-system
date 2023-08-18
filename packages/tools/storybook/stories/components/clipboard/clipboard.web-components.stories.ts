import { html } from 'lit-html';
import { defineCustomElements } from '@ovhcloud/ods-component-clipboard/loader';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
// @ts-ignore
import changelog from '@ovhcloud/ods-component-clipboard/CHANGELOG.md';
// @ts-ignore
import page from './clipboard.web-component.stories.page.mdx';

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
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`
    <osds-clipboard ...=${getTagAttributes(args)} @keydown=${(e: KeyboardEvent) => e.stopPropagation()}>
      Clipboard
    </osds-clipboard>
  `;
}
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};
