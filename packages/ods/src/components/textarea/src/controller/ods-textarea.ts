import { setInternalsValidityFromHtmlElement } from '../../../../utils/dom';

function updateInternals(internals: ElementInternals, value: string | null, textareaElement?: HTMLTextAreaElement): void {
  internals.setFormValue(value ?? '');

  if (textareaElement) {
    setInternalsValidityFromHtmlElement(textareaElement, internals);
  }
}

export {
  updateInternals,
};
