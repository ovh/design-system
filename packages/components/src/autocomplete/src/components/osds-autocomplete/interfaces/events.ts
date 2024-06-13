import type { OsdsSelectOption } from '../../../../../select/src/components/osds-select-option/osds-select-option';
import type { OdsInputValue, OdsValidityState } from '@ovhcloud/ods-common-core';
import type { EventEmitter } from '@stencil/core';

interface OdsAutocompleteValueChangeEventDetail {
  name?: string,
  oldValue?: OdsInputValue,
  selection: OsdsSelectOption | null,
  validity: OdsValidityState,
  value: OdsInputValue,
}

type OdsAutocompleteValueChangeEvent = CustomEvent<OdsAutocompleteValueChangeEventDetail>;

interface OdsAutocompleteEvent {
  /**
   * Event triggered on Autocomplete's blur
   */
  odsBlur: EventEmitter<void>;
  /**
   * Event triggered on Autocomplete's focus
   */
  odsFocus: EventEmitter<void>;
  /**
   * Event emitted on value change
   */
  odsValueChange: EventEmitter<OdsAutocompleteValueChangeEventDetail>;
}

export type {
  OdsAutocompleteEvent,
  OdsAutocompleteValueChangeEvent,
  OdsAutocompleteValueChangeEventDetail,
};
