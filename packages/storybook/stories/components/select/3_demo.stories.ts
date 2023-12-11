import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_SELECT_SIZE, ODS_SELECT_SIZES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-select';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.primary,
    options: [ODS_THEME_COLOR_INTENT.primary],
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: ODS_SELECT_SIZE.md,
    options: ODS_SELECT_SIZES,
    control: { type: 'select' },
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  inline: {
    category: 'Misc',
    defaultValue: false,
  },
  required: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'ODS Components/Form/Select [atom]/Demo',
  id: 'select',
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const TemplateDefault = (args: any) => html`
  <osds-select ...=${getTagAttributes(args)}>
    <span slot="placeholder">Select Country</span>
    <osds-select-group>Group title</osds-select-group>
    <osds-select-option value="1">Value 1</osds-select-option>
    <osds-select-option value="2">Value 2</osds-select-option>
    <osds-select-option value="3">Value 3</osds-select-option>
  </osds-select>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

/* Multi group */
const TemplateMultiGroup = (args: any) => html`
  <osds-select ...=${getTagAttributes(args)}>
    <span slot="placeholder">Select Country</span>
    <osds-select-group>Europa</osds-select-group>
    <osds-select-option value="1">Value 1</osds-select-option>
    <osds-select-option value="2">Value 2</osds-select-option>
    <osds-select-option value="3">Value 3</osds-select-option>
    <osds-select-group>North America</osds-select-group>
    <osds-select-option value="4">Value 4</osds-select-option>
    <osds-select-option value="5">Value 5</osds-select-option>
    <osds-select-option value="6">Value 6</osds-select-option>
  </osds-select>
`;
export const MultiGroup = TemplateMultiGroup.bind({});
// @ts-ignore
MultiGroup.args = {
  ...extractStoryParams(storyParams),
};
