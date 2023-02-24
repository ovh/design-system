import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { iframe } from '../../../.storybook/iframe';


import { OdsThemeColorIntent, OdsThemeColorHue, OdsThemeColorHueList, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { defineCustomElements } from '@ovhcloud/ods-stencil-text/loader';
import {
  OdsTextSize,
  OdsTextSizeList,
  OdsTextLevel,
  OdsTextLevelList,
  odsTextDefaultAttributes,
  olesIpsum,
  OlesIpsumGeneration,
} from '@ovhcloud/ods-core';
import {
  createComponentTable,
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-text/CHANGELOG.md';
import page from './text.web-component.stories.page.mdx';
import {  } from '@ovhcloud/ods-core/src';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: odsTextDefaultAttributes.color,
    options: OdsThemeColorIntentList,
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: odsTextDefaultAttributes.size,
    options: OdsTextSizeList,
    control: { type: 'select' },
  },
  level: {
    category: 'General',
    defaultValue: odsTextDefaultAttributes.level,
    options: OdsTextLevelList,
    control: { type: 'select' },
  },
  textContent: {
    category: 'Slot',
    defaultValue: olesIpsum(OlesIpsumGeneration.sentences)
  },
  contrasted: {
    category: 'Misc',
    defaultValue: odsTextDefaultAttributes.contrasted
  },
  breakSpaces: {
    category: 'Misc',
    defaultValue: odsTextDefaultAttributes.breakSpaces
  },
};

export default {
  title: 'UI Components/Text [quark]/Web Component',
  parameters: {
    notes: {
      API: iframe('stencil-components-text/modules/index.html'),
      changelog,
    },
    docs: { page },
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => html`
  <osds-text ...=${getTagAttributes(args)}>
    ${unsafeHTML(args.textContent)}
  </osds-text>
`;
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};

const defaultTag = 'osds-text';
const defaultContent = `<span>Text</span>`;

const TemplateAll = () => html`
<style>
.table {
  margin: 1em auto;
}
.table-row {
  display: flex;
  margin: .5em auto;
  align-items: start;
}
.table-cell {
  display: inline-flex;
  align-items: center;
  justify-content: start;
  min-width: 6em;
  width: 100%;
}
.table-row > .table-cell:first-of-type {
  width: fit-content;
  min-width: 4em;
}
</style>

<h1>Sizes & Levels</h1>
${unsafeHTML(createComponentTable(
  defaultTag,
  { size: OdsTextSizeList },
  { level: OdsTextLevelList },
  defaultContent
))}
<h1>Levels & Colors</h1>
${unsafeHTML(createComponentTable(
  defaultTag,
  { level: OdsTextLevelList },
  { color: OdsThemeColorIntentList },
  defaultContent
))}

<div style='background: #666; padding: 1em; margin: -0.3em -0.8em; color: white'>
  <h1>Size & Contrasted Levels</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { size: OdsTextSizeList },
    { level: OdsTextLevelList },
    defaultContent,
    { contrasted: true }
  ))}
</div>
`;
export const All = TemplateAll.bind({});
All.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false }
};
