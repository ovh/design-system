import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

import { ODS_DATEPICKER_LOCALE } from '../constants/datepicker-locale';
import { OdsDatepickerAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsDatepickerAttribute = Object.freeze({
  clearable: false,
  color: ODS_THEME_COLOR_INTENT.primary,
  datesDisabled: [],
  daysOfWeekDisabled: [],
  disabled: false,
  error: false,
  format: 'dd/mm/yyyy',
  inline: false,
  locale: ODS_DATEPICKER_LOCALE.EN,
  maxDate: null,
  minDate: null,
  placeholder: '',
  showOthersMouthDay: true,
  value: null,
});

export {
  DEFAULT_ATTRIBUTE,
};
