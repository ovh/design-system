import { Datepicker } from 'vanillajs-datepicker';
import { setInternalsValidityFromHtmlElement } from '../../../../utils/dom';

const VALUE_DEFAULT_VALUE = null;

function formatDate(date: Date | number | null, format: string): string {
  if (date) {
    return Datepicker.formatDate(date, format);
  }
  return '';
}

function getInitialValue(value: Date | null, format: string, defaultValue?: Date | string): Date | null {
  if (defaultValue !== undefined && value === VALUE_DEFAULT_VALUE) {
    return new Date(Datepicker.parseDate(defaultValue, format));
  }

  return value;
}

function parseDate(dateStr: string | number, format: string): Date | null {
  if (dateStr) {
    return new Date(Datepicker.parseDate(dateStr, format));
  }
  return null;
}

function updateInternals(internals: ElementInternals, value: number | string | null, inputEl?: HTMLInputElement): void {
  internals.setFormValue(value?.toString() ?? '');

  if (inputEl) {
    setInternalsValidityFromHtmlElement(inputEl, internals);
  }
}

export {
  formatDate,
  getInitialValue,
  parseDate,
  updateInternals,
  VALUE_DEFAULT_VALUE,
};
