import { Datepicker } from 'vanillajs-datepicker';
import { setInternalsValidityFromHtmlElement } from '../../../../utils/dom';

function formatDate(date: Date | null, format: string): string {
  if (date && isDate(date)) {
    return Datepicker.formatDate(date, format);
  }
  return '';
}

function isDate(date: Date): boolean {
  // Needed as values from runtime are not TS problem anymore
  return date instanceof Date && !isNaN(date.valueOf());
}

function updateInternals(internals: ElementInternals, value: number | string | null, inputEl?: HTMLInputElement): void {
  internals.setFormValue(value?.toString() ?? '');

  if (inputEl) {
    setInternalsValidityFromHtmlElement(inputEl, internals);
  }
}

export {
  formatDate,
  updateInternals,
};
