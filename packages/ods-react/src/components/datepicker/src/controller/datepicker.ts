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

function toDateValue(value?: Date | string): DateValue | undefined {
  if (value) {
    return parseDate(value);
  }
}

/**
 * Parse a date format string using native Intl API.
 * Supports common patterns: dd, mm, yyyy, yy
 */
function parseDateFormat(date: Date, formatString: string): string {
  if (!formatString || formatString.trim() === '') {
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date);
  }

  try {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    if (formatString === 'dd/MM/yyyy') {
      return formatter.format(date);
    } else if (formatString === 'dd-MM-yyyy') {
      return formatter.format(date).replace(/\//g, '-');
    } else if (formatString === 'yyyy-MM-dd') {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    } else if (formatString === 'MM/dd/yyyy') {
      const usFormatter = new Intl.DateTimeFormat('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
      return usFormatter.format(date);
    }

    const hasValidPatterns = /(yyyy|yy|dd|d|MM|mm|M|m)/.test(formatString);
    if (!hasValidPatterns) {
      return new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }).format(date);
    }

    return formatString
      .replace(/yyyy/g, date.getFullYear().toString())
      .replace(/yy/g, date.getFullYear().toString().slice(-2))
      .replace(/dd/g, date.getDate().toString().padStart(2, '0'))
      .replace(/d/g, date.getDate().toString())
      .replace(/MM/g, (date.getMonth() + 1).toString().padStart(2, '0'))
      .replace(/mm/g, (date.getMonth() + 1).toString().padStart(2, '0'))
      .replace(/M/g, (date.getMonth() + 1).toString())
      .replace(/m/g, (date.getMonth() + 1).toString());
  } catch (error) {
    console.warn(`Invalid date format: "${formatString}". Using default format.`);
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date);
  }
}

export {
  getDefaultView,
  isSameAsDateValue,
  parseDateFormat,
  toDate,
  toDateValue,
};
