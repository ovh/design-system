import { DatePicker, type DatePickerValueChangeDetails, type DateValue } from '@ark-ui/react/date-picker';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useCallback, useMemo } from 'react';
import { useFormField } from '../../../../form-field/src';
import { type DATEPICKER_DAY } from '../../constants/datepicker-day';
import { type DatepickerView } from '../../constants/datepicker-view';
import { type DatepickerContextType, DatepickerProvider } from '../../contexts/useDatepicker';
import { getDefaultView, isSameAsDateValue, toDate, toDateValue } from '../../controller/datepicker';
import style from './datepicker.module.scss';

interface DatepickerFormatterArg {
  date: Date,
  locale: string,
}

interface DatepickerValueChangeDetail {
  value: Date,
  valueAsString: string,
}

interface DatepickerProp extends Omit<ComponentPropsWithRef<'div'>, 'defaultValue'>, DatepickerContextType {
  dateFormatter?: (arg: DatepickerFormatterArg) => string,
  defaultOpen?: boolean,
  defaultValue?: Date | string,
  defaultView?: DatepickerView,
  disabled?: boolean,
  disabledDates?: Date[],
  disabledWeekDays?: DATEPICKER_DAY[],
  locale?: string,
  max?: Date | string,
  maxView?: DatepickerView,
  min?: Date | string,
  minView?: DatepickerView,
  name?: string,
  onValueChange?: (detail: DatepickerValueChangeDetail) => void,
  open?: boolean,
  placeholder?: string,
  readOnly?: boolean,
  value?: Date | string,
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

  function formatDate(date: DateValue, { locale }: { locale: string }): string {
    if (dateFormatter) {
      return dateFormatter({ date: toDate(date), locale });
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
        format={ dateFormatter ? formatDate : undefined }
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
