import type { OsdsAutocomplete } from '../osds-autocomplete';

/**
 * common controller logic for input component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsAutocompleteController {
  private readonly component: OsdsAutocomplete;

  constructor(component: OsdsAutocomplete) {
    this.component = component;
  }

  onBlur() {
    this.component.hasFocus = false;
    this.component.emitBlur();
  }

  onChange(value?: string) {
    this.component.value = value;
  }

  onFocus() {
    if (!this.component.disabled) {
      this.component.hasFocus = true;
      this.component.emitFocus();
    }
  }
}

export {
  OdsAutocompleteController,
};
