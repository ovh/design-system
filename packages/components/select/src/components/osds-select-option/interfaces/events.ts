import type { OdsInputValue } from '@ovhcloud/ods-common-core';
import type { EventEmitter } from '@stencil/core';

interface OdsSelectOptionClickEventDetail {
  value: OdsInputValue,
}

interface OdsSelectOptionEvent {
  /** the select value changed */
  odsSelectOptionClick: EventEmitter<OdsSelectOptionClickEventDetail>;
}

export {
  OdsSelectOptionEvent,
  OdsSelectOptionClickEventDetail,
};
