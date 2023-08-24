import type { EventEmitter } from '@stencil/core';

interface OdsAccordionEvent {
  /**
   * Event triggered on accordion toggle
   */
   odsAccordionToggle: EventEmitter<boolean>;
}


type OdsAccordionToggleEvent = CustomEvent<OdsAccordionEvent['odsAccordionToggle']>;

export {
  OdsAccordionEvent,
  OdsAccordionToggleEvent,
}
