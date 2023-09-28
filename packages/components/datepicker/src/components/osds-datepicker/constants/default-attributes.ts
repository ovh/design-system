import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
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
  maxDate: null,
  minDate: null,
  placeholder: '',
  value: null,
});

export {
  DEFAULT_ATTRIBUTE,
};
