import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { iframe } from '../../../.storybook/iframe';

// import { config } from 'storybook-addon-xd-designs';
// import { XDConfig } from 'storybook-addon-xd-designs/lib/config';


import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { defineCustomElements } from '@ovhcloud/ods-stencil-chip/loader';
import { OdsChipSize, OdsChipSizeList, OdsChipVariant, OdsChipVariantList } from '@ovhcloud/ods-core';
import {
  createComponentTable,
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-chip/CHANGELOG.md';
import page from './chip.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: OdsThemeColorIntent.default,
    options: OdsThemeColorIntentList,
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: OdsChipSize.md,
    options: OdsChipSizeList,
    control: { type: 'select' },
  },
  variant: {
    category: 'General',
    defaultValue: OdsChipVariant.flat,
    options: OdsChipVariantList,
    control: { type: 'select' },
  },
  chipContent: {
    category: 'Slot',
    defaultValue: 'Chip'
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false
  },
  disabled: {
    category: 'Misc',
    defaultValue: false
  },
  selectable: {
    category: 'Misc',
    defaultValue: false
  },
  removable: {
    category: 'Misc',
    defaultValue: false
  },
  inline: {
    category: 'Misc',
    defaultValue: false
  },
};

export default {
  title: 'UI Components/Chip [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-chip/modules/index.html'),
      changelog,
    },
    docs: { page },
    /* design: config({
      artboardUrl: 'https://xd.adobe.com/view/9bb1ccc1-e850-428c-9fd2-d4a60718a440-cee2/screen/de3e2df7-15a7-4d3b-a452-b3bdfdc28911/Desktop',
    {  as XDConfig), */
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  if(args.inline === 0) {
    delete args.inline;
  }
  return html`
    <osds-chip ...=${getTagAttributes(args)}>
      ${unsafeHTML(args.chipContent)}
    </osds-chip>
  `;
}
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};

const defaultTag = 'osds-chip';
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

<h1>Variants & Colors</h1>
${unsafeHTML(createComponentTable(
  defaultTag,
  { variant: OdsChipVariantList },
  { color: OdsThemeColorIntentList },
  defaultContent,
))}
<h1>Sizes & Colors</h1>
${unsafeHTML(createComponentTable(
  defaultTag,
  { size: OdsChipSizeList },
  { color: OdsThemeColorIntentList },
  defaultContent,
))}
<h1>Sizes & Variants</h1>
${unsafeHTML(createComponentTable(
  defaultTag,
  { size: OdsChipSizeList },
  { variant: OdsChipVariantList },
  defaultContent,
))}
<h1>Selectable Variants & Colors</h1>
${unsafeHTML(createComponentTable(
  defaultTag,
  { variant: OdsChipVariantList },
  { color: OdsThemeColorIntentList },
  defaultContent,
  { selectable: true },
))}
<h1>Disabled Variants & Colors</h1>
${unsafeHTML(createComponentTable(
  defaultTag,
  { variant: OdsChipVariantList },
  { color: OdsThemeColorIntentList },
  defaultContent,
  { disabled: true },
))}
<div style='background: #666; padding: 1em; margin: -0.3em -0.8em; color: white'>
  <h1>Contrasted Variants & Colors</h1>
  ${unsafeHTML(createComponentTable(
  defaultTag,
  { variant: OdsChipVariantList },
  { color: OdsThemeColorIntentList },
  defaultContent,
  { contrasted: true },
))}
  <h1>Selectable and contrasted Variants & Colors</h1>
  ${unsafeHTML(createComponentTable(
  defaultTag,
  { variant: OdsChipVariantList },
  { color: OdsThemeColorIntentList },
  defaultContent,
  { contrasted: true, selectable: true },
))}
  <h1>Disabled and contrasted Variants & Colors</h1>
  ${unsafeHTML(createComponentTable(
  defaultTag,
  { variant: OdsChipVariantList },
  { color: OdsThemeColorIntentList },
  defaultContent,
  { contrasted: true, disabled: true },
))}
</div>
`;
export const All = TemplateAll.bind({});
All.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false }
};
