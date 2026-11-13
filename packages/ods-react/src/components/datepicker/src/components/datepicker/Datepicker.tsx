import { DatePicker, type DatePickerDateView, type DatePickerRootProps, type DatePickerValueChangeDetails, type DateValue } from '@ark-ui/react/date-picker';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useCallback, useMemo } from 'react';
import { useI18n } from '../../../../../hooks/useI18n';
import { type Locale } from '../../../../../utils/locales';
import { useFormField } from '../../../../form-field/src';
import { DATEPICKER_I18N, TRANSLATION } from '../../constants/datepicker-i18n';
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
  i18n,
  id,
  invalid,
  locale,
  max,
  maxView,
  min,
  minView,
  name,
  onOpenChange,
  onValueChange,
  open,
  overlayConfig,
  placeholder,
  positionerStyle,
  readOnly,
  required,
  value,
  view,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();
  const { translate } = useI18n(TRANSLATION, locale as Locale, i18n);
  const translations = useMemo((): DatePickerRootProps['translations'] => {
    const nextButton: Record<DatePickerDateView, DATEPICKER_I18N> = {
      day: DATEPICKER_I18N.nextMonthButton,
      month: DATEPICKER_I18N.nextYearButton,
      year: DATEPICKER_I18N.nextDecadeButton,
    };
    const previousButton: Record<DatePickerDateView, DATEPICKER_I18N> = {
      day: DATEPICKER_I18N.previousMonthButton,
      month: DATEPICKER_I18N.previousYearButton,
      year: DATEPICKER_I18N.previousDecadeButton,
    };

    return {
      content: translate(DATEPICKER_I18N.calendar),
      dayCell: ({ unavailable, valueText }): string => {
        return unavailable ? `${valueText}, ${translate(DATEPICKER_I18N.unavailableDate)}` : valueText;
      },
      nextTrigger: (view): string => translate(nextButton[view]),
      prevTrigger: (view): string => translate(previousButton[view]),
      trigger: (open): string => translate(open ? DATEPICKER_I18N.closeCalendarButton : DATEPICKER_I18N.openCalendarButton),
      // Without a next view, the trigger is disabled and named by its range text.
      viewTrigger: (_, nextView): string => {
        if (!nextView) {
          return '';
        }
        return translate(nextView === 'year' ? DATEPICKER_I18N.yearViewButton : DATEPICKER_I18N.monthViewButton);
      },
    };
  }, [translate]);
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
      i18n={ i18n }
      invalid={ invalid }
      locale={ locale }
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
        onOpenChange={ onOpenChange }
        onValueChange={ onChange }
        open={ open }
        outsideDaySelectable={ true }
        placeholder={ placeholder }
        positioning={{
          flip: overlayConfig?.flip,
          gutter: 4,
          placement: 'bottom-start',
        }}
        readOnly={ readOnly }
        ref={ ref }
        translations={ translations }
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
