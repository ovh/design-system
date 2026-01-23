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
  positionerStyle,
  readOnly,
  required,
  value,
  view,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();
  const computedDefaultView = useMemo(() => getDefaultView(defaultView, maxView, minView), [defaultView, maxView, minView]);
  const convertedDefaultValue = useMemo(() => toDateValue(defaultValue) as DateValue | undefined, [defaultValue]);
  const convertedMax = useMemo(() => toDateValue(max) as DateValue | undefined, [max]);
  const convertedMin = useMemo(() => toDateValue(min) as DateValue | undefined, [min]);
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
        value: value && value.length ? toDate(value[0]) : null,
        valueAsString: valueAsString && valueAsString.length ? valueAsString[0] : null,
      });
    }
  }

  return (
    <DatepickerProvider
      invalid={ invalid }
      positionerStyle={ positionerStyle }
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
        view={ view }
        { ...(convertedValue !== undefined ? {
          value: convertedValue ? [convertedValue] : [],
        } : {})}
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
