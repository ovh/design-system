import { setInternalsValidity } from '../../../../utils/dom';

function updateInternals(internals: ElementInternals, value: string | null, textareaElement?: HTMLTextAreaElement): void {
  internals.setFormValue(value ?? '');

  if (textareaElement) {
    setInternalsValidity(textareaElement, internals);
  }
}

export {
  updateInternals,
};
