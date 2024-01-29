import type { ODS_TIMEZONE } from '../constants/timezones';
import type { ODS_TIMEZONES_PRESET } from '../constants/timezones-preset';
import type { OdsCommonFieldAttribute } from '@ovhcloud/ods-common-core';

interface OdsTimepickerAttribute extends OdsCommonFieldAttribute {
  /**
   * Defines the timezone to show by default in the select
   */
  currentTimezone?: ODS_TIMEZONE,
  defaultValue: string | null,
  /**
   * Defines if the Timepicker should be displayed inline or not
   */
  inline?: boolean,
  /**
   * Defines the timezones available to show in the select
   */
  timezones?: ODS_TIMEZONE[] | ODS_TIMEZONES_PRESET | string,
  /**
   * Defines if the Timepicker should be displayed seconds or not
   */
  withSeconds?: boolean
}

export type {
  OdsTimepickerAttribute,
};
