import { setInternalsValidityFromHtmlElement } from '../../../../utils/dom';

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
  handleKeySpace,
  isPassword,
  updateInternals,
};
