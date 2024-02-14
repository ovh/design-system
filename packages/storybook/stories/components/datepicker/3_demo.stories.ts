import { ODS_DATEPICKER_DAYS, ODS_DATEPICKER_LOCALE } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-datepicker';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { CONTROL_CATEGORY, orderControls } from '../../controls';

defineCustomElement();

const today = new Date().toISOString().split('T')[0];

/* Default story parameters  */
const storyParams = orderControls({
  format: {
    category: CONTROL_CATEGORY.general,
    defaultValue: 'dd/mm/yyyy',
  },
  locale: {
    category: CONTROL_CATEGORY.general,
    defaultValue: ODS_DATEPICKER_LOCALE.EN,
    options: [ODS_DATEPICKER_LOCALE.EN, ODS_DATEPICKER_LOCALE.DE, ODS_DATEPICKER_LOCALE.ES, ODS_DATEPICKER_LOCALE.FR, ODS_DATEPICKER_LOCALE.IT, ODS_DATEPICKER_LOCALE.NL, ODS_DATEPICKER_LOCALE.PL, ODS_DATEPICKER_LOCALE.PT],
    control: { type: 'select' },
  },
  placeholder: {
    category: CONTROL_CATEGORY.general,
    defaultValue: '',
  },
  clearable: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  value: {
    category: CONTROL_CATEGORY.general,
    control: { type: 'object', format: 'date' },
  },
  datesDisabled: {
    category: CONTROL_CATEGORY.general,
    defaultValue: [],
    control: {
      type: 'select',
      options: ['2023-12-25', '2024-01-01', today],
    }
  },
  daysOfWeekDisabled: {
    category: CONTROL_CATEGORY.general,
    defaultValue: [],
    options: ODS_DATEPICKER_DAYS,
    description: 'Defines the Datepicker\'s disabled days of the week. Pick up a day from 0 (sunday) to 6 (saturday)'
  },
  disabled: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  error: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  inline: {
    category: CONTROL_CATEGORY.general,
    defaultValue: true,
  },
  minDate: {
    category: CONTROL_CATEGORY.general,
    defaultValue: null,
    options: ['1999-11-02', '2024-01-01'],
    control: { type: 'select' },
  },
  maxDate: {
    category: CONTROL_CATEGORY.general,
    defaultValue: null,
    options: ['1999-11-02', '2024-01-01'],
    control: { type: 'select' },
  },
  showSiblingsMonthDays: {
    category: CONTROL_CATEGORY.general,
    defaultValue: true,
  },
});

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
