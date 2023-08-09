import type { OdsFocusChangeEventDetail } from "@ovhcloud/ods-common-core";
import type { EventEmitter } from '@stencil/core';

interface OdsCheckboxCheckedChangeEventDetail {
  checked: boolean;
  value: string;
}

interface OdsCheckboxUpdatingChangeEventDetail {
  updating: boolean;
  value: string;
}

interface OdsCheckboxFocusChangeEventDetail extends OdsFocusChangeEventDetail {
  value: string;
}

interface OdsCheckboxEvent {
  /**
   * Event triggered on checkbox blur
   * @see OdsCheckboxBehavior.onBlur
   * @see OdsCheckboxBehavior.emitBlur
   */
  odsBlur: EventEmitter<OdsCheckboxFocusChangeEventDetail>;
  /**
   * the checked state changed
   * @see OdsCheckboxBehavior.emitChecked
   */
  odsCheckedChange: EventEmitter<OdsCheckboxCheckedChangeEventDetail>;
  /**
   * Event triggered on checkbox focus
   * @see OdsCheckboxBehavior.onFocus
   * @see OdsCheckboxBehavior.emitFocus
   */
  odsFocus: EventEmitter<OdsCheckboxFocusChangeEventDetail>;
  /**
   * the checked state is being changed
   * @see OdsCheckboxBehavior.emitUpdating
   */
  odsUpdatingChange: EventEmitter<OdsCheckboxUpdatingChangeEventDetail>;
}

export { 
  OdsCheckboxEvent,
  OdsCheckboxFocusChangeEventDetail,
  OdsCheckboxUpdatingChangeEventDetail,
  OdsCheckboxCheckedChangeEventDetail,
}