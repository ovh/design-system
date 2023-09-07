import { html } from 'lit-html';
import { getTagAttributes, extractArgTypes, extractStoryParams } from '../../../core/componentHTMLUtils';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_SELECT_SIZES } from '@ovhcloud/ods-components/select';
import { defineCustomElements } from '@ovhcloud/ods-components/select/loader';
import { DEFAULT_ATTRIBUTE } from '@ovhcloud/ods-components/select/src/components/osds-select/constants/default-attributes';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/select/CHANGELOG.md';
// @ts-ignore
import page from './select.web-component.stories.page.mdx';

defineCustomElements();

const storyParams = {
  color: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.color,
    options: [ODS_THEME_COLOR_INTENT.primary],
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
    <osds-select-option value="3">
      Value 3 (will show '3' as label)
      <span slot='selectedLabel'>3</span>
    </osds-select-option>
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
    <osds-select-option value="4">
      Value 4 (will show '4' as label)
      <span slot='selectedLabel'>4</span>
    </osds-select-option>
    <osds-select-option value="5">
      Value 5 (will show '5' as label)
      <span slot='selectedLabel'>5</span>
    </osds-select-option>
    <osds-select-option value="6">
      Value 6 (will show '6' as label)
      <span slot='selectedLabel'>6</span>
    </osds-select-option>
  </osds-select>
`;
export const MultiGroup = TemplateMultiGroup.bind({});
// @ts-ignore
MultiGroup.args = {
  ...extractStoryParams(storyParams),
};
