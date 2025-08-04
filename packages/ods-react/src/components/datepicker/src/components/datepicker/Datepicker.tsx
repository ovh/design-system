import { DatePicker, type DatePickerValueChangeDetails, type DateValue } from '@ark-ui/react/date-picker';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useCallback, useMemo } from 'react';
import { useFormField } from '../../../../form-field/src';
import { DatepickerProvider , type DatepickerRootProp } from '../../contexts/useDatepicker';
import { getDefaultView, isSameAsDateValue, toDate, toDateValue } from '../../controller/datepicker';
import style from './datepicker.module.scss';

interface DatepickerProp extends Omit<ComponentPropsWithRef<'div'>, 'defaultValue'>, DatepickerRootProp {}

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
        data-ods="datepicker"
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
  type DatepickerProp,
};
