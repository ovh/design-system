import type { OdsDatepickerAttribute } from '../interfaces/attributes';
import { ODS_DATEPICKER_LOCALE } from '../constants/datepicker-locale';

const DEFAULT_ATTRIBUTE: OdsDatepickerAttribute = Object.freeze({
  ariaLabel: null,
  clearable: false,
  defaultValue: null,
  disabled: false,
  error: false,
  format: 'dd/mm/yyyy',
  inline: false,
  locale: ODS_DATEPICKER_LOCALE.EN,
  name: '',
  showSiblingsMonthDays: true,
  value: null,
});

export {
  DEFAULT_ATTRIBUTE,
};
