import type { ODS_TIMEZONE } from '../constants/timezones';
import { ODS_TIMEZONES_PRESET } from '../constants/timezones-preset';

interface OdsTimepickerAttribute {
  /**
   * Defines if the Timepicker should be clearable or not (displays a clear button)
   */
  clearable?: boolean,
  /**
   * Defines the timezone to show by default in the select
   */
  currentTimezone?: ODS_TIMEZONE,
  /**
   * Defines the Timepicker's disabled state
   */
  disabled?: boolean,
  /**
   * Defines the Timepicker's error state
   */
  error?: boolean,
  /**
   * Defines if the Timepicker should be displayed inline or not
   */
  inline?: boolean,
  /**
   * Defines the timezones available to show in the select
   */
  timezones?: ODS_TIMEZONE[] | ODS_TIMEZONES_PRESET,
  /**
   * Defines the Timepicker's value
   */
  value?: string | null,
  /**
   * Defines if the Timepicker should be displayed seconds or not
   */
  withSeconds?: boolean
}

export {
  OdsTimepickerAttribute,
};
