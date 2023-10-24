import { createComponentTable, extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import page from './chip.web-component.stories.page.mdx';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { ODS_CHIP_SIZE, ODS_CHIP_SIZES, ODS_CHIP_VARIANT, ODS_CHIP_VARIANTS } from '@ovhcloud/ods-components/chip';
import { defineCustomElements } from '@ovhcloud/ods-components/chip/loader';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/chip/CHANGELOG.md';
// @ts-ignore

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.default,
    options: ODS_THEME_COLOR_INTENTS,
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: ODS_CHIP_SIZE.md,
    options: ODS_CHIP_SIZES,
    control: { type: 'select' },
  },
  variant: {
    category: 'General',
    defaultValue: ODS_CHIP_VARIANT.flat,
    options: ODS_CHIP_VARIANTS,
    control: { type: 'select' },
  },
  chipContent: {
    category: 'Slot',
    defaultValue: 'Chip',
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  selectable: {
    category: 'Misc',
    defaultValue: false,
  },
  removable: {
    category: 'Misc',
    defaultValue: false,
  },
  inline: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'UI Components/Chip [atom]/Web Component',
  id: 'chip',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page },
  },
  argTypes: extractArgTypes(storyParams),
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
};
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

const defaultTag = 'osds-chip';
const defaultContent = 'Text';

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
    { variant: ODS_CHIP_VARIANTS },
    { color: ODS_THEME_COLOR_INTENTS },
    defaultContent,
  ))}
<h1>Sizes & Colors</h1>
${unsafeHTML(createComponentTable(
    defaultTag,
    { size: ODS_CHIP_SIZES },
    { color: ODS_THEME_COLOR_INTENTS },
    defaultContent,
  ))}
<h1>Sizes & Variants</h1>
${unsafeHTML(createComponentTable(
    defaultTag,
    { size: ODS_CHIP_SIZES },
    { variant: ODS_CHIP_VARIANTS },
    defaultContent,
  ))}
<h1>Selectable Variants & Colors</h1>
${unsafeHTML(createComponentTable(
    defaultTag,
    { variant: ODS_CHIP_VARIANTS },
    { color: ODS_THEME_COLOR_INTENTS },
    defaultContent,
    { selectable: true },
  ))}
<h1>Disabled Variants & Colors</h1>
${unsafeHTML(createComponentTable(
    defaultTag,
    { variant: ODS_CHIP_VARIANTS },
    { color: ODS_THEME_COLOR_INTENTS },
    defaultContent,
    { disabled: true },
  ))}
<div style='background: #666; padding: 1em; margin: -0.3em -0.8em; color: white'>
  <h1>Contrasted Variants & Colors</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { variant: ODS_CHIP_VARIANTS },
    { color: ODS_THEME_COLOR_INTENTS },
    defaultContent,
    { contrasted: true },
  ))}
  <h1>Selectable and contrasted Variants & Colors</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { variant: ODS_CHIP_VARIANTS },
    { color: ODS_THEME_COLOR_INTENTS },
    defaultContent,
    { contrasted: true, selectable: true },
  ))}
  <h1>Disabled and contrasted Variants & Colors</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { variant: ODS_CHIP_VARIANTS },
    { color: ODS_THEME_COLOR_INTENTS },
    defaultContent,
    { contrasted: true, disabled: true },
  ))}
</div>
`;
export const All = TemplateAll.bind({});
// @ts-ignore
All.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};
