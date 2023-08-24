import { html } from 'lit-html';
import { defineCustomElements } from '@ovhcloud/ods-component-switch/loader';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';
import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { ODS_SWITCH_SIZE, ODS_SWITCH_SIZES } from '@ovhcloud/ods-component-switch';
// @ts-ignore
import changelog from '@ovhcloud/ods-component-switch/CHANGELOG.md';
// @ts-ignore
import page from './switch.web-component.stories.page.mdx';

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
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};
