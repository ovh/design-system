import { html } from 'lit-html';
import { getTagAttributes, extractArgTypes, extractStoryParams } from '../../../core/componentHTMLUtils';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_SELECT_SIZES } from '@ovhcloud/ods-component-select';
import { defineCustomElements } from '@ovhcloud/ods-component-select/loader';
import { DEFAULT_ATTRIBUTE } from '@ovhcloud/ods-component-select/src/components/osds-select/constants/default-attributes';
// @ts-ignore
import changelog from '@ovhcloud/ods-component-select/CHANGELOG.md';
// @ts-ignore
import page from './select.web-component.stories.page.mdx';

defineCustomElements();

const storyParams = {
  color: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.color,
    options: [OdsThemeColorIntent.primary],
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.size,
    options: ODS_SELECT_SIZES,
    control: { type: 'select' },
  },
  disabled: {
    category: 'Misc',
    defaultValue: DEFAULT_ATTRIBUTE.disabled,
  },
  inline: {
    category: 'Misc',
    defaultValue: DEFAULT_ATTRIBUTE.inline,
  },
  required: {
    category: 'Misc',
    defaultValue: DEFAULT_ATTRIBUTE.required,
  },
};

export default {
  title: 'UI Components/Select [atom]/Web Component',
  id: 'select',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page }
  },
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
  </osds-select>
`;
export const MultiGroup = TemplateMultiGroup.bind({});
// @ts-ignore
MultiGroup.args = {
  ...extractStoryParams(storyParams),
};
