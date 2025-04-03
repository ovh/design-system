import type { OdsInput } from '../../../input/src';
import { setInternalsValidityFromOdsComponent } from '../../../../utils/dom';

const VALUE_DEFAULT_VALUE = null;

function getInitialValue(value: string | null, defaultValue?: string): string | null {
  if (defaultValue !== undefined && value === VALUE_DEFAULT_VALUE) {
    return defaultValue;
  }

  return value;
}

async function updateInternals(internals: ElementInternals, value: string | null, inputEl?: HTMLElement & OdsInput): Promise<void> {
  internals.setFormValue(value?.toString() ?? '');

  if (inputEl) {
    await setInternalsValidityFromOdsComponent(inputEl, internals);
  }
}

export {
  getInitialValue,
  updateInternals,
  VALUE_DEFAULT_VALUE,
};
