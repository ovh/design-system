import { setInternalsValidityFromOdsComponent } from '../../../../utils/dom';
import { type OdsInput } from '../../../input/src';

function isMinusButtonDisabled(isDisabled: boolean, isReadonly: boolean, value: number | null, min?: number): boolean {
  return isDisabled || isReadonly || (min !== undefined && value !== null && min >= value);
}

function isPlusButtonDisabled(isDisabled: boolean, isReadonly: boolean, value: number | null, max?: number): boolean {
  return isDisabled || isReadonly || (max !== undefined && value !== null && max <= value);
}

//function updateInternals(internals: ElementInternals, value: number | string | null, inputEl?: HTMLInputElement): void {
async function updateInternals(internals: ElementInternals, value: number | string | null, inputEl?: HTMLElement & OdsInput): Promise<void> {
  internals.setFormValue(value?.toString() ?? '');

  if (inputEl) {
    await setInternalsValidityFromOdsComponent(inputEl, internals);
  }
}

export {
  isMinusButtonDisabled,
  isPlusButtonDisabled,
  updateInternals,
};
