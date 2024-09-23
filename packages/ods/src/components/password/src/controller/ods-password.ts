import type { OdsInput } from '../../../input/src';
import { setInternalsValidityFromOdsComponent } from '../../../../utils/dom';

async function updateInternals(internals: ElementInternals, value: string | null, inputEl?: HTMLElement & OdsInput): Promise<void> {
  internals.setFormValue(value?.toString() ?? '');

  if (inputEl) {
    await setInternalsValidityFromOdsComponent(inputEl, internals);
  }
}

export {
  updateInternals,
};
