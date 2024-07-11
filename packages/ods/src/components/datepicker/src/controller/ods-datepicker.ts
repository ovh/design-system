import { Datepicker } from 'vanillajs-datepicker';

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

function setFormValue(internals: ElementInternals, value: string | null): void {
  internals.setFormValue(value?.toString() ?? '');
}

export {
  formatDate,
  setFormValue,
};
