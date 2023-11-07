import { html } from 'lit-html';
import { defineCustomElements } from '@ovhcloud/ods-components/timepicker/loader';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { DEFAULT_ATTRIBUTE } from '@ovhcloud/ods-components/timepicker/src/components/osds-timepicker/constants/default-attributes';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/timepicker/CHANGELOG.md';
// @ts-ignore
import page from './timepicker.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  clearable: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.clearable,
  },
  disabled: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.disabled,
  },
  error: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.error,
  },
  inline: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.inline,
  },
  withSeconds: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.withSeconds,
  },
  value: {
    category: 'Value',
    defaultValue: "",
  },
  timezones: {
    category: 'Timezones',
    defaultValue: null,
  },
  currentTimezone: {
    category: 'Timezones',
    defaultValue: null,
  },
};

export default {
  title: 'UI Components/Timepicker [molecule]/Web Component',
  id: 'timepicker',
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

const OsdsTimepickerDefault = (args: Record<string, unknown>) => html`
  <osds-timepicker ...=${getTagAttributes({
  ...args,
})}>
  </osds-timepicker>
`;
const TemplateDefault = (args: Record<string, unknown>) => OsdsTimepickerDefault(args);
export const Default = TemplateDefault.bind({});
type DefaultProps = {
  args: Record<string, unknown>;
};
(Default as unknown as DefaultProps).args = {
  ...(extractStoryParams(storyParams) as Record<string, unknown>)
};
