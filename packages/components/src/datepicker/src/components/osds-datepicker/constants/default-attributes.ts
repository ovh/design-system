import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_DATEPICKER_LOCALE } from '../constants/datepicker-locale';
import { OdsDatepickerAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsDatepickerAttribute = Object.freeze({
  ariaLabel: null,
  clearable: false,
  color: ODS_THEME_COLOR_INTENT.primary,
  datesDisabled: [],
  daysOfWeekDisabled: [],
  defaultValue: '',
  disabled: false,
  error: false,
  format: 'dd/mm/yyyy',
  inline: false,
  locale: ODS_DATEPICKER_LOCALE.EN,
  maxDate: null,
  minDate: null,
  name: '',
  placeholder: '',
  showSiblingsMonthDays: true,
  value: null,
});

export {
  DEFAULT_ATTRIBUTE,
};
