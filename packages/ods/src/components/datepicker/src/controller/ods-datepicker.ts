import { Datepicker } from 'vanillajs-datepicker';
import { setInternalsValidityFromHtmlElement } from '../../../../utils/dom';
import { isDate } from '../../../../utils/type';

const VALUE_DEFAULT_VALUE = null;

function formatDate(date: Date | null, format: string): string {
  if (date && isDate(date)) {
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

function updateInternals(internals: ElementInternals, value: number | string | null, inputEl?: HTMLInputElement): void {
  internals.setFormValue(value?.toString() ?? '');

  if (inputEl) {
    setInternalsValidityFromHtmlElement(inputEl, internals);
  }
}

export {
  formatDate,
  getInitialValue,
  updateInternals,
  VALUE_DEFAULT_VALUE,
};
