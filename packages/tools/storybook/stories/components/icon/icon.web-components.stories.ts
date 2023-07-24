import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { repeat } from 'lit-html/directives/repeat';
import { iframe } from '../../../.storybook/iframe';

import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { defineCustomElements } from '@ovhcloud/ods-stencil-icon/loader';
import { OdsIconSize, OdsIconSizeList } from '@ovhcloud/ods-core';
import {
  createComponentTable,
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-icon/CHANGELOG.md';
import page from './icon.web-component.stories.page.mdx';
import { OdsIconNameList } from '../../../../../libraries/core/src';

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
    defaultValue: OdsIconSize.md,
    options: OdsIconSizeList,
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
  title: 'UI Components/Icon [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-icon/modules/index.html'),
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
${repeat(OdsIconNameList, (i) => iconTemplate(i))}
</span>

<h3>Sizes & Colors</h1>
${unsafeHTML(createComponentTable(
  defaultTag,
  { size: OdsIconSizeList },
  { color: OdsThemeColorIntentList },
  '',
  { name: 'home' }
))}
</div>
`;
export const All = TemplateAll.bind({});
All.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false }
};
