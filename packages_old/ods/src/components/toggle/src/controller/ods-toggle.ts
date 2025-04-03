import { setInternalsValidityFromHtmlElement } from '../../../../utils/dom';

function hasValueChanged(value: boolean | null, previousValue?: string | null): boolean {
  switch (previousValue) {
    case '':
    case 'true':
      return value === false || value === null;
    case null:
    case 'false':
      return value === true;
    default:
      return false;
  }
}

function updateInternals(internals: ElementInternals, value: boolean | null, inputEl?: HTMLInputElement): void {
  internals.setFormValue(value?.toString() ?? '');

  if (inputEl) {
    setInternalsValidityFromHtmlElement(inputEl, internals);
  }
}

export {
  hasValueChanged,
  updateInternals,
};
