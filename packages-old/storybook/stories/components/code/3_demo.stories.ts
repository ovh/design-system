import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-code';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Default story parameters  */
const storyParams = {
  codeContent: {
    category: 'Slot',
    defaultValue: '$ mongo',
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
  copy: {
    category: 'Slot',
    defaultValue: `<osds-button color="default" contrasted size="sm" variant="ghost"><osds-icon name="copy" size="xs" contrasted></osds-icon></osds-button>`,
  },
};

export default {
  title: 'ODS Components/Content/Code [atom]/Demo',
  id: 'code',
  argTypes: extractArgTypes(storyParams),
};

/* Story options */

/* Default */
const TemplateDefault = (args: any) => html`
  <osds-code ...=${getTagAttributes(args)}>${unsafeHTML(args.codeContent)}</osds-code>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

const TemplateCopyingCode = (args: any) => html`
<osds-code ...=${getTagAttributes(args)}><span slot="copy">${unsafeHTML(args.copy)}</span>${unsafeHTML(args.codeContent)}</osds-code>
`;
export const CopyingCode = TemplateCopyingCode.bind({});
// @ts-ignore
CopyingCode.args = {
  ...extractStoryParams(storyParams),
};
