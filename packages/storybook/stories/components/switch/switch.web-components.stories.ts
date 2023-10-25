import { ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { ODS_SWITCH_SIZE, ODS_SWITCH_SIZES } from '@ovhcloud/ods-components/switch';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/switch/CHANGELOG.md';
import { defineCustomElements } from '@ovhcloud/ods-components/switch/loader';
import { html } from 'lit-html';

import page from './switch.web-component.stories.page.mdx';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';
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
    defaultValue: ODS_SWITCH_SIZE.md,
    options: ODS_SWITCH_SIZES,
    control: { type: 'select' },
  },
  default: {
    category: 'Slot',
    defaultValue: '',
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },

};

export default {
  title: 'UI Components/Switch [atom]/Web Component',
  id: 'switch',
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
  return html`
    <osds-switch ...=${getTagAttributes(args)}>
      <osds-switch-item value="1" id="1" checked>Item 1</osds-switch-item>
      <osds-switch-item value="2" id="2">Item 2</osds-switch-item>
      <osds-switch-item value="3" id="3">Item 3</osds-switch-item>
    </osds-switch>
  `;
};
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};
