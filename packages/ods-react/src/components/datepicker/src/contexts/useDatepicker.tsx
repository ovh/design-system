import { type JSX, type ReactNode, createContext, useContext } from 'react';
import { type INPUT_I18N } from '../../../input/src';
import { type DATEPICKER_DAY } from '../constants/datepicker-day';
import { type DatepickerView } from '../constants/datepicker-view';

interface DatepickerFormatterArg {
  date: Date,
  locale: string,
}

interface DatepickerValueChangeDetail {
  value: Date,
  valueAsString: string,
}

interface DatepickerRootProp {
  /**
   * Format the date to display in the input.
   */
  dateFormatter?: (arg: DatepickerFormatterArg) => string,
  /**
   * The initial open state of the datepicker. Use when you don't need to control the open state of the datepicker.
   */
  defaultOpen?: boolean,
  /**
   * The initial selected date. Use when you don't need to control the selected date of the datepicker.
   */
  defaultValue?: Date | string,
  /**
   * The default view of the calendar (day, month, year).
   */
  defaultView?: DatepickerView,
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean,
  /**
   * List of dates that cannot be selected.
   */
  disabledDates?: Date[],
  /**
   * List of week days that cannot be selected.
   */
  disabledWeekDays?: DATEPICKER_DAY[],
  /**
   * Internal translations override (see Input i18n keys).
   */
  i18n?: Partial<Record<INPUT_I18N.clearButton, string>>,
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean,
  /**
   * The locale to use when formatting the date.
   */
  locale?: string,
  /**
   * The maximum date that can be selected.
   */
  max?: Date | string,
  /**
   * The maximum view of the calendar (day, month, year).
   */
  maxView?: DatepickerView,
  /**
   * The minimum date that can be selected.
   */
  min?: Date | string,
  /**
   * The minimum view of the calendar (day, month, year).
   */
  minView?: DatepickerView,
  /**
   * The name of the form element. Useful for form submission.
   */
  name?: string,
  /**
   * Callback fired when the value changes.
   */
  onValueChange?: (detail: DatepickerValueChangeDetail) => void,
  /**
   * The controlled open state of the datepicker.
   */
  open?: boolean,
  /**
   * The placeholder text to display in the input.
   */
  placeholder?: string,
  /**
   * Whether the component is readonly.
   */
  readOnly?: boolean,
  /**
   * Whether the component is required.
   */
  required?: boolean,
  /**
   * The controlled selected date.
   */
  value?: Date | string,
  /**
   * The controlled view of the calendar (day, month, year).
   */
  view?: DatepickerView,
}

type DatepickerContextType = Pick<DatepickerRootProp, 'i18n' | 'invalid' | 'locale' | 'required'>;

interface DatepickerProviderProp extends DatepickerContextType {
  children: ReactNode,
}

const DatepickerContext = createContext<DatepickerContextType>({});

function DatepickerProvider({ children, i18n, invalid, locale, required }: DatepickerProviderProp): JSX.Element {
  return (
    <DatepickerContext.Provider value={{
      i18n,
      invalid,
      locale,
      required,
    }}>
      { children }
    </DatepickerContext.Provider>
  );
}

function useDatepicker(): DatepickerContextType {
  return useContext(DatepickerContext);
}

export {
  type DatepickerContextType,
  type DatepickerFormatterArg,
  DatepickerProvider,
  type DatepickerRootProp,
  type DatepickerValueChangeDetail,
  useDatepicker,
};
