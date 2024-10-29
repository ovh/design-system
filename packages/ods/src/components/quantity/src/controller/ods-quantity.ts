import { setInternalsValidityFromOdsComponent } from '../../../../utils/dom';
import { isNumeric } from '../../../../utils/type';
import { type OdsInput } from '../../../input/src';

const VALUE_DEFAULT_VALUE = null;

function getInitialValue(value: number | null, defaultValue?: number): number | null {
  if (defaultValue !== undefined && value === VALUE_DEFAULT_VALUE) {
    return isNumeric(defaultValue) ? defaultValue : VALUE_DEFAULT_VALUE;
  }

  return isNumeric(value) ? value : VALUE_DEFAULT_VALUE;
}

function isMinusButtonDisabled(isDisabled: boolean, isReadonly: boolean, value: number | null, min?: number): boolean {
  return isDisabled || isReadonly || (min !== undefined && value !== null && min >= value);
}

function isPlusButtonDisabled(isDisabled: boolean, isReadonly: boolean, value: number | null, max?: number): boolean {
  return isDisabled || isReadonly || (max !== undefined && value !== null && max <= value);
}

async function updateInternals(internals: ElementInternals, value: number | null, inputEl?: HTMLElement & OdsInput): Promise<void> {
  internals.setFormValue(value?.toString() ?? '');

  if (inputEl) {
    await setInternalsValidityFromOdsComponent(inputEl, internals);
  }
}

export {
  getInitialValue,
  isMinusButtonDisabled,
  isPlusButtonDisabled,
  updateInternals,
  VALUE_DEFAULT_VALUE,
};
