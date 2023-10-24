import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import type { ODS_DATEPICKER_DAY } from '../constants/datepicker-day';
import type { ODS_DATEPICKER_LOCALE } from '../constants/datepicker-locale';

interface OdsDatepickerAttribute {
  /**
   * Defines if the Datepicker should be clearable or not (displays a clear button)
   */
  clearable?: boolean;
  /**
   * Defines the Datepicker's color (see component principles)
   */
  color?: ODS_THEME_COLOR_INTENT;
  /**
   * Defines the Datepicker's disabled dates
   */
  datesDisabled?: Date[];
  /**
   * Defines the Datepicker's disabled days of the week (monday, tuesday...)
   */
  daysOfWeekDisabled?: ODS_DATEPICKER_DAY[];
  /**
   * Defines if the Datepicker should be disabled or not (lower opacity and not interactable)
   */
  disabled?: boolean;
  /**
   * Defines if the Datepicker should display an error message
   */
  error?: boolean;
  /**
   * Defines which format the Datepicker should be applying (supported formats: https://mymth.github.io/vanillajs-datepicker/#/date-string+format?id=date-format)
   */
  format?: string;
  /**
   * Defines if the Datepicker should be displayed inline or not
   */
  inline?: boolean;
  /**
   * Defines the locale to use
   */
  locale?: ODS_DATEPICKER_LOCALE;
  /**
   * Defines the Datepicker's maximum selectable date
   */
  maxDate?: Date | undefined | null;
  /**
   * Defines the Datepicker's minimum selectable date
   */
  minDate?: Date | undefined | null;
  /**
   * Defines if the Datepicker should display a placeholder message
   */
  placeholder?: string;
  /**
   * Defines the Datepicker's value (Date object)
   */
  value?: Date | undefined | null;
}

export {
  OdsDatepickerAttribute,
};
