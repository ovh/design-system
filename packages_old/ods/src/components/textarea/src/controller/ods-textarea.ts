import { setInternalsValidityFromHtmlElement } from '../../../../utils/dom';

const VALUE_DEFAULT_VALUE = null;

function getInitialValue(value: string | null, defaultValue?: string): string | null {
  if (defaultValue !== undefined && value === VALUE_DEFAULT_VALUE) {
    return defaultValue;
  }

  return value;
}

function updateInternals(internals: ElementInternals, value: string | null, textareaElement?: HTMLTextAreaElement): void {
  internals.setFormValue(value ?? '');

  if (textareaElement) {
    setInternalsValidityFromHtmlElement(textareaElement, internals);
  }
}

export {
  getInitialValue,
  updateInternals,
  VALUE_DEFAULT_VALUE,
};
