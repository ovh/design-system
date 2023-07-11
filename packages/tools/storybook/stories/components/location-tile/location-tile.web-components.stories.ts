import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { iframe } from '../../../.storybook/iframe';

// import { config } from 'storybook-addon-xd-designs';
// import { XDConfig } from 'storybook-addon-xd-designs/lib/config';


import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { defineCustomElements } from '@ovhcloud/ods-stencil-location-tile/loader';
import { OdsTileSize, OdsTileSizeList, OdsLocationTileVariant, OdsLocationTileVariantList, ODS_COUNTRY_ISO_CODE } from '@ovhcloud/ods-core';
import {
  createComponentTable,
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-location-tile/CHANGELOG.md';
import page from './location-tile.web-component.stories.page.mdx';

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
    defaultValue: OdsTileSize.md,
    options: OdsTileSizeList,
    control: { type: 'select' },
  },
  variant: {
    category: 'General',
    defaultValue: OdsLocationTileVariant.vertical,
    options: OdsLocationTileVariantList,
    control: { type: 'select' },
  },
  city: {
    category: 'Slot',
    defaultValue: ''
  },
  country: {
    category: 'Slot',
    defaultValue: ''
  },
  info: {
    category: 'Slot',
    defaultValue: ''
  },
  code: {
    category: 'Misc',
    defaultValue: ''
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false
  },
  disabled: {
    category: 'Misc',
    defaultValue: false
  },
  flex: {
    category: 'Misc',
    defaultValue: false
  },
  iso: {
    category: 'Misc',
    defaultValue: ODS_COUNTRY_ISO_CODE.FR
  },
  interactive: {
    category: 'Misc',
    defaultValue: false
  },
  checked: {
    category: 'Misc',
    defaultValue: false
  },
};

export default {
  title: 'UI Components/Location Tile [deprecated]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-location-tile/modules/index.html'),
      changelog,
    },
    docs: { page },
    /* design: config({
      artboardUrl: 'https://xd.adobe.com/view/9bb1ccc1-e850-428c-9fd2-d4a60718a440-cee2/screen/9f1bf787-e868-4952-988e-2d375b009331/Desktop',
    {  as XDConfig), */
  },
  argTypes: extractArgTypes(storyParams)
};

// A tile example
const TemplateDefault = (args: any) => {
  if(args.flex === 0) {
    delete args.flex;
  }
  return html`
    <h2 style='color:red'>
      ⚠ Warning this component is deprecated and will be remove soon
    </h2>
    <div class='tile-container'>
      <osds-location-tile ...=${getTagAttributes(args)}>
        <span slot='country'>${unsafeHTML(args.country || 'Country')}</span>
        <span slot='city'>${unsafeHTML(args.city || 'City')}</span>
        <span slot='info'>${unsafeHTML(args.info || 'Info')}</span>
      </osds-location-tile>
    </div>
  `;
}
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};

const defaultTag = 'osds-location-tile';
const defaultContent = `
  <span slot='country'>France</span>
  <span slot='city'>Roubaix</span>
  <span slot='info'>RBX7</span>
`;

const TemplateAll = () => html`
<style>
.table {
  margin: 1em auto;
  display: flex;
  flex-direction: column;
}
.table-row {
  display: inline-flex;
  margin: .5em auto .5em 0;
  align-items: center;
}
.table-cell {
  display: inline-flex;
  width: 12em;
  align-items: center;
  justify-content: center;
}
.table-cell:first-child {
  width: 6em;
}
</style>

<h3>Sizes & Colors</h3>
${unsafeHTML(createComponentTable(
  defaultTag,
  { size: OdsTileSizeList },
  { color: OdsThemeColorIntentList },
  defaultContent,
  { iso: 'fr' }
))}

<h3>Variants & Sizes</h3>
${unsafeHTML(createComponentTable(
  defaultTag,
  { variant: OdsLocationTileVariantList },
  { size: OdsTileSizeList },
  defaultContent,
  { iso: 'fr' }
))}
<h3>Interactive Sizes & Colors</h3>
${unsafeHTML(createComponentTable(
  defaultTag,
  { size: OdsTileSizeList },
  { color: OdsThemeColorIntentList },
  defaultContent,
  { iso: 'fr', interactive: true }
))}
<h3>Interactive Variants & Colors</h3>
${unsafeHTML(createComponentTable(
  defaultTag,
  { variant: OdsLocationTileVariantList },
  { color: OdsThemeColorIntentList },
  defaultContent,
  { iso: 'fr', interactive: true }
))}
<h3>Selected Variants & Colors</h3>
${unsafeHTML(createComponentTable(
  defaultTag,
  { variant: OdsLocationTileVariantList },
  { color: OdsThemeColorIntentList },
  defaultContent,
  { iso: 'fr', interactive: true, checked: true }
))}
<h3>Selected Sizes & Colors</h3>
${unsafeHTML(createComponentTable(
  defaultTag,
  { size: OdsTileSizeList },
  { color: OdsThemeColorIntentList },
  defaultContent,
  { iso: 'fr', interactive: true, checked: true }
))}
<h3>Disabled Variants & Colors</h3>
${unsafeHTML(createComponentTable(
  defaultTag,
  { variant: OdsLocationTileVariantList },
  { color: OdsThemeColorIntentList },
  defaultContent,
  { iso: 'fr', disabled: true }
))}
<h3>Disabled Sizes & Colors</h3>
${unsafeHTML(createComponentTable(
  defaultTag,
  { size: OdsTileSizeList },
  { color: OdsThemeColorIntentList },
  defaultContent,
  { iso: 'fr', disabled: true }
))}
`;
export const All = TemplateAll.bind({});
All.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false }
};
