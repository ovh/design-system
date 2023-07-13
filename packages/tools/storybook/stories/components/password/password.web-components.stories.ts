import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';

import { defineCustomElements } from '@ovhcloud/ods-stencil-password/loader';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';
import { OdsInputSizeList, odsPasswordDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';

import changelog from '@ovhcloud/ods-stencil-password/CHANGELOG.md';
import page from './password.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: odsPasswordDefaultAttributes.color,
    options: OdsThemeColorIntentList,
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: odsPasswordDefaultAttributes.size,
    options: OdsInputSizeList,
    control: { type: 'select' },
  },
  value: {
    category: 'Misc',
    control: { type: 'text' },
  },
  flex: {
    category: 'Misc',
    defaultValue: false,
  },
  clearable: {
    category: 'Misc',
    defaultValue: false,
  },
  loading: {
    category: 'Misc',
    defaultValue: false,
  },
  masked: {
    category: 'Misc',
    defaultValue: true,
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  name: {
    category: 'Misc',
    defaultValue: 'my-password'
  },
  placeholder: {
    category: 'Misc',
    defaultValue: 'Just ODS being ahead!'
  },
  required: {
    category: 'Misc',
    defaultValue: false,
  },
  forbiddenValues: {
    category: 'Misc',
    defaultValue: [],
    control: { type: 'array' },
  },
};

export default {
  title: 'UI Components/Password [molecule]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-password/modules/index.html'),
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const OsdsPasswordDefault = (args: Record<string, unknown>) => html`
  <osds-password ...=${getTagAttributes(args)}>
  </osds-password>
`;
const TemplateDefault = (args: Record<string, unknown>) => OsdsPasswordDefault(args);
export const Default = TemplateDefault.bind({});
type DefaultProps = {
  args: Record<string, unknown>;
};
(Default as unknown as DefaultProps).args = {
  ...(extractStoryParams(storyParams) as Record<string, unknown>),
};