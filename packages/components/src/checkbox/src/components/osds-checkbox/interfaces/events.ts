import type { OdsFocusChangeEventDetail } from '@ovhcloud/ods-common-core';
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
   */
  odsBlur: EventEmitter<OdsCheckboxFocusChangeEventDetail>;
  /**
   * the checked state changed
   */
  odsCheckedChange: EventEmitter<OdsCheckboxCheckedChangeEventDetail>;
  /**
   * Event triggered on checkbox focus
   */
  odsFocus: EventEmitter<OdsCheckboxFocusChangeEventDetail>;
  /**
   * the checked state is being changed
   */
  odsUpdatingChange: EventEmitter<OdsCheckboxUpdatingChangeEventDetail>;
}

export {
  OdsCheckboxEvent,
  OdsCheckboxFocusChangeEventDetail,
  OdsCheckboxUpdatingChangeEventDetail,
  OdsCheckboxCheckedChangeEventDetail,
};
