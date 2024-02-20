import type { ODS_DATEPICKER_DAY } from '../constants/datepicker-day';
import type { ODS_DATEPICKER_LOCALE } from '../constants/datepicker-locale';
import type { OdsCommonFieldAttribute } from '@ovhcloud/ods-common-core';

interface OdsDatepickerAttribute extends Omit<OdsCommonFieldAttribute, 'pattern'> {
  /**
   * Defines the Datepicker's disabled dates
   */
  datesDisabled?: Date[];
  /**
   * Defines the Datepicker's disabled days of the week (monday, tuesday...)
   */
  daysOfWeekDisabled?: ODS_DATEPICKER_DAY[];
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
   * Defines if the Datepicker should display others month days
   */
  showSiblingsMonthDays?: boolean;
}

export type {
  OdsDatepickerAttribute,
};
