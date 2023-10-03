import { html } from 'lit-html';
import { defineCustomElements } from '@ovhcloud/ods-components/datepicker/loader';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { DEFAULT_ATTRIBUTE } from '@ovhcloud/ods-components/datepicker/src/components/osds-datepicker/constants/default-attributes';
import { ODS_DATEPICKER_DAYS } from '@ovhcloud/ods-components/datepicker/src/components/osds-datepicker/constants/datepicker-day';
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
  daysOfWeekDisabled: {
    category: 'General',
    defaultValue: [],
    options: ODS_DATEPICKER_DAYS,
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
  maxDate: {
    category: 'General',
    defaultValue: null,
    options: ['1999-11-02', '2024-01-01'],
    control: { type: 'select' },
  },
  minDate: {
    category: 'General',
    defaultValue: null,
    options: ['1999-11-02', '2024-01-01'],
    control: { type: 'select' },
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
const isDateConstructorArg = (value: unknown): value is string | number | Date => {
  return typeof value === "string" || typeof value === "number" || value instanceof Date;
};

const OsdsDatepickerDefault = (args: Record<string, unknown>) => html`
  <osds-datepicker ...=${getTagAttributes({
    ...args,
    maxDate: isDateConstructorArg(args.maxDate) ? new Date(args.maxDate) : null,
    minDate: isDateConstructorArg(args.minDate) ? new Date(args.minDate) : null
  })}>
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