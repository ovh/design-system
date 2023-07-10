import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { iframe } from '../../../.storybook/iframe';

// import { config } from 'storybook-addon-xd-designs';
// import { XDConfig } from 'storybook-addon-xd-designs/lib/config';


import { defineCustomElements } from '@ovhcloud/ods-stencil/components/radio-button/loader';
import changelog from '@ovhcloud/ods-stencil/components/radio-button/CHANGELOG.md';
import page from './radio-button.web-component.stories.page.mdx';
import { OdsRadioButtonSizeList, odsRadioButtonDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';

import {
  createComponentTable,
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  checked: {
    category: 'General',
    defaultValue: odsRadioButtonDefaultAttributes.checked,
  },
  checking: {
    category: 'General',
    defaultValue: odsRadioButtonDefaultAttributes.checking,
  },
  color: {
    category: 'General',
    defaultValue: odsRadioButtonDefaultAttributes.color,
    options: OdsThemeColorIntentList,
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: odsRadioButtonDefaultAttributes.size,
    options: OdsRadioButtonSizeList,
    control: { type: 'select' },
  },
  start: {
    category: 'Slot',
    defaultValue: 'Left input',
  },
  end: {
    category: 'Slot',
    defaultValue: 'Right input',
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  interactive: {
    category: 'Misc',
    defaultValue: false,
  },
  hasFocus: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'UI Components/Radio Button [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-radio-button/modules/index.html'),
      changelog,
    },
    docs: { page },
    /* design: config({
      artboardUrl: 'https://xd.adobe.com/view/9bb1ccc1-e850-428c-9fd2-d4a60718a440-cee2/screen/db14523c-c3d7-4eb6-a584-3f8df444ecfa/Desktop',
    {  as XDConfig), */
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const OsdsRadioButtonDefault = (args) => html`
  <osds-radio-button ...=${getTagAttributes(args)}>
    <span slot='start'>${unsafeHTML(args.start)}</span>
    <span slot='end'>${unsafeHTML(args.end)}</span>
  </osds-radio-button>
`;
const TemplateDefault = (args) => OsdsRadioButtonDefault(args);
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};

const defaultTag = 'osds-radio-button';
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

<h1>Sizes & Colors</h1>
${unsafeHTML(createComponentTable(
  defaultTag,
  { size: OdsRadioButtonSizeList },
  { color: OdsThemeColorIntentList },
  defaultContent,
  {
    checked: true
  }
))}
</div>
`;
export const All = TemplateAll.bind({});
All.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false }
};
