import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { defineCustomElements } from '@ovhcloud/ods-components/link/loader';
import { OdsHTMLAnchorElementRelList, OdsHTMLAnchorElementTarget, OdsHTMLAnchorElementTargetList } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { createComponentTable, getTagAttributes } from '../../../core/componentHTMLUtils';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/link/CHANGELOG.md';
// @ts-ignore
import page from './link.web-component.stories.page.mdx';

defineCustomElements();

const argTypes = {
  color: {
    category: 'General',
    options: ODS_THEME_COLOR_INTENTS,
    control: { type: 'select' },
  },
  rel: {
    category: 'Misc',
    options: OdsHTMLAnchorElementRelList,
    control: { type: 'select' },
  },
  target: {
    category: 'Misc',
    options: OdsHTMLAnchorElementTargetList,
    control: { type: 'select' },
  },
  download: {
    category: 'Misc',
  }
};

export default {
  title: 'UI Components/Link [atom]/Web Component',
  id: 'link',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page }
  },
  argTypes
};

/* Story options */

/* Default story parameters  */
const storyParams = {
  color: ODS_THEME_COLOR_INTENT.default,
  contrasted: false,
  disabled: false,
  endSlot: '<osds-icon name="arrow-right" size="xs" hoverable=""></osds-icon>',
  href: '',
  linkContentSlot: 'Oles ipsum dolor sit amet, Ocurreret at animal armor nec, constituam platonem network integer',
  startSlot: '',
  rel: '',
  target: OdsHTMLAnchorElementTarget._self,
  download: 'filename'
};

/* Default */
const TemplateDefault = (args:any) => html`
  <osds-link ...=${getTagAttributes(args)}>
    <span slot='start'>${unsafeHTML(args.startSlot)}</span>
    ${unsafeHTML(args.linkContentSlot || 'Link')}
    <span slot='end'>${unsafeHTML(args.endSlot)}</span>
  </osds-link>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...storyParams,
};

const defaultTag = 'osds-link';
const defaultContent = `Text`;

const TemplateAll = () => html`
<style>
.table {
  margin: 1em auto;
}
.table-row {
  display: flex;
  margin: .5em auto;
  align-items: center;
}
.table-cell {
  display: inline-flex;
  width: 6em;
  align-items: center;
  justify-content: center;
}
</style>

<h1>Colors</h1>
${unsafeHTML(createComponentTable(
  defaultTag,
  { href: [''] },
  { color: ODS_THEME_COLOR_INTENTS },
  defaultContent
))}
<h1>Disabled Colors</h1>
${unsafeHTML(createComponentTable(
  defaultTag,
  { href: [''] },
  { color: ODS_THEME_COLOR_INTENTS },
  defaultContent,
  { disabled: true }
))}
<div style='background: #666; padding: 1em; margin: -0.3em -0.8em; color: white'>
  <h1>Contrasted Colors</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { href: [''] },
    { color: ODS_THEME_COLOR_INTENTS },
    defaultContent,
    { contrasted: true }
  ))}
  <h1>Disabled and contrasted Colors</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { href: [''] },
    { color: ODS_THEME_COLOR_INTENTS },
    defaultContent,
    { contrasted: true, disabled: true }
  ))}
</div>
`;
export const All = TemplateAll.bind({});
// @ts-ignore
All.parameters = {
  controls: { hideNoControlsWarning: true }
};
