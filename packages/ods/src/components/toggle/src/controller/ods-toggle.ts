import { setInternalsValidityFromHtmlElement } from '../../../../utils/dom';

function updateInternals(internals: ElementInternals, value: boolean | null, inputEl?: HTMLInputElement): void {
  internals.setFormValue(value?.toString() ?? '');

  if (inputEl) {
    setInternalsValidityFromHtmlElement(inputEl, internals);
  }
}
export {
  updateInternals,
};
