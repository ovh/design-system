import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_DATEPICKER_DAYS, ODS_DATEPICKER_LOCALE, ODS_DATEPICKER_LOCALES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-datepicker';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

const today = new Date().toISOString().split('T')[0];

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.primary,
    options: [ODS_THEME_COLOR_INTENT.primary],
    control: { type: 'select' },
  },
  format: {
    category: 'General',
    defaultValue: 'dd/mm/yyyy',
  },
  locale: {
    category: 'General',
    defaultValue: ODS_DATEPICKER_LOCALE.EN,
    options: ODS_DATEPICKER_LOCALES,
    control: { type: 'select' },
  },
  placeholder: {
    category: 'General',
    defaultValue: '',
  },
  clearable: {
    category: 'General',
    defaultValue: false,
  },
  value: {
    category: 'General',
    control: { type: 'object', format: 'date' },
  },
  datesDisabled: {
    category: 'General',
    defaultValue: [],
    control: {
      type: 'select',
      options: ['2023-12-25', '2024-01-01', today],
    }
  },
  daysOfWeekDisabled: {
    category: 'General',
    defaultValue: [],
    options: ODS_DATEPICKER_DAYS,
    description: 'Defines the Datepicker\'s disabled days of the week. Pick up a day from 0 (sunday) to 6 (saturday)'
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  error: {
    category: 'Misc',
    defaultValue: false,
  },
  inline: {
    category: 'Misc',
    defaultValue: true,
  },
  minDate: {
    category: 'Development',
    defaultValue: null,
    options: ['1999-11-02', '2024-01-01'],
    control: { type: 'select' },
  },
  maxDate: {
    category: 'Development',
    defaultValue: null,
    options: ['1999-11-02', '2024-01-01'],
    control: { type: 'select' },
  },
  showSiblingsMonthDays: {
    category: 'Development',
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

const OsdsDatepickerDefault = (args: Record<string, unknown>) => {
  return   html`
  <osds-datepicker ...=${getTagAttributes({
    ...args,
    maxDate: isDateConstructorArg(args.maxDate) ? new Date(args.maxDate) : null,
    minDate: isDateConstructorArg(args.minDate) ? new Date(args.minDate) : null,
    datesDisabled: isDateConstructorArg(args.datesDisabled) ? [new Date(args.datesDisabled)] : null,
  })}>
  </osds-datepicker>
`;
}

const TemplateDefault = (args: Record<string, unknown>) => OsdsDatepickerDefault(args);
export const Demo = TemplateDefault.bind({});
type DefaultProps = {
  args: Record<string, unknown>;
};

(Demo as unknown as DefaultProps).args = {
  ...(extractStoryParams(storyParams) as Record<string, unknown>),
  value: new Date(),
};
