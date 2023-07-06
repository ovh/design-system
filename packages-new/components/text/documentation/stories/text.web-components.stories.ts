import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { createComponentTable, extractArgTypes, extractStoryParams, getTagAttributes, olesIpsum, OlesIpsumGeneration } from '@ovhcloud/ods-common-core';
import { defineCustomElements } from '@ovhcloud/ods-component-text/loader'
import { ODS_TEXT_LEVELS } from '../../src/components/osds-text/constants/text-level';
import { ODS_TEXT_SIZES } from '../../src/components/osds-text/constants/text-size';
import { DEFAULT_ATTRIBUTE } from '../../src/components/osds-text/constants/default-attributes';
// @ts-ignore
import changelog from '../../CHANGELOG.md';
// @ts-ignore
import page from './text.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.color,
    options: OdsThemeColorIntentList,
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.size,
    options: ODS_TEXT_SIZES,
    control: { type: 'select' },
  },
  level: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.level,
    options: ODS_TEXT_LEVELS,
    control: { type: 'select' },
  },
  textContent: {
    category: 'Slot',
    defaultValue: olesIpsum(OlesIpsumGeneration.sentences)
  },
  contrasted: {
    category: 'Misc',
    defaultValue: DEFAULT_ATTRIBUTE.contrasted
  },
  breakSpaces: {
    category: 'Misc',
    defaultValue: DEFAULT_ATTRIBUTE.breakSpaces
  },
};

export default {
  title: 'UI Components/Text [quark]/Web Component',
  parameters: {
    notes: {
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
// @ts-ignore
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
  { size: ODS_TEXT_SIZES },
  { level: ODS_TEXT_LEVELS },
  defaultContent
))}
<h1>Levels & Colors</h1>
${unsafeHTML(createComponentTable(
  defaultTag,
  { level: ODS_TEXT_LEVELS },
  { color: OdsThemeColorIntentList },
  defaultContent
))}

<div style='background: #666; padding: 1em; margin: -0.3em -0.8em; color: white'>
  <h1>Size & Contrasted Levels</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { size: ODS_TEXT_SIZES },
    { level: ODS_TEXT_LEVELS },
    defaultContent,
    { contrasted: true }
  ))}
</div>
`;
export const All = TemplateAll.bind({});
// @ts-ignore
All.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false }
};
