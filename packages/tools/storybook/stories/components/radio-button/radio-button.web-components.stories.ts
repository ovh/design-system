import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { iframe } from '../../../.storybook/iframe';

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
  id: 'radio-button',
  parameters: {
    notes: {
      API: iframe('/stencil-radio-button/modules/index.html'),
      changelog,
    },
    docs: { page }
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

/* RadioWrapper */
const OsdsRadioButtonRadioWrapper = (args) => html`  
  <h1 style='font-size: 1.3rem; font-family: "Source Sans Pro"; font-style: italic'>
    <a href=${parent.location.href.replace(parent.location.search, "?path=/story/radio--default")}>Radio</a> Meta component adds behavior to this Radio Button
  </h1>
  <osds-radio value="radio-a">
    <osds-radio-button ...=${getTagAttributes(args)}>
      <span slot='start'>${unsafeHTML(args.start)}</span>
      <span slot='end'>${unsafeHTML(args.end)}</span>
    </osds-radio-button>
  </osds-radio>
`;
const TemplateRadioWrapper = (args) => OsdsRadioButtonRadioWrapper(args);
export const RadioWrapper = TemplateRadioWrapper.bind({});
RadioWrapper.args = {
  ...extractStoryParams(storyParams),
};
/* RadioWrapper */
const OsdsRadioButtonRadioGroupWrapper = (args) => html`  
  <h1 style='font-size: 1.3rem; font-family: "Source Sans Pro"; font-style: italic'>
    <a href=${parent.location.href.replace(parent.location.search, "?path=/story/radio--default")}>Radio</a> and <a href=${parent.location.href.replace(parent.location.search, "?path=/story/radio-group--default")}>Radio Group</a> Meta components adds behavior to these Radio Buttons
  </h1>
  <osds-radio-group id="radio-group-a">
    <osds-radio id="radio-A" value="val-tile-A" checked>
      <osds-radio-button ...=${getTagAttributes(args)}>
        <span slot='start'>${unsafeHTML(args.start)}</span>
        <span slot='end'>${unsafeHTML(args.end)}</span>
      </osds-radio-button>
    </osds-radio>
    <osds-radio id="radio-B" value="val-tile-B">
      <osds-radio-button ...=${getTagAttributes(args)}>
        <span slot='start'>${unsafeHTML(args.start)}</span>
        <span slot='end'>${unsafeHTML(args.end)}</span>
      </osds-radio-button>
    </osds-radio>
  </osds-radio-group>
`;
const TemplateRadioGroupWrapper = (args) => OsdsRadioButtonRadioGroupWrapper(args);
export const RadioGroupWrapper = TemplateRadioGroupWrapper.bind({});
RadioGroupWrapper.args = {
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
