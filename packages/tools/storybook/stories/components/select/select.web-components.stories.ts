import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';


import { defineCustomElements } from '@ovhcloud/ods-stencil-select/loader';

import { XDConfig } from 'storybook-addon-xd-designs/lib/config';
import { config } from 'storybook-addon-xd-designs';
import changelog from '@ovhcloud/ods-stencil-select/CHANGELOG.md';
import page from './select.web-component.stories.page.mdx';
import { getTagAttributes, extractArgTypes, extractStoryParams } from '../../../core/componentHTMLUtils';
import { odsSelectDefaultAttributes, OdsSelectSizeList } from '@ovhcloud/ods-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

defineCustomElements();

const storyParams = {
  color: {
    category: 'General',
    defaultValue: odsSelectDefaultAttributes.color,
    options: [OdsThemeColorIntent.primary],
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: odsSelectDefaultAttributes.size,
    options: OdsSelectSizeList,
    control: { type: 'select' },
  },
  disabled: {
    category: 'Misc',
    defaultValue: odsSelectDefaultAttributes.disabled,
  },
  flex: {
    category: 'Misc',
    defaultValue: odsSelectDefaultAttributes.flex,
  },
  required: {
    category: 'Misc',
    defaultValue: odsSelectDefaultAttributes.required,
  },
};

export default {
  title: 'UI Components/Select [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('stencil-select/modules/index.html'),
      changelog,
    },
    docs: { page },
    design: config({
      artboardUrl: 'https://xd.adobe.com/view/9bb1ccc1-e850-428c-9fd2-d4a60718a440-cee2/screen/de3e2df7-15a7-4d3b-a452-b3bdfdc28911/Desktop',
    } as XDConfig),
  },
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const TemplateDefault = (args: any) => html`
  <osds-select style="width:20%" ...=${getTagAttributes(args)}>
    <span slot="placeholder">Select Country</span>
    <osds-select-group>Group title</osds-select-group>
    <osds-select-option value="1">Value 1</osds-select-option>
    <osds-select-option value="2">Value 2</osds-select-option>
    <osds-select-option value="3">Value 3</osds-select-option>
  </osds-select>
`;
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};

/* Multi group */
const TemplateMultiGroup = (args: any) => html`
  <osds-select style="width:20%" ...=${getTagAttributes(args)}>
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
MultiGroup.args = {
  ...extractStoryParams(storyParams),
};
