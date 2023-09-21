import { html } from 'lit-html';
import { defineCustomElements } from '@ovhcloud/ods-components/datepicker/loader';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { DEFAULT_ATTRIBUTE } from '@ovhcloud/ods-components/datepicker/src/components/osds-datepicker/constants/default-attributes';
import { ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/datepicker/CHANGELOG.md';
// @ts-ignore
import page from './datepicker.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  clearable: {
    category: 'General',
    defaultValue: false,
  },
  color: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.color,
    options: ODS_THEME_COLOR_INTENTS,
    control: { type: 'select' },
  },
  disabled: {
    category: 'General',
    defaultValue: false,
  },
  error: {
    category: 'General',
    defaultValue: false,
  },
  format: {
    category: 'General',
    defaultValue: 'dd/mm/yyyy',
  },
  inline: {
    category: 'General',
    defaultValue: false,
  },
  placeholder: {
    category: 'General',
    defaultValue: '',
  },
};

export default {
  title: 'UI Components/Datepicker [molecule]/Web Component',
  id: 'datepicker',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page },
    options: {
      enableShortcuts: false,
    },
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const OsdsDatepickerDefault = (args: Record<string, unknown>) => html`
  <osds-datepicker ...=${getTagAttributes(args)}>
  </osds-datepicker>
`;
const TemplateDefault = (args: Record<string, unknown>) => OsdsDatepickerDefault(args);
export const Default = TemplateDefault.bind({});
type DefaultProps = {
  args: Record<string, unknown>;
};
(Default as unknown as DefaultProps).args = {
  ...(extractStoryParams(storyParams) as Record<string, unknown>)
};