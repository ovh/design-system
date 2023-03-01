import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';

import { defineCustomElements } from '@ovhcloud/ods-stencil-pagination/loader';

import { XDConfig } from 'storybook-addon-xd-designs/lib/config';
import { config } from 'storybook-addon-xd-designs';
import changelog from '@ovhcloud/ods-stencil-pagination/CHANGELOG.md';
import page from './pagination.web-component.stories.page.mdx';
import { getTagAttributes, extractArgTypes, extractStoryParams } from '../../../core/componentHTMLUtils';
import { odsPaginationDefaultAttributes, OdsPaginationSizeList } from '@ovhcloud/ods-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

defineCustomElements();

const storyParams = {
  color: {
    category: 'General',
    defaultValue: odsPaginationDefaultAttributes.color,
    options: [OdsThemeColorIntent.primary],
    control: { type: 'pagination' },
  },
  size: {
    category: 'General',
    defaultValue: odsPaginationDefaultAttributes.size,
    options: OdsPaginationSizeList,
    control: { type: 'pagination' },
  },
  disabled: {
    category: 'Misc',
    defaultValue: odsPaginationDefaultAttributes.disabled,
  },
  flex: {
    category: 'Misc',
    defaultValue: odsPaginationDefaultAttributes.flex,
  },
  required: {
    category: 'Misc',
    defaultValue: odsPaginationDefaultAttributes.required,
  },
};

export default {
  title: 'UI Components/Pagination [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('stencil-pagination/modules/index.html'),
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
  <osds-pagination ...=${getTagAttributes(args)}>
    <span slot="placeholder">Pagination Country</span>
    <osds-pagination-group>Group title</osds-pagination-group>
    <osds-pagination-option value="1">Value 1</osds-pagination-option>
    <osds-pagination-option value="2">Value 2</osds-pagination-option>
    <osds-pagination-option value="3">Value 3</osds-pagination-option>
  </osds-pagination>
`;
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};

/* Multi group */
const TemplateMultiGroup = (args: any) => html`
  <osds-pagination ...=${getTagAttributes(args)}>
    <span slot="placeholder">Pagination Country</span>
    <osds-pagination-group>Europa</osds-pagination-group>
    <osds-pagination-option value="1">Value 1</osds-pagination-option>
    <osds-pagination-option value="2">Value 2</osds-pagination-option>
    <osds-pagination-option value="3">Value 3</osds-pagination-option>
    <osds-pagination-group>North America</osds-pagination-group>
    <osds-pagination-option value="4">Value 4</osds-pagination-option>
    <osds-pagination-option value="5">Value 5</osds-pagination-option>
  </osds-pagination>
`;
export const MultiGroup = TemplateMultiGroup.bind({});
MultiGroup.args = {
  ...extractStoryParams(storyParams),
};
