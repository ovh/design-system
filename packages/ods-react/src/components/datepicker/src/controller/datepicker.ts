import { type DateValue, parseDate } from '@ark-ui/react/date-picker';
import { DATEPICKER_VIEW, type DatepickerView } from '../constants/datepicker-view';

function getDefaultView(defaultView?: DatepickerView, maxView?: DatepickerView, minView?: DatepickerView): DatepickerView | undefined {
  const defaultValue = getViewValue(defaultView);
  const maxValue = getViewValue(maxView);
  const minValue = getViewValue(minView);

  if (minValue) {
    return defaultValue > minValue ? defaultView : minView;
  }

  if (maxValue) {
    return (defaultValue && defaultValue < maxValue) ? defaultView : maxView;
  }

  return defaultView || minView || maxView;
}

function getViewValue(view?: DatepickerView): number {
  switch (view) {
    case DATEPICKER_VIEW.day:
      return 1;
    case DATEPICKER_VIEW.month:
      return 2;
    case DATEPICKER_VIEW.year:
      return 3;
    default:
      return 0;
  }
}

function isSameAsDateValue(date: Date, dateValue: DateValue): boolean {
  const dateAsString = `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

  return dateAsString === dateValue.toString();
}

function toDate(value: DateValue): Date {
  return value.toDate('Europe/Paris');
}

function toDateValue(value?: Date | string | null): DateValue | null | undefined {
  if (value) {
    return parseDate(value);
  }
  if (value === null) {
    return null;
  }
  return undefined;
}

export {
  getDefaultView,
  isSameAsDateValue,
  toDate,
  toDateValue,
};
