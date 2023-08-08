import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { iframe } from '../../../.storybook/iframe';

import { defineCustomElements } from '@ovhcloud/ods-stencil/components/checkbox-button/loader';
import changelog from '@ovhcloud/ods-stencil/components/checkbox-button/CHANGELOG.md';
import page from './checkbox-button.web-component.stories.page.mdx';
import { OdsCheckboxButtonSizeList, odsCheckboxButtonDefaultAttributes } from '@ovhcloud/ods-core';
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
    defaultValue: odsCheckboxButtonDefaultAttributes.checked,
  },
  indeterminate: {
    category: 'General',
    defaultValue: odsCheckboxButtonDefaultAttributes.indeterminate,
  },
  checking: {
    category: 'General',
    defaultValue: odsCheckboxButtonDefaultAttributes.checking,
  },
  color: {
    category: 'General',
    defaultValue: odsCheckboxButtonDefaultAttributes.color,
    options: OdsThemeColorIntentList,
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: odsCheckboxButtonDefaultAttributes.size,
    options: OdsCheckboxButtonSizeList,
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
  hasFocus: {
    category: 'Misc',
    defaultValue: odsCheckboxButtonDefaultAttributes.hasFocus,
  },
  interactive: {
    category: 'Misc',
    defaultValue: odsCheckboxButtonDefaultAttributes.interactive,
  },
};

export default {
  title: 'UI Components/Checkbox Button [atom]/Web Component',
  id: 'checkbox-button',
  parameters: {
    notes: {
      API: iframe('/stencil-checkbox-button/modules/index.html'),
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const OsdsCheckboxButtonDefault = (args) => html`
  <osds-checkbox-button ...=${getTagAttributes(args)}>
    <span slot='start'>${unsafeHTML(args.start)}</span>
    <span slot='end'>${unsafeHTML(args.end)}</span>
  </osds-checkbox-button>
`;
const TemplateDefault = (args) => OsdsCheckboxButtonDefault(args);
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};

/*  Checkbox */
const OsdsCheckboxButtonCheckboxWrapper = (args) => html`
  <h1 style='font-size: 1.3rem; font-family: "Source Sans Pro"; font-style: italic'>
    <a href=${parent.location.href.replace(parent.location.search, "?path=/story/checkbox--web-component")}>Checkbox</a> Meta component adds behavior to this Checkbox Button
  </h1>
  <osds-checkbox>
      <osds-checkbox-button ...=${getTagAttributes(args)}>
        <span slot='start'>${unsafeHTML(args.start)}</span>
        <span slot='end'>${unsafeHTML(args.end)}</span>
      </osds-checkbox-button>
    </osds-checkbox>  
`;
const TemplateCheckboxWrapper = (args) => OsdsCheckboxButtonCheckboxWrapper(args);
export const CheckboxWrapper = TemplateCheckboxWrapper.bind({});
CheckboxWrapper.args = {
  ...extractStoryParams(storyParams),
};

const defaultTag = 'osds-checkbox-button';
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
  { size: OdsCheckboxButtonSizeList },
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
