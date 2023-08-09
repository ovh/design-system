import type { EventEmitter } from '@stencil/core';

interface OdsAccordionEvents {
  /**
   * Event triggered on accordion toggle
   */
   odsAccordionToggle: EventEmitter<boolean>;
}

type OdsAccordionToggleEvent = CustomEvent<OdsAccordionEvents['odsAccordionToggle']>;

export {
  OdsAccordionEvents,
  OdsAccordionToggleEvent,
}