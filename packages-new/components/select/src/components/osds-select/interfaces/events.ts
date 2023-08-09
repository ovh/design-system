import type { OdsInputValue, OdsValidityState } from '@ovhcloud/ods-common-core';
import type { EventEmitter } from '@stencil/core';
import type { OsdsSelectOption } from '../../osds-select-option/osds-select-option';

interface OdsSelectValueChangeEventDetail {
  value: OdsInputValue,
  oldValue?: OdsInputValue,
  validity: OdsValidityState,
  selection: OsdsSelectOption | null,
}

type OdsSelectValueChangeEvent = CustomEvent<OdsSelectValueChangeEventDetail>;

interface OdsSelectEvent {
  /**
   * Event triggered on select blur
   */
  odsBlur: EventEmitter<void>;
  /**
   * Event triggered on select focus
   */
  odsFocus: EventEmitter<void>;
  /**
   * Emitted when the value has changed
   */
  odsValueChange: EventEmitter<OdsSelectValueChangeEventDetail>;
}

export {
  OdsSelectEvent,
  OdsSelectValueChangeEvent,
  OdsSelectValueChangeEventDetail,
};
