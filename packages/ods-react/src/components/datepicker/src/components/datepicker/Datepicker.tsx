import { DatePicker, type DatePickerValueChangeDetails, type DateValue } from '@ark-ui/react/date-picker';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useCallback, useMemo } from 'react';
import { useFormField } from '../../../../form-field/src';
import { type DATEPICKER_DAY } from '../../constants/datepicker-day';
import { type DatepickerView } from '../../constants/datepicker-view';
import { type DatepickerContextType, DatepickerProvider } from '../../contexts/useDatepicker';
import { getDefaultView, isSameAsDateValue, parseDateFormat, toDate, toDateValue } from '../../controller/datepicker';
import style from './datepicker.module.scss';

interface DatepickerFormatterArg {
  date: Date,
  locale: string,
}

interface DatepickerValueChangeDetail {
  value: Date,
  valueAsString: string,
}

/**
 * @inheritDoc DatepickerContextType
 */
interface DatepickerProp extends Omit<ComponentPropsWithRef<'div'>, 'defaultValue'>, DatepickerContextType {
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
   * Format string for displaying the date in the input.
   * Supports common patterns: dd, mm, yyyy, yy
   * Predefined formats: 'dd/MM/yyyy', 'dd-MM-yyyy', 'yyyy-MM-dd', 'MM/dd/yyyy'
   * Default: 'dd/MM/yyyy'
   */
  format?: string,
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
   * The controlled selected date.
   */
  value?: Date | string,
  /**
   * The controlled view of the calendar (day, month, year).
   */
  view?: DatepickerView,
}

const Datepicker: FC<DatepickerProp> = forwardRef(({
  children,
  className,
  dateFormatter,
  defaultOpen,
  defaultValue,
  defaultView,
  disabled,
  disabledDates,
  disabledWeekDays,
  format = 'dd/MM/yyyy',
  id,
  invalid,
  locale,
  max,
  maxView,
  min,
  minView,
  name,
  onValueChange,
  open,
  placeholder,
  readOnly,
  required,
  value,
  view,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();
  const computedDefaultView = useMemo(() => getDefaultView(defaultView, maxView, minView), [defaultView, maxView, minView]);
  const convertedDefaultValue = useMemo(() => toDateValue(defaultValue), [defaultValue]);
  const convertedMax = useMemo(() => toDateValue(max), [max]);
  const convertedMin = useMemo(() => toDateValue(min), [min]);
  const convertedValue = useMemo(() => toDateValue(value), [value]);

  const isDateUnavailable = useCallback((date: DateValue) => {
    if (disabledWeekDays && (disabledWeekDays || []).indexOf(toDate(date).getDay()) > -1) {
      return true;
    }

    return (disabledDates || []).some((d) => isSameAsDateValue(d, date));
  }, [disabledDates, disabledWeekDays]);

  function formatDate(date: DateValue, { locale: formatLocale }: { locale: string }): string {
    if (format) {
      return parseDateFormat(toDate(date), format);
    }

    if (dateFormatter) {
      return dateFormatter({ date: toDate(date), locale: formatLocale });
    }

    return '';
  }

  function onChange({ value, valueAsString }: DatePickerValueChangeDetails): void {
    if (onValueChange) {
      onValueChange({
        value: toDate(value[0]),
        valueAsString: valueAsString[0],
      });
    }
  }

  return (
    <DatepickerProvider
      invalid={ invalid }
      required={ required }>
      <DatePicker.Root
        className={ classNames(style['datepicker'], className) }
        defaultOpen={ defaultOpen }
        defaultValue={ convertedDefaultValue && [convertedDefaultValue] }
        defaultView = { computedDefaultView }
        disabled={ disabled }
        fixedWeeks={ true }
        format={ (format || dateFormatter) ? formatDate : undefined }
        id={ id || fieldContext?.id }
        isDateUnavailable={ isDateUnavailable }
        locale={ locale }
        max={ convertedMax }
        maxView={ maxView }
        min={ convertedMin }
        minView={ minView }
        name={ name }
        onValueChange={ onChange }
        open={ open }
        outsideDaySelectable={ true }
        placeholder={ placeholder }
        positioning={{
          gutter: 4,
          placement: 'bottom-start',
        }}
        readOnly={ readOnly }
        ref={ ref }
        value={ convertedValue && [convertedValue] }
        view={ view }
        { ...props }>
        { children }
      </DatePicker.Root>
    </DatepickerProvider>
  );
});

Datepicker.displayName = 'Datepicker';

export {
  Datepicker,
  type DatepickerFormatterArg,
  type DatepickerValueChangeDetail,
  type DatepickerProp,
};
