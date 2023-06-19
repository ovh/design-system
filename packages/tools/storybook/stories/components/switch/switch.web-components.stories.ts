import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';

import { defineCustomElements } from '@ovhcloud/ods-stencil-switch/loader';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-switch/CHANGELOG.md';
import page from './switch.web-component.stories.page.mdx';
import { odsSwitchDefaultAttributes, OdsSwitchSizeList } from '@ovhcloud/ods-core';
import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: odsSwitchDefaultAttributes.color,
    options: OdsThemeColorIntentList,
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: odsSwitchDefaultAttributes.size,
    options: OdsSwitchSizeList,
    control: { type: 'select' },
  },
  default: {
    category: 'Slot',
    defaultValue: '',
  },
  contrasted: {
    category: 'Misc',
    defaultValue: odsSwitchDefaultAttributes.contrasted
  },
  disabled: {
    category: 'Misc',
    defaultValue: odsSwitchDefaultAttributes.disabled
  },
  
};

export default {
  title: 'UI Components/Switch [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-switch/modules/index.html'),
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`
    <osds-switch ...=${getTagAttributes(args)}>
      <osds-switch-item value="1" id="1" checked>Item 1</osds-switch-item>
      <osds-switch-item value="2" id="2">Item 2</osds-switch-item>
      <osds-switch-item value="3" id="3">Item 3</osds-switch-item>
    </osds-switch>
  `;
}
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
