import { ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { ODS_DATEPICKER_DAYS, ODS_DATEPICKER_LOCALE, ODS_DATEPICKER_LOCALES } from '@ovhcloud/ods-components/datepicker';
import { defineCustomElements } from '@ovhcloud/ods-components/datepicker/loader';
import { DEFAULT_ATTRIBUTE } from '@ovhcloud/ods-components/datepicker/src/components/osds-datepicker/constants/default-attributes';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

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
  locale: {
    category: 'General',
    defaultValue: ODS_DATEPICKER_LOCALE.EN,
    options: ODS_DATEPICKER_LOCALES,
    control: { type: 'select' },
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
  showSiblingsMonthDays: {
    category: 'General',
    defaultValue: true,
  },
};

export default {
  title: 'ODS Components/Form/Datepicker [molecule]/Demo',
  id: 'datepicker',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const isDateConstructorArg = (value: unknown): value is string | number | Date => {
  return typeof value === 'string' || typeof value === 'number' || value instanceof Date;
};

const OsdsDatepickerDefault = (args: Record<string, unknown>) => html`
  <osds-datepicker ...=${getTagAttributes({
    ...args,
    maxDate: isDateConstructorArg(args.maxDate) ? new Date(args.maxDate) : null,
    minDate: isDateConstructorArg(args.minDate) ? new Date(args.minDate) : null,
  })}>
  </osds-datepicker>
`;
const TemplateDefault = (args: Record<string, unknown>) => OsdsDatepickerDefault(args);
export const Default = TemplateDefault.bind({});
type DefaultProps = {
  args: Record<string, unknown>;
};
(Default as unknown as DefaultProps).args = {
  ...(extractStoryParams(storyParams) as Record<string, unknown>),
};
