import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { repeat } from 'lit-html/directives/repeat';
import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { defineCustomElements } from '@ovhcloud/ods-component-icon/loader';
import { ODS_ICON_NAMES, ODS_ICON_SIZE, ODS_ICON_SIZES } from '@ovhcloud/ods-component-icon';
import { createComponentTable, extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
// @ts-ignore
import changelog from '@ovhcloud/ods-component-icon/CHANGELOG.md';
// @ts-ignore
import page from './icon.web-component.stories.page.mdx';

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
    defaultValue: ODS_ICON_SIZE.md,
    options: ODS_ICON_SIZES,
    control: { type: 'select' },
  },
  ariaName: {
    category: 'Misc',
    defaultValue: 'Home icon'
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false
  },
  name: {
    category: 'Misc',
    defaultValue: 'home'
  },
};

export default {
  title: 'UI Components/Icon [quark]/Web Component',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

// A icon example
const TemplateDefault = (args: any) => html`
<div class='icon-container'>
  <osds-icon ...=${getTagAttributes(args)}>
  </osds-icon>
</div>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

const defaultTag = 'osds-icon';

const iconTemplate = (i:string) => html`
  <span class='table-cell' style='width: 8em; margin: .5em auto'>
    <osds-icon name='${i}' color='primary' size='lg'></osds-icon>
    <div style='font-size: .8rem; margin-top: .5em'>${i}</div>
  </span>`;

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
  flex-flow: column;
}
</style>

<span class='table'>
${repeat(ODS_ICON_NAMES, (i) => iconTemplate(i))}
</span>

<h3>Sizes & Colors</h1>
${unsafeHTML(createComponentTable(
  defaultTag,
  { size: ODS_ICON_SIZES },
  { color: OdsThemeColorIntentList },
  '',
  { name: 'home' }
))}
</div>
`;
export const All = TemplateAll.bind({});
// @ts-ignore
All.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false }
};
