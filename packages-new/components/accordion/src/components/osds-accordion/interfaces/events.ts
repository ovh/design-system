import { EventEmitter } from '@stencil/core';

interface OdsAccordionEvents {
  /**
   * Event triggered on accordion toggle
   */
   odsAccordionToggle: EventEmitter<boolean>;
}

export {
  OdsAccordionEvents,
}