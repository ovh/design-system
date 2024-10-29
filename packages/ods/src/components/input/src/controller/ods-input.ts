import { setInternalsValidityFromHtmlElement } from '../../../../utils/dom';

const VALUE_DEFAULT_VALUE = null;

function getInitialValue(value: string | number | null, defaultValue?: string | number): string | number | null {
  if (defaultValue !== undefined && value === VALUE_DEFAULT_VALUE) {
    return defaultValue;
  }

  return value;
}

async function handleKeySpace(event: KeyboardEvent, isDisabled: boolean, callback: () => Promise<void>): Promise<void> {
  event.preventDefault();
  if(event.key === ' ' && !isDisabled) {
    await callback();
  }
}

function isPassword(isMasked?: boolean): boolean {
  return isMasked !== undefined;
}

function updateInternals(internals: ElementInternals, value: number | string | null, inputEl?: HTMLInputElement): void {
  internals.setFormValue(value?.toString() ?? '');

  if (inputEl) {
    setInternalsValidityFromHtmlElement(inputEl, internals);
  }
}

export {
  getInitialValue,
  handleKeySpace,
  isPassword,
  updateInternals,
  VALUE_DEFAULT_VALUE,
};
