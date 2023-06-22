import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { iframe } from '../../../.storybook/iframe';

// import { config } from 'storybook-addon-xd-designs';
// import { XDConfig } from 'storybook-addon-xd-designs/lib/config';


import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OdsHTMLAnchorElementRelList, OdsHTMLAnchorElementTarget, OdsHTMLAnchorElementTargetList } from '@ovhcloud/ods-core';

import { defineCustomElements } from '@ovhcloud/ods-stencil-link/loader';
import { createComponentTable, getTagAttributes } from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-link/CHANGELOG.md';
import page from './link.web-component.stories.page.mdx';

defineCustomElements();

const argTypes = {
  color: {
    category: 'General',
    options: OdsThemeColorIntentList,
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
  title: 'UI Components/Link [quark]/Web Component',
  parameters: {
    notes: {
      API: iframe('stencil-components-link/modules/index.html'),
      changelog,
    },
    docs: { page },
    /* design: config({
      artboardUrl: 'https://xd.adobe.com/view/040c7684-d702-451e-98d9-23320eacd292-515f/screen/0c4d4f2c-9a40-44b2-b3f9-3fa01eed0911/Desktop',
    {  as XDConfig), */
  },
  argTypes
};

/* Story options */

/* Default story parameters  */
const storyParams = {
  color: OdsThemeColorIntent.default,
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
  { color: OdsThemeColorIntentList },
  defaultContent
))}
<h1>Disabled Colors</h1>
${unsafeHTML(createComponentTable(
  defaultTag,
  { href: [''] },
  { color: OdsThemeColorIntentList },
  defaultContent,
  { disabled: true }
))}
<div style='background: #666; padding: 1em; margin: -0.3em -0.8em; color: white'>
  <h1>Contrasted Colors</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { href: [''] },
    { color: OdsThemeColorIntentList },
    defaultContent,
    { contrasted: true }
  ))}
  <h1>Disabled and contrasted Colors</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { href: [''] },
    { color: OdsThemeColorIntentList },
    defaultContent,
    { contrasted: true, disabled: true }
  ))}
</div>
`;
export const All = TemplateAll.bind({});
All.parameters = {
  controls: { hideNoControlsWarning: true }
};
